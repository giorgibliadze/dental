"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "მთავარი",   href: "/" },
  { label: "სერვისები", href: "/services" },
  { label: "ექიმები",   href: "/doctors" },
  { label: "შედეგები",  href: "/before-after" },
  { label: "ფასები",    href: "/pricing" },
  { label: "კონტაქტი",  href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isHome = pathname === "/";

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/97 backdrop-blur-xl shadow-sm border-b border-gray-100/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4.5C9 14 9 16 9 18c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2 0-2 0-4 1-6.5.5-1.5 1-3 1-4.5 0-2.5-1.5-5-5-5z"
                  fill="white"/>
              </svg>
            </div>
            <div className="leading-none">
              <div className={`font-bold text-[1.05rem] transition-colors ${scrolled || !isHome ? "text-[#0f172a]" : "text-white"}`}>
                SmileElite
              </div>
              <div className={`text-[9px] tracking-[0.22em] font-semibold transition-colors ${scrolled || !isHome ? "text-[#b8962e]" : "text-[#f4d03f]/90"}`}>
                DENTAL CLINIC
              </div>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-xl text-[0.85rem] font-medium transition-all duration-200 ${
                    active
                      ? scrolled || !isHome
                        ? "text-[#1e3a5f] bg-[#1e3a5f]/6"
                        : "text-white bg-white/12"
                      : scrolled || !isHome
                      ? "text-[#4b5563] hover:text-[#1e3a5f] hover:bg-[#1e3a5f]/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#b8962e]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── CTA row ── */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+995322000000"
              className={`flex items-center gap-1.5 text-[0.82rem] font-medium transition-colors ${scrolled || !isHome ? "text-[#1e3a5f]" : "text-white/80 hover:text-white"}`}
            >
              <Phone size={13} />
              +995 32 200-00-00
            </a>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#b8962e] to-[#d4a843] text-white px-5 py-2.5 rounded-full text-[0.83rem] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              ვიზიტის დაჯავშნა
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="მენიუ"
            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled || !isHome ? "text-[#0f172a]" : "text-white"}`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl"
          >
            <div className="px-5 pt-4 pb-6 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[#1e3a5f]/8 text-[#1e3a5f] font-semibold"
                      : "text-[#374151] hover:bg-gray-50 hover:text-[#1e3a5f]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a href="tel:+995322000000" className="flex items-center gap-2 px-4 py-3 text-[#1e3a5f] font-medium text-sm">
                  <Phone size={15} /> +995 32 200-00-00
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-[#b8962e] to-[#d4a843] text-white px-5 py-3.5 rounded-full font-semibold text-sm shadow-md"
                >
                  ვიზიტის დაჯავშნა
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
