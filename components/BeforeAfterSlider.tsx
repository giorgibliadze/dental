"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  height?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  height = "h-72",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const clamp = (v: number) => Math.max(3, Math.min(97, v));

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    updatePosition(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove  = (e: MouseEvent)  => updatePosition(e.clientX);
    const onTouch = (e: TouchEvent)  => updatePosition(e.touches[0].clientX);
    const onUp    = ()               => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup",   onUp);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend",  onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup",   onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend",  onUp);
    };
  }, [dragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative ${height} overflow-hidden select-none cursor-col-resize`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* ── AFTER — full-width base layer ── */}
      <div className="absolute inset-0">
        {afterError ? (
          <ImageFallback label="შემდეგ" side="after" src={afterImage} />
        ) : (
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover object-center pointer-events-none"
            draggable={false}
            onError={() => setAfterError(true)}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        <Label text="შემდეგ" side="right" color="#10b981" />
      </div>

      {/* ── BEFORE — clipped to left of handle ── */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeError ? (
          <ImageFallback label="მანამდე" side="before" src={beforeImage} />
        ) : (
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover object-center pointer-events-none"
            draggable={false}
            onError={() => setBeforeError(true)}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/05 to-transparent pointer-events-none" />
        <Label text="მანამდე" side="left" color="#ef4444" />
      </div>

      {/* ── Divider line ── */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_14px_rgba(255,255,255,0.85)] pointer-events-none z-10"
        style={{ left: `${position}%` }}
      />

      {/* ── Handle ── */}
      <div
        className="absolute top-1/2 z-20 pointer-events-none"
        style={{ left: `${position}%`, transform: "translate(-50%,-50%)" }}
      >
        <motion.div
          animate={{ scale: dragging ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className="w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35), 0 0 0 2px rgba(255,255,255,0.9)" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M6 9L3 6m0 0l3-3M3 6h6m3 3l3 3m0 0l-3 3m3-3H9"
              stroke="#1e3a5f"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* ── Drag hint (fades after interaction) ── */}
      {position === 50 && !dragging && (
        <motion.div
          initial={{ opacity: 0.9 }}
          animate={{ opacity: [0.9, 0.45, 0.9] }}
          transition={{ duration: 2.2, repeat: 2, ease: "easeInOut" }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wide pointer-events-none z-10 whitespace-nowrap"
        >
          ← გადაიტანეთ →
        </motion.div>
      )}
    </div>
  );
}

/* ── Label badge ── */
function Label({ text, side, color }: { text: string; side: "left" | "right"; color: string }) {
  return (
    <span
      className={`absolute top-4 ${side === "left" ? "left-4" : "right-4"} px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border pointer-events-none z-10`}
      style={{
        background: `${color}22`,
        color,
        borderColor: `${color}55`,
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {text}
    </span>
  );
}

/* ── Fallback shown when image is missing (dev only) ── */
function ImageFallback({ label, side, src }: { label: string; side: "before" | "after"; src: string }) {
  const bg = side === "before"
    ? "linear-gradient(160deg,#1c1410 0%,#2e2016 100%)"
    : "linear-gradient(160deg,#0d1f38 0%,#1a3558 100%)";
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6"
      style={{ background: bg }}
    >
      <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1v6M7 9v2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white/25 text-[10px] font-mono break-all">{src}</p>
        <p className="text-white/20 text-[9px] mt-1">ფოტო არ მოიძებნა</p>
      </div>
    </div>
  );
}
