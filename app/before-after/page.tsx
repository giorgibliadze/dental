"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const cases = [
  {
    id: 1,
    treatment: "ფაინ-ჩინური ვინირები",
    category: "კოსმეტიკური",
    duration: "14 დღე",
    patientAge: "29 წ.",
    result: "8 ვინირი — სრული ღიმილის გარდაქმნა",
    beforeImage: "/images/results/veneers-before.jpg",
    afterImage:  "/images/results/veneers-after.jpg",
    beforeAlt: "ვინირების მოთავსებამდე — ყვითელი, ცვეთილი კბილები",
    afterAlt:  "ვინირების შემდეგ — სრულყოფილი ღიმილი",
    categoryColor: "#7c3aed",
  },
  {
    id: 2,
    treatment: "ინვიზალაინი",
    category: "ორთოდონტია",
    duration: "14 თვე",
    patientAge: "24 წ.",
    result: "სრული ოკლუზიური კორექცია, დიასტემის დახურვა",
    beforeImage: "/images/results/orthodontics-before.jpg",
    afterImage:  "/images/results/orthodontics-after.jpg",
    beforeAlt: "ინვიზალაინამდე — გადახლართული კბილები",
    afterAlt:  "ინვიზალაინის შემდეგ — სწორი ღიმილი",
    categoryColor: "#2563eb",
  },
  {
    id: 3,
    treatment: "კბილის იმპლანტი ×2",
    category: "იმპლანტოლოგია",
    duration: "3 თვე",
    patientAge: "47 წ.",
    result: "Straumann ტიტანის იმპლანტები + ცირკ. გვირგვინი",
    beforeImage: "/images/results/implants-before.jpg",
    afterImage:  "/images/results/implants-after.jpg",
    beforeAlt: "იმპლანტაციამდე — კბილის არარსებობა",
    afterAlt:  "იმპლანტაციის შემდეგ — ბუნებრივი გარეგნობა",
    categoryColor: "#059669",
  },
  {
    id: 4,
    treatment: "ლაზერული გათეთრება",
    category: "კოსმეტიკური",
    duration: "90 წუთი",
    patientAge: "34 წ.",
    result: "8 ტონით გათეთრება — ერთი სეანსი",
    beforeImage: "/images/results/whitening-before.jpg",
    afterImage:  "/images/results/whitening-after.jpg",
    beforeAlt: "გათეთრებამდე — ყავისა და ჩაის ლაქები",
    afterAlt:  "გათეთრების შემდეგ — ბრწყინვალე ღიმილი",
    categoryColor: "#7c3aed",
  },
  {
    id: 5,
    treatment: "სრული პირის სანაცია",
    category: "კომპლექსური",
    duration: "3 თვე",
    patientAge: "52 წ.",
    result: "იმპლანტი + გვირგვინი + ღრძილის მკურნალობა",
    beforeImage: "/images/results/implants-before.jpg",
    afterImage:  "/images/results/implants-after.jpg",
    beforeAlt: "სანაციამდე — კომპლექსური დაზიანება",
    afterAlt:  "სანაციის შემდეგ — სრული ფუნქცია",
    categoryColor: "#b8962e",
  },
  {
    id: 6,
    treatment: "ცირკონიუმის გვირგვინები",
    category: "პროთეზირება",
    duration: "5 დღე",
    patientAge: "38 წ.",
    result: "6 გვირგვინი CAD/CAM — ერთ კვირაში",
    beforeImage: "/images/results/veneers-before.jpg",
    afterImage:  "/images/results/veneers-after.jpg",
    beforeAlt: "გვირგვინამდე — დაზიანებული კბილები",
    afterAlt:  "გვირგვინის შემდეგ — ბუნებრივი ცირკონიუმი",
    categoryColor: "#0369a1",
  },
];

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BeforeAfterPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div
        className="relative pt-36 pb-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0a1628 0%,#0f2744 55%,#0d1f3a 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle,#b8962e,transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#f4d03f] mb-5">
            რეალური შედეგები
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            შედეგები, რომლებიც<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] to-[#b8962e]">
              თავდაჯერებულ ღიმილს ქმნის
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}
            className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
            იხილეთ ჩვენი პაციენტების რეალური ტრანსფორმაციები და მკურნალობის შედეგები.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {[
              { n: "2,400+", l: "გარდაქმნილი ღიმილი" },
              { n: "98%",    l: "კმაყოფილი პაციენტი" },
              { n: "15+",   l: "წლის გამოცდილება" },
            ].map(({ n, l }) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] to-[#b8962e]">{n}</div>
                <div className="text-white/45 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
            <path d="M0 64L1440 64L1440 16C1200 48 960 64 720 48C480 32 240 4 0 16L0 64Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── Gallery ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <FadeUp className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b8962e] mb-3">ფოტო გალერეა</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              სლაიდერი გადაიტანეთ შედეგის სანახავად
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              თითოეული ბარათი ინტერაქტიულია. ისრის გადათრევით ნახეთ მკურნალობამდე და შემდეგ.
            </p>
          </FadeUp>

          {/* 2-col gallery grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <FadeUp key={c.id} delay={Math.min(i * 0.07, 0.28)}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 32px 64px -12px rgba(14,30,60,0.18)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-md"
                >
                  <BeforeAfterSlider
                    beforeImage={c.beforeImage}
                    afterImage={c.afterImage}
                    beforeAlt={c.beforeAlt}
                    afterAlt={c.afterAlt}
                    height="h-80"
                  />

                  {/* Card footer */}
                  <div className="px-7 py-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{ background: `${c.categoryColor}18`, color: c.categoryColor }}
                      >
                        {c.category}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500">
                        <Clock size={10} /> {c.duration}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600">
                        <CheckCircle2 size={10} /> {c.patientAge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0f172a] mb-1.5">{c.treatment}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{c.result}</p>

                    <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between text-xs">
                      <div className="flex gap-5 text-gray-400">
                        <span>მკურნალობა: <span className="text-[#0f172a] font-semibold">{c.treatment}</span></span>
                        <span>დრო: <span className="text-[#0f172a] font-semibold">{c.duration}</span></span>
                      </div>
                      <span className="flex items-center gap-1 text-emerald-500 font-semibold">
                        <CheckCircle2 size={11} /> შედეგი მიღწეულია
                      </span>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp delay={0.1} className="text-center mt-16">
            <p className="text-gray-400 text-sm mb-6">
              ყოველი ზემოთ ნახული შედეგი <strong className="text-[#0f172a]">უფასო კონსულტაციით</strong> დაიწყო.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#b8962e] to-[#d4a843] text-white px-9 py-4 rounded-full font-bold text-sm shadow-xl shadow-[#b8962e]/20 hover:scale-[1.04] hover:shadow-2xl transition-all duration-200"
            >
              ყველა შედეგის ნახვა — უფასო კონსულტაცია
              <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Trust band ── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <FadeUp className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { title: "ფილტრი არ არის",       body: "ყველა ფოტო — რეალური. შედეგები — ჩვენი ექიმების ოსტატობის ნაყოფი." },
              { title: "საერთაშორისო სტანდარტი", body: "ვმუშაობთ ევროპული პროტოკოლებით. ყოველი კეისი დოკუმენტირებულია." },
              { title: "თქვენი ღიმილი — შემდეგი", body: "დაჯავშნეთ კონსულტაცია. ჩვენ გეტყვით, რა შესაძლებელია." },
            ].map(({ title, body }) => (
              <div key={title} className="px-4">
                <div className="w-10 h-1 bg-gradient-to-r from-[#b8962e] to-[#d4a843] rounded-full mx-auto mb-4" />
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-28 relative overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg,#0a1628,#0f2744)" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.7) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle,#b8962e,transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto px-5">
          <FadeUp>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f4d03f] mb-5">შეუერთდით ჩვენს პაციენტებს</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              თქვენი გარდაქმნა<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] to-[#b8962e]">
                აქ იწყება
              </span>
            </h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              უფასო კონსულტაცია. ინდივიდუალური სამკურნალო გეგმა. შედეგი — გარანტირებული.
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
