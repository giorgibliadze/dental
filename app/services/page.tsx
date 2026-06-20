"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categories = [
  { key: "cosmetic",    label: "კოსმეტიკური სტომატოლოგია", color: "#7c3aed" },
  { key: "general",    label: "ზოგადი სტომატოლოგია",      color: "#0369a1" },
  { key: "orthodontic",label: "ორთოდონტია",               color: "#059669" },
  { key: "implant",    label: "იმპლანტოლოგია",            color: "#b8962e" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div
        className="relative pt-36 pb-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0a1628 0%,#0f2744 55%,#0d1f3a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle,#b8962e,transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#f4d03f] mb-5"
          >
            ჩვენი სერვისები
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6"
          >
            სტომატოლოგიური სერვისები<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] to-[#b8962e]">
              თქვენი ღიმილისთვის
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}
            className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            აირჩიეთ მკურნალობა, რომელიც დაგეხმარებათ ჯანმრთელი და ლამაზი ღიმილის მიღებაში.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
          >
            {[
              "უფასო კონსულტაცია",
              "0% განვადება",
              "სადაზღვევო მიღება",
              "CAD/CAM ტექნოლოგია",
            ].map((pill) => (
              <span key={pill} className="flex items-center gap-1.5 text-[11px] font-semibold text-white/70 bg-white/8 border border-white/12 px-4 py-2 rounded-full">
                <CheckCircle2 size={11} className="text-[#f4d03f]" />
                {pill}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
            <path d="M0 64L1440 64L1440 16C1200 48 960 64 720 48C480 32 240 4 0 16L0 64Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── Services by category ── */}
      <div className="bg-white">
        {categories.map((cat, ci) => {
          const catServices = services.filter(s => s.category === cat.key);
          if (!catServices.length) return null;

          return (
            <section
              key={cat.key}
              className={`py-24 ${ci % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                {/* Category header */}
                <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)` }} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: cat.color }}>
                        {cat.label}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity self-start sm:self-auto"
                    style={{ color: cat.color }}
                  >
                    კონსულტაციის დაჯავშნა <ArrowRight size={13} />
                  </Link>
                </FadeUp>

                {/* 3-col grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                  {catServices.map((service, i) => (
                    <ServiceCard key={service.id} service={service} index={i} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <section
        className="py-28 relative overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg,#0a1628,#0f2744)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.7) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle,#b8962e,transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto px-5">
          <FadeUp>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f4d03f] mb-5">
              არ იცით, საიდან დაიწყოთ?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              უფასო კონსულტაცია —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] to-[#b8962e]">
                ჩვენ ვიზრუნებთ დანარჩენზე
              </span>
            </h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              ჩვენი სპეციალისტი შეაფასებს მდგომარეობას და შემოგთავაზებთ ინდივიდუალურ სამკურნალო გეგმას.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#b8962e] to-[#d4a843] text-white px-9 py-4 rounded-full font-bold shadow-2xl shadow-[#b8962e]/25 hover:scale-105 transition-all duration-200"
            >
              უფასო კონსულტაციის დაჯავშნა <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
