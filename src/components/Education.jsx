import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  const educations = resumeData.education;

  // Icon selector based on the string key
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap className="h-5 w-5" />;
      case 'book-open':
        return <BookOpen className="h-5 w-5" />;
      case 'school':
        return <School className="h-5 w-5" />;
      default:
        return <GraduationCap className="h-5 w-5" />;
    }
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Academic <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="h-1.5 w-16 bg-sky-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Education Timeline Map */}
        <div className="max-w-4xl mx-auto">
          {educations.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 pb-10 border-l border-sky-400/20 last:pb-0">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-3.5 top-1 p-1 rounded-full bg-[#0F172A] border border-sky-400 text-sky-400 shadow-lg">
                {getIcon(edu.icon)}
              </div>

              {/* Education block details */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 text-left shadow-xl hover:scale-[1.01] transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-50">{edu.institution}</h3>
                    <p className="text-sm font-semibold text-sky-400 mt-0.5">{edu.degree}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-400 bg-slate-900/50 border border-slate-800 self-start sm:self-center">
                    <Calendar className="h-3.5 w-3.5 text-sky-400" />
                    {edu.duration}
                  </div>
                </div>

                {/* Score highlight indicator */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-400/30 text-white font-extrabold mb-5 shadow-inner">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">{edu.gradeType}: <span className="text-sky-400 text-lg">{edu.grade}</span></span>
                </div>

                {/* Bullet highlights */}
                <ul className="space-y-3">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-sm text-slate-300 flex items-start gap-3 bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                      <div className="mt-0.5 p-1 rounded-full bg-sky-400/10 text-sky-400">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
