"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HERO_IMAGE_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero11-bD6RZCUGZCNgyRKsyGjvhBO1QU7My3.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={HERO_IMAGE_URL}
          alt="Casa Mithi luxury villa with pool at twilight"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Olive Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-accent/70 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col justify-end pb-24 md:pb-32 lg:pb-40 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground/80 text-xs md:text-sm tracking-[0.3em] uppercase font-sans mb-4 md:mb-6"
          >
            Private Villas Resort
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-[0.9] mb-6 md:mb-8 text-balance"
          >
            Escape to Refined
            <br />
            <span className="italic">Tranquility</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-primary-foreground/90 text-base md:text-lg lg:text-xl font-sans max-w-xl mb-10 md:mb-12 leading-relaxed"
          >
            Discover Casa Mithi — a private villa resort where luxury, comfort,
            and peaceful surroundings come together for an unforgettable stay.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-accent text-sm tracking-wider uppercase font-sans hover:bg-primary-foreground/90 transition-colors"
            >
              Check Availability
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/50 text-primary-foreground text-sm tracking-wider uppercase font-sans hover:bg-primary-foreground/10 transition-colors"
            >
              View Gallery
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-linear-to-b from-primary-foreground/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
