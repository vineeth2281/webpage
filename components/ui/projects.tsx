"use client";

import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Scalable Image Annotation Pipeline",
    tech: ["Python", "Linux", "AWS (EC2, RDS, S3, ASG, VPC, Lambda, Load Balancer)", "Flask"],
    points: [
      "Architected a scalable image annotation system on AWS using Flask and EC2; implemented Auto Scaling Groups (ASG) and Elastic Load Balancing (ELB) to handle real-time processing and dynamic traffic spike."
    ]
  },
  {
    title: "Let’s Meet",
    tech: ["WebRTC", "RASA", "Firebase", "HTML", "TypeScript"],
    points: [
      "Built web meeting platform using WebRTC, integrating chatbot using RASA framework for student support. Leveraged Firebase for low-latency data synchronization and GraphQL for efficient state management, ensuring a secure and responsive user experience."
    ]
  },
  {
    title: "AI-Wizard-DocxQ",
    tech: ["Python", "OpenAI", "Natural Language Processing", "Streamlit"],
    points: [
      "Developed RAG-based document analysis tool using LangChain and OpenAI LLMs to perform semantic queries across CSV, PDF, and TXT formats. Implemented vector embeddings and semantic retrieval pipelines for both structured and unstructured data."
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Projects
            </h2>
            <div className="h-1 w-20 bg-slate-900 dark:bg-white mx-auto rounded-full opacity-20"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-300/50 dark:hover:border-indigo-700/50"
            >
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700">
                                {t}
                            </span>
                        ))}
                    </div>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.points.map((point, i) => (
                            <li key={i} className="flex gap-2">
                                <span className="text-indigo-400 mt-1 shrink-0">✦</span>
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
