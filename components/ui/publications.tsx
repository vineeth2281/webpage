"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { playfairDisplay, inter } from "@/lib/fonts";

const publicationsData = [
  {
    title: "A Proposed Chatbot Psykh Your Personal Therapist and Stress Buster Using RASA Open-Source Framework",
    publisher: "IEEE Xplore, OTCON-2023 Conference, India",
    metrics: "280+ reads, 6 Citations"
  }
];

export const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
        >
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 ${playfairDisplay.className}`}>
                Publications
            </h2>
            <div className="h-1 w-20 bg-slate-900 dark:bg-white mx-auto rounded-full opacity-20"></div>
        </motion.div>

        <div className="space-y-6">
          {publicationsData.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:shadow-xl hover:border-teal-300/50 dark:hover:border-teal-700/50"
            >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 shrink-0">
                    <BookOpen size={28} />
                </div>

                <div className="flex-1">
                    <h3 className={`text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-snug ${inter.className}`}>
                        {pub.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-3">
                        {pub.publisher}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                        {pub.metrics}
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
