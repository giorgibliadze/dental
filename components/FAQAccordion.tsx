"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/data/faqs";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openId === faq.id;
        return (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-[#1e3a5f]/30 shadow-md shadow-[#1e3a5f]/5"
                : "border-gray-200 hover:border-[#1e3a5f]/20"
            } bg-white`}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4 flex-1 pr-4">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 transition-all duration-200 ${
                  isOpen ? "bg-[#1e3a5f] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#1e3a5f]/10 group-hover:text-[#1e3a5f]"
                }`}>
                  {index + 1}
                </span>
                <span className={`font-semibold text-base leading-snug transition-colors ${isOpen ? "text-[#1e3a5f]" : "text-[#0f172a] group-hover:text-[#1e3a5f]"}`}>
                  {faq.question}
                </span>
              </div>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isOpen ? "bg-[#1e3a5f] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-[#1e3a5f]/10"
              }`}>
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pl-[4.25rem] border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                    <span className="inline-block mt-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#b8962e]/10 text-[#b8962e]">
                      {faq.category}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
