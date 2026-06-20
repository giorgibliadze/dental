import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "ფასები",
  description:
    "SmileElite-ის სრული ფასების ნუსხა. გამჭვირვალე, ფარული გადასახადების გარეშე. წმენდა ₾120-დან, სრული სანაცია. 0% განვადება.",
};

const pricingCategories = [
  {
    category: "პრევენცია და ზოგადი სტომატოლოგია",
    accent: "#2d5a8e",
    items: [
      { name: "პირველი კონსულტაცია და გამოკვლევა", price: "უფასო", note: "ციფრული რენტგენი შედის" },
      { name: "პროფესიონალური წმენდა", price: "₾120 – ₾180", note: "ულტრაბგერა + Air Flow" },
      { name: "ფტორის მკურნალობა", price: "₾50", note: "წმენდაზე დამატება" },
      { name: "კომპოზიტური (თეთრი) ხვრელი", price: "₾180 – ₾280", note: "ერთი კბილი, ზომის მიხედვით" },
      { name: "ფესვის არხის მკურნალობა (1 არხი)", price: "₾450", note: "ციფრული რენტგენი შედის" },
      { name: "ფესვის არხის მკურნალობა (მრავ. არხი)", price: "₾550 – ₾750", note: "ყბის კბილი" },
      { name: "კბილის ამოღება", price: "₾150 – ₾350", note: "მარტივიდან ქირურგიულამდე" },
    ],
  },
  {
    category: "კოსმეტიკური სტომატოლოგია",
    accent: "#7c3aed",
    items: [
      { name: "ლაზერული გათეთრება (კლინიკაში)", price: "₾350 – ₾450", note: "1 სეანსი, 10 ტონამდე" },
      { name: "სახლის გათეთრების კომპლექტი", price: "₾180", note: "ინდ. კაპები შედის" },
      { name: "კომპოზიტური ბონდინგი", price: "₾200 – ₾350", note: "ერთი კბილი" },
      { name: "ფაინ-ჩინური ვინირი", price: "₾650 – ₾900", note: "ერთი კბილი, სრული კერამიკა" },
      { name: "ცირკონიუმის ვინირი", price: "₾750 – ₾1,000", note: "ერთი კბილი, ულტრა-თხელი" },
      { name: "ღრძილის კონტურინგი (ლაზერი)", price: "₾300 – ₾600", note: "ერთი მწკრივი" },
      { name: "ციფრული ღიმილის დიზაინი", price: "₾200", note: "მკურნალობის ღირებულებაში ჩაითვლება" },
    ],
  },
  {
    category: "გვირგვინი და ხიდი",
    accent: "#b8962e",
    items: [
      { name: "ცირკონიუმის გვირგვინი", price: "₾550 – ₾750", note: "სრული კონტური" },
      { name: "E-max გვირგვინი", price: "₾650 – ₾850", note: "მაქსიმალური ესთეტიკა" },
      { name: "3-ერთეულიანი ცირკონ. ხიდი", price: "₾1,500 – ₾2,000", note: "ფიქსირებული ხიდი" },
      { name: "დროებითი გვირგვინი", price: "₾150", note: "მუდმივის დამზადებამდე" },
    ],
  },
  {
    category: "იმპლანტოლოგია",
    accent: "#059669",
    items: [
      { name: "კბილის იმპლანტი (Straumann)", price: "₾2,200 – ₾2,800", note: "იმპლანტი + საბჯენი + გვირგვინი" },
      { name: "ძვლის ნაყარი", price: "₾400 – ₾800", note: "საჭიროების შემთხვევაში" },
      { name: "სინუსის ლიფტი", price: "₾800 – ₾1,200", note: "საჭიროების შემთხვევაში" },
      { name: "All-on-4 (ერთი ყბა)", price: "₾8,500-დან", note: "სრული მწკრივი, 4 იმპლანტი" },
      { name: "All-on-6 (ერთი ყბა)", price: "₾12,000-დან", note: "სრული მწკრივი, 6 იმპლანტი" },
    ],
  },
  {
    category: "ორთოდონტია",
    accent: "#4338ca",
    items: [
      { name: "ინვიზალაინი Full", price: "₾1,800 – ₾3,500", note: "სრული კურსი" },
      { name: "ინვიზალაინი Lite", price: "₾1,200 – ₾1,800", note: "14 კაპამდე" },
      { name: "მეტალის ბრეკეტები", price: "₾1,200 – ₾1,600", note: "სრული კურსი" },
      { name: "კერამიკის ბრეკეტები", price: "₾1,600 – ₾2,200", note: "კბილის ფერის ფირფიტები" },
      { name: "ლინგვალური ბრეკეტები (ფარული)", price: "₾2,500 – ₾3,500", note: "კბილების უკანა მხარეს" },
      { name: "რეტეინერი (მოსახსნელი)", price: "₾200", note: "ერთი მწკრივი" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0d1f3a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4d03f]">ფარული გადასახადი არ არის</span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">გამჭვირვალე ფასები</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            ზუსტ ღირებულებას ყოველთვის წინასწარ გეტყვით — მკურნალობის დაწყებამდე. გაოცება გამორიცხულია.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 14C1200 44 960 60 720 44C480 28 240 0 0 14L0 60Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-[#1e3a5f] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["უფასო პირველი კონსულტაცია", "ფარული ღირებულება — არასდროს", "0% განვადება 12 თვემდე", "სადაზღვევო კომპანიებთან თანამშრომლობა"].map(b => (
              <div key={b} className="flex items-center gap-2 text-white/85 text-sm">
                <Shield size={13} className="text-[#f4d03f] flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing tables */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {pricingCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 rounded-full inline-block" style={{ background: cat.accent }} />
                {cat.category}
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                {cat.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between px-6 py-4 group hover:bg-[#f0f4ff] transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
                  >
                    <div>
                      <div className="font-medium text-[#0f172a] text-sm group-hover:text-[#1e3a5f] transition-colors">{item.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{item.note}</div>
                    </div>
                    <div className="font-bold text-[#1e3a5f] text-sm whitespace-nowrap ml-6">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Finance options */}
      <section className="py-16 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">გადახდის მოქნილი პირობები</h2>
          <p className="text-gray-500 mb-10">გვჯერა, რომ ხარჯი არ უნდა იყოს სრულყოფილი სტომატოლოგიური მოვლის დაბრკოლება.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "0% განვადება", desc: "გაყავით ₾500-ზე მეტი მკურნალობა 3, 6 ან 12 თვეში — ყოველგვარი სარგებლის გარეშე" },
              { title: "სადაზღვევო", desc: "ვთანამშრომლობთ ყველა მთავარ ქართულ სადაზღვევო კომპანიასთან. საბუთებს ჩვენ ვაგვარებთ." },
              { title: "პაკეტური ფასდაკლება", desc: "დაჯავშნეთ რამდენიმე პროცედურა და მიიღეთ 10–15% კომბინირებული ფასდაკლება" },
            ].map(opt => (
              <div key={opt.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <CheckCircle2 size={20} className="text-[#b8962e] mb-3 mx-auto" />
                <h3 className="font-bold text-[#0f172a] mb-2 text-sm">{opt.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden text-center" style={{ background: "linear-gradient(135deg, #0a1628, #0f2744)" }}>
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">მიიღეთ ინდივიდუალური შეფასება</h2>
          <p className="text-white/60 mb-8 leading-relaxed">ყოველი ღიმილი განსხვავებულია. დაჯავშნეთ უფასო კომოკვლევა — ზუსტ სამკურნალო გეგმასა და ღირებულებას გეტყვით.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b8962e] to-[#d4a843] text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-all">
            უფასო კონსულტაციის დაჯავშნა <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
