"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Admission", path: "/admission" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-sm"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* === Logo === */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/durbar-logo.png"
            alt="Durbar School Logo"
            width={60}
            height={60}
            className="object-contain rounded-full"
          />
          <span
            className={`text-xl md:text-2xl font-heading font-bold ${
              isScrolled ? "text-primary" : "text-neutralLight"
            }`}
          >
            The Durbar School
          </span>
        </Link>

        {/* === Desktop Menu === */}
        <nav className="hidden md:flex items-center space-x-8 font-body text-sm uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-primary hover:text-accentRed"
                  : "text-neutralLight hover:text-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden text-neutralLight hover:text-secondary transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              className={`w-7 h-7 ${
                isScrolled ? "text-primary" : "text-neutralLight"
              }`}
            />
          ) : (
            <Menu
              className={`w-7 h-7 ${
                isScrolled ? "text-primary" : "text-neutralLight"
              }`}
            />
          )}
        </button>
      </div>

      {/* === Mobile Menu Drawer === */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-primary shadow-lg rounded-b-3xl"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 font-body uppercase tracking-wide text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="hover:text-accentRed transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/admission"
                  className="bg-primary text-neutralLight px-6 py-2 rounded-full font-semibold hover:bg-accentRed transition"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
