"use client";

import { motion } from "framer-motion";

const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoos-qWlhceyY4ausN9V3QBgAZCKedNFCkc.jpg";

export function Footer() {
  return (
    <footer className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-primary">
      <div className="max-w-[1600px] mx-auto">
        {/* Large Circular Logo Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16 md:mb-24"
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
            <img
              src={LOGO_URL}
              alt="Casa Mithi - Private Villas Resort"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Description */}
          <div className="lg:col-span-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-foreground/80 font-sans text-sm leading-relaxed max-w-xs"
            >
              A private villa resort where luxury meets serenity. Your sanctuary
              in paradise awaits.
            </motion.p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground text-xs tracking-[0.2em] uppercase font-sans mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-primary-foreground/70 font-sans text-sm">
              <li>
                <a
                  href="tel:09176564844"
                  className="hover:text-primary-foreground transition-colors"
                >
                  0917 65 MITHI (64844)
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservations@casamithi.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  reservations@casamithi.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-primary-foreground/60">
                  Google Maps or Waze Pin:
                  <br />
                  Casa Mithi Private Villas Resort
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground text-xs tracking-[0.2em] uppercase font-sans mb-6">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 text-primary-foreground/70 font-sans text-sm">
              <li>
                <a href="#" className="relative group inline-block">
                  <span className="hover:text-primary-foreground transition-colors">
                    Home
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#about" className="relative group inline-block">
                  <span className="hover:text-primary-foreground transition-colors">
                    Experience
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#gallery" className="relative group inline-block">
                  <span className="hover:text-primary-foreground transition-colors">
                    Gallery
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#stories" className="relative group inline-block">
                  <span className="hover:text-primary-foreground transition-colors">
                    Stories
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#booking" className="relative group inline-block">
                  <span className="hover:text-primary-foreground transition-colors">
                    Reservations
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-primary-foreground text-xs tracking-[0.2em] uppercase font-sans mb-6">
              Follow
            </h4>
            <ul className="flex flex-col gap-3 text-primary-foreground/70 font-sans text-sm">
              <li>
                <a href="#" className="relative group inline-block">
                  <span className="hover:text-primary-foreground transition-colors">
                    Instagram
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#" className="relative group inline-block">
                  <span className="hover:text-primary-foreground transition-colors">
                    Facebook
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#" className="relative group inline-block">
                  <span className="hover:text-primary-foreground transition-colors">
                    TikTok
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-xs tracking-wider font-sans">
            &copy; {new Date().getFullYear()} Casa Mithi Private Villas Resort.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-primary-foreground/50 text-xs tracking-wider font-sans">
            <a href="#" className="relative group inline-block">
              <span className="hover:text-primary-foreground/80 transition-colors">
                Privacy Policy
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground/50 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative group inline-block">
              <span className="hover:text-primary-foreground/80 transition-colors">
                Terms of Service
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground/50 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
