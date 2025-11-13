"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-neutralLight pt-20 pb-10">
      {/* ===== Top Footer ===== */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12">
        
        {/* ===== Column 1: Logo + Tagline ===== */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/durbar-logo.png"
              alt="Durbar School Logo"
              width={60}
              height={60}
              className="object-contain rounded-full"
            />
            <span className="text-2xl font-heading font-bold text-neutralLight">
              The Durbar School
            </span>
          </div>
          <p className="text-neutralLight/80 text-sm leading-relaxed font-body max-w-xs">
            Nepal’s first modern educational institution — fostering academic
            excellence and character since 1854.
          </p>
        </div>

        {/* ===== Column 2: Quick Links ===== */}
        <div>
          <h4 className="text-lg font-heading font-semibold mb-4 text-secondary">
            Quick Links
          </h4>
          <ul className="space-y-3 text-neutralLight/80 text-sm font-body">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Programs", href: "/programs" },
              { name: "Admission", href: "/admission" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Column 3: Contact ===== */}
        <div>
          <h4 className="text-lg font-heading font-semibold mb-4 text-secondary">
            Contact
          </h4>
          <ul className="space-y-3 text-neutralLight/80 text-sm font-body">
            <li>Kathmandu, Nepal</li>
            <li>Phone: +977-1-5551234</li>
            <li>Email: info@thedurbarschool.edu.np</li>
          </ul>
        </div>

        {/* ===== Column 4: Social Icons ===== */}
        <div>
          <h4 className="text-lg font-heading font-semibold mb-4 text-secondary">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:info@thedurbarschool.edu.np" },
            ].map(({ icon: Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-white/10 hover:bg-secondary text-neutralLight 
                  hover:text-neutralDark transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Bottom Footer ===== */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 text-neutralLight/70 text-sm font-body">
        <p>
          © {new Date().getFullYear()} Blackboard Nepal Pvt. Ltd. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <span className="text-secondary font-semibold hover:text-accentRed transition">
            Blackboard Team
          </span>
        </p>
      </div>

      {/* Soft background glow for modern look */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accentRed/10 blur-3xl rounded-full -z-10"></div>
    </footer>
  );
}
