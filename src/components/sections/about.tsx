import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax values
  const yMain = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-1200px mx-auto grid lg:grid-cols-12 gap-16 items-center">
        {/* LEFT — VISUAL */}
        <div className="lg:col-span-6 relative h-520px md:h-620px lg:h-720px">
          {/* Main Image */}
          <motion.div style={{ y: yMain }} className="w-full h-full ">
            <img src="public/images/about-main.jpg" alt="Casa Mithi Villa" />
          </motion.div>

          {/* Overlapping Image */}
          <motion.div
            style={{ y: ySecondary }}
            className="absolute -bottom-12 -right-12 w-[55%] h-[55%]  z-10"
          >
            <img src="/images/about-secondary.jpg" alt="Casa Mithi Interior" />
          </motion.div>

          {/* Accent line */}
          <div className="absolute -left-10 top-1/2 w-16 h-px bg-primary" />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="lg:col-span-5 lg:col-start-8">
          <span className="text-primary text-xs tracking-[0.3em] uppercase">
            The Experience
          </span>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-6">
            A Sanctuary of
            <br />
            <span className="italic">Quiet Luxury</span>
          </h2>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Casa Mithi is more than a destination — it is an invitation to
              slow down, to breathe deeply, and to rediscover the beauty of
              unhurried moments.
            </p>

            <p>
              Nestled within private grounds, our villa offers absolute
              seclusion without compromising on the refined comforts you
              deserve. Every detail has been curated to create an atmosphere of
              understated elegance.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-primary text-xs tracking-[0.2em] uppercase">
              Est. 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
