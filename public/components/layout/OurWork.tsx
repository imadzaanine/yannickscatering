import React from "react";
import WorkCarousel from "./WorkCarousel";

const OurWork: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-4 bg-white min-h-screen pt-20" id='OurWork'>
        <h1 className="text-[#1E1D94] text-[48px]">Ons Werk</h1>
        <div className="my-8 w-full">
        <WorkCarousel />
        
        </div>


    </section>
  );
};

export default OurWork;