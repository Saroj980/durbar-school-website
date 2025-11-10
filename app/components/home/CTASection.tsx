"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative bg-neutralLight py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] px-8 md:px-16 py-16 text-center"
        >
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-snug">
            Ready to <span className="text-secondary">Join Us?</span>
          </h2>

          {/* Subtext */}
          <p className="text-neutralDark/80 text-lg font-body max-w-2xl mx-auto mb-10">
            We welcome new students each year. Explore admissions, programs, and
            opportunities to be part of The Durbar School community.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Link
              href="/admission"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-neutralLight bg-primary hover:bg-accentRed transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
