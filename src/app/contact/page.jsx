"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Get in Touch";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <div className="h-full">
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 items-center p-5">
        {/* TEXT CONTAINER */}
        <div className="h-1/4 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            📩
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-3/4 lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-14 justify-center p-12 lg:gap-10"
        >
          <div className="flex items-center">
            {/* Icon container */}
            <div className="absolute pl-3 text-gray-500">
              <FiUser />
            </div>
            {/* Input field with added padding to make space for the icon */}
            <input
              name="user_name"
              type="text"
              className="bg-transparent border rounded-full border-gray-300 outline-none pl-10 pr-3 py-2 w-full lg:w-auto lg:min-w-[400px]"
              placeholder="Name"
            />
          </div>
          <div className="flex items-center">
            {/* Icon container */}
            <div className="absolute pl-3 text-gray-500">
              <AiOutlineMail />
            </div>
            {/* Input field with added padding to make space for the icon */}
            <input
              name="user_email"
              type="text"
              className="bg-transparent border rounded-full border-gray-300 outline-none pl-10 pr-3 py-2 w-full lg:w-auto lg:min-w-[400px]"
              placeholder="Email"
            />
          </div>

          <textarea
            rows={6}
            className="bg-transparent border border-b-black outline-none resize-none lg:h-auto h-32 rounded-2xl pr-3 py-2 pl-4"
            name="user_message"
            placeholder="Type your message here"
          />
          <button className="bg-purple-200 rounded-2xl font-semibold text-gray-600 p-4 w-48">
            Let's Talk →
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
