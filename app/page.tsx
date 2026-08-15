'use client';
import NavBar from "@/public/components/layout/NavBar";
import HeaderSection from "@/public/components/layout/HeaderSection";
import ScrollTemplate from "@/public/components/layout/scroll";
import HeroSection from "@/public/components/layout/HeroSection";
import Services from "@/public/components/layout/Services";
import OurWork from "@/public/components/layout/OurWork";
import Offer from "@/public/components/layout/Offer";
import Footer from "@/public/components/layout/Footer";
import {useEffect, useState} from "react";


export default function Home() {

  const[loading, setLoading] = useState(true);
  const[progress, setProgress] = useState(0);
  useEffect(() => {
  const imageUrls = [
    "/imgi_1_logo.png",
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

  let loaded = 0;

  imageUrls.forEach((src) => {
    const img = new Image();
    img.src = src;

    const finish = () => {
      loaded++;
      setProgress((loaded / imageUrls.length) * 100);

      if (loaded === imageUrls.length) {
        setLoading(false);
      }
    };

    img.onload = finish;
    img.onerror = finish;
  });
}, []);
if (loading) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="h-2 w-80 overflow-hidden rounded bg-gray-300">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4">{Math.round(progress)}%</p>
    </div>
  );
}
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/imgi_4_salmon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10">
        <NavBar />
        <HeaderSection />
        <ScrollTemplate />
        <HeroSection />
        <Services />
        <OurWork />
        <Offer />
        <Footer />
      </div>
    </div>
  );
}
