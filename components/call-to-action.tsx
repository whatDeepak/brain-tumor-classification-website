"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[linear-gradient(to_bottom,#000,#200D42_30%,#4F21A1_60%,#A46EDB_85%,#200D42_95%,#000)] text-white py-24 flex items-center justify-center min-h-screen"
    >
      <motion.div
        style={{ y: translateY }}
        className="container max-w-2xl text-center"
      >
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get Instant Access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Experience AI-powered brain tumor diagnosis with cutting-edge
          precision. Join us today.
        </p>
        <form className="mt-10 flex flex-col gap-3 max-w-md mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5 font-medium hover:bg-gray-200 transition">
            Get Access
          </button>
        </form>
      </motion.div>
    </div>
  );
}
