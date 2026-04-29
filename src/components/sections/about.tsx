"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 lg:py-64 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Images - Asymmetrical Layout */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Main Image */}
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-[75%] h-[70%] z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
                alt="Villa exterior with tropical garden"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlapping Image */}
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-[60%] h-[55%] z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="Luxury spa area"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Olive accent line */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-px bg-primary" />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            style={{ opacity }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-xs tracking-[0.3em] uppercase font-sans mb-6"
            >
              The Experience
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-8"
            >
              A Sanctuary of
              <br />
              <span className="italic">Quiet Luxury</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted-foreground font-sans leading-relaxed"
            >
              <p>
                Casa Mithi is more than a destination — it is an invitation to
                slow down, to breathe deeply, and to rediscover the beauty of
                unhurried moments.
              </p>
              <p>
                Nestled within private grounds, our villa offers absolute
                seclusion without compromising on the refined comforts you
                deserve. Every detail has been curated to create an atmosphere
                of understated elegance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="h-px flex-1 bg-border" />
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-sans">
                Est. 2024
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
