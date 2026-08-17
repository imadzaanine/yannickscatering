"use client";

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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto flex flex-col gap-5"
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-[#1E1D94] font-medium"
        >
          Naam
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-[#1E1D94]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-[#1E1D94] font-medium"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-[#1E1D94]"
        />
      </div>

      <div>
        <label
          htmlFor="telephone"
          className="block mb-2 text-[#1E1D94] font-medium"
        >
          Telefoonnummer
        </label>
        <input
          id="telephone"
          type="tel"
          name="telephone"
          value={form.telephone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-[#1E1D94]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-[#1E1D94] font-medium"
        >
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#1E1D94]"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-[#1E1D94] text-white py-3 px-8 rounded-md hover:bg-[#0f0e6b] transition-colors cursor-pointer"
      >
        Verstuur
      </button>
    </form>
  );
}