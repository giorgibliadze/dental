"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Phone } from "lucide-react";

const trustBadges = [
  "სერტიფიცირებული სპეციალისტები",
  "უმტკივნეულო მკურნალობის გარანტია",
  "ევროსტანდარტის აღჭურვილობა",
  "2,400+ კმაყოფილი პაციენტი",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 45%, #0d1f3a 100%)" }}>

      {/* Layered ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #2d5a8e 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #1e3a5f 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #b8962e 0%, transparent 70%)" }} />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left content ── */}
          <div>
            {/* Award badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 border border-[#b8962e]/30 bg-[#b8962e]/10 backdrop-blur-sm"
            >
              <Star size={13} className="text-[#f4d03f] fill-[#f4d03f]" />
              <span className="text-sm text-[#f4d03f] font-medium">თბილისის #1 პრემიუმ სტომატოლოგიური კლინიკა 2024</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.15] mb-6"
            >
              სტომატოლოგიური{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] via-[#e0b842] to-[#b8962e]">
                მომსახურება
              </span>{" "}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-lg text-white/65 leading-relaxed mb-8 max-w-lg"
            >
              მსოფლიო დონის სტომატოლოგია თბილისის გულში. ჩვენი სერტიფიცირებული სპეციალისტები უახლეს ტექნოლოგიასა და გულისხმიერ მოვლას აერთიანებენ სიცოცხლის ხანგრძლივი შედეგებისთვის.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#b8962e] to-[#d4a843] text-white px-7 py-4 rounded-full font-semibold text-base shadow-2xl shadow-[#b8962e]/25 hover:shadow-[#b8962e]/45 hover:scale-105 transition-all duration-300"
              >
                ვიზიტის დაჯავშნა
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm text-white px-7 py-4 rounded-full font-semibold text-base border border-white/15 hover:bg-white/15 transition-all duration-300"
              >
                სერვისების ნახვა
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2.5 text-sm text-white/70">
                  <CheckCircle2 size={15} className="text-[#f4d03f] flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — premium visual card ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main image card */}
            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Gradient bg simulating a medical photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#1a4a78] to-[#0d2a4a]" />

              {/* Abstract dental cross motif */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-52 h-52">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-[spin_20s_linear_infinite]" />
                  {/* Mid ring */}
                  <div className="absolute inset-6 rounded-full border border-[#b8962e]/20 animate-[spin_15s_linear_infinite_reverse]" />
                  {/* Core */}
                  <div className="absolute inset-14 rounded-full bg-gradient-to-br from-[#b8962e]/30 to-[#f4d03f]/10 flex items-center justify-center">
                    {/* Tooth SVG */}
                    <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
                      <path d="M24 2C16 2 10 8 10 16c0 4 1.5 8 3 12 2 5 2 10 2 16 0 2.5 2 4 4.5 4h9c2.5 0 4.5-1.5 4.5-4 0-6 0-11 2-16 1.5-4 3-8 3-12 0-8-6-14-14-14z" fill="white" fillOpacity="0.9" />
                      <path d="M16 20c0-4.4 3.6-8 8-8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Orbit dots */}
                  {[0, 72, 144, 216, 288].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute w-2.5 h-2.5 rounded-full bg-[#b8962e]/60"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${deg}deg) translateX(90px) translateY(-50%)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Overlay gloss */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">SmileElite Dental Clinic</p>
                <p className="text-white font-semibold text-lg leading-snug">თქვენი სრულყოფილი ღიმილი — ჩვენი მისია</p>
              </div>
            </div>

            {/* Floating stat — patients */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-16 rounded-2xl p-4 shadow-2xl border border-white/10"
              style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}
            >
              <div className="text-2xl font-bold text-white">2,400+</div>
              <div className="text-xs text-white/60 mt-0.5">გარდაქმნილი ღიმილი</div>
            </motion.div>

            {/* Floating stat — rating */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -right-8 bottom-24 rounded-2xl p-4 shadow-2xl border border-white/10"
              style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}
            >
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={11} className="fill-[#f4d03f] text-[#f4d03f]" />
                ))}
              </div>
              <div className="text-2xl font-bold text-white">4.98</div>
              <div className="text-xs text-white/60 mt-0.5">საშუალო შეფასება</div>
            </motion.div>

            {/* Floating badge — painless */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute -left-6 bottom-20 rounded-2xl px-4 py-3 shadow-2xl border border-white/10"
              style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-400/15 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-green-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">უმტკივნეულო</div>
                  <div className="text-xs text-white/50">გარანტირებული</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { value: "15+", label: "წლის გამოცდილება" },
            { value: "2,400+", label: "კმაყოფილი პაციენტი" },
            { value: "98%", label: "კმაყოფილება" },
            { value: "3", label: "სერტიფ. სპეციალისტი" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center py-5 px-4 rounded-2xl border border-white/10 hover:border-[#b8962e]/30 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] to-[#b8962e] mb-1">
                {value}
              </div>
              <div className="text-xs text-white/55 leading-snug">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Phone bar on mobile */}
      <motion.a
        href="tel:+995322000000"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="lg:hidden fixed bottom-20 left-4 right-4 z-40 flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white py-3.5 rounded-full font-semibold text-sm shadow-2xl border border-white/10"
      >
        <Phone size={16} /> დაგვიკავშირდით: +995 32 200-00-00
      </motion.a>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 18C1200 58 960 78 720 58C480 38 240 0 0 18L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
