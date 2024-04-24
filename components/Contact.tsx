"use client";

import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "react-three-fiber";
import Loader from "./Loader";
import { Fox } from "@/models/Fox";
import toast from "react-hot-toast";

function Contact() {
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Sehaj Bindra",
          from_email: form.email,
          to_email: "sehajbindra1234@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setLoading(false);
        setCurrentAnimation("idle");
        toast.success("Thank you. I will get back to you as soon as possible.");

        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        //   console.error(error);

        toast.error("Ahh, something went wrong. Please try again.");
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              required
              name="name"
              className="input"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              required
              name="email"
              className="input"
              type="email"
              placeholder="sehaj@gmail.com..."
              value={form.email}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              required
              rows={4}
              name="message"
              className="textarea"
              placeholder="Your Message..."
              value={form.message}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <button
            disabled={loading}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className="btn"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto  md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              scale={[0.5, 0.5, 0.5]}
              rotation={[12.6, -0.6, 0]}
              position={[0.5, 0.35, 0]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;
