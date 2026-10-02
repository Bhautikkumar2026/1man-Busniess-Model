import React from 'react';
import { useSite } from '../../../context/SiteContext';
import { Sparkles, Calendar, Clock, Video, Tag, DollarSign } from 'lucide-react';

export const AdminHeroTab: React.FC = () => {
  const { siteData, updateHero } = useSite();
  const hero = siteData.hero;

  return (
    <div className="space-y-6 text-sm">
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h3 className="font-heading font-black text-amber-400 text-base mb-1 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Hero Headlines & Hooks
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Customize the main attention hook, masterclass title, and sub-headline displayed at the very top of your page.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Eyebrow Audience Badge (Top Tag)
            </label>
            <input
              type="text"
              value={hero.eyebrow}
              onChange={(e) => updateHero({ eyebrow: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="ATTENTION: COACHES, CONSULTANTS, TRAINERS & EXPERTS"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Headline Prefix
            </label>
            <input
              type="text"
              value={hero.title}
              onChange={(e) => updateHero({ title: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="Discover The Exact"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-amber-300 mb-1">
              Highlighted Title (Gradient Text)
            </label>
            <input
              type="text"
              value={hero.highlightedText}
              onChange={(e) => updateHero({ highlightedText: e.target.value })}
              className="w-full bg-slate-950 border border-amber-500/50 rounded-lg px-3 py-2 text-amber-300 font-bold focus:outline-none focus:border-amber-400 text-xs"
              placeholder="1-Man Business Model"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Headline Suffix / Main Benefit
            </label>
            <input
              type="text"
              value={hero.titleEnd}
              onChange={(e) => updateHero({ titleEnd: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="To Turn Your Knowledge Into A Scalable, AI-Powered Online Business"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Sub-Headline / Core Objection Solver
            </label>
            <input
              type="text"
              value={hero.subheadline}
              onChange={(e) => updateHero({ subheadline: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="Without A Team, Office, Or Complex Technical Headaches."
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Supporting Body Copy
            </label>
            <textarea
              rows={3}
              value={hero.description}
              onChange={(e) => updateHero({ description: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="Learn the proven 3-step Product → Traffic → Sales system..."
            />
          </div>
        </div>
      </div>

      {/* Date & Time Settings */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h3 className="font-heading font-black text-amber-400 text-base mb-1 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Live Session Schedule & Scarcity
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Control the dates, session times, spots badge, and regular vs discounted pricing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Session Date Display
            </label>
            <input
              type="text"
              value={hero.sessionDateText}
              onChange={(e) => updateHero({ sessionDateText: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="Today / Next Live Batch"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Session Time & Timezone
            </label>
            <input
              type="text"
              value={hero.sessionTimeText}
              onChange={(e) => updateHero({ sessionTimeText: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="8:00 PM IST / 10:30 AM EST"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Session Duration
            </label>
            <input
              type="text"
              value={hero.sessionDuration}
              onChange={(e) => updateHero({ sessionDuration: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="90 Minutes"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Regular Price
            </label>
            <input
              type="text"
              value={hero.regularPrice}
              onChange={(e) => updateHero({ regularPrice: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="₹4,999"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-emerald-400 mb-1">
              Discount / Free Badge Text
            </label>
            <input
              type="text"
              value={hero.discountedPriceText}
              onChange={(e) => updateHero({ discountedPriceText: e.target.value })}
              className="w-full bg-slate-950 border border-emerald-500/50 rounded-lg px-3 py-2 text-emerald-400 font-bold focus:outline-none focus:border-emerald-400 text-xs"
              placeholder="100% FREE TODAY"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-red-400 mb-1">
              Scarcity / Spots Header
            </label>
            <input
              type="text"
              value={hero.spotsText}
              onChange={(e) => updateHero({ spotsText: e.target.value })}
              className="w-full bg-slate-950 border border-red-500/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-400 text-xs"
              placeholder="🔥 STRICTLY LIMITED TO 500 ATTENDEES"
            />
          </div>
        </div>
      </div>

      {/* Video & Social Proof */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h3 className="font-heading font-black text-amber-400 text-base mb-1 flex items-center gap-2">
          <Video className="w-4 h-4" />
          Video Mockup & Social Stats
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Update the trailer thumbnail photo, video title, and proof metric pills under the hero.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Video Card Thumbnail Image URL
            </label>
            <input
              type="text"
              value={hero.videoThumbnail}
              onChange={(e) => updateHero({ videoThumbnail: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Video Trailer Title
            </label>
            <input
              type="text"
              value={hero.videoTrailerTitle}
              onChange={(e) => updateHero({ videoTrailerTitle: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Video Trailer Short Description
            </label>
            <input
              type="text"
              value={hero.videoTrailerDesc}
              onChange={(e) => updateHero({ videoTrailerDesc: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Review Rating & Count
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={hero.reviewRating}
                onChange={(e) => updateHero({ reviewRating: e.target.value })}
                className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
                placeholder="4.9 / 5"
              />
              <input
                type="text"
                value={hero.reviewsCount}
                onChange={(e) => updateHero({ reviewsCount: e.target.value })}
                className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
                placeholder="34,800+ Reviews"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Students Count & Achievers Badge
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={hero.studentsCount}
                onChange={(e) => updateHero({ studentsCount: e.target.value })}
                className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
                placeholder="300,000+ Students"
              />
              <input
                type="text"
                value={hero.achieversCount}
                onChange={(e) => updateHero({ achieversCount: e.target.value })}
                className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
                placeholder="150+ Crore Club"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
