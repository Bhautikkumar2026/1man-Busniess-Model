import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import { HelpCircle, Plus, Trash2, Edit3 } from 'lucide-react';
import { FaqItem } from '../../../types';

export const AdminFaqTab: React.FC = () => {
  const { siteData, addFaq, updateFaq, deleteFaq } = useSite();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddFaq = () => {
    const newFaq: FaqItem = {
      id: 'faq-' + Date.now(),
      question: 'What is the schedule and attendance requirement?',
      answer:
        'This is a live interactive 90-minute session. Please ensure you join on time from a desktop or quiet room with good internet.',
      category: 'General',
    };
    addFaq(newFaq);
    setEditingId(newFaq.id);
  };

  return (
    <div className="space-y-6 text-sm">
      <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div>
          <h3 className="font-heading font-black text-amber-400 text-base flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions ({siteData.faqs.length})
          </h3>
          <p className="text-xs text-slate-400">
            Address visitor doubts, technical questions, commitments, and replay access rules.
          </p>
        </div>
        <button
          onClick={handleAddFaq}
          className="bg-amber-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-amber-300 shadow-md cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add FAQ</span>
        </button>
      </div>

      <div className="space-y-4">
        {siteData.faqs.map((faq, idx) => {
          const isEditing = editingId === faq.id;

          return (
            <div
              key={faq.id}
              className={`p-4 rounded-xl border transition-all ${
                isEditing
                  ? 'bg-slate-900 border-amber-500/60 shadow-lg'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 flex-1">
                  <span className="w-6 h-6 rounded bg-slate-800 text-slate-300 text-xs font-mono flex items-center justify-center font-bold">
                    Q{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                    {faq.category || 'General'}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEditingId(isEditing ? null : faq.id)}
                    className="p-1.5 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-800"
                    title="Edit FAQ"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete question: "${faq.question}"?`)) {
                        deleteFaq(faq.id);
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800"
                    title="Delete FAQ"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {isEditing ? (
                <div className="space-y-3 pt-2 border-t border-slate-800">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Question Text
                      </label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => updateFaq(faq.id, { question: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-bold text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Category Tag
                      </label>
                      <input
                        type="text"
                        value={faq.category}
                        onChange={(e) => updateFaq(faq.id, { category: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Detailed Answer
                    </label>
                    <textarea
                      rows={3}
                      value={faq.answer}
                      onChange={(e) => updateFaq(faq.id, { answer: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-300 text-xs"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="font-heading font-bold text-white text-sm">
                    {faq.question}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
