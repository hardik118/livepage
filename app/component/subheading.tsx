"use client";

import { Josefin_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "100" });

const words = ["Capitals", "Investment","Quant"];

export default function SubHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="uppercase relative w-[30rem] h-[5rem] overflow-hidden flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={`${josefin.className} text-7xl tracking-wide absolute`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
