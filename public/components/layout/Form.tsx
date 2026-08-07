'use client';

import { useState } from "react";

export default function Form() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        telephone: "",
        message: "",
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

const data = await response.json();

  console.log(form);
};

return (
    <form className="flex flex-col gap-4 w-full max-w-md mx-auto " onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-[#1E1D94] text-[20px]">Naam</label>
        <input 
        name="name"
        value={form.name}
        onChange={handleChange}
        className="border border-gray-300  p-2"
        />
        
        <label htmlFor="email" className="text-[#1E1D94] text-[20px]">E-mail</label>
        <input
        name="email"
        value={form.email}
        onChange={handleChange}
        className="border border-gray-300  p-2"
        />

        <label htmlFor="telephone" className="text-[#1E1D94] text-[20px]">Telefoonnummer</label>
        <input
        name="telephone"
        value={form.telephone}
        onChange={handleChange}
        className="border border-gray-300  p-2"
        />

<label htmlFor="message" className="text-[#1E1D94] text-[20px]">Bericht</label>
        <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        className="border border-gray-300  p-2"
        />

        <button type="submit" className="bg-[#1E1D94] text-white py-2 px-4  hover:bg-[#0f0e6b] hover:cursor-pointer ">
          Verstuur
        </button>
      </form>
)

};