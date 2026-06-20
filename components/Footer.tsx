import Link from "next/link";
import { Phone, Mail, MapPin, Share2, MessageCircle, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#1e3a5f] via-[#b8962e] to-[#1e3a5f]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4.5C9 14 9 16 9 18c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2 0-2 0-4 1-6.5.5-1.5 1-3 1-4.5 0-2.5-1.5-5-5-5z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">SmileElite</div>
                <div className="text-xs text-[#b8962e] tracking-widest font-medium">DENTAL CLINIC</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              პრემიუმ სტომატოლოგია თბილისის გულში. უახლესი ტექნოლოგია და გულთბილი მოვლა თქვენი სრულყოფილი ღიმილისთვის.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Share2, href: "#", label: "Instagram" },
                { icon: MessageCircle, href: "#", label: "Facebook" },
                { icon: Play, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#b8962e] transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-xs uppercase tracking-widest text-[#b8962e]">სერვისები</h3>
            <ul className="space-y-2.5">
              {[
                "კბილების გათეთრება",
                "კბილის იმპლანტი",
                "ინვიზალაინი",
                "ფაინ-ჩინური ვინირები",
                "არხების მკურნალობა",
                "კბილის გვირგვინი",
                "პროფესიონალური წმენდა",
                "კომპოზიტური ბონდინგი",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 text-sm hover:text-[#b8962e] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#b8962e]/40 group-hover:bg-[#b8962e] transition-colors flex-shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-xs uppercase tracking-widest text-[#b8962e]">ნავიგაცია</h3>
            <ul className="space-y-2.5">
              {[
                { label: "კლინიკის შესახებ", href: "/about" },
                { label: "ჩვენი ექიმები", href: "/doctors" },
                { label: "შედეგები", href: "/before-after" },
                { label: "ფასები", href: "/pricing" },
                { label: "კითხვები", href: "/faq" },
                { label: "ვიზიტის დაჯავშნა", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-[#b8962e] transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#b8962e]/40 group-hover:bg-[#b8962e] transition-colors flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-xs uppercase tracking-widest text-[#b8962e]">კონტაქტი</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-[#b8962e] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">რუსთაველის გამზ. 14, თბილისი 0108, საქართველო</span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-[#b8962e] mt-0.5 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <a href="tel:+995322000000" className="text-gray-400 hover:text-white transition-colors block">+995 32 200-00-00</a>
                  <a href="tel:+995599000000" className="text-gray-400 hover:text-white transition-colors block">+995 599 00-00-00</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-[#b8962e] mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@smileelite.ge" className="text-gray-400 text-sm hover:text-white transition-colors">
                  hello@smileelite.ge
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[#b8962e] text-xs font-semibold uppercase tracking-wider mb-2">სამუშაო საათები</p>
              <p className="text-sm text-white">ორშ–პარ: 09:00 – 19:00</p>
              <p className="text-sm text-white">შაბ: 10:00 – 16:00</p>
              <p className="text-sm text-gray-500">კვი: დასვენება</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SmileElite Dental Clinic. ყველა უფლება დაცულია.
          </p>
          <p className="text-gray-600 text-xs">
            ლიცენზია: საქართველოს ჯანდაცვის სამინისტრო · #DEN-2010-0042
          </p>
        </div>
      </div>
    </footer>
  );
}
