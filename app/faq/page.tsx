import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "ხშირად დასმული კითხვები",
  description:
    "SmileElite სტომატოლოგიური კლინიკის FAQ — მკურნალობის, ვიზიტის, ფასების და პაციენტის მოვლის შესახებ ხშირად დასმული კითხვები.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map(f => f.category)));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0d1f3a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4d03f]">გაქვთ კითხვები?</span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">ხშირად დასმული კითხვები</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            ყველაფერი, რაც გჭირდებათ ვიზიტის წინ — პირდაპირ და პატიოსნად.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 14C1200 44 960 60 720 44C480 28 240 0 0 14L0 60Z" fill="white" />
          </svg>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-12">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-[#1e3a5f] text-white">ყველა</span>
            {categories.map(cat => (
              <span key={cat} className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-[#1e3a5f]/10 hover:text-[#1e3a5f] cursor-pointer transition-colors">
                {cat}
              </span>
            ))}
          </div>

          <FAQAccordion faqs={faqs} />

          {/* Still have questions */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] border border-[#1e3a5f]/10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#1e3a5f] flex items-center justify-center mx-auto mb-5 shadow-lg">
              <MessageCircle size={22} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">კვლავ გაქვთ კითხვა?</h3>
            <p className="text-gray-500 mb-7 max-w-md mx-auto leading-relaxed">
              ჩვენი გუნდი ხელმისაწვდომია ორშ–პარ 9:00–19:00 და შაბ 10:00–16:00.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2d5a8e] transition-colors">
                დაგვიკავშირდით <ArrowRight size={15} />
              </Link>
              <a href="https://wa.me/995599000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1db954] transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
