"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const rooms = [
  {
    name: "The Garden Suite",
    description: "Ground-floor elegance with private terrace",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
    details: ["King Bed", "Garden View", "En-suite Bath"],
  },
  {
    name: "The Pool Pavilion",
    description: "Direct pool access and panoramic views",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
    details: ["Queen Bed", "Pool Access", "Outdoor Shower"],
  },
  {
    name: "The Master Villa",
    description: "Our most spacious retreat with full amenities",
    image:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80",
    details: ["King Bed", "Living Area", "Private Terrace"],
  },
];

function RoomCard({ room, index }: { room: (typeof rooms)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ y: index % 2 === 0 ? y : undefined }}
      className="group"
    >
      <motion.div
        style={{ scale }}
        className="relative aspect-3/4 overflow-hidden mb-6"
      >
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
      </motion.div>

      <div className="space-y-3">
        <h3 className="font-serif text-xl md:text-2xl text-foreground">
          {room.name}
        </h3>
        <p className="text-muted-foreground font-sans text-sm">
          {room.description}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
          {room.details.map((detail) => (
            <span
              key={detail}
              className="text-primary/70 text-xs tracking-wider uppercase font-sans"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Rooms() {
  return (
    <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-muted">
      <div className="max-w-1600px mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="inline-block text-primary text-xs tracking-[0.3em] uppercase font-sans mb-6">
              Accommodations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1]">
              Rest in <span className="italic">Refinement</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-sans max-w-md leading-relaxed">
            Each space has been designed with intention, balancing comfort with
            aesthetic beauty.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {rooms.map((room, index) => (
            <RoomCard key={room.name} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
