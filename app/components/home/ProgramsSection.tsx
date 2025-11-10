"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Step 1️⃣ Define valid color keys
type ProgramColor = "accentGreen" | "secondary" | "accentRed";

// Step 2️⃣ Create colorMap based on that type
const colorMap: Record<ProgramColor, string> = {
  accentGreen: "text-accentGreen",
  secondary: "text-secondary",
  accentRed: "text-accentRed",
};

// Step 3️⃣ Define program type that *uses* ProgramColor
interface Program {
  title: string;
  desc: string;
  color: ProgramColor;
  img: string;
}

// Step 4️⃣ Build your programs array with explicit types
const programs: Program[] = [
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

// Step 5️⃣ When rendering:
export default function ProgramsSection() {
  return (
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
  );
}
