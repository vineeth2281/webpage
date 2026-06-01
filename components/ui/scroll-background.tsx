"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  // Scroll animations for various gradient orbs

  // Orb 1: Top left moving down and right
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "50%"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 0.3]);

  // Orb 2: Bottom right moving up and left
  const y2 = useTransform(scrollYProgress, [0, 1], ["110%", "30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["110%", "60%"]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.5]);

  // Orb 3: Center moving expanding and fading
  const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.5, 2]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50 dark:bg-black transition-colors duration-500">

      {/* Orb 1: Purple / Indigo */}
      <motion.div
        style={{
          y: y1,
          x: x1,
          scale: scale1,
          opacity: opacity1,
        }}
        className="absolute top-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] bg-indigo-300/40 dark:bg-indigo-900/40"
      />

      {/* Orb 2: Teal / Emerald */}
      <motion.div
        style={{
          y: y2,
          x: x2,
          scale: scale2,
          opacity: opacity2,
        }}
        className="absolute bottom-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] bg-teal-200/40 dark:bg-teal-900/30"
      />

      {/* Orb 3: Rose / Pink */}
      <motion.div
        style={{
          top: "30%",
          left: "20%",
          scale: scale3,
          opacity: opacity3,
        }}
        className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] bg-rose-200/30 dark:bg-rose-900/30"
      />

      {/* Optional: Subtle grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

    </div>
  );
};
