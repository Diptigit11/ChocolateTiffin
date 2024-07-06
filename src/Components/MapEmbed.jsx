import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {
      name: form.name === "",
      email: form.email === "",
      message: form.message === "",
    };

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_v4i04to",
        "template_egajo7o",
        {
          from_name: form.name,
          to_name: "Dipti Singh",
          from_email: form.email,
          to_email: "singh236dipti@gmail.com",
          message: form.message,
        },
        "BHEzRRGu_zAD0IrtO"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen p-4 space-between justify-between overflow-hidden">
            <h1 className="text-3xl md:text-4xl font-bold flex item-center justify-center text-brown-700 mb-4 animate-fadeIn">Reach Out to Us</h1>
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl space-x-3 md:space-x-12">
        <div className="flex justify-start mb-3 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120438.87251124642!2d72.74462168839264!3d19.38149945041739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7afae35d0c8cd%3A0x41b5c9333d00da9f!2sChocolate%20Tiffin!5e0!3m2!1sen!2sin!4v1718819888693!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="glowing-border rounded-lg"
          ></iframe>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#8c3939] p-8 rounded-2xl w-full md:w-1/2"
        >
          <h3 className="text-3xl font-bold text-white">Contact Us</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-1 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className={`bg-gray-[#eed6d6] py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium ${
                  errors.name ? "border-red-500 border-2" : ""
                }`}
              />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className={`bg-gray-[#eed6d6] py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium ${
                  errors.email ? "border-red-500 border-2" : ""
                }`}
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className={`bg-gray-[#eed6d6] py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium ${
                  errors.message ? "border-red-500 border-2" : ""
                }`}
              />
              {errors.message && <span className="text-red-500">Message is required</span>}
            </label>

            <button
              type="submit"
              className="bg-[#8c3939] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#e49494]"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
