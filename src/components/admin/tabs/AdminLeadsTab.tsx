import React, { useState } from 'react';
import { useSite } from '../../../context/SiteContext';
import {
  Users,
  Download,
  Search,
  Trash2,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  Send,
} from 'lucide-react';
import { RegisteredLead } from '../../../types';

export const AdminLeadsTab: React.FC = () => {
  const { leads, updateLeadStatus, deleteLead, clearAllLeads, exportLeadsCSV } = useSite();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [notesInput, setNotesInput] = useState<string>('');

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.phone.includes(searchQuery) ||
      (l.currentStatus || '').toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || l.leadStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const paidLeads = leads.filter((l) => l.paymentStatus === 'Paid');
  const totalRevenue = paidLeads.reduce((acc, l) => acc + (l.amountPaid ?? 9), 0);
  const vipCount = leads.filter((l) => l.leadStatus === 'VIP').length;
  const newCount = leads.filter((l) => l.leadStatus === 'New').length;
  const contactedCount = leads.filter((l) => l.leadStatus === 'Contacted').length;

  const handleOpenWhatsApp = (phone: string, name: string) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hi ${name}! Thank you for reserving your seat for the Masterclass. Here are your fast-action bonuses and access link.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-6 text-sm">
      {/* Overview Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
          <p className="text-xl font-heading font-black text-amber-400 font-mono">
            {leads.length}
          </p>
          <p className="text-xs font-bold text-white">Total Registrations</p>
        </div>
        <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
          <p className="text-xl font-heading font-black text-emerald-400 font-mono">
            ₹{totalRevenue.toLocaleString('en-IN')}
          </p>
          <p className="text-xs font-bold text-white">Total Revenue (₹9 Pass)</p>
        </div>
        <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
          <p className="text-xl font-heading font-black text-teal-400 font-mono">
            {paidLeads.length}
          </p>
          <p className="text-xs font-bold text-white">Confirmed Paid Attendees</p>
        </div>
        <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
          <p className="text-xl font-heading font-black text-amber-300 font-mono">
            {vipCount}
          </p>
          <p className="text-xs font-bold text-white">VIP Priority Leads</p>
        </div>
      </div>

      {/* Action Controls & Filters */}
      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads by name, email, phone, or background..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-white text-xs focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs"
            >
              <option value="all">All Stages ({leads.length})</option>
              <option value="New">New ({newCount})</option>
              <option value="VIP">VIP Priority ({vipCount})</option>
              <option value="Contacted">Contacted ({contactedCount})</option>
              <option value="Attended">Attended</option>
            </select>

            <button
              onClick={exportLeadsCSV}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3.5 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            {leads.length > 0 && (
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear all lead entries?')) {
                    clearAllLeads();
                  }
                }}
                className="bg-slate-800 hover:bg-red-900/40 text-slate-400 hover:text-red-400 p-2 rounded-lg text-xs"
                title="Clear All Leads"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="space-y-3">
        {filteredLeads.length === 0 ? (
          <div className="text-center py-12 bg-slate-950/60 rounded-xl border border-slate-800">
            <Users className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">No registered leads found matching your criteria.</p>
          </div>
        ) : (
          filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-white text-base">
                      {lead.fullName}
                    </span>
                    <select
                      value={lead.leadStatus}
                      onChange={(e) =>
                        updateLeadStatus(
                          lead.id,
                          e.target.value as RegisteredLead['leadStatus'],
                          lead.notes
                        )
                      }
                      className={`text-[11px] font-bold px-2 py-0.5 rounded border focus:outline-none ${
                        lead.leadStatus === 'VIP'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : lead.leadStatus === 'Contacted'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                      }`}
                    >
                      <option value="New" className="bg-slate-950 text-white">New Lead</option>
                      <option value="VIP" className="bg-slate-950 text-amber-300">VIP Priority</option>
                      <option value="Contacted" className="bg-slate-950 text-emerald-300">Contacted</option>
                      <option value="Attended" className="bg-slate-950 text-purple-300">Attended</option>
                    </select>

                    <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                      Paid: ₹{lead.amountPaid ?? 9}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-xs text-amber-400/90 font-medium">{lead.currentStatus}</p>
                    {lead.paymentId && (
                      <span className="text-[10px] font-mono text-slate-500">
                        • {lead.paymentId}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenWhatsApp(lead.phone, lead.fullName)}
                    className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    title="Send WhatsApp Message"
                  >
                    <Send className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </button>

                  <a
                    href={`mailto:${lead.email}`}
                    className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"
                  >
                    <Mail className="w-3 h-3 text-slate-400" />
                    <span>Email</span>
                  </a>

                  <button
                    onClick={() => {
                      if (window.confirm(`Delete lead: ${lead.fullName}?`)) {
                        deleteLead(lead.id);
                      }
                    }}
                    className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg hover:bg-slate-900"
                    title="Delete Record"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Contact metadata row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-lg">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-slate-300 font-mono">{lead.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-slate-300 font-mono">
                    {lead.countryCode} {lead.phone}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Reg: {lead.registeredAt}</span>
                </div>
              </div>

              {/* Private Notes Section */}
              <div className="text-xs">
                {editingNotesId === lead.id ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={notesInput}
                      onChange={(e) => setNotesInput(e.target.value)}
                      placeholder="Add follow-up notes or call summaries..."
                      className="flex-1 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-xs"
                    />
                    <button
                      onClick={() => {
                        updateLeadStatus(lead.id, lead.leadStatus, notesInput);
                        setEditingNotesId(null);
                      }}
                      className="bg-amber-400 text-slate-950 px-3 py-1 rounded font-bold text-xs"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingNotesId(null)}
                      className="bg-slate-800 text-slate-400 px-2 py-1 rounded text-xs"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-slate-400 bg-slate-900/30 px-2 py-1 rounded">
                    <span>
                      <strong className="text-slate-500 font-semibold">Notes:</strong>{' '}
                      {lead.notes || 'No notes added.'}
                    </span>
                    <button
                      onClick={() => {
                        setEditingNotesId(lead.id);
                        setNotesInput(lead.notes || '');
                      }}
                      className="text-amber-400/80 hover:text-amber-300 text-[11px] underline"
                    >
                      {lead.notes ? 'Edit Note' : '+ Add Note'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
