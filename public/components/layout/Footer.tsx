import React from "react";
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1E1D94] text-white border-t border-white/20"
    style={{ padding: "2rem 0" }}>
      <div className=" mx-auto px-6"
        style={{ gap: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Contact links */}
        <div className="flex justify-center items-center my-4"
        style={{ gap: "4rem" }}>
          <a
            href="https://www.instagram.com/yannickscatering/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            style={{ gap: "0.5rem" }}
          >
            <FaInstagram className="text-xl" />
            <span>Instagram</span>
          </a>

          <a
            href="tel:+31619022399"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            style={{ gap: "0.5rem" }}
          >
            <FaPhone className="text-xl" style={{ transform: "scaleX(-1)" }} />
            <span>06 19 02 23 99</span>
          </a>

            <a
            href="https://wa.me/31619022399"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            style={{ gap: "0.5rem" }}
          >
            <FaWhatsapp className="text-xl" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex justify-center">
          <p className="text-sm text-white/80">
            © 2026 Yannick's Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;