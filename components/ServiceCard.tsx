"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const categoryConfig: Record<string, { label: string; color: string; bg: string }> = {
  cosmetic:    { label: "კოსმეტიკა",   color: "#7c3aed", bg: "#7c3aed18" },
  general:     { label: "ზოგადი",      color: "#0369a1", bg: "#0369a118" },
  orthodontic: { label: "ორთოდონტია", color: "#059669", bg: "#05966918" },
  implant:     { label: "იმპლანტი",    color: "#b8962e", bg: "#b8962e18" },
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const cat = categoryConfig[service.category] ?? categoryConfig.general;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, boxShadow: "0 24px 56px -10px rgba(14,30,60,0.16)" }}
      className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-sm flex flex-col"
      style={{ transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
    >
      {/* ── Image area ── */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Gold accent line at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b8962e] via-[#f4d03f] to-[#b8962e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge — floated top-left */}
        <span
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border"
          style={{
            background: `${cat.color}28`,
            color: "#fff",
            borderColor: `${cat.color}55`,
          }}
        >
          {cat.label}
        </span>

        {/* Price — floated top-right */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
          <span className="text-[10px] font-bold text-white tracking-wide">{service.price}</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">

        {/* Title */}
        <h3 className="text-[1.05rem] font-bold text-[#0f172a] group-hover:text-[#1e3a5f] transition-colors leading-snug mb-2">
          {service.title}
        </h3>

        {/* Description — max 2 lines, always fully visible */}
        <p className="text-gray-500 text-[13px] leading-relaxed mb-5 line-clamp-2">
          {service.description}
        </p>

        {/* Benefits — 4 items in 2×2 grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
          {service.features.slice(0, 4).map((f) => (
            <div key={f} className="flex items-start gap-1.5">
              <CheckCircle2
                size={12}
                className="flex-shrink-0 mt-[2px]"
                style={{ color: cat.color }}
              />
              <span className="text-[11px] text-gray-600 leading-snug">{f}</span>
            </div>
          ))}
        </div>

        {/* Spacer pushes footer to bottom */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-4" />

        {/* Footer: duration + CTA */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
            <Clock size={11} />
            {service.duration}
          </span>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[12px] font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)`,
              boxShadow: `0 4px 14px ${cat.color}30`,
            }}
          >
            დაჯავშნა
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
