"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface VideoStory {
  id: number;
  thumbnail: string;
  title: string;
  caption: string;
  videoUrl: string;
}

const videoStories: VideoStory[] = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    title: "Sunrise at the Villa",
    caption:
      "Wake up to breathtaking views as the golden light illuminates our infinity pool and the surrounding tropical paradise.",
    videoUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=90",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    title: "Intimate Dining",
    caption:
      "Experience our chef's curated tasting menu served on your private terrace under the stars.",
    videoUrl:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=90",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
    title: "Tropical Gardens",
    caption:
      "Stroll through our meticulously maintained gardens featuring rare orchids and century-old palm trees.",
    videoUrl:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=90",
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    title: "Spa Rituals",
    caption:
      "Indulge in traditional healing treatments using locally sourced ingredients and ancient techniques.",
    videoUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=90",
  },
  {
    id: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    title: "Evening Ambiance",
    caption:
      "As the sun sets, the villa transforms into an intimate sanctuary lit by lanterns and candlelight.",
    videoUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=90",
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    title: "Pool Retreat",
    caption:
      "Take a refreshing dip in our pristine pool surrounded by lush tropical foliage.",
    videoUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=90",
  },
];

function VideoCard({
  story,
  isFeatured = false,
  onClick,
}: {
  story: VideoStory;
  isFeatured?: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative flex-shrink-0 overflow-hidden cursor-pointer ${
        isFeatured
          ? "w-[280px] md:w-[320px] lg:w-[380px] h-[420px] md:h-[480px] lg:h-[570px]"
          : "w-[200px] md:w-[240px] lg:w-[280px] h-[300px] md:h-[360px] lg:h-[420px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={story.thumbnail}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      />

      {/* Olive Overlay on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-primary/30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

      {/* Play Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div
          className={`flex items-center justify-center border-2 border-primary-foreground/80 ${
            isFeatured
              ? "w-16 h-16 md:w-20 md:h-20"
              : "w-12 h-12 md:w-14 md:h-14"
          }`}
        >
          <svg
            className={`text-primary-foreground ml-1 ${
              isFeatured ? "w-6 h-6 md:w-8 md:h-8" : "w-4 h-4 md:w-6 md:h-6"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <h3
          className={`font-serif text-primary-foreground ${
            isFeatured
              ? "text-lg md:text-xl lg:text-2xl mb-2"
              : "text-sm md:text-base lg:text-lg"
          }`}
        >
          {story.title}
        </h3>
        {isFeatured && (
          <p className="text-primary-foreground/80 text-xs md:text-sm leading-relaxed line-clamp-2">
            {story.caption}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function VideoModal({
  story,
  onClose,
}: {
  story: VideoStory;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-lg max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-primary-foreground hover:opacity-70 transition-opacity"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video Container - Vertical aspect ratio */}
        <div className="relative aspect-[9/16] bg-foreground">
          <img
            src={story.videoUrl}
            alt={story.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 flex items-center justify-center border-2 border-primary-foreground/80">
              <svg
                className="w-8 h-8 text-primary-foreground ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Story Info */}
        <div className="p-4 md:p-6 bg-background">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
            {story.title}
          </h3>
          <p className="text-muted-foreground font-sans text-sm leading-relaxed">
            {story.caption}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function VideoStories() {
  const [selectedStory, setSelectedStory] = useState<VideoStory | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="stories"
      ref={containerRef}
      className="py-24 md:py-32 lg:py-48 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 px-6 md:px-12"
        >
          <span className="inline-block text-primary text-xs tracking-[0.3em] uppercase font-sans mb-6">
            Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] max-w-2xl">
            Moments <span className="italic">Captured</span>
          </h2>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Stories Track */}
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-8 px-6 md:px-12 pb-4"
          >
            {/* Featured Story */}
            <VideoCard
              story={videoStories[0]}
              isFeatured={true}
              onClick={() => setSelectedStory(videoStories[0])}
            />

            {/* Other Stories */}
            {videoStories.slice(1).map((story) => (
              <VideoCard
                key={story.id}
                story={story}
                onClick={() => setSelectedStory(story)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedStory && (
          <VideoModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
