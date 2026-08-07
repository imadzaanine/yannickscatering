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
            className="w-64 px-2 flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Work ${index + 1}`}
              width={256}
              height={256}
              className="w-full h-64 object-cover rounded-xl"
              priority
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default WorkCarousel;