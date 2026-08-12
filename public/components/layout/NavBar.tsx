'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../ui/Logo';

const NavBar: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [150, 250], [0, 1]);
  const scale = useTransform(scrollY, [150, 250], [0.85, 1]);

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 h-20">
      <motion.div style={{ opacity, scale }}>
        <Logo width={100} height={16} />
      </motion.div>

      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <ul className='flex space-x-24'>
          <li className='group text-black cursor-pointer'>
            <div>Home</div>
            <div className='w-10 h-0.75 bg-gray-400 mx-auto transition-colors group-hover:bg-[#1E1D94]'></div>
          </li>
          <li className='group text-black cursor-pointer'>
            <div>Menu</div>
            <div className='w-10 h-0.75 bg-gray-400 mx-auto transition-colors group-hover:bg-[#1E1D94]'></div>
          </li>
          <li className='group text-black cursor-pointer'>
            <div>Contact</div>
            <div className='w-10 h-0.75 bg-gray-400 mx-auto transition-colors group-hover:bg-[#1E1D94]'></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;