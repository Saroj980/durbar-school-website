"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  const items = [
    {
      title: "Academic Excellence",
      desc: "Inspiring young minds through quality education and innovation.",
      icon: "https://cdn-icons-png.flaticon.com/512/9068/9068825.png",
    },
    {
      title: "Leadership & Integrity",
      desc: "Building strong character, confidence, and community spirit.",
      icon: "https://cdn-icons-png.flaticon.com/512/4371/4371979.png",
    },
    {
      title: "Sports & ECA",
      desc: "Encouraging teamwork, discipline, and sportsmanship in every student.",
      icon: "https://cdn-icons-png.flaticon.com/512/4392/4392457.png",
    },
    {
      title: "Character Development",
      desc: "Nurturing empathy, responsibility, and resilience for life.",
      icon: "https://cdn-icons-png.flaticon.com/512/4339/4339549.png",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-neutralLight to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
        >
          Our Mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-neutralDark/80 text-lg font-body mb-16 max-w-2xl mx-auto"
        >
          Empowering every student through excellence, creativity, and character.
        </motion.p>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 
                border-t-4 ${
                  i % 2 === 0 ? "border-primary" : "border-secondary"
                }`}
              style={{
                transform: `translateY(${i % 2 === 0 ? "0px" : "30px"})`,
              }}
            >
              {/* Floating Glow Behind Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="relative z-10 w-16 h-16 flex items-center justify-center bg-neutralLight rounded-full shadow-md"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-neutralDark font-body text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 blur-3xl rounded-full"></div>
    </section>
  );
}
