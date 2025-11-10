"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80",
      caption: "Science Exhibition 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      caption: "Sports & Fitness Programs",
    },
    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
      caption: "Digital Learning Environment",
    },
    {
      src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80",
      caption: "Arts and Culture Week",
    },
    {
      src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80",
      caption: "Kindergarten Activity Time",
    },
    {
      src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80",
      caption: "Collaborative Classrooms",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-neutralLight py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-neutralDark/70 text-lg font-body max-w-2xl mx-auto">
            A glimpse into our dynamic and creative campus atmosphere — where learning,
            art, and friendship flourish.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl group cursor-pointer"
              onClick={() => setSelected(item.src)}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.caption}
                width={600}
                height={400}
                className="object-cover w-full h-72 transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-5">
                  <p className="text-neutralLight font-body text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Accent Bar */}
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ====== Lightbox Modal ====== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
            >
              <Image
                src={selected}
                alt="Expanded"
                width={1200}
                height={800}
                className="rounded-2xl object-contain mx-auto"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 text-2xl"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Background */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-secondary/10 blur-3xl rounded-full"></div>
    </section>
  );
}
