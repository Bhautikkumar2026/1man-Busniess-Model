import React, { useEffect } from 'react';
import { useSite } from '../../context/SiteContext';
import { Sliders, Sparkles } from 'lucide-react';

export const AdminFloatingTrigger: React.FC = () => {
  const { isAdminOpen, setIsAdminOpen } = useSite();

  // Keyboard shortcut: Alt + A or Cmd + Shift + E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && e.key.toLowerCase() === 'a') || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        setIsAdminOpen(!isAdminOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdminOpen, setIsAdminOpen]);

  if (isAdminOpen) return null;

  return (
    <button
      id="floating-admin-trigger-btn"
      onClick={() => setIsAdminOpen(true)}
      className="fixed top-20 right-4 sm:right-6 z-40 group bg-slate-900/90 hover:bg-slate-900 border border-amber-500/50 hover:border-amber-400 text-amber-300 p-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
      title="Open Admin Customizer (Alt + A)"
    >
      <div className="relative">
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <Sliders className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
      </div>
      <span className="hidden sm:inline font-heading font-black text-xs tracking-wide">
        Customize Site (Admin)
      </span>
    </button>
  );
};
