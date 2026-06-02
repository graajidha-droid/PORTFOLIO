import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Database } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const allProjects = resumeData.projects;
  const filteredProjects = allProjects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1.5 w-16 bg-sky-400 rounded-full mx-auto mt-3" />
        </div>


        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card rounded-2xl border border-white/5 shadow-xl hover:shadow-2xl hover:border-sky-400/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Thumbnail Area */}
                <div className="h-40 w-full relative overflow-hidden bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-purple-600/20 mix-blend-overlay"></div>
                  {project.category === 'AI/ML' ? (
                    <Cpu className="h-16 w-16 text-sky-400/50 group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <Database className="h-16 w-16 text-purple-400/50 group-hover:scale-110 transition-transform duration-500" />
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white bg-slate-900/80 backdrop-blur-sm border border-white/10 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Upper banner */}
                <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400" />
                
                <div className="p-6 sm:p-7 text-left space-y-5 flex-grow">
                  {/* Title & description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-50 group-hover:text-sky-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2.5 leading-relaxed font-sans min-h-[72px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Features Bullet List */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">Key Features</span>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 flex-shrink-0 mt-1" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-bold text-sky-300 bg-sky-400/10 border border-sky-400/20 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 bg-slate-900/50 border-t border-white/5 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white bg-slate-800 border border-slate-700 hover:border-sky-400 shadow-lg transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300"
                    >
                      Live Demo <ExternalLink className="h-4.5 w-4.5 ml-2" />
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
