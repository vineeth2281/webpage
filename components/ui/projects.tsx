"use client";

import React from "react";
import { motion } from "framer-motion";
import { playfairDisplay, inter } from "@/lib/fonts";

const projectsData = [
  {
    title: "Scalable Image Annotation Pipeline",
    points: [
      "Architected a scalable image annotation system on AWS using Flask and EC2; implemented Auto Scaling Groups (ASG) and Elastic Load Balancing (ELB) to handle real-time processing and dynamic traffic spike."
    ],
    github: "#"
  },
  {
    title: "Let’s Meet",
    points: [
      "Built web meeting platform using WebRTC, integrating chatbot using RASA framework for student support. Leveraged Firebase for low-latency data synchronization and GraphQL for efficient state management, ensuring a secure and responsive user experience."
    ],
    github: "#"
  },
  {
    title: "AI-Wizard-DocxQ",
    points: [
      "Developed RAG-based document analysis tool using LangChain and OpenAI LLMs to perform semantic queries across CSV, PDF, and TXT formats. Implemented vector embeddings and semantic retrieval pipelines for both structured and unstructured data."
    ],
    github: "#"
  },
  {
    title: "Scene to Context",
    points: [
      "Engineered a captioning system integrating YOLO with ResNet50 for streamlined image comprehension. Implemented an RNN leveraging Bayesian theorem for accurate sentence generation, resulting in a BLEU Score validation accuracy of 68%."
    ],
    github: "#"
  },
  {
    title: "Image Segmentation on CamVid",
    points: [
      "Researched and implemented variants of U-Net models for semantic segmentation on the CamVid dataset. Achieved a validation accuracy of 89.60% across 57 epochs using an Extended U-Net model with 31 million parameters."
    ],
    github: "#"
  },
  {
    title: "LC50 Toxicity Prediction (QSAR)",
    points: [
      "Developed quantitative regression QSAR models using Neural Networks to predict LC50 values for acute aquatic toxicity. Utilized a dataset of 908 chemicals and six molecular descriptors to enhance prediction accuracy."
    ],
    github: "#"
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
            <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 ${playfairDisplay.className}`}>
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
                    <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-4 ${inter.className}`}>
                        {project.title}
                    </h3>
                    <ul className={`space-y-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 ${inter.className}`}>
                        {project.points.map((point, i) => (
                            <li key={i} className="flex gap-2">
                                <span className="text-indigo-500 dark:text-indigo-400 mt-1 shrink-0">✦</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mt-auto"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            View on GitHub
                        </a>
                    )}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
