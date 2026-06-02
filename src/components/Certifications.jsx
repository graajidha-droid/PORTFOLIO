import React, { useState } from 'react';
import { Award, CheckCircle2, X, Eye, Calendar, Award as ScoreIcon } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Certifications() {
  const certifications = resumeData.certifications;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Licenses & <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="h-1.5 w-16 bg-sky-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => {
            const hasImage = !!cert.image;
            return (
              <div
                key={idx}
                onClick={() => hasImage && setSelectedCert(cert)}
                className={`glass-card p-6 rounded-2xl border border-white/5 text-left flex flex-col justify-between transition-all duration-300 group select-none ${
                  hasImage 
                    ? 'hover:border-sky-400/40 hover:-translate-y-1.5 cursor-pointer hover:shadow-2xl hover:shadow-sky-400/5' 
                    : 'opacity-85'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon and Hover View Action */}
                  <div className="flex justify-between items-center">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 w-11 h-11 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-5 w-5" />
                    </div>
                    {hasImage && (
                      <span className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-[10px] font-bold text-sky-400 bg-sky-400/10 border border-sky-400/20 px-2 py-0.5 rounded-full transition-opacity duration-300">
                        <Eye className="h-3 w-3" />
                        Preview
                      </span>
                    )}
                  </div>

                  {/* Title and Issuer */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-50 group-hover:text-sky-400 transition-colors duration-300 line-clamp-2 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Dynamic Meta Info */}
                  <div className="space-y-1.5 pt-2">
                    {cert.date && cert.date !== 'N/A' && (
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                        <Calendar className="h-3.5 w-3.5 text-slate-500" />
                        <span>Issued: {cert.date}</span>
                      </div>
                    )}
                    {cert.score && !String(cert.title).toLowerCase().includes('step') && (
                      <div className="flex items-center gap-1.5 text-[11px] text-sky-400 font-semibold bg-sky-400/5 py-1 px-2 rounded-lg border border-sky-400/10">
                        <ScoreIcon className="h-3.5 w-3.5" />
                        <span>Score: {cert.score}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status indicator */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-sky-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Verified Credentials</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Lightbox Overlay Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedCert(null)}
          >
            {/* Modal Box */}
            <div 
              className="relative max-w-4xl w-full glass-card p-3 sm:p-4 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center gap-4 bg-slate-900/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close FAB */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-400 shadow-xl transition-all duration-300"
                aria-label="Close Preview"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Certificate Image Frame */}
              <div className="w-full rounded-2xl overflow-hidden bg-slate-950/50 border border-white/5 p-1">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl select-none"
                />
              </div>

              {/* Title & Metadata Card Footer */}
              <div className="w-full text-left p-3 sm:p-4 bg-slate-950/40 rounded-2xl border border-white/5 space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-slate-50">{selectedCert.title}</h4>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
                  <span>Issued By: <strong className="text-sky-400">{selectedCert.issuer}</strong></span>
                  {selectedCert.date && <span>Date: {selectedCert.date}</span>}
                  {selectedCert.id && <span>Credential ID: <code className="text-purple-400 font-mono text-[11px] bg-purple-500/10 px-2 py-0.5 rounded">{selectedCert.id}</code></span>}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
