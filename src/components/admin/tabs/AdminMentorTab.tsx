import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import { Award, User, BookOpen, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export const AdminMentorTab: React.FC = () => {
  const { siteData, updateMentor, updateGeneral } = useSite();
  const mentor = siteData.mentor;
  const general = siteData.general;

  const [newCred, setNewCred] = useState('');

  const handleStatChange = (index: number, field: 'label' | 'value' | 'sub', val: string) => {
    const updated = [...mentor.stats];
    updated[index] = { ...updated[index], [field]: val };
    updateMentor({ stats: updated });
  };

  const handleAddCredential = () => {
    if (!newCred.trim()) return;
    updateMentor({ credentials: [...mentor.credentials, newCred.trim()] });
    setNewCred('');
  };

  const handleRemoveCredential = (index: number) => {
    updateMentor({ credentials: mentor.credentials.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-6 text-sm">
      {/* Brand & Logo Identity */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h3 className="font-heading font-black text-amber-400 text-base mb-1 flex items-center gap-2">
          <User className="w-4 h-4" />
          Brand & Global Identity
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Set your brand header name, short logo letters, currency, and footer support information.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Brand / Business Name
            </label>
            <input
              type="text"
              value={general.brandName}
              onChange={(e) => updateGeneral({ brandName: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="1 MAN BUSINESS MODEL"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Logo Monogram (2 Letters)
            </label>
            <input
              type="text"
              maxLength={3}
              value={general.logoShort}
              onChange={(e) => updateGeneral({ logoShort: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-black text-center focus:outline-none focus:border-amber-400 text-xs"
              placeholder="1M or CB"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Currency Symbol
            </label>
            <input
              type="text"
              maxLength={4}
              value={general.currencySymbol}
              onChange={(e) => updateGeneral({ currencySymbol: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-center font-bold focus:outline-none focus:border-amber-400 text-xs"
              placeholder="₹ or $ or €"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Support Email
            </label>
            <input
              type="email"
              value={general.supportEmail}
              onChange={(e) => updateGeneral({ supportEmail: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="coach.bhautik@gmail.com"
            />
          </div>

          <div className="sm:col-span-2 md:col-span-4">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Brand Subtitle / Tagline (Under Logo)
            </label>
            <input
              type="text"
              value={general.brandSub}
              onChange={(e) => updateGeneral({ brandSub: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="By Siddharth Rajsekar • Freedom Business Model"
            />
          </div>
        </div>
      </div>

      {/* Mentor Profile */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h3 className="font-heading font-black text-amber-400 text-base mb-1 flex items-center gap-2">
          <Award className="w-4 h-4" />
          Mentor Profile & Bio
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Update the profile name, headshot photo, bio story, and mission statement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Mentor Full Name
            </label>
            <input
              type="text"
              value={mentor.name}
              onChange={(e) => updateMentor({ name: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-bold focus:outline-none focus:border-amber-400 text-xs"
              placeholder="Coach Bhautik / Siddharth Rajsekar"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Short Name / Nickname
            </label>
            <input
              type="text"
              value={mentor.shortName}
              onChange={(e) => updateMentor({ shortName: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="Bhautik / Sidz"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Professional Designation / Title
            </label>
            <input
              type="text"
              value={mentor.title}
              onChange={(e) => updateMentor({ title: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
              placeholder="India's Leading AI Digital Coach • Author & Speaker"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Mentor Headshot / Photo URL
            </label>
            <div className="flex gap-3 items-center">
              <img
                src={mentor.photoUrl}
                alt="Mentor Preview"
                className="w-12 h-12 rounded-xl object-cover border border-amber-500/40"
              />
              <input
                type="text"
                value={mentor.photoUrl}
                onChange={(e) => updateMentor({ photoUrl: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Mission Headline Prefix
            </label>
            <input
              type="text"
              value={mentor.missionQuote}
              onChange={(e) => updateMentor({ missionQuote: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
              placeholder="My Mission Is To Create"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-amber-300 mb-1">
              Mission Highlight
            </label>
            <input
              type="text"
              value={mentor.missionHighlight}
              onChange={(e) => updateMentor({ missionHighlight: e.target.value })}
              className="w-full bg-slate-950 border border-amber-500/50 rounded-lg px-3 py-2 text-amber-300 font-bold text-xs"
              placeholder="1 Million Digital Teachers & 1-Man Businesses"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Bio Paragraph 1 (Introduction & Community)
            </label>
            <textarea
              rows={2}
              value={mentor.bioParagraph1}
              onChange={(e) => updateMentor({ bioParagraph1: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Bio Paragraph 2 (Backstory & Freedom Model Discovery)
            </label>
            <textarea
              rows={3}
              value={mentor.bioParagraph2}
              onChange={(e) => updateMentor({ bioParagraph2: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Featured Book Title
            </label>
            <input
              type="text"
              value={mentor.bookTitle}
              onChange={(e) => updateMentor({ bookTitle: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
              placeholder='"You Can Coach"'
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Book Copies / Reader Count
            </label>
            <input
              type="text"
              value={mentor.bookSales}
              onChange={(e) => updateMentor({ bookSales: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
              placeholder="100,000+ copies sold worldwide"
            />
          </div>
        </div>
      </div>

      {/* 4 Stats Grid */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h3 className="font-heading font-black text-amber-400 text-base mb-1 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Mentor Track Record Badges (4 Metrics)
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Customize the 4 numerical proof blocks shown on the mentor profile section.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {mentor.stats.map((st, i) => (
            <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                Metric #{i + 1}
              </span>
              <div>
                <label className="block text-[11px] text-slate-400">Value (Large)</label>
                <input
                  type="text"
                  value={st.value}
                  onChange={(e) => handleStatChange(i, 'value', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-amber-300 font-bold text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400">Label</label>
                <input
                  type="text"
                  value={st.label}
                  onChange={(e) => handleStatChange(i, 'label', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400">Subtext</label>
                <input
                  type="text"
                  value={st.sub}
                  onChange={(e) => handleStatChange(i, 'sub', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-300 text-[11px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials List */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <h3 className="font-heading font-black text-amber-400 text-base mb-1 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          Credentials & Accreditations Checklist
        </h3>

        <div className="space-y-2 mb-4">
          {mentor.credentials.map((cred, i) => (
            <div key={i} className="flex items-center justify-between gap-3 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{cred}</span>
              </div>
              <button
                onClick={() => handleRemoveCredential(i)}
                className="text-slate-500 hover:text-red-400 p-1"
                title="Remove Credential"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newCred}
            onChange={(e) => setNewCred(e.target.value)}
            placeholder="Add new accreditation or milestone..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
            onKeyDown={(e) => e.key === 'Enter' && handleAddCredential()}
          />
          <button
            onClick={handleAddCredential}
            className="bg-amber-400 text-slate-950 px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1 shrink-0 hover:bg-amber-300"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
