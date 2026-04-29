"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoos-qWlhceyY4ausN9V3QBgAZCKedNFCkc.jpg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 transition-all duration-500 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm" : ""
        }`}
      >
        <nav className="flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Circular Logo */}
          <motion.a
            href="#"
            className="relative z-10 flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden">
              <img
                src={LOGO_URL}
                alt="Casa Mithi Logo"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center gap-8 lg:gap-12 text-xs tracking-wider uppercase font-sans transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <a href="#" className="relative group">
              <span className="hover:opacity-80 transition-opacity">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#about" className="relative group">
              <span className="hover:opacity-80 transition-opacity">
                Experience
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#gallery" className="relative group">
              <span className="hover:opacity-80 transition-opacity">
                Gallery
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#stories" className="relative group">
              <span className="hover:opacity-80 transition-opacity">
                Stories
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#booking"
              className={`px-6 py-3 transition-all ${
                isScrolled
                  ? "border border-foreground/30 hover:bg-foreground hover:text-background"
                  : "border border-primary-foreground/50 hover:bg-primary-foreground/10"
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-10 w-8 h-6 flex flex-col justify-between ${
              isScrolled || isMobileMenuOpen
                ? "text-foreground"
                : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-px bg-current transform transition-transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-current transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-current transform transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-sm tracking-wider uppercase font-sans text-foreground">
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative group"
          >
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative group"
          >
            <span>Experience</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative group"
          >
            <span>Gallery</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#stories"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative group"
          >
            <span>Stories</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-4 border border-foreground/30 hover:bg-foreground hover:text-background transition-all"
          >
            Book Now
          </a>
        </div>
      </motion.div>
    </>
  );
}
