"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/995599000000?text=გამარჯობა!%20მინდა%20ვიზიტის%20დაჯავშნა%20SmileElite-ში."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center"
      aria-label="WhatsApp-ზე დაკავშირება"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-25" />
      {/* WhatsApp SVG */}
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white" className="relative z-10">
        <path d="M16 2C8.27 2 2 8.27 2 16c0 2.5.67 4.84 1.84 6.87L2 30l7.3-1.82A13.93 13.93 0 0016 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm7.25 19.25c-.3.85-1.75 1.63-2.4 1.72-.62.09-1.4.13-2.26-.14a20.6 20.6 0 01-2.05-.76C13.4 20.9 10.9 17.6 10.7 17.34c-.2-.26-1.63-2.17-1.63-4.14s1.03-2.93 1.4-3.33c.36-.4.79-.5 1.05-.5l.75.01c.24 0 .57-.09.9.68.33.78 1.1 2.7 1.2 2.9.1.2.16.42.03.68-.13.26-.2.42-.38.65-.2.23-.4.51-.58.69-.19.18-.39.38-.17.74.23.36 1 1.64 2.15 2.66 1.48 1.31 2.72 1.72 3.1 1.9.38.2.6.17.82-.1.23-.26.97-1.13 1.23-1.52.26-.38.52-.32.87-.19.36.13 2.27 1.07 2.66 1.27.39.2.65.29.74.46.1.17.1.97-.2 1.82z"/>
      </svg>
    </motion.a>
  );
}
