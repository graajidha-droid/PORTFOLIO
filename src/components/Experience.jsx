import React from 'react';
import { Briefcase, Calendar, CheckSquare, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  const experiences = resumeData.experience;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1.5 w-16 bg-sky-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 pb-8 border-l border-sky-400/20 last:pb-0">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-3.5 top-1.5 p-1 rounded-full bg-[#0F172A] border border-sky-400 text-sky-400 shadow-lg">
                <Briefcase className="h-5 w-5 animate-pulse-slow" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl hover:scale-[1.01] transition-transform duration-300">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-50">{exp.role}</h3>
                    <p className="text-base font-semibold text-sky-400 mt-0.5">{exp.company}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-400 bg-slate-900/50 border border-slate-800 self-start sm:self-center">
                    <Calendar className="h-3.5 w-3.5 text-sky-400" />
                    {exp.duration}
                  </div>
                </div>

                {/* Subtext description */}
                <p className="text-sm text-slate-400 text-left mb-6 leading-relaxed italic">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-3.5 text-left mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckSquare className="h-4.5 w-4.5 text-sky-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-sky-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Stack Applied</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
