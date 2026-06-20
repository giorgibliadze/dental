"use client";

import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const avatarColors = [
  "from-rose-400 to-pink-600",
  "from-blue-400 to-indigo-600",
  "from-emerald-400 to-teal-600",
  "from-amber-400 to-orange-500",
  "from-purple-400 to-violet-600",
  "from-cyan-400 to-sky-600",
];

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const colorIndex = parseInt(testimonial.id) % avatarColors.length;
  const initials = testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2);

  return (
    <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      {/* Top row: avatar + stars */}
      <div className="flex items-start justify-between mb-5">
        {/* Avatar with initials */}
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${avatarColors[colorIndex]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}>
          {initials}
        </div>
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={13} className="fill-[#f4d03f] text-[#f4d03f]" />
          ))}
        </div>
      </div>

      {/* Treatment badge */}
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#1e3a5f]/6 text-[#1e3a5f] mb-4 self-start">
        {testimonial.treatment}
      </span>

      {/* Quote */}
      <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <div className="font-bold text-[#0f172a] text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-400 mt-0.5">{testimonial.location}</div>
        </div>
        <div className="text-xs text-gray-400">{testimonial.date}</div>
      </div>
    </div>
  );
}
