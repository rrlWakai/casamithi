"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    alt: "Luxury resort infinity pool overlooking ocean",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    alt: "Elegant resort bedroom suite",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    alt: "Palm trees at sunset",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Resort spa relaxation area",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    alt: "Tropical resort exterior",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    alt: "Resort poolside cabanas",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    alt: "Fine dining restaurant setting",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200&q=80",
    alt: "Ocean view from resort villa",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    alt: "Resort garden pathway",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    alt: "Private beach sunset",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80",
    alt: "Luxury resort lobby",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    alt: "Resort bathroom amenities",
  },
];

function GalleryImage({
  src,
  alt,
  className = "",
  parallaxSpeed = 0.5,
}: {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [50 * parallaxSpeed, -50 * parallaxSpeed],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ y }}
      className={`relative overflow-hidden group ${className}`}
    >
      <motion.div style={{ scale }} className="w-full h-full">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
      </motion.div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 lg:py-48 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-1600px mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 px-2 md:px-4"
        >
          <span className="inline-block text-primary text-xs tracking-[0.3em] uppercase font-sans mb-6">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] max-w-2xl">
            A Visual <span className="italic">Journey</span>
          </h2>
        </motion.div>

        {/* Desktop Editorial Grid - Asymmetrical Masonry (No Overlapping) */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {/* Row 1 */}
          <GalleryImage
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="col-span-2 row-span-2 aspect-4/3"
            parallaxSpeed={0.3}
          />
          <GalleryImage
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            className="aspect-square"
            parallaxSpeed={0.6}
          />
          <GalleryImage
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="row-span-2 aspect-3/4"
            parallaxSpeed={0.8}
          />

          {/* Row 2 */}
          <GalleryImage
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="aspect-square"
            parallaxSpeed={0.4}
          />

          {/* Divider */}
          <div className="col-span-4 my-8 flex items-center gap-8">
            <div className="flex-1 h-px bg-primary/20" />
            <span className="text-primary/40 text-xs tracking-[0.3em] uppercase font-sans">
              Experiences
            </span>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          {/* Row 3 */}
          <GalleryImage
            src={galleryImages[5].src}
            alt={galleryImages[5].alt}
            className="aspect-4/3"
            parallaxSpeed={0.7}
          />
          <GalleryImage
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            className="col-span-2 aspect-video"
            parallaxSpeed={0.5}
          />
          <GalleryImage
            src={galleryImages[6].src}
            alt={galleryImages[6].alt}
            className="row-span-2 aspect-3/5"
            parallaxSpeed={0.4}
          />

          {/* Row 4 */}
          <GalleryImage
            src={galleryImages[7].src}
            alt={galleryImages[7].alt}
            className="col-span-2 aspect-2/1"
            parallaxSpeed={0.6}
          />
          <GalleryImage
            src={galleryImages[8].src}
            alt={galleryImages[8].alt}
            className="aspect-square"
            parallaxSpeed={0.5}
          />

          {/* Row 5 */}
          <GalleryImage
            src={galleryImages[9].src}
            alt={galleryImages[9].alt}
            className="aspect-3/4"
            parallaxSpeed={0.8}
          />
          <GalleryImage
            src={galleryImages[10].src}
            alt={galleryImages[10].alt}
            className="col-span-2 row-span-2 aspect-square"
            parallaxSpeed={0.3}
          />
          <GalleryImage
            src={galleryImages[11].src}
            alt={galleryImages[11].alt}
            className="aspect-4/5"
            parallaxSpeed={0.6}
          />
        </div>

        {/* Tablet Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 max-w-4xl mx-auto">
          <GalleryImage
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="col-span-2 aspect-video"
            parallaxSpeed={0.3}
          />
          <GalleryImage
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            className="aspect-square"
            parallaxSpeed={0.5}
          />
          <GalleryImage
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="row-span-2 aspect-3/4"
            parallaxSpeed={0.6}
          />
          <GalleryImage
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="aspect-4/3"
            parallaxSpeed={0.4}
          />
          <GalleryImage
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            className="col-span-2 aspect-2/1"
            parallaxSpeed={0.5}
          />
          <GalleryImage
            src={galleryImages[5].src}
            alt={galleryImages[5].alt}
            className="aspect-square"
            parallaxSpeed={0.7}
          />
          <GalleryImage
            src={galleryImages[6].src}
            alt={galleryImages[6].alt}
            className="aspect-3/4"
            parallaxSpeed={0.4}
          />
          <GalleryImage
            src={galleryImages[7].src}
            alt={galleryImages[7].alt}
            className="col-span-2 aspect-video"
            parallaxSpeed={0.6}
          />
        </div>

        {/* Mobile Grid */}
        <div className="grid md:hidden grid-cols-1 gap-4 max-w-lg mx-auto">
          <GalleryImage
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="aspect-4/3"
            parallaxSpeed={0.3}
          />
          <div className="grid grid-cols-2 gap-4">
            <GalleryImage
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              className="aspect-square"
              parallaxSpeed={0.5}
            />
            <GalleryImage
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="aspect-square"
              parallaxSpeed={0.4}
            />
          </div>
          <GalleryImage
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="aspect-3/4"
            parallaxSpeed={0.6}
          />
          <GalleryImage
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            className="aspect-video"
            parallaxSpeed={0.5}
          />
          <div className="grid grid-cols-2 gap-4">
            <GalleryImage
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              className="aspect-3/4"
              parallaxSpeed={0.7}
            />
            <GalleryImage
              src={galleryImages[6].src}
              alt={galleryImages[6].alt}
              className="aspect-3/4"
              parallaxSpeed={0.4}
            />
          </div>
          <GalleryImage
            src={galleryImages[7].src}
            alt={galleryImages[7].alt}
            className="aspect-4/3"
            parallaxSpeed={0.6}
          />
        </div>
      </div>
    </section>
  );
}
