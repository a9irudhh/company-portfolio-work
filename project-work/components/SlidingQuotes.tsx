"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "The sun is the world's next power source.",
  "Go green, go solar.",
  "Harness the power of the sun.",
  "The future is bright, the future is solar.",
];

export function SlidingQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="absolute w-full text-center"
        >
          <p className="text-lg italic text-green-800">{quotes[index]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
