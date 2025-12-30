import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hero1 from "../assets/hero-1.png";
import Hero2 from "../assets/hero-2.png";
import Hero3 from "../assets/hero-3.png";

const slides = [
  {
    image: Hero1,
    title: "Advanced Security Solutions",
    subtitle: "Protecting homes & businesses with smart CCTV systems",
  },
  {
    image: Hero2,
    title: "24/7 Monitoring & Protection",
    subtitle: "Stay in control from anywhere, anytime",
  },
  {
    image: Hero3,
    title: "Professional Installation",
    subtitle: "Reliable, scalable, and future-proof security",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <img
            src={slides[index].image}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <motion.h1
            key={`title-${index}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            {slides[index].title}
          </motion.h1>

          <motion.p
            key={`subtitle-${index}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl mb-8 text-brand-gray max-w-xl"
          >
            {slides[index].subtitle}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-brand-primary hover:bg-brand-secondary text-black font-bold px-8 py-4 rounded transition"
          >
            Get a Free Quote
          </motion.button>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-brand-primary text-white hover:text-black transition"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-brand-primary text-white hover:text-black transition"
      >
        ›
      </button>
    </section>
  );
}
