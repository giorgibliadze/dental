"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Phone, Mail, MessageSquare, CheckCircle2, ChevronDown } from "lucide-react";

const services = [
  "კბილების გათეთრება",
  "კბილის იმპლანტი",
  "ინვიზალაინი / ბრეკეტები",
  "ფაინ-ჩინური ვინირები",
  "არხების მკურნალობა",
  "პროფესიონალური წმენდა",
  "კბილის გვირგვინი",
  "კომპოზიტური ბონდინგი",
  "ზოგადი კონსულტაცია",
  "სხვა",
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "14:00", "14:30", "15:00", "15:30", "16:00",
  "16:30", "17:00", "17:30", "18:00", "18:30",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", date: "", time: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-10 text-center shadow-xl border border-gray-100"
      >
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#0f172a] mb-3">ვიზიტი დაჯავშნილია!</h3>
        <p className="text-gray-500 leading-relaxed mb-8">
          გმადლობთ, <strong>{form.name}</strong>! თქვენი მოთხოვნა მიღებულია. ჩვენი გუნდი 2 საათის განმავლობაში დაგიკავშირდებათ ვიზიტის დასადასტურებლად.
        </p>
        <div className="bg-[#1e3a5f]/5 rounded-2xl p-4 text-sm text-[#1e3a5f] mb-6">
          <div className="font-semibold mb-1">ჯავშნის დეტალები:</div>
          <div className="text-gray-600">{form.service} · {form.date}, {form.time}</div>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" }); }}
          className="text-[#b8962e] font-medium text-sm hover:underline"
        >
          ახალი ვიზიტის დაჯავშნა
        </button>
      </motion.div>
    );
  }

  const inputBase = "w-full py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-all bg-white placeholder:text-gray-400";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">სახელი და გვარი *</label>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input name="name" type="text" required value={form.name} onChange={handleChange}
              placeholder="თქვენი სახელი" className={`${inputBase} pl-10 pr-4`} />
          </div>
        </div>
        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">ტელეფონი *</label>
          <div className="relative">
            <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input name="phone" type="tel" required value={form.phone} onChange={handleChange}
              placeholder="+995 5XX XXX XXX" className={`${inputBase} pl-10 pr-4`} />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">ელ-ფოსტა</label>
        <div className="relative">
          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="თქვენი@ელ-ფოსტა.ge" className={`${inputBase} pl-10 pr-4`} />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">სერვისი *</label>
        <div className="relative">
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <select name="service" required value={form.service} onChange={handleChange}
            className={`${inputBase} px-4 appearance-none text-gray-700`}>
            <option value="">სერვისი...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">სასურველი თარიღი *</label>
          <div className="relative">
            <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input name="date" type="date" required value={form.date} onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={`${inputBase} pl-10 pr-4`} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">სასურველი დრო *</label>
          <div className="relative">
            <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <select name="time" required value={form.time} onChange={handleChange}
              className={`${inputBase} px-4 appearance-none text-gray-700`}>
              <option value="">დრო...</option>
              {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">შენიშვნა</label>
        <div className="relative">
          <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
          <textarea name="message" value={form.message} onChange={handleChange} rows={3}
            placeholder="ალერგია, პრობლემა ან სხვა ინფორმაცია..."
            className={`${inputBase} pl-10 pr-4 pt-3 resize-none`} />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-[#1e3a5f]/25 hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:scale-100"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            გაგზავნა...
          </span>
        ) : "ვიზიტის დაჯავშნა"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        უფასო კონსულტაცია · საბანკო ბარათი არ არის საჭირო · დასტური 2 საათში
      </p>
    </form>
  );
}
