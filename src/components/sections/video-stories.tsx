"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
    caption: "Golden morning light and calm ocean views.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    title: "Private Dining",
    caption: "Romantic dinner under the stars.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
    title: "Garden Walk",
    caption: "Peaceful tropical pathways.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

// =====================
// 🎬 CARD
// =====================
function VideoCard({
  story,
  onClick,
}: {
  story: VideoStory;
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      className="relative w-86 h-130 rounded-none cursor-pointer group"
    >
      {/* Image */}
      <img
        src={story.thumbnail}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

      {/* Play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 border border-white flex items-center justify-center">
          <span className="text-white text-sm ml-1">▶</span>
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <h3 className="text-sm font-medium">{story.title}</h3>
      </div>
    </motion.div>
  );
}

// =====================
// 🎥 MODAL
// =====================
function VideoModal({
  story,
  onClose,
}: {
  story: VideoStory;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-xl"
      >
        ✕
      </button>

      {/* Video */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="w-full max-w-lg h-[80vh] "
      >
        <video
          src={story.videoUrl}
          autoPlay
          loop
          controls
          className="w-full h-full object-cover"
        />

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent text-white">
          <h2 className="text-base font-semibold">{story.title}</h2>
          <p className="text-xs opacity-80">{story.caption}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// =====================
// 🎞 MAIN
// =====================
export function VideoStories() {
  const [selectedStory, setSelectedStory] = useState<VideoStory | null>(null);

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 px-6">
          <span className="text-s tracking-widest uppercase text-gray-500">
            Stories
          </span>
          <h2 className="text-4xl font_regular mt-8">
            Moments <span className="italic">Captured</span>
          </h2>
        </div>

        {/* SCROLL */}
        <div className="relative">
          <div className="flex gap-5 px-6  scrollbar-hidden">
            {videoStories.map((story) => (
              <VideoCard
                key={story.id}
                story={story}
                onClick={() => setSelectedStory(story)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
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
