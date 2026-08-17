"use client";

import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (status) {
      setStatus(null);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      await response.json();

      setStatus("success");

      setForm({
        name: "",
        email: "",
        telephone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
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
          required
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 p-3 text-black transition focus:border-[#1E1D94] focus:outline-none focus:ring-2 focus:ring-[#1E1D94]/20"
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
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 p-3 text-black transition focus:border-[#1E1D94] focus:outline-none focus:ring-2 focus:ring-[#1E1D94]/20"
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
          required
          value={form.telephone}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 p-3 text-black transition focus:border-[#1E1D94] focus:outline-none focus:ring-2 focus:ring-[#1E1D94]/20"
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
          required
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-md border border-gray-300 p-3 text-black transition focus:border-[#1E1D94] focus:outline-none focus:ring-2 focus:ring-[#1E1D94]/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto rounded-md bg-[#1E1D94] px-8 py-3 text-white transition-colors hover:bg-[#17167a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Bezig met verzenden..." : "Verstuur bericht"}
      </button>

      {status === "success" && (
        <p className="text-sm text-black">
          Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600">
          Er is iets misgegaan bij het verzenden van uw bericht. Probeer het later opnieuw.
        </p>
      )}
    </form>
  );
}