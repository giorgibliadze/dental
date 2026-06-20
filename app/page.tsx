"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { Award, Shield, Zap, Clock, ArrowRight, CheckCircle2, Star, Phone } from "lucide-react";

/* ─── Fade-up wrapper ─── */
function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section label + title ─── */
function SectionTitle({ eyebrow, title, center = true, light = false }: {
  eyebrow: string; title: string; center?: boolean; light?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-3 ${light ? "text-[#f4d03f]" : "text-[#b8962e]"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${light ? "text-white" : "text-[#0f172a]"}`}>
        {title}
      </h2>
    </div>
  );
}


/* ─── Premium image card placeholder ─── */
function PhotoCard({ gradient, label, tag, height = "h-72" }: {
  gradient: string; label: string; tag?: string; height?: string;
}) {
  return (
    <div className={`relative ${height} rounded-3xl overflow-hidden flex-shrink-0`} style={{ background: gradient }}>
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      {tag && (
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase">
          {tag}
        </div>
      )}
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-white font-semibold text-sm leading-snug">{label}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ═══════════════════════════════════════
          SERVICES — clean card grid
      ═══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <FadeUp>
              <SectionTitle eyebrow="ჩვენი სერვისები" title={"კომპლექსური\nსტომატოლოგიური\nმომსახურება"} center={false} />
            </FadeUp>
            <FadeUp delay={0.15} className="lg:text-right max-w-sm">
              <p className="text-gray-500 text-sm leading-relaxed">
                8 სპეციალობა ერთ სახლქვეშ. რუტინული ჰიგიენიდან სრულ ღიმილის გარდაქმნამდე.
              </p>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b8962e] hover:text-[#1e3a5f] transition-colors mt-3">
                ყველა სერვისი <ArrowRight size={14} />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 8).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY US — two-column image + points
      ═══════════════════════════════════════ */}
      <section className="py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — stacked photo cards */}
            <FadeUp className="relative">
              <div className="grid grid-cols-2 gap-4">
                <PhotoCard
                  gradient="linear-gradient(135deg,#1e3a5f 0%,#2d5a8e 100%)"
                  label="თანამედროვე სამკურნალო კაბინეტი"
                  tag="SmileElite"
                  height="h-64"
                />
                <div className="space-y-4">
                  <PhotoCard
                    gradient="linear-gradient(135deg,#0a2240 0%,#1e4a7a 100%)"
                    label="3D CBCT სკანირება"
                    height="h-[118px]"
                  />
                  <PhotoCard
                    gradient="linear-gradient(135deg,#b8962e 0%,#d4a843 100%)"
                    label="ლაზერული მკურნალობა"
                    height="h-[118px]"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100"
              >
                <div className="text-2xl font-bold text-[#1e3a5f]">98%</div>
                <div className="text-xs text-gray-500 mt-0.5">პაციენტის კმაყოფილება</div>
              </motion.div>
            </FadeUp>

            {/* Right — copy */}
            <FadeUp delay={0.15}>
              <SectionTitle eyebrow="რატომ გვირჩევენ" title="ევროპული სტანდარტი — თბილისში" center={false} />
              <p className="text-gray-500 leading-relaxed mt-5 mb-8 text-[15px]">
                2009 წლიდან ჩვენ ვამტკიცებთ, რომ პრემიუმ სტომატოლოგიური მოვლა არ საჭიროებს საზღვარგარეთ გამგზავრებას.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Award,  title: "საერთაშორისო სერტიფიკატები", text: "ყველა ექიმი ფლობს ევროპული სტომატოლოგიური ასოციაციების სერტიფიკატებს." },
                  { icon: Shield, title: "უმტკივნეულობის გარანტია",    text: "თანამედროვე ანესთეზია და სედაცია — ყოველი პაციენტისთვის, ყოველ პროცედურაზე." },
                  { icon: Zap,   title: "CAD/CAM ტექნოლოგია",          text: "გვირგვინები, ვინირები და სხვა პროთეზი ერთ ვიზიტში, კლინიკაში." },
                  { icon: Clock, title: "მოქნილი განრიგი",             text: "საღამოს და შაბათის ვიზიტები ხელმისაწვდომია ყოველი კვირა." },
                ].map(({ icon: Icon, title, text }, i) => (
                  <div key={title} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#1e3a5f]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e3a5f]/15 transition-colors">
                      <Icon size={18} className="text-[#1e3a5f]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0f172a] text-sm mb-0.5">{title}</div>
                      <div className="text-gray-500 text-[13px] leading-relaxed">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS — dark band
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {[
              { n: "15+",   l: "წელი ბაზარზე" },
              { n: "2,400+",l: "გარდაქმნილი ღიმილი" },
              { n: "4.98",  l: "Google შეფასება" },
              { n: "3",     l: "სერტ. სპეციალისტი" },
            ].map(({ n, l }, i) => (
              <FadeUp key={l} delay={i * 0.08} className="text-center py-8 px-6">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] to-[#b8962e]">{n}</div>
                <div className="text-gray-400 text-xs mt-1.5 leading-snug">{l}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BEFORE / AFTER — interactive sliders
      ═══════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <FadeUp>
              <SectionTitle eyebrow="რეალური შედეგები" title={"შედეგები, რომლებიც\nთავდაჯერებულ\nღიმილს ქმნის"} center={false} />
            </FadeUp>
            <FadeUp delay={0.15} className="max-w-sm">
              <p className="text-gray-500 text-sm leading-relaxed">
                იხილეთ ჩვენი პაციენტების რეალური ტრანსფორმაციები და მკურნალობის შედეგები.
              </p>
              <Link href="/before-after" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b8962e] hover:text-[#1e3a5f] transition-colors mt-3">
                ყველა შედეგის ნახვა <ArrowRight size={14} />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                treatment: "ფაინ-ჩინური ვინირები", category: "კოსმეტიკური", dur: "14 დღე", age: "29 წ.",
                result: "8 ვინირი — სრული ღიმილის გარდაქმნა",
                beforeImage: "/images/results/veneers-before.jpg",
                afterImage:  "/images/results/veneers-after.jpg",
                beforeAlt: "ვინირებამდე", afterAlt: "ვინირების შემდეგ",
                catColor: "#7c3aed",
              },
              {
                treatment: "ინვიზალაინი", category: "ორთოდონტია", dur: "14 თვე", age: "24 წ.",
                result: "სრული ოკლუზიური კორექცია, დიასტემის დახურვა",
                beforeImage: "/images/results/orthodontics-before.jpg",
                afterImage:  "/images/results/orthodontics-after.jpg",
                beforeAlt: "ინვიზალაინამდე", afterAlt: "ინვიზალაინის შემდეგ",
                catColor: "#2563eb",
              },
              {
                treatment: "კბილის იმპლანტი ×2", category: "იმპლანტოლოგია", dur: "3 თვე", age: "47 წ.",
                result: "Straumann ტიტანის იმპლანტები + ცირკ. გვირგვინი",
                beforeImage: "/images/results/implants-before.jpg",
                afterImage:  "/images/results/implants-after.jpg",
                beforeAlt: "იმპლანტაციამდე", afterAlt: "იმპლანტაციის შემდეგ",
                catColor: "#059669",
              },
              {
                treatment: "ლაზერული გათეთრება", category: "კოსმეტიკური", dur: "90 წუთი", age: "34 წ.",
                result: "8 ტონით გათეთრება — ერთი სეანსი",
                beforeImage: "/images/results/whitening-before.jpg",
                afterImage:  "/images/results/whitening-after.jpg",
                beforeAlt: "გათეთრებამდე", afterAlt: "გათეთრების შემდეგ",
                catColor: "#7c3aed",
              },
            ].map(({ treatment, category, dur, age, result, beforeImage, afterImage, beforeAlt, afterAlt, catColor }, i) => (
              <FadeUp key={treatment} delay={Math.min(i * 0.08, 0.24)}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 32px 64px -12px rgba(14,30,60,0.18)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-md"
                >
                  <BeforeAfterSlider
                    beforeImage={beforeImage}
                    afterImage={afterImage}
                    beforeAlt={beforeAlt}
                    afterAlt={afterAlt}
                    height="h-72"
                  />
                  <div className="px-7 py-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{ background: `${catColor}18`, color: catColor }}
                      >
                        {category}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500">
                        <Clock size={10} /> {dur}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600">
                        <CheckCircle2 size={10} /> {age}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-1">{treatment}</h3>
                    <p className="text-gray-400 text-sm">{result}</p>
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                      <div className="flex gap-5 text-gray-400">
                        <span>მკურნალობა: <span className="text-[#0f172a] font-semibold">{treatment}</span></span>
                        <span>დრო: <span className="text-[#0f172a] font-semibold">{dur}</span></span>
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

          <FadeUp delay={0.1} className="text-center mt-14">
            <Link
              href="/before-after"
              className="inline-flex items-center gap-2.5 bg-[#0f172a] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#1e3a5f] transition-colors shadow-lg"
            >
              ყველა შედეგის ნახვა <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DOCTORS — horizontal card row
      ═══════════════════════════════════════ */}
      <section className="py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <FadeUp>
              <SectionTitle eyebrow="ჩვენი ექიმები" title={"სპეციალისტები,\nვისაც შეგიძლიათ\nენდოთ"} center={false} />
            </FadeUp>
            <FadeUp delay={0.12} className="max-w-xs">
              <p className="text-gray-500 text-sm leading-relaxed">
                ლონდონი. მიუნხენი. ათენი. ჩვენი ექიმები სამ კონტინენტზე ვარჯიშობდნენ.
              </p>
              <Link href="/doctors" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b8962e] hover:text-[#1e3a5f] transition-colors mt-3">
                გუნდის გაცნობა <ArrowRight size={14} />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "ექ. ნინო ბერიძე",    spec: "კოსმეტიკური სტომატოლოგია", exp: "15 წელი", edu: "King's College London", grad: "from-rose-500 to-pink-700",    init: "ნბ" },
              { name: "ექ. ლევან ლომიძე",   spec: "ორთოდონტია — ინვიზალაინი", exp: "12 წელი", edu: "Athens University",     grad: "from-blue-500 to-indigo-700",  init: "ლლ" },
              { name: "ექ. ქეთევან მგელაძე", spec: "იმპლანტოლოგია",           exp: "10 წელი", edu: "LMU München",          grad: "from-emerald-500 to-teal-700", init: "ქმ" },
            ].map((doc, i) => (
              <FadeUp key={doc.name} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300">
                  {/* Photo area */}
                  <div className={`h-52 bg-gradient-to-br ${doc.grad} relative flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-[0.07]"
                      style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                    <div className="w-24 h-24 rounded-full bg-white/15 border-2 border-white/25 flex items-center justify-center text-white text-3xl font-bold shadow-xl relative z-10">
                      {doc.init}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <div className="text-[11px] font-bold text-[#b8962e] uppercase tracking-wider mb-1">{doc.spec}</div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-3">{doc.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5"><Clock size={11} /> {doc.exp} გამოცდ.</span>
                      <span className="w-px h-3 bg-gray-200" />
                      <span className="flex items-center gap-1.5"><CheckCircle2 size={11} className="text-green-500" /> {doc.edu}</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <FadeUp className="text-center mb-14">
            <SectionTitle eyebrow="პაციენტების შეფასებები" title="ჩვენი პაციენტები ამბობენ" />
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {[1,2,3,4,5].map(s => <Star key={s} size={17} className="fill-[#f4d03f] text-[#f4d03f]" />)}
              <span className="font-bold text-[#0f172a] ml-2">4.98</span>
              <span className="text-gray-400 text-sm">· 286 შეფასება</span>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeUp key={t.id} delay={i * 0.07}>
                <TestimonialCard testimonial={t} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING PREVIEW — table + CTA
      ═══════════════════════════════════════ */}
      <section className="py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <FadeUp>
              <SectionTitle eyebrow="ფასები" title={"გამჭვირვალე\nფასები —\nგაოცება გამორიცხულია"} center={false} />
              <p className="text-gray-500 text-[15px] leading-relaxed mt-5 mb-8">
                ზუსტ ღირებულებას გეტყვით მკურნალობის <strong className="text-[#0f172a]">დაწყებამდე</strong>. ფარული გადასახადი — არასდროს.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["0% განვადება 12 თვეში","სადაზღვევო მიღება","პაკეტური ფასდაკლება"].map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-xs font-medium text-[#1e3a5f] bg-[#1e3a5f]/6 px-3 py-2 rounded-full">
                    <CheckCircle2 size={11} className="text-[#b8962e]" /> {b}
                  </span>
                ))}
              </div>
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#1e3a5f] transition-colors shadow-lg">
                სრული ფასების ნახვა <ArrowRight size={15} />
              </Link>
            </FadeUp>

            {/* Right — price list */}
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {[
                  { name: "პირველი კონსულტაცია", price: "უფასო",      note: "რენტგენი შედის" },
                  { name: "პროფ. წმენდა",          price: "₾120-დან",  note: "Air Flow + სკეილინგი" },
                  { name: "კბილების გათეთრება",     price: "₾350-დან",  note: "ლაზერი, 10 ტონამდე" },
                  { name: "ვინირები",               price: "₾650-დან",  note: "1 კბილი, კერამიკა" },
                  { name: "კბილის იმპლანტი",        price: "₾2,200-დან",note: "გვირგვინი შედის" },
                  { name: "ინვიზალაინი",            price: "₾1,800-დან",note: "სრული კურსი" },
                ].map((row, i, arr) => (
                  <div
                    key={row.name}
                    className={`flex items-center justify-between px-6 py-4 hover:bg-[#f8faff] transition-colors group ${i < arr.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <div>
                      <div className="text-sm font-semibold text-[#0f172a] group-hover:text-[#1e3a5f] transition-colors">{row.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{row.note}</div>
                    </div>
                    <div className="font-bold text-[#1e3a5f] text-sm whitespace-nowrap ml-4">{row.price}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ — max 4 items
      ═══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <FadeUp className="text-center mb-14">
            <SectionTitle eyebrow="ხშირად დასმული კითხვები" title="პასუხები თქვენს კითხვებზე" />
            <p className="text-gray-500 text-sm mt-4">ყველაფერი, რაც გჭირდებათ პირველი ვიზიტის წინ.</p>
          </FadeUp>
          <FAQAccordion faqs={faqs.slice(0, 4)} />
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-[#b8962e] transition-colors">
              კიდევ გაქვთ კითხვა? დაგვიკავშირდით <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA — dark hero-style band
      ═══════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0a1628 0%,#0f2744 55%,#0d1f3a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle,#b8962e,transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <FadeUp>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f4d03f] mb-4">დაჯავშნეთ ვიზიტი</p>
              <h2 className="text-4xl font-bold text-white leading-tight mb-5">
                თქვენი სრულყოფილი<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4d03f] to-[#b8962e]">
                  ღიმილი — ჩვენი მისია
                </span>
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed">
                უფასო კონსულტაცია. ინდივიდუალური გეგმა. ნდობა — პირველი ვიზიტიდანვე.
              </p>
            </FadeUp>

            {/* Right */}
            <FadeUp delay={0.15}>
              <div className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-4">
                {[
                  { icon: CheckCircle2, text: "პირველი კონსულტაცია სრულიად უფასო" },
                  { icon: CheckCircle2, text: "შედეგი — პირველი ვიზიტიდანვე ხილული" },
                  { icon: CheckCircle2, text: "0% განვადება 12 თვემდე" },
                  { icon: CheckCircle2, text: "ყოველ ნაბიჯზე ვართ გვერდით" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-white/80">
                    <Icon size={15} className="text-[#f4d03f] flex-shrink-0" />
                    {text}
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-[#b8962e] to-[#d4a843] text-white px-7 py-4 rounded-2xl font-bold text-sm shadow-2xl shadow-[#b8962e]/20 hover:scale-[1.02] transition-all duration-200"
                  >
                    ვიზიტის დაჯავშნა — უფასოდ
                  </Link>
                  <a
                    href="tel:+995322000000"
                    className="flex items-center justify-center gap-2 w-full text-center text-white/70 hover:text-white text-sm py-2 transition-colors"
                  >
                    <Phone size={14} /> +995 32 200-00-00
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
