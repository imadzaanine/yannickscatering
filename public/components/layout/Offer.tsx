import React from "react";
import Form from "./Form";

const Offer: React.FC = () => {
  return (
    <section
      id="Offer"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[#1E1D94] text-3xl sm:text-4xl lg:text-[48px] text-center">
  Vraag een vrijblijvende offerte aan
</h1>

        <div className="mt-10">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Offer;