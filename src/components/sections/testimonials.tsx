"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Casa Mithi redefined what luxury means to us. The attention to detail, the serene atmosphere — it was an escape in every sense.",
    author: "Alexandra M.",
    location: "London, UK",
  },
  {
    quote:
      "We celebrated our anniversary here and it exceeded every expectation. The privacy, the beauty, the impeccable service.",
    author: "James & Sarah T.",
    location: "New York, USA",
  },
  {
    quote:
      "A hidden gem that feels like your own private paradise. We have found our new sanctuary.",
    author: "Marie L.",
    location: "Paris, France",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <span className="inline-block text-primary text-xs tracking-[0.3em] uppercase font-sans mb-6">
            Guest Reflections
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1]">
            Words from <span className="italic">Our Guests</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Quote mark */}
              <span className="absolute -top-8 -left-2 text-primary/20 text-7xl font-serif leading-none">
                &ldquo;
              </span>

              <blockquote className="relative">
                <p className="text-foreground font-serif text-lg md:text-xl leading-relaxed mb-8 italic">
                  {testimonial.quote}
                </p>

                <footer className="flex items-center gap-4">
                  <div className="w-8 h-px bg-primary/40" />
                  <div>
                    <cite className="not-italic text-foreground font-sans text-sm font-medium">
                      {testimonial.author}
                    </cite>
                    <p className="text-muted-foreground text-xs tracking-wider uppercase mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
