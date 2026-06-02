import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Brain, HelpCircle, BookOpen, Check, Languages } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const { programmingLanguages, web, databases, softSkills } = resumeData.skills;

  const categories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-5 w-5 text-sky-400" />,
      skills: programmingLanguages,
    },
    {
      title: 'Web & Frameworks',
      icon: <Globe className="h-5 w-5 text-sky-400" />,
      skills: web,
    },
    {
      title: 'Databases',
      icon: <Database className="h-5 w-5 text-sky-400" />,
      skills: databases,
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1.5 w-16 bg-sky-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Technical Skills Meters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2 pb-3 border-b border-white/5">
                {cat.icon}
                {cat.title}
              </h3>
              
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2 text-left">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-slate-50">{skill.name}</span>
                    </div>
                    {/* Meter bar wrapper */}
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-sky-400 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Currently Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Soft Skills */}
            <div className="lg:col-span-7 dark-only-card p-6 rounded-2xl border border-slate-800/60 text-left">
              <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2 pb-3 border-b border-slate-800/40 mb-6">
                <Brain className="h-5 w-5 text-sky-400" />
                Core Competencies & Soft Skills
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                {softSkills.map((skill, idx) => {
                  // keep all values in the 80-100 range
                  const percent = Math.max(80, 100 - idx * 4);
                  const circumference = 2 * Math.PI * 28; // r=28
                  const dash = circumference;
                  const offset = circumference - (circumference * percent) / 100;
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="competency-label text-sm font-semibold text-slate-200 mb-3 whitespace-nowrap text-center">{skill}</span>

                      <div className="relative w-20 h-20">
                        <svg viewBox="0 0 64 64" className="w-20 h-20">
                          <circle cx="32" cy="32" r="28" strokeWidth="6" fill="transparent" className="donut-bg" />
                          <motion.circle
                            cx="32"
                            cy="32"
                            r="28"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray={dash}
                            strokeDashoffset={dash}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.06 }}
                            strokeLinecap="round"
                            className="donut-fg"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-medium text-slate-300">{percent}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
          {/* Languages Container */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Language Proficiency */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-left">
              <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2 pb-3 border-b border-white/5 mb-4">
                <Languages className="h-5 w-5 text-sky-400" />
                Spoken Languages
              </h3>
              <div className="space-y-3.5">
                {[
                  { name: "English", level: 4 },
                  { name: "Telugu", level: 5 },
                  { name: "Hindi", level: 3 },
                  { name: "Tamil", level: 2 }
                ].map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">{lang.name}</span>
                    <div className="flex gap-1.5 items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            i < lang.level
                              ? 'bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.35)]'
                              : 'bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
