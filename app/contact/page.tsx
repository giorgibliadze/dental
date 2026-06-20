import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "კონტაქტი და ვიზიტის დაჯავშნა",
  description:
    "დაჯავშნეთ ვიზიტი SmileElite-ში — ანუ რეკეთ +995 32 200-00-00 ან შეავსეთ ფორმა. უფასო კონსულტაცია ხელმისაწვდომია.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0d1f3a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4d03f]">დაგვიკავშირდით</span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">დაჯავშნეთ ვიზიტი</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            შეავსეთ ფორმა და ჩვენი გუნდი 2 საათის განმავლობაში დაადასტურებს ვიზიტს.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 14C1200 44 960 60 720 44C480 28 240 0 0 14L0 60Z" fill="white" />
          </svg>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-2">ვიზიტის მოთხოვნა</h2>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                პირველი ვიზიტი — უფასო კონსულტაციით. საბანკო ბარათი არ გჭირდებათ.
              </p>
              <BookingForm />
            </div>

            {/* Contact info */}
            <div className="space-y-7">
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-7">საკონტაქტო ინფორმაცია</h2>
                <div className="space-y-4">
                  {[
                    { icon: Phone,  label: "ტელეფონი",   value: "+995 32 200-00-00", sub: "+995 599 00-00-00 (WhatsApp)", href: "tel:+995322000000" },
                    { icon: Mail,   label: "ელ-ფოსტა",   value: "hello@smileelite.ge", sub: "ვპასუხობთ 2 საათში", href: "mailto:hello@smileelite.ge" },
                    { icon: MapPin, label: "მისამართი",   value: "რუსთაველის გამზ. 14", sub: "თბილისი 0108, საქართველო", href: "#map" },
                    { icon: Clock,  label: "სამუშ. საათები", value: "ორშ–პარ: 09:00 – 19:00", sub: "შაბ: 10:00 – 16:00 · კვი: დასვენება", href: undefined },
                  ].map(({ icon: Icon, label, value, sub, href }) => (
                    <div key={label} className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-white border border-gray-100 hover:border-[#1e3a5f]/20 hover:shadow-sm transition-all">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-[#b8962e] uppercase tracking-widest mb-0.5">{label}</div>
                        {href ? (
                          <a href={href} className="font-semibold text-[#0f172a] hover:text-[#1e3a5f] transition-colors text-sm">{value}</a>
                        ) : (
                          <div className="font-semibold text-[#0f172a] text-sm">{value}</div>
                        )}
                        <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/995599000000?text=გამარჯობა!%20მინდა%20ვიზიტის%20დაჯავშნა%20SmileElite-ში."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-[#25d366] hover:bg-[#1db954] transition-colors shadow-lg shadow-green-500/15 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-white fill-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">WhatsApp-ზე დაწერეთ</div>
                  <div className="text-green-100 text-sm">ჩვეულებრივ რამდენიმე წუთში ვპასუხობთ</div>
                </div>
              </a>

              {/* Map placeholder */}
              <div id="map" className="rounded-3xl overflow-hidden border border-gray-200 h-60 relative" style={{ background: "linear-gradient(135deg, #e8f0fe, #dce8f0)" }}>
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(30,58,95,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center shadow-xl">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-[#1e3a5f] text-sm">რუსთაველის გამზ. 14</p>
                    <p className="text-gray-500 text-xs">თბილისი, საქართველო</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=14+Rustaveli+Avenue,+Tbilisi,+Georgia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#1e3a5f] text-white text-xs font-semibold hover:bg-[#2d5a8e] transition-colors shadow-lg"
                  >
                    Google Maps-ზე გახსნა
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
