"use client";

import React, { useState, FormEvent } from "react";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({ success: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/mnnqodql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
        });
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error: unknown) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 lg:mx-44 mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 text-primary gap-10">
      <div className="md:pr-10">
        <h1 className="text-4xl font-bold mb-4">Get in touch with us</h1>
        <p className="text-base my-3">
          URC is an organization that deals with the practical aspects of the
          theories we learn in class.
        </p>

        <ContactInfo
          label="LOCATION"
          info="UENR, Sunyamni - Bono Region, Ghana"
        />
        <ContactInfo label="PHONE" info="+233 25 763 8686" />
        <ContactInfo label="EMAIL" info="uenrroboticsclub@gmail.com" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#0c7aad]/30 p-8 rounded-lg shadow-md"
      >
        {submitStatus.success !== null && (
          <div
            className={`mb-4 p-3 rounded ${
              submitStatus.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        <div className="flex flex-col lg:flex-row items-start lg:gap-x-5">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="flex-1 w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500 mt-3 lg:mt-0"
          />
        </div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-3 rounded-md border border-gray-300 outline-none focus:border-blue-500 my-3 h-44"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#0c7aad] text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition duration-200 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

const ContactInfo: React.FC<{ label: string; info: string }> = ({
  label,
  info,
}) => (
  <div className="w-full py-2 border-b border-gray-200 mb-4">
    <h1 className="text-xl font-semibold">{label}</h1>
    <p className="text-base">{info}</p>
  </div>
);

export default Contact;
