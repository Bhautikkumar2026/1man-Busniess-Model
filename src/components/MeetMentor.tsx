import React from 'react';
import { Award, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface MeetMentorProps {
  onOpenModal: () => void;
}

export const MeetMentor: React.FC<MeetMentorProps> = ({ onOpenModal }) => {
  const { siteData } = useSite();
  const mentor = siteData.mentor;

  return (
    <section id="mentor" className="py-20 bg-[#090b10] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Mentor Portrait & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-amber-500/40 via-slate-800 to-amber-500/20 shadow-2xl">
              <div className="aspect-[4/5] rounded-[22px] overflow-hidden bg-slate-900 relative">
                <img
                  src={mentor.photoUrl}
                  alt={`${mentor.name} - ${mentor.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-lg">
                  <p className="font-heading font-black text-lg text-white">
                    {mentor.name}
                  </p>
                  <p className="text-xs text-amber-400 font-semibold">
                    {mentor.badge}
                  </p>
                </div>
              </div>
            </div>

            {/* Book Highlight Pill */}
            {mentor.bookTitle && (
              <div className="mt-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">International Bestselling Author</p>
                  <p className="text-slate-400">{mentor.bookTitle} — {mentor.bookSales}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Mentor Story & Accomplishments */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>MEET YOUR MENTOR</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              "{mentor.missionQuote}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                {mentor.missionHighlight}
              </span>
              "
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {mentor.bioParagraph1}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {mentor.bioParagraph2}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {mentor.stats.map((st, i) => (
                <div key={i} className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 text-center">
                  <p className="font-heading font-black text-lg sm:text-xl text-amber-400 font-mono">
                    {st.value}
                  </p>
                  <p className="text-xs font-bold text-white mt-0.5">{st.label}</p>
                  <p className="text-[10px] text-slate-500">{st.sub}</p>
                </div>
              ))}
            </div>

            {/* Core credentials checklist */}
            <div className="space-y-2.5 pt-2">
              {mentor.credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-heading font-black text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform cursor-pointer"
              >
                <span>RESERVE SEAT FOR {siteData.payment?.currencySymbol || '₹'}{siteData.payment?.ticketPrice ?? 9} WITH {mentor.shortName.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
