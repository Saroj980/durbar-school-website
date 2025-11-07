"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // ✅ Why Choose Us Section Items
  const features = [
    {
      id: "01",
      title: "40 Years of Excellence in Education.",
      icon: "https://cdn-icons-png.flaticon.com/512/4727/4727456.png",
    },
    {
      id: "02",
      title: "Winner of Numerous National and Regional Educational Awards.",
      icon: "https://cdn-icons-png.flaticon.com/512/2583/2583349.png",
    },
    {
      id: "03",
      title: "Well-Equipped Science and Computer Laboratories.",
      icon: "https://cdn-icons-png.flaticon.com/512/3470/3470216.png",
    },
    {
      id: "04",
      title: "Highly Trained and Experienced Teachers.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      id: "05",
      title: "ECA Training by Full-time National-Level Coaches.",
      icon: "https://cdn-icons-png.flaticon.com/512/1087/1087927.png",
    },
    {
      id: "06",
      title: "Psychosocial & Career Counsellors Available.",
      icon: "https://cdn-icons-png.flaticon.com/512/3565/3565875.png",
    },
  ];

  const colorMap: Record<string, string> = {
    accentGreen: "text-accentGreen",
    secondary: "text-secondary",
    accentRed: "text-accentRed",
  };

  const programs = [
    {
      title: "Kindergarten",
      desc: "Play-based learning for curiosity and creativity.",
      color: "accentGreen",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Primary School",
      desc: "Building strong foundations through creative education.",
      color: "secondary",
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Secondary School",
      desc: "Empowering students with critical thinking and leadership.",
      color: "accentRed",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <main className="flex flex-col min-h-screen overflow-hidden bg-white text-neutralDark">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/durbar-logo.png"
              alt="Durbar School Logo"
              width={80}
              height={80}
              className="object-contain rounded-full"
            />
            <span className="text-2xl font-heading font-bold text-primary">
              The Durbar School
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 font-body text-sm uppercase tracking-wide">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-secondary transition-colors">
              About
            </Link>
            <Link href="/programs" className="hover:text-secondary transition-colors">
              Programs
            </Link>
            <Link href="/admission" className="hover:text-secondary transition-colors">
              Admission
            </Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center w-full h-[100vh] text-center text-neutralLight pt-16">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
          alt="School Building"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-transparent" />

        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-secondary drop-shadow-lg"
          >
            The Durbar School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-2xl font-body mb-10 text-neutralLight/90 leading-relaxed"
          >
            Nurturing curiosity, creativity, and character since 2060.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/admission"
              className="relative bg-secondary text-neutralDark px-8 py-3 rounded-lg font-semibold overflow-hidden group"
            >
              <span className="absolute inset-0 bg-accentRed translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:text-neutralLight transition-colors duration-300">
                Apply Now
              </span>
            </Link>

            <Link
              href="/about"
              className="border border-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary hover:text-neutralDark"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

     


      {/* ================= ABOUT ================= */}
      <section className="bg-neutralLight py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">
            About Our School
          </h2>
          <p className="text-lg text-neutralDark max-w-3xl mx-auto leading-relaxed font-body">
            Established in 1854, The Durbar School is Nepal’s first modern educational
            institution. We focus on developing well-rounded students through
            a balance of academics, values, and creativity.
          </p>
        </div>
      </section>


      {/* ================= WHY CHOOSE DURBAR SCHOOL ================= */}
<section className="relative bg-gradient-to-b from-[#0D3B66] to-[#155C9A] text-neutralLight overflow-hidden pt-24 pb-0">
  <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between px-6">
    
    {/* LEFT ICON LIST */}
    <div className="flex-1 space-y-10 pb-10">
      {[
        {
          id: "01",
          title: "40 Years of Excellence in Education.",
          icon: "https://cdn-icons-png.flaticon.com/512/2920/2920262.png",
        },
        {
          id: "02",
          title: "Winner of Numerous National and Regional Awards.",
          icon: "https://cdn-icons-png.flaticon.com/512/2583/2583349.png",
        },
        {
          id: "03",
          title: "Well-Equipped Science and Computer Laboratories.",
          icon: "https://cdn-icons-png.flaticon.com/512/2879/2879595.png",
        },
      ].map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="flex items-center gap-5"
        >
          {/* Solid Circle with White Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary shadow-md relative">
            <Image
              src={item.icon}
              alt={item.title}
              width={28}
              height={28}
              className="object-contain invert brightness-0 saturate-0"
            />
            <span className="absolute -bottom-2 right-0 bg-neutralLight text-primary text-xs font-bold rounded-full px-2 py-0.5 shadow">
              {item.id}
            </span>
          </div>
          <p className="font-body text-lg leading-snug">{item.title}</p>
        </motion.div>
      ))}
    </div>

    {/* CENTER IMAGE + TITLE */}
    <div className="relative flex flex-col items-center justify-end md:w-1/3 mt-10 md:mt-0">
      {/* Title above image */}
      <div className="text-center mb-4">
        <p className="text-sm tracking-widest font-body uppercase text-secondary mb-2">
          Our Academics
        </p>
        <h2 className="text-4xl font-heading font-bold">
          Why <span className="text-secondary">Choose Durbar School</span>
        </h2>
      </div>

      {/* Student Image touching bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full flex justify-center"
      >
        <Image
          src="/students.png"
          alt="Student"
          width={350}
          height={500}
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>

    {/* RIGHT ICON LIST */}
    <div className="flex-1 space-y-10 text-right pb-10">
      {[
        {
          id: "04",
          title: "Highly Trained and Experienced Teachers.",
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
        },
        {
          id: "05",
          title: "ECA Training by Full-time National-Level Coaches.",
          icon: "https://cdn-icons-png.flaticon.com/512/1087/1087927.png",
        },
        {
          id: "06",
          title: "Psychosocial & Career Counsellors Available.",
          icon: "https://cdn-icons-png.flaticon.com/512/3874/3874625.png",
        },
      ].map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="flex items-center justify-end gap-5"
        >
          <p className="font-body text-lg leading-snug max-w-xs">{item.title}</p>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary shadow-md relative">
            <Image
              src={item.icon}
              alt={item.title}
              width={28}
              height={28}
              className="object-contain invert brightness-0 saturate-0"
            />
            <span className="absolute -bottom-2 left-0 bg-neutralLight text-primary text-xs font-bold rounded-full px-2 py-0.5 shadow">
              {item.id}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Bottom gradient overlap */}
  <div className="h-20 bg-[#155C9A]" />
</section>

      {/* ================= PROGRAMS ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-14">
            Academic Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-neutralLight rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3
                    className={`text-xl font-heading font-semibold ${colorMap[p.color]}`}
                  >
                    {p.title}
                  </h3>
                  <p className="text-neutralDark mt-2 font-body">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-neutralLight py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-primary mb-10">
            Campus Life
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <Image
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  width={400}
                  height={250}
                  className="object-cover w-full h-56 hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-primary text-neutralLight py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold mb-8 text-secondary">
            What Our Students Say
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="italic text-lg leading-relaxed mb-4 font-body"
          >
            “The Durbar School is not just a school — it’s a family that inspires us to
            dream big and make a difference.”
          </motion.p>
          <p className="font-semibold text-secondary font-body">
            – Alumni, Class of 2022
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-secondary text-neutralDark py-20 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-neutralDark mb-6 max-w-2xl mx-auto font-body">
          We welcome new students each year. Learn more about our admissions process and
          start your journey with us.
        </p>
        <Link
          href="/contact"
          className="bg-primary text-neutralLight px-8 py-3 rounded-lg font-semibold hover:bg-accentRed transition"
        >
          Contact Us
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-primary text-neutralLight py-6 text-center text-sm font-body">
        © {new Date().getFullYear()} Blackboard Nepal Private Limited. All rights reserved.
      </footer>
    </main>
  );
}
