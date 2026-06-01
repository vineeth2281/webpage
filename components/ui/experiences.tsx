"use client";

import React from "react";
import { motion } from "framer-motion";

const experiencesData = [
  {
    role: "Software Engineer",
    company: "Block Majority",
    location: "Sydney",
    date: "Jun 2025 – Nov 2025",
    points: [
      "Worked on MCP client and server development, ensuring efficient API integration and authentications to orchestrate blockchain transactions on private chains (DAS) with cross chain settlement using agents, binding on-chain/off-chain components like FX checks.",
      "Developed dynamic rules engine for interface to set rules in natural language and execute them smoothly, worked on frontend chat interface enhancements and configured VM’s env, CI/CD pipelines (GCP) for automated deployment with docker containers.",
      "Developed an immutable audit layer on private blockchain networks to securely record agentic decisions, ensuring traceability compliance, and system transparency."
    ]
  },
  {
    role: "Data Scientist Intern",
    company: "Vively",
    location: "Sydney",
    date: "Jun 2024 – Sep 2024",
    points: [
      "Increased DAU by 18%, by assisting in developing users facing food intake logging feature, eliminating manual logging flow with LLM and RAG for meta data retrieval, worked on time-series models with CGM data points and deployed (AWS) for testing.",
      "Enhanced search and retrieval performance by optimizing queries, worked on prompt optimization frameworks to enhance model output and trial tested meta prompt guard to secure LLM inputs from prompt injection attacks."
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Jain University",
    location: "Bengaluru",
    date: "Aug 2022 – Feb 2023",
    points: [
      "Reduced inference cost by 22% by redesigning BERT attention using hybrid convolution blocks heads and contributed to Gazebo simulation modeling and evaluated reinforcement learning control policies for motion control of a 6-DOF robotic arm."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Zebo.AI",
    location: "Bengaluru",
    date: "May 2021 – Nov 2021",
    points: [
      "Worked on internal metrics dashboard feature and involved in development of U-Net for lesion segmentation and severity scoring. Implemented skin-masking algorithms and mapped pixel data to the CIELAB color space to determine skin undertones.",
      "Partnered cross-functionally to design backend infrastructure for high traffic and ML pipeline, also assisted PMs in drafting (PRDs)."
    ]
  }
];

export const Experiences = () => {
  return (
    <section id="experiences" className="py-24 bg-slate-50 dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Experience
            </h2>
            <div className="h-1 w-20 bg-slate-900 dark:bg-white mx-auto rounded-full opacity-20"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-black bg-slate-400 dark:bg-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:bg-slate-900 dark:group-hover:bg-white">
                 <div className="w-2 h-2 bg-white dark:bg-black rounded-full" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group-hover:border-slate-300 dark:group-hover:border-slate-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{exp.role}</h3>
                        <div className="text-lg font-medium text-slate-600 dark:text-slate-400 mt-1">{exp.company} <span className="opacity-50">|</span> {exp.location}</div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 shrink-0">
                        {exp.date}
                    </span>
                </div>
                <ul className="space-y-3 mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                        <span className="text-slate-400 dark:text-slate-500 mt-1.5 shrink-0">✦</span>
                        <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
