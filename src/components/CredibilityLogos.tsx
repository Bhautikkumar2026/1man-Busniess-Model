import React from 'react';
import { MEDIA_LOGOS } from '../data/mockData';

export const CredibilityLogos: React.FC = () => {
  return (
    <div className="w-full py-8 border-y border-slate-800/80 bg-slate-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-6">
          AS FEATURED IN & RECOGNIZED BY GLOBAL MEDIA
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {MEDIA_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 group cursor-default"
            >
              <div className="font-heading font-black text-base sm:text-lg tracking-widest text-slate-400 group-hover:text-amber-400 transition-colors">
                {logo.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
