import React from 'react';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 20 }) => {
  return (
   <Image src="/imgi_1_logo.png" alt="Logo" width={width} height={height} priority />
  );
};

export default Logo;
