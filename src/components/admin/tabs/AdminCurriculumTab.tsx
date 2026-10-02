import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import { Clock, CheckCircle2, XCircle, Plus, Trash2, Edit3 } from 'lucide-react';
import { CurriculumItem, WhoIsItem } from '../../../types';

export const AdminCurriculumTab: React.FC = () => {
  const { siteData, updateCurriculum, updateWhoFor, updateWhoNotFor } = useSite();

  const [newWhoFor, setNewWhoFor] = useState({ text: '', subtext: '' });
  const [newWhoNotFor, setNewWhoNotFor] = useState({ text: '', subtext: '' });

  // Agenda handlers
  const handleAgendaChange = (
    index: number,
    field: keyof CurriculumItem,
    value: string
  ) => {
    const updated = [...siteData.curriculum];
    updated[index] = { ...updated[index], [field]: value };
    updateCurriculum(updated);
  };

  const handleAddAgenda = () => {
    const newItem: CurriculumItem = {
      id: 'curr-' + Date.now(),
      time: '01:30 - 01:45',
      title: 'New Agenda Module',
      description: 'Breakdown of action steps, live demonstration, or case analysis.',
      tag: 'NEW TOPIC',
    };
    updateCurriculum([...siteData.curriculum, newItem]);
  };

  const handleRemoveAgenda = (index: number) => {
    updateCurriculum(siteData.curriculum.filter((_, i) => i !== index));
  };

  // Who for / not for
  const handleAddWhoFor = () => {
    if (!newWhoFor.text.trim()) return;
    updateWhoFor([
      ...siteData.whoFor,
      { id: 'wf-' + Date.now(), text: newWhoFor.text.trim(), subtext: newWhoFor.subtext.trim() },
    ]);
    setNewWhoFor({ text: '', subtext: '' });
  };

  const handleRemoveWhoFor = (id: string) => {
    updateWhoFor(siteData.whoFor.filter((item) => item.id !== id));
  };

  const handleAddWhoNotFor = () => {
    if (!newWhoNotFor.text.trim()) return;
    updateWhoNotFor([
      ...siteData.whoNotFor,
      { id: 'wnf-' + Date.now(), text: newWhoNotFor.text.trim(), subtext: newWhoNotFor.subtext.trim() },
    ]);
    setNewWhoNotFor({ text: '', subtext: '' });
  };

  const handleRemoveWhoNotFor = (id: string) => {
    updateWhoNotFor(siteData.whoNotFor.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6 text-sm">
      {/* 90-Minute Agenda */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-heading font-black text-amber-400 text-base flex items-center gap-2">
              <Clock className="w-4 h-4" />
              90-Minute Masterclass Curriculum Timeline
            </h3>
            <p className="text-xs text-slate-400">
              Customize the step-by-step masterclass timeline modules.
            </p>
          </div>
          <button
            onClick={handleAddAgenda}
            className="bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1 hover:bg-amber-300"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Module</span>
          </button>
        </div>

        <div className="space-y-3">
          {siteData.curriculum.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="text"
                    value={item.time}
                    onChange={(e) => handleAgendaChange(idx, 'time', e.target.value)}
                    className="w-32 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-amber-300 font-mono text-xs font-bold"
                    placeholder="00:00 - 00:15"
                  />
                  <input
                    type="text"
                    value={item.tag}
                    onChange={(e) => handleAgendaChange(idx, 'tag', e.target.value)}
                    className="w-36 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-300 text-[11px] uppercase tracking-wider"
                    placeholder="TOPIC TAG"
                  />
                </div>
                <button
                  onClick={() => handleRemoveAgenda(idx)}
                  className="text-slate-500 hover:text-red-400 p-1"
                  title="Remove Module"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleAgendaChange(idx, 'title', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white font-bold text-xs"
                  placeholder="Module Title"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  value={item.description}
                  onChange={(e) => handleAgendaChange(idx, 'description', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-slate-300 text-xs"
                  placeholder="Module description..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who is this for vs Not for */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Who Is This For */}
        <div className="bg-slate-900/60 p-4 rounded-xl border border-emerald-900/40">
          <h4 className="font-heading font-black text-emerald-400 text-sm mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Who Is This Masterclass For ({siteData.whoFor.length})
          </h4>

          <div className="space-y-2 mb-3">
            {siteData.whoFor.map((item) => (
              <div
                key={item.id}
                className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-start justify-between gap-2"
              >
                <div className="text-xs">
                  <p className="font-bold text-white">{item.text}</p>
                  {item.subtext && <p className="text-slate-400 text-[11px]">{item.subtext}</p>}
                </div>
                <button
                  onClick={() => handleRemoveWhoFor(item.id)}
                  className="text-slate-500 hover:text-red-400 p-1"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <input
              type="text"
              placeholder="Audience profile (e.g. Working Professionals)..."
              value={newWhoFor.text}
              onChange={(e) => setNewWhoFor({ ...newWhoFor, text: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
            />
            <input
              type="text"
              placeholder="Why it fits them (subtext)..."
              value={newWhoFor.subtext}
              onChange={(e) => setNewWhoFor({ ...newWhoFor, subtext: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
            />
            <button
              onClick={handleAddWhoFor}
              className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 py-1.5 rounded-lg font-bold text-xs hover:bg-emerald-500/30 flex items-center justify-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add "Who It Is For" Item</span>
            </button>
          </div>
        </div>

        {/* Who Is This NOT For */}
        <div className="bg-slate-900/60 p-4 rounded-xl border border-red-900/40">
          <h4 className="font-heading font-black text-red-400 text-sm mb-3 flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            Who Is This NOT For ({siteData.whoNotFor.length})
          </h4>

          <div className="space-y-2 mb-3">
            {siteData.whoNotFor.map((item) => (
              <div
                key={item.id}
                className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-start justify-between gap-2"
              >
                <div className="text-xs">
                  <p className="font-bold text-white">{item.text}</p>
                  {item.subtext && <p className="text-slate-400 text-[11px]">{item.subtext}</p>}
                </div>
                <button
                  onClick={() => handleRemoveWhoNotFor(item.id)}
                  className="text-slate-500 hover:text-red-400 p-1"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <input
              type="text"
              placeholder="Unfit profile (e.g. Get-Rich-Quick Seekers)..."
              value={newWhoNotFor.text}
              onChange={(e) => setNewWhoNotFor({ ...newWhoNotFor, text: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
            />
            <input
              type="text"
              placeholder="Why it is not for them (subtext)..."
              value={newWhoNotFor.subtext}
              onChange={(e) => setNewWhoNotFor({ ...newWhoNotFor, subtext: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
            />
            <button
              onClick={handleAddWhoNotFor}
              className="w-full bg-red-500/20 text-red-400 border border-red-500/40 py-1.5 rounded-lg font-bold text-xs hover:bg-red-500/30 flex items-center justify-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add "Not For You" Item</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
