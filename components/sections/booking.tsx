"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Booking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section
      id="booking"
      className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-accent"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-foreground/60 text-xs tracking-[0.3em] uppercase font-sans mb-6">
            Reservations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-accent-foreground leading-[1.1] mb-6">
            Reserve Your <span className="italic">Private Escape</span>
          </h2>
          <p className="text-accent-foreground/80 font-sans max-w-lg mx-auto leading-relaxed">
            Begin your journey to tranquility. Select your dates and let us
            prepare your sanctuary.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-end"
        >
          {/* Check In */}
          <div className="flex-1 w-full">
            <label className="block text-accent-foreground/60 text-xs tracking-wider uppercase font-sans mb-3">
              Check In
            </label>
            <input
              title="dates"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-6 py-4 bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground font-sans text-sm focus:outline-none focus:border-accent-foreground/40 transition-colors placeholder:text-accent-foreground/40"
              style={{ colorScheme: "dark" }}
            />
          </div>

          {/* Check Out */}
          <div className="flex-1 w-full">
            <label className="block text-accent-foreground/60 text-xs tracking-wider uppercase font-sans mb-3">
              Check Out
            </label>
            <input
              title="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-6 py-4 bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground font-sans text-sm focus:outline-none focus:border-accent-foreground/40 transition-colors placeholder:text-accent-foreground/40"
              style={{ colorScheme: "dark" }}
            />
          </div>

          {/* Guests */}
          <div className="flex-1 w-full">
            <label className="block text-accent-foreground/60 text-xs tracking-wider uppercase font-sans mb-3">
              Guests
            </label>
            <select
              title="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-6 py-4 bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground font-sans text-sm focus:outline-none focus:border-accent-foreground/40 transition-colors appearance-none cursor-pointer"
              style={{ colorScheme: "dark" }}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6+ Guests</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full lg:w-auto px-12 py-4 bg-accent-foreground text-accent text-sm tracking-wider uppercase font-sans hover:bg-accent-foreground/90 transition-colors whitespace-nowrap"
          >
            Book Now
          </button>
        </motion.form>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-accent-foreground/50 text-xs tracking-wider uppercase font-sans"
        >
          <span>Flexible Cancellation</span>
          <span className="hidden md:block">•</span>
          <span>Best Rate Guarantee</span>
          <span className="hidden md:block">•</span>
          <span>Concierge Service</span>
        </motion.div>
      </div>
    </section>
  );
}
