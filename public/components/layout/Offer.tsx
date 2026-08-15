import React from "react";
import Form from "./Form";

const Offer: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-white  min-h-screen " id ='Offer'>
        <h1 className="text-[#1E1D94] text-[48px]">Vraag een vrijblijfende offerte aan</h1>
        <div className=" my-8 w-full">
        
        <Form />
        </div>

    </section>
  );
};

export default Offer;
