import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, Users, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "კლინიკის შესახებ",
  description:
    "SmileElite — თბილისის პრემიუმ სტომატოლოგიური კლინიკა. ჩვენი ისტორია, ღირებულებები, ტექნოლოგია და პაციენტის მოვლის პრინციპები.",
};

const milestones = [
  { year: "2009", event: "კლინიკა დაარსდა ექიმ ნინო ბერიძის მიერ რუსთაველის გამზირზე" },
  { year: "2013", event: "გაფართოვდა კოსმეტიკური და იმპლანტის სერვისებით" },
  { year: "2016", event: "დაინერგა ციფრული ღიმილის დიზაინი და 3D სკანირება" },
  { year: "2019", event: "მიღწეულ იქნა Invisalign Diamond Provider სტატუსი" },
  { year: "2021", event: "გაიხსნა მეორე სამკურნალო კრილი — ახლა 500+ პაციენტი/თვეში" },
  { year: "2023", event: "საქართველოს სტომატოლოგიური ასოციაციის #1 კლინიკა" },
];

const values = [
  { icon: CheckCircle2, title: "პაციენტი პირველია", description: "ყოველი გადაწყვეტილება თქვენი კომფორტის, უსაფრთხოებისა და შედეგის გარშემო ტრიალებს." },
  { icon: Award, title: "კლინიკური სრულყოფილება", description: "მუდმივად ვივლით კვალიფიკაციის ამაღლებაზე და მტკიცებულებებზე დაფუძნებულ მეთოდებს ვიყენებთ." },
  { icon: Users, title: "ნამდვილი ურთიერთობა", description: "ჩვენ ვაშენებთ გრძელვადიან ურთიერთობას — თქვენი ექიმი იცნობს თქვენს ისტორიას, მიზნებს, შიშებს." },
  { icon: Calendar, title: "თანმიმდევრულობა", description: "ერთი სპეციალისტი გაგყვება კონსულტაციიდან დასრულებამდე — გადაგდება არ ხდება." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0d1f3a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4d03f]">ჩვენი ისტორია</span>
            <h1 className="text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              15 წელი საქართველოს ღიმილების გარდაქმნაში
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              SmileElite დაარსდა 2009 წელს მარტივი, მაგრამ ამბიციური ხედვით: ევროპული სტანდარტის სტომატოლოგიური მომსახურება თბილისში. დღეს ჩვენ საქართველოს ყველაზე სანდო პრემიუმ კლინიკა ვართ — 2,400-ზე მეტი გარდაქმნილი ღიმილით.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 14C1200 44 960 60 720 44C480 28 240 0 0 14L0 60Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Story + Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-6">რატომ გავხსენით</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ექიმი ნინო ბერიძე ლონდონის კინგზ კოლეჯში ესთეტიკური სტომატოლოგიის მაგისტრატურის დასრულების შემდეგ თბილისს დაუბრუნდა ერთი დაკვირვებით: ქართველ პაციენტებს ევროპის ტოლი სტომატოლოგიური მომსახურება ეკუთვნოდათ.
                </p>
                <p>
                  2009 წელს მან გახსნა SmileElite-ის პირველი სამკურნალო ოთახი რუსთაველის გამზირზე — ორი სავარძელი, ციფრული რენტგენი და გამოუდეგარი ერთგულება სრულყოფილებისა. ცნობა სწრაფად გავრცელდა.
                </p>
                <p>
                  დღეს SmileElite მოქმედებს 400 კვ.მ. სპეციალურად მოწყობილ კლინიკაში 6 სრულად აღჭურვილი სამკურნალო კაბინეტით, ციფრული ლაბორატორიით და 3 სპეციალისტი ექიმით, რომლებმაც ერთად 2,400-ზე მეტი პაციენტი განიკურნეს.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {values.map((val) => (
                <div key={val.title} className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-2xl border border-gray-100 hover:border-[#1e3a5f]/20 hover:shadow-md transition-all">
                  <val.icon size={22} className="text-[#b8962e] mb-3" />
                  <h3 className="font-bold text-[#0f172a] mb-2 text-sm">{val.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a] text-center mb-16">ჩვენი გზა</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a5f] to-[#b8962e]" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 hidden md:block" />
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#b8962e]" />
                  </div>
                  <div className={`flex-1 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className="text-[#b8962e] font-bold text-sm mb-1">{m.year}</div>
                    <div className="text-[#0f172a] font-medium text-sm">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">ჩვენი ტექნოლოგია</h2>
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            ჩვენ ვინვესტირებთ საუკეთესოში, რათა თქვენ მიიღოთ საუკეთესო. ჩვენი აღჭურვილობა ევროპულ და ამერიკულ წამყვან მწარმოებლებისგანაა.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { name: "3D CBCT სკანერი", desc: "ზუსტი 3D გამოსახვა იმპლანტისა და ორთოდონტიისთვის" },
              { name: "CAD/CAM ლაბორატორია", desc: "ერთ ვიზიტში გვირგვინის დამზადება კლინიკაში" },
              { name: "დიოდური ლაზერი", desc: "უმტკივნეულო ღრძილების მკურნალობა და გათეთრება" },
              { name: "ციფრული რენტგენი", desc: "80%-ით ნაკლები გამოსხივება ტრადიციულ რენტგენთან შედარებით" },
              { name: "ინტრაორალური კამერა", desc: "კბილები HD-ში პირდაპირ სავარძელთან ეკრანზე" },
              { name: "ციფრული ღიმილის დიზაინი", desc: "ნახეთ ახალი ღიმილი მკურნალობის დაწყებამდე" },
              { name: "Air Flow პოლირება", desc: "ნაზი, საფუძვლიანი ლაქების მოცილება" },
              { name: "Apex ლოკატორი", desc: "ზუსტი ფესვის არხის მკურნალობა" },
            ].map((tech) => (
              <div key={tech.name} className="p-5 rounded-2xl border border-white/8 hover:border-[#b8962e]/40 transition-colors" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ background: "rgba(184,150,46,0.15)" }}>
                  <div className="w-2 h-2 rounded-full bg-[#b8962e]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">თავად დარწმუნდით</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">ეწვიეთ კლინიკას, გაიცანით გუნდი და მიიღეთ უფასო ღიმილის შეფასება. ვალდებულება არ არის.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all">
            უფასო ვიზიტის დაჯავშნა <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
