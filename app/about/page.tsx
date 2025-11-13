"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Facility = {
  title: string;
  desc: string;
  img: string;
};

const facilities: Facility[] = [
  {
    title: "Modern Classrooms",
    desc: "Bright, tech-enabled classrooms that encourage collaborative learning.",
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Science & Computer Labs",
    desc: "Well-equipped labs with up-to-date equipment and guided experiments.",
    img: "https://images.unsplash.com/photo-1581093448792-9d7a4f0f5f3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sports Grounds",
    desc: "Large playfields and courts for football, basketball, athletics and more.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Arts & Music Center",
    desc: "Dedicated spaces for performing arts, music practice and exhibitions.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutralDark">
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80
"
          alt="Durbar School Campus"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutralLight mb-4 max-w-3xl mx-auto leading-tight"
          >
            About The Durbar School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="text-sm md:text-base text-neutralLight/90 max-w-2xl mx-auto font-body"
          >
            Nepal’s first modern educational institution — nurturing minds, character,
            and creativity since 1854. We combine tradition with modern learning
            environments to prepare students for a changing world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Link
              href="/admission"
              className="inline-block bg-secondary text-neutralDark px-6 py-3 rounded-full font-semibold hover:bg-accentRed transition"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full border border-neutralLight text-neutralLight font-medium hover:bg-neutralLight/10 transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO: 2-column */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-80 md:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=80"
                alt="Students learning"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className=""
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              A Legacy of Holistic Education
            </h2>
            <p className="text-neutralDark/90 font-body mb-4 leading-relaxed">
              The Durbar School has a long tradition of academic excellence combined with
              extracurricular vibrancy. Our curriculum fosters critical thinking,
              creativity, and leadership through a balanced approach to academics,
              arts, and athletics.
            </p>

            <p className="text-neutralDark/80 font-body mb-6 leading-relaxed">
              We believe education is about building character as much as imparting
              knowledge. Our teachers nurture each student’s curiosity and support them
              to become confident, compassionate learners.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-block px-5 py-3 rounded-full bg-primary text-neutralLight font-semibold hover:bg-accentRed transition"
              >
                View Programs
              </Link>
              <Link
                href="/gallery"
                className="inline-block px-5 py-3 rounded-full border border-neutralDark/10 text-neutralDark font-medium hover:bg-neutralLight/50 transition"
              >
                See Campus Photos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION CARDS */}
      <section className="bg-neutralLight py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-heading font-bold text-primary">Vision & Mission</h3>
            <p className="text-neutralDark/80 mt-3 max-w-2xl mx-auto font-body">
              Guiding principles that shape our learning community and long-term goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <span className="text-primary font-heading font-semibold">V</span>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Our Vision</h4>
              <p className="text-neutralDark/80 font-body leading-relaxed">
                To be a leading institution that empowers students to thrive academically
                and socially in a global community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                <span className="text-secondary font-heading font-semibold">M</span>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Our Mission</h4>
              <p className="text-neutralDark/80 font-body leading-relaxed">
                To educate with compassion and rigor — cultivating knowledge, integrity,
                and global citizenship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accentRed/10 mb-4">
                <span className="text-accentRed font-heading font-semibold">V</span>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-2">Core Values</h4>
              <p className="text-neutralDark/80 font-body leading-relaxed">
                Respect, curiosity, resilience, and community — the values at the heart
                of our school.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-heading font-bold text-primary">Our History</h3>
            <p className="text-neutralDark/80 mt-3 max-w-2xl mx-auto font-body">
              A brief timeline highlighting key milestones in our story.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-neutralLight h-full hidden lg:block" />
            <div className="space-y-10">
              {[
                { year: "1854", title: "Founding", desc: "The school is founded with a vision for modern education." },
                { year: "1920", title: "Expansion", desc: "New wings and science labs are added to support growing enrollment." },
                { year: "1980", title: "Curriculum Reform", desc: "Modern pedagogy and extra-curricular programs introduced." },
                { year: "2010", title: "Digital Shift", desc: "Campus-wide digital learning and new computer labs launched." },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className={`md:flex ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-6`}>
                    <div className="md:w-1/2 md:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.12 }}
                        className="bg-white rounded-2xl p-6 shadow"
                      >
                        <div className="text-sm text-neutralDark/60 font-semibold">{item.year}</div>
                        <h4 className="text-lg font-heading font-bold text-primary mt-2">{item.title}</h4>
                        <p className="text-neutralDark/80 mt-2 font-body">{item.desc}</p>
                      </motion.div>
                    </div>

                    {/* timeline marker center */}
                    <div className="hidden lg:flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow" />
                      <div className="w-px h-full bg-neutralLight/60 mt-2" />
                    </div>

                    <div className="md:w-1/2 md:px-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-neutralLight py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-heading font-bold text-primary">Campus Facilities</h3>
            <p className="text-neutralDark/80 mt-3 max-w-2xl mx-auto font-body">
              Thoughtfully curated spaces that support learning, play, and creativity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {facilities.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative h-40">
                  <Image src={f.img} alt={f.title} fill className="object-cover object-center" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-heading font-semibold text-primary">{f.title}</h4>
                  <p className="text-neutralDark/80 mt-2 font-body text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-neutralLight p-10 rounded-3xl shadow-lg text-center"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Interested in joining The Durbar School?
            </h3>
            <p className="text-neutralLight/90 mb-6 font-body">
              Learn about admissions, scholarships, and upcoming open days.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/admission" className="rounded-full bg-secondary text-neutralDark px-6 py-3 font-semibold hover:bg-accentRed transition">
                Apply Now
              </Link>
              <Link href="/contact" className="rounded-full border border-neutralLight px-6 py-3 text-neutralLight font-medium hover:bg-white/10 transition">
                Contact Admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
