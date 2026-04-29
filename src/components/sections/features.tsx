"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Private Infinity Pool",
    description:
      "Immerse yourself in crystal-clear waters while gazing upon endless horizons. Your personal oasis awaits.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    alignment: "left" as const,
  },
  {
    title: "Luxury Suites",
    description:
      "Wake to gentle breezes and soft light in our thoughtfully designed bedrooms, where comfort meets sophistication.",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
    alignment: "right" as const,
  },
  {
    title: "Event-Ready Spaces",
    description:
      "From intimate gatherings to grand celebrations, our versatile venues provide the perfect backdrop for unforgettable moments.",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
    alignment: "left" as const,
  },
  {
    title: "Serene Atmosphere",
    description:
      "Let the gentle rustle of palms and the distant song of birds compose the soundtrack to your escape.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
    alignment: "right" as const,
  },
];

function FeatureItem({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const isLeft = feature.alignment === "left";

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
    >
      {/* Image */}
      <motion.div
        style={{ y: imageY }}
        className={`relative w-full lg:w-[55%] aspect-[4/3] ${isLeft ? "lg:-ml-12" : "lg:-mr-12"}`}
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle olive overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-colors duration-500" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y }}
        className={`w-full lg:w-[45%] ${isLeft ? "lg:pr-12" : "lg:pl-12"}`}
      >
        <span className="inline-block text-primary/60 text-xs tracking-[0.3em] uppercase font-sans mb-4">
          0{index + 1}
        </span>

        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.1] mb-6">
          {feature.title}
        </h3>

        <p className="text-muted-foreground font-sans leading-relaxed max-w-md">
          {feature.description}
        </p>

        <div className="mt-8 w-16 h-px bg-primary/30" />
      </motion.div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <span className="inline-block text-primary text-xs tracking-[0.3em] uppercase font-sans mb-6">
            Amenities
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] max-w-2xl">
            Every Detail, <span className="italic">Considered</span>
          </h2>
        </motion.div>

        {/* Features List */}
        <div className="space-y-24 md:space-y-32 lg:space-y-48">
          {features.map((feature, index) => (
            <FeatureItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
