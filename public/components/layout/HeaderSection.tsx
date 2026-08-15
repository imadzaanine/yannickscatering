'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../ui/Logo';
import Image from 'next/image';

const HeaderSection: React.FC = () => {
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.6]);
  const logoY = useTransform(scrollY, [0, 200], [0, -40]);

  const arrowOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className='flex flex-col items-center min-h-screen justify-between gap-4 pb-10' id='Home'>
      <motion.div style={{ opacity: logoOpacity, scale: logoScale, y: logoY }} className='sticky top-0'>
        <Logo width={250} height={40} />
      </motion.div>

      <motion.div
        style={{ opacity: arrowOpacity }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image src="/Arrow 1.svg" alt='Arrow' width={25} height={0} />
      </motion.div>
    </div>
  );
};

export default HeaderSection;