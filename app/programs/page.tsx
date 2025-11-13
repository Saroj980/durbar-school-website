"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Kindergarten",
      desc: "A playful, curiosity-driven environment that builds early confidence and creativity.",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=2000&q=80",
      color: "accentGreen",
    },
    {
      title: "Primary School",
      desc: "A balanced curriculum focusing on foundational academics, values, and communication skills.",
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=2000&q=80",
      color: "secondary",
    },
    {
      title: "Secondary School",
      desc: "An advanced academic framework fostering leadership, analytical thinking, and holistic growth.",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=2000&q=80",
      color: "accentRed",
    },
  ];

  const colorMap: Record<string, string> = {
    accentGreen: "text-accentGreen",
    secondary: "text-secondary",
    accentRed: "text-accentRed",
  };

  return (
    <main className="min-h-screen bg-white text-neutralDark">

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover"
            alt="Programs"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-black/20"></div>
        </div>

        {/* TEXT */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-heading text-neutralLight font-bold mb-4"
          >
            Academic Programs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-neutralLight/90 font-body text-lg max-w-2xl mx-auto"
          >
            A structured journey from early childhood to secondary education —
            nurturing curiosity, discipline, and excellence.
          </motion.p>
        </div>
      </section>

      {/* ===== PROGRAM CARDS ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-neutralLight rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-heading font-semibold ${colorMap[p.color]}`}>
                  {p.title}
                </h3>
                <p className="mt-3 text-neutralDark/80 font-body leading-relaxed">
                  {p.desc}
                </p>

                <Link
                  href={`/programs/${p.title.toLowerCase().replace(" ", "-")}`}
                  className="inline-block mt-5 text-primary font-semibold hover:text-accentRed transition"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CURRICULUM OVERVIEW ===== */}
      <section className="bg-neutralLight py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading text-primary font-bold mb-6">
            Curriculum Overview
          </h2>
          <p className="max-w-2xl mx-auto text-neutralDark/80 font-body mb-12">
            A structured curriculum designed to support intellectual, emotional,
            and social development at every stage of a child’s growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Creative Learning", desc: "Hands-on activities & exploration-based learning." },
              { title: "STEM Focus", desc: "Science, Technology, Engineering & Mathematics integrated into core learning." },
              { title: "Character Development", desc: "Curriculum promoting empathy, leadership, and discipline." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-heading text-primary font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-neutralDark/80 font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-primary text-neutralLight rounded-3xl p-12 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Enroll Your Child?
          </h3>
          <p className="text-neutralLight/90 font-body mb-6">
            Learn more about admission requirements, deadlines, and scholarships.
          </p>

          <Link
            href="/admission"
            className="px-8 py-3 bg-secondary text-neutralDark rounded-full font-semibold hover:bg-accentRed hover:text-neutralLight transition"
          >
            Start Admission Process
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
