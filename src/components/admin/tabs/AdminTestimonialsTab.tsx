import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import { Star, Plus, Trash2, Edit3, Award, Users } from 'lucide-react';
import { Testimonial } from '../../../types';

export const AdminTestimonialsTab: React.FC = () => {
  const { siteData, addTestimonial, updateTestimonial, deleteTestimonial } = useSite();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddNewTestimonial = () => {
    const newT: Testimonial = {
      id: 'test-' + Date.now(),
      name: 'Client Success Story',
      role: 'Executive Coach / Solopreneur',
      niche: 'High-Ticket Life & Career Coaching',
      category: 'growth',
      revenue: '₹5.5 Crores',
      timeframe: 'In 18 Months',
      quote:
        'Implementing the automated 1-man system transformed my client acquisition and gave me 20 hours of free time back every single week!',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      badge: 'Crore Club Achiever',
    };
    addTestimonial(newT);
    setEditingId(newT.id);
  };

  return (
    <div className="space-y-6 text-sm">
      <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div>
          <h3 className="font-heading font-black text-amber-400 text-base flex items-center gap-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Wall of Fame & Case Studies ({siteData.testimonials.length})
          </h3>
          <p className="text-xs text-slate-400">
            Showcase multi-crore results, student portraits, niches, and authentic quotes.
          </p>
        </div>
        <button
          onClick={handleAddNewTestimonial}
          className="bg-amber-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-amber-300 shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Case Study</span>
        </button>
      </div>

      <div className="space-y-4">
        {siteData.testimonials.map((item, idx) => {
          const isEditing = editingId === item.id;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border transition-all ${
                isEditing
                  ? 'bg-slate-900 border-amber-500/60 shadow-lg'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-black text-white text-sm">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{item.role} • {item.niche}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    {item.revenue} ({item.timeframe})
                  </span>
                  <button
                    onClick={() => setEditingId(isEditing ? null : item.id)}
                    className="p-1.5 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-800"
                    title="Edit Case Study"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete testimonial for "${item.name}"?`)) {
                        deleteTestimonial(item.id);
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800"
                    title="Delete Case Study"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Student / Client Name
                    </label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => updateTestimonial(item.id, { name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Role / Profession
                    </label>
                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) => updateTestimonial(item.id, { role: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Niche / Field
                    </label>
                    <input
                      type="text"
                      value={item.niche}
                      onChange={(e) => updateTestimonial(item.id, { niche: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Filter Category
                    </label>
                    <select
                      value={item.category}
                      onChange={(e) =>
                        updateTestimonial(item.id, {
                          category: e.target.value as Testimonial['category'],
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    >
                      <option value="career">Career / Corporate</option>
                      <option value="health">Health & Wellness</option>
                      <option value="wealth">Wealth & Finance</option>
                      <option value="growth">Growth & Mindset</option>
                      <option value="tech">Tech & Skills</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-emerald-400 mb-1">
                      Revenue Generated (e.g. ₹14+ Crores)
                    </label>
                    <input
                      type="text"
                      value={item.revenue}
                      onChange={(e) => updateTestimonial(item.id, { revenue: e.target.value })}
                      className="w-full bg-slate-950 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-emerald-300 font-bold text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Timeframe (e.g. In 24 Months)
                    </label>
                    <input
                      type="text"
                      value={item.timeframe}
                      onChange={(e) => updateTestimonial(item.id, { timeframe: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-amber-300 mb-1">
                      Achievement Badge (e.g. Crore Club Member)
                    </label>
                    <input
                      type="text"
                      value={item.badge}
                      onChange={(e) => updateTestimonial(item.id, { badge: e.target.value })}
                      className="w-full bg-slate-950 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Avatar / Headshot Image URL
                    </label>
                    <input
                      type="text"
                      value={item.image}
                      onChange={(e) => updateTestimonial(item.id, { image: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Student Quote / Testimonial Story
                    </label>
                    <textarea
                      rows={3}
                      value={item.quote}
                      onChange={(e) => updateTestimonial(item.id, { quote: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                    />
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-300 italic border-l-2 border-amber-400/60 pl-3">
                  "{item.quote}"
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
