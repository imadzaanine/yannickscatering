import React from "react";
import ServicesCarousel from "./ServicesCarousel";

const Services: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-white  min-h-screen">
        <h1 className="text-[#1E1D94] text-[48px]">Onze Diensten</h1>
        <div className=" my-8 mx-40">

        <ServicesCarousel />
        </div>


    </section>
  );
};

export default Services;
