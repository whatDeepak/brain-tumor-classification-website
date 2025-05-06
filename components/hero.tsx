"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="min-h-[90vh] bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden">
      <section className="container mx-auto px-6 relative flex flex-col items-center text-center">
        {/* Text Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-xl md:text-2xl mb-4 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to NeuroX
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            AI-Powered <br /> Brain Tumor Diagnosis
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leveraging deep learning and medical imaging to provide fast, accurate, and reliable brain tumor diagnosis.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <button 
          onClick={() => router.push("/upload")}
          className="bg-white text-black py-3 px-6 rounded-lg font-medium shadow-md hover:bg-gray-200 transition flex items-center justify-center gap-2 group">
            Try It Now
            <span className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0">
              <ArrowRight size={20} />
            </span>
          </button>
        </motion.div>

      </section>
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-90px)] sm:top-[calc(100%-110px)]"></div>
    </div>
  );
}