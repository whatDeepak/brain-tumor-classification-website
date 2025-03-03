"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ScienceSection() {
  // State for animated numbers
  const [patientCount, setPatientCount] = useState(0);
  const [accuracyRate, setAccuracyRate] = useState(0);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    interface AnimateNumbers {
      (setter: React.Dispatch<React.SetStateAction<number>>, target: number): void;
    }

    const animateNumbers: AnimateNumbers = (setter, target) => {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const stepTime = 20; // Update interval
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
      start += increment;
      setter(Math.min(Math.round(start), target));
      if (start >= target) clearInterval(timer);
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateNumbers(setPatientCount, 300000);
          animateNumbers(setAccuracyRate, 96.5);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="min-h-[60vh] py-20 px-8 sm:px-16 md:px-32 relative bg-black">
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2">
            <div className="mb-4 text-sm font-medium text-gray-400">
              OUR RESEARCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Classifying Brain Tumors <br /> with Unparalleled Accuracy
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We leverage advanced AI-driven techniques and MRI imaging to classify brain tumors with high precision. Our research focuses on early detection and accurate differentiation of tumor types, enabling faster and more effective treatments.
            </p>
            <Link
              href="#science"
              className="inline-flex items-center bg-white text-[#0a1e3c] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Our Science <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right Side: Animated Statistics */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-6 text-center">
              <div>
                <motion.div
                  className="text-6xl md:text-7xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {patientCount.toLocaleString()}+
                </motion.div>
                <p className="text-lg mt-2 text-gray-300 font-bold">
                  Patients diagnosed with <br /> brain tumors annually
                </p>
              </div>
              <div>
                <motion.div
                  className="text-6xl md:text-7xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {accuracyRate}%
                </motion.div>
                <p className="text-lg mt-2 text-gray-300 font-bold">
                  Accuracy achieved in <br /> AI-driven tumor classification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
