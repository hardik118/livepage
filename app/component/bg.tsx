"use client";
import { motion } from "framer-motion";

export default function SilkFlow() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-no-repeat silk-texture"
        style={{ backgroundImage: "url('/bg.jpg')" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
