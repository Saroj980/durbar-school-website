"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "The Durbar School has shaped not just my academics but my confidence and leadership. It’s a place that truly empowers students to become their best selves.",
    name: "Aarav Shrestha",
    role: "Alumni, Class of 2081",
  },
  {
    quote:
      "Teachers here care deeply about our success. The environment feels like a second home — creative, respectful, and full of opportunities.",
    name: "Sarina Adhikari",
    role: "Grade 10 Student",
  },
  {
    quote:
      "From science exhibitions to cultural events, I’ve grown so much in ways I never expected. Durbar School inspires curiosity and creativity every day.",
    name: "Rohan Khadka",
    role: "Student, Class of 2078",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-primary via-primary/90 to-primary/95 text-neutralLight py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accentRed/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-16 text-secondary"
        >
          What Our Students Say
        </motion.h2>

        {/* Testimonial Slider */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Quote */}
              <p className="text-xl md:text-2xl font-body italic leading-relaxed text-neutralLight/90 max-w-3xl mx-auto mb-10">
                “{testimonials[index].quote}”
              </p>

              {/* Name + Role */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary/20 border border-secondary text-secondary text-xl font-semibold">
                  {testimonials[index].name.charAt(0)}
                </div>
                <p className="font-heading font-semibold text-lg text-secondary">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-neutralLight/80 font-body">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i
                  ? "bg-secondary scale-125"
                  : "bg-neutralLight/40 hover:bg-neutralLight/70"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
