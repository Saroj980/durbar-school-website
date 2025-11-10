"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      title: "Empowering Minds. Inspiring Futures.",
      subtitle:
        "A legacy of excellence since 1854 — where learning meets innovation.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80",
      btnText: "Explore Programs",
      btnLink: "/programs",
    },
    {
      id: 2,
      title: "Shaping Leaders Through Education.",
      subtitle:
        "We nurture curiosity, creativity, and compassion — the pillars of tomorrow.",
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=2000&q=80",
      btnText: "Discover More",
      btnLink: "/about",
    },
    {
      id: 3,
      title: "Tradition Meets Technology.",
      subtitle:
        "The Durbar School — a modern approach to holistic education.",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=2000&q=80",
      btnText: "Apply Now",
      btnLink: "/admission",
    },
  ];

  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden text-neutralLight bg-black">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].img}
            alt={slides[index].title}
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        {/* Title */}
        <motion.h1
          key={`title-${slides[index].id}`}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-heading font-bold text-secondary mb-4 md:mb-6 max-w-3xl leading-snug"
        >
          {slides[index].title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={`subtitle-${slides[index].id}`}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-base md:text-lg font-body text-neutralLight/90 mb-10 md:mb-12 max-w-2xl leading-relaxed"
        >
          {slides[index].subtitle}
        </motion.p>

        {/* Button */}
        <motion.div
          key={`btn-${slides[index].id}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href={slides[index].btnLink}
            className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-neutralDark bg-secondary hover:bg-accentRed hover:text-neutralLight transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {slides[index].btnText}
          </Link>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-3 md:p-4 bg-black/30 hover:bg-black/60 text-neutralLight rounded-full backdrop-blur-sm transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-3 md:p-4 bg-black/30 hover:bg-black/60 text-neutralLight rounded-full backdrop-blur-sm transition"
        >
          ›
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i
                ? "bg-secondary scale-125"
                : "bg-neutralLight/50 hover:bg-neutralLight/80"
            }`}
          ></button>
        ))}
      </div>

      {/* Floating gradient decor */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
