'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useAnimationControls, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { useMenu } from '../contexts/MenuContext';

const NavBar: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [150, 250], [0, 1]);
  const scale = useTransform(scrollY, [150, 250], [0.85, 1]);
  const { menuOpen, setMenuOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const hamburgerControls = useAnimationControls();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 250);
  });

  const links = [
    { label: 'Home', id: 'Home' },
    { label: 'Menu', id: 'OurWork' },
    { label: 'Contact', id: 'Offer' },
  ];

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
    hamburgerControls.start({
      scale: [1, 0.8, 1.15, 1],
      transition: { duration: 0.4, ease: 'easeOut' },
    });
  };

  const navBg = menuOpen ? 'rgba(255,255,255,1)' : scrolled ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0)';
  const showBlur = !menuOpen && scrolled;

  return (
    <motion.nav
      animate={{ backgroundColor: navBg }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-8 h-20 md:!bg-transparent md:backdrop-blur-none ${
        showBlur ? 'backdrop-blur-md' : ''
      }`}
    >
      <motion.div
        animate={{ opacity: menuOpen ? 1 : undefined }}
        style={{ opacity: menuOpen ? 1 : opacity, scale }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Logo width={100} height={16} />
      </motion.div>

      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-24">
          {links.map((link) => (
            <li key={link.id} className="group text-black cursor-pointer" onClick={() => handleNavClick(link.id)}>
              <div>{link.label}</div>
              <div className="w-10 h-0.75 bg-gray-400 mx-auto transition-colors group-hover:bg-[#1E1D94]"></div>
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        animate={hamburgerControls}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50"
        onClick={handleHamburgerClick}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-black block origin-center" />
        <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-black block" />
        <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-black block origin-center" />
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden absolute top-20 left-0 w-full shadow-lg px-8 py-6"
            style={{ backgroundColor: 'white' }}
          >
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.id} className="group text-black cursor-pointer text-lg" onClick={() => handleNavClick(link.id)}>
                  <div>{link.label}</div>
                  <div className="w-10 h-0.75 bg-gray-400 transition-colors group-hover:bg-[#1E1D94]"></div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;