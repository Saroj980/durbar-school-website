"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutralDark">
      
      {/* ===== HERO WITH BACKGROUND IMAGE ===== */}
      <section className="relative h-[45vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80
"
            alt="Contact Background"
            className="w-full h-full object-cover object-center"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-heading font-bold text-neutralLight mb-4"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-neutralLight/90 font-body text-lg max-w-2xl mx-auto"
          >
            We're here to help you with admissions, programs, or any general inquiries.
            Reach out to our team anytime.
          </motion.p>
        </div>

        {/* Floating decor glows */}
        <div className="absolute top-10 left-0 w-80 h-80 bg-secondary/10 blur-3xl rounded-full -z-0"></div>
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-accentRed/10 blur-3xl rounded-full -z-0"></div>
      </section>

      {/* ===== CONTACT GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        
        {/* ===== LEFT: Contact Info ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutralLight rounded-3xl p-10 shadow-md"
        >
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">
            Get in Touch
          </h2>

          <div className="space-y-5 text-neutralDark/80 font-body">
            <p>
              📍 <strong>Address:</strong> Kathmandu, Nepal
            </p>
            <p>
              📞 <strong>Phone:</strong> +977-1-5551234
            </p>
            <p>
              ✉️ <strong>Email:</strong> info@thedurbarschool.edu.np
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-heading font-semibold text-primary mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[
                { name: "Facebook", href: "https://facebook.com" },
                { name: "Instagram", href: "https://instagram.com" },
                { name: "YouTube", href: "https://youtube.com" },
              ].map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="px-5 py-2 bg-secondary rounded-full text-neutralDark font-semibold hover:bg-accentRed hover:text-neutralLight transition"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT: Form ===== */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-md border border-neutralLight/60"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">
            Send a Message
          </h2>

          <div className="grid grid-cols-1 gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 rounded-xl border border-neutralDark/10 bg-neutralLight focus:ring-2 focus:ring-primary outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 rounded-xl border border-neutralDark/10 bg-neutralLight focus:ring-2 focus:ring-primary outline-none"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-5 py-3 rounded-xl border border-neutralDark/10 bg-neutralLight focus:ring-2 focus:ring-primary outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-xl border border-neutralDark/10 bg-neutralLight focus:ring-2 focus:ring-primary outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-3 w-full bg-primary text-neutralLight px-6 py-3 rounded-xl font-semibold hover:bg-accentRed transition shadow-md"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <iframe
            width="100%"
            height="400"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.781569650764!2d80.68034707515804!3d28.696179975630155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1f343d9344c2b%3A0x35cf356d7fe52fb3!2sThe%20Durbar%20School!5e0!3m2!1sen!2snp!4v1763013651345!5m2!1sen!2snp"
          ></iframe>
        </motion.div>
      </section>

    </main>
  );
}
