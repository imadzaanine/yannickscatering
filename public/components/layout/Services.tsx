import React from "react";
import ServicesCarousel from "./ServicesCarousel";

const Services: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f0f0f5)",
      }}
    >
      <h1 className="text-[#1E1D94] text-[32px] sm:text-[40px] md:text-[48px] mt-10 md:mt-16 text-center px-4">Onze Diensten</h1>
      <div className="mt-2 mb-8 w-full">
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default Services;