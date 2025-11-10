"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80"
            alt="About Durbar"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">
            A Legacy of Excellence
          </h2>
          <p className="text-neutralDark font-body mb-6">
            Established in 1854, The Durbar School is Nepal’s first modern educational
            institution. We focus on developing well-rounded students through a balance
            of academics, values, and creativity.
          </p>
          <Link
            href="/about"
            className="bg-secondary text-neutralDark px-6 py-3 rounded-lg font-semibold hover:bg-accentRed hover:text-neutralLight transition"
          >
            Discover More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
