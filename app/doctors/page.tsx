import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Globe, ArrowRight, Clock } from "lucide-react";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "ჩვენი სპეციალისტები",
  description:
    "გაიცანით SmileElite-ის სერტიფიცირებული სტომატოლოგ-სპეციალისტები თბილისში. საერთაშორისო სწავლება ლონდონში, მიუნხენსა და ათენში — ჯამში 37+ წლის გამოცდილება.",
};

export default function DoctorsPage() {
  const gradients = [
    "from-rose-400 to-pink-700",
    "from-blue-400 to-indigo-700",
    "from-emerald-400 to-teal-700",
  ];
  const initials = ["ნბ", "ლლ", "ქმ"];

  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0d1f3a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4d03f]">გამოცდილი ექიმები</span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">ჩვენი სპეციალისტები</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            ჩვენი გუნდის ყველა ექიმი საერთაშორისო სერტიფიკატის მფლობელია, მუდმივად განათლებას იღებს და ნამდვილი ზრუნვით ეკიდება ყოველ პაციენტს.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 14C1200 44 960 60 720 44C480 28 240 0 0 14L0 60Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {doctors.map((doc, i) => (
              <div
                key={doc.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Photo placeholder */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`relative rounded-3xl overflow-hidden h-96 bg-gradient-to-br ${gradients[i]} shadow-2xl`}>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    {/* Initials centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full bg-white/15 border-4 border-white/20 flex items-center justify-center text-5xl font-bold text-white mx-auto mb-4 shadow-2xl">
                          {initials[i]}
                        </div>
                        <p className="text-white/70 text-sm">{doc.title}</p>
                      </div>
                    </div>
                    {/* Bottom info bar */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/50 to-transparent">
                      <p className="text-white font-bold text-lg">{doc.name}</p>
                      <p className="text-white/70 text-sm">{doc.specialization}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b8962e]">{doc.specialization}</span>
                  <h2 className="text-3xl font-bold text-[#0f172a] mt-2 mb-1">{doc.name}</h2>
                  <p className="text-gray-500 text-sm mb-5 flex items-center gap-2">
                    <Clock size={13} />
                    {doc.title} · {doc.experience} წლის გამოცდილება
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-7 text-sm">{doc.bio}</p>

                  <div className="mb-5">
                    <h3 className="text-xs font-bold text-[#0f172a] uppercase tracking-widest mb-3">განათლება</h3>
                    <div className="space-y-2">
                      {doc.education.map(edu => (
                        <div key={edu} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-[#b8962e] mt-0.5 flex-shrink-0" />
                          {edu}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <h3 className="text-xs font-bold text-[#0f172a] uppercase tracking-widest mb-3">სერტიფიკატები</h3>
                    <div className="space-y-2">
                      {doc.certifications.map(cert => (
                        <div key={cert} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe size={14} className="text-[#b8962e]" />
                    ენები: {doc.languages.join(", ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden text-center" style={{ background: "linear-gradient(135deg, #0a1628, #0f2744)" }}>
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">დაჯავშნეთ სპეციალისტთან</h2>
          <p className="text-white/60 mb-8 leading-relaxed">უფასო კონსულტაცია. ვალდებულება არ არის. შეხვდით ექიმს მკურნალობის დაწყებამდე.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b8962e] to-[#d4a843] text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-all">
            ვიზიტის მოთხოვნა <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
