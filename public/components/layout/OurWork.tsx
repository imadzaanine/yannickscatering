import React from "react";
import WorkCarousel from "./WorkCarousel";

const OurWork: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-4 bg-white min-h-screen pt-16 sm:pt-20 px-4" id='OurWork'>
      <h1 className="text-[#1E1D94] text-[32px] sm:text-[40px] md:text-[48px] text-center">Ons Werk</h1>
      <div className="my-8 w-full">
        <WorkCarousel />
      </div>
    </section>
  );
};

export default OurWork;