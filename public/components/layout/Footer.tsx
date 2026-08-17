import React from "react";
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
  className="w-full bg-[#1E1D94] text-white border-t border-white/20 py-8"
>
  <div className="mx-auto px-6 flex flex-col items-center gap-4">

    {/* Contact links */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 my-4">
      <a
        href="https://www.instagram.com/yannickscatering/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <FaInstagram className="text-xl" />
        <span>Instagram</span>
      </a>

      <a
        href="tel:+31619022399"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <FaPhone className="text-xl scale-x-[-1]" />
        <span>06 19 02 23 99</span>
      </a>

      <a
        href="https://wa.me/31619022399"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <FaWhatsapp className="text-xl" />
        <span>WhatsApp</span>
      </a>
    </div>

    {/* Copyright */}
    <div className="mt-4 text-center">
      <p className="text-sm text-white/80">
        © 2026 Yannick's Catering. All rights reserved.
      </p>
    </div>

  </div>
</footer>
  );
};

export default Footer;