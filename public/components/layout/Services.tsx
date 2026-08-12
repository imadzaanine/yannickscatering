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
      <h1 className="text-[#1E1D94] text-[48px] mt-16">Onze Diensten</h1>
      <div className="mt-2 mb-8 mx-40">
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default Services;