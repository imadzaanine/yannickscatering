'use client';

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = [
  "/imgi_2_table.jpg",
  "/imgi_3_corporate.jpg",
  "/imgi_4_salmon.jpg",
  "/imgi_6_jam.jpg",
  "/imgi_7_meat.jpg",
  "/imgi_8_risso.jpg",
  "/imgi_9_panna.jpg",
  "/imgi_10_crumb.jpg",
  "/imgi_11_hero1.jpg",
  "/imgi_12_hero2.jpg",
];

const WorkCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover
        autoFill
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 px-2 sm:px-3 flex-shrink-0"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Work ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 384px"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default WorkCarousel;