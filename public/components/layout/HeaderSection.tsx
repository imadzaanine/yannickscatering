'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../ui/Logo';
import Image from 'next/image';

const HeaderSection: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.6]);
  const y = useTransform(scrollY, [0, 200], [0, -40]);

  return (
    <div className='flex flex-col items-center min-h-screen justify-between gap-4 pb-10'>
      <motion.div style={{ opacity, scale, y }} className='sticky top-0'>
        <Logo width={250} height={40} />
      </motion.div>
      <div>
        <Image src="/Arrow 1.svg" alt='Arrow' width={25} height={0} />
      </div>
    </div>
  );
};

export default HeaderSection;