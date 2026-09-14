'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Phone, Mail, User, Send, MessageSquare } from 'lucide-react';
import { ACADEMY_INFO } from '@/lib/data/academy-data';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStream?: string;
}

export default function AdmissionsModal({ isOpen, onClose, defaultStream }: AdmissionsModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('IA-782910');
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    streamApplying: defaultStream || 'Class XI: Science (PCM / PCB)',
    hsMarks: '',
    preferredDate: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReferenceId(`IA-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#123B63]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#D0D9E1] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#39434D] hover:text-[#123B63] hover:bg-[#E8EDF1] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-[#E8EDF1] pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-0.5 bg-[#C9252D]" />
                <span className="font-mono-meta text-xs uppercase tracking-wider text-[#178653] font-bold">
                  Admissions 2025–26 • Simla, Assam
                </span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl text-[#123B63] font-bold font-display">
                Class XI Admissions Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#39434D] mt-1 leading-relaxed">
                Connect with our academic team to learn about subject choices, practical laboratory facilities, and seat availability.
              </p>
            </div>

            {/* Quick Contact Direct Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-3 bg-[#E8EDF1] border border-[#D0D9E1]">
              <a 
                href={`https://wa.me/${ACADEMY_INFO.whatsappNumber.replace('+', '')}?text=Hello%20Inspire%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20Class%20XI%20admissions.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-[#123B63] font-medium hover:text-[#178653] transition-colors"
              >
                <div className="w-7 h-7 bg-[#178653] text-white flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-bold">Instant WhatsApp Desk</span>
                  <span className="text-[#39434D] font-mono-meta text-[11px]">{ACADEMY_INFO.whatsappNumber}</span>
                </div>
              </a>
              <a 
                href={`tel:${ACADEMY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2.5 text-xs text-[#123B63] font-medium hover:text-[#178653] transition-colors"
              >
                <div className="w-7 h-7 bg-[#123B63] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-bold">Campus Helpline</span>
                  <span className="text-[#39434D] font-mono-meta text-[11px]">{ACADEMY_INFO.phone}</span>
                </div>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#123B63] uppercase tracking-wider mb-1 font-mono-meta">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sri Biren Das"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D0D9E1] text-[#123B63] placeholder-[#39434D]/50 focus:border-[#123B63] focus:outline-hidden"
                    />
                    <User className="absolute right-3 top-2.5 w-4 h-4 text-[#39434D]/40" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123B63] uppercase tracking-wider mb-1 font-mono-meta">
                    Mobile Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D0D9E1] text-[#123B63] placeholder-[#39434D]/50 focus:border-[#123B63] focus:outline-hidden"
                    />
                    <Phone className="absolute right-3 top-2.5 w-4 h-4 text-[#39434D]/40" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#123B63] uppercase tracking-wider mb-1 font-mono-meta">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Candidate name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D0D9E1] text-[#123B63] placeholder-[#39434D]/50 focus:border-[#123B63] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123B63] uppercase tracking-wider mb-1 font-mono-meta">
                    Stream Applying For *
                  </label>
                  <select
                    value={formData.streamApplying}
                    onChange={(e) => setFormData({ ...formData, streamApplying: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D0D9E1] text-[#123B63] focus:border-[#123B63] focus:outline-hidden"
                  >
                    <option>Class XI: Science (PCM / PCB)</option>
                    <option>Class XI: Arts &amp; Humanities</option>
                    <option>Class XII: Science Transfer/Direct</option>
                    <option>Class XII: Arts Transfer/Direct</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#123B63] uppercase tracking-wider mb-1 font-mono-meta">
                    Class X / HSLC Percentage / Grade
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 78% or Grade A"
                    value={formData.hsMarks}
                    onChange={(e) => setFormData({ ...formData, hsMarks: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D0D9E1] text-[#123B63] placeholder-[#39434D]/50 focus:border-[#123B63] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123B63] uppercase tracking-wider mb-1 font-mono-meta">
                    Preferred Visit Date (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D0D9E1] text-[#123B63] focus:border-[#123B63] focus:outline-hidden"
                    />
                    <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-[#39434D]/40 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123B63] uppercase tracking-wider mb-1 font-mono-meta">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="Subject preferences, hostel enquiries, transport requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#D0D9E1] text-[#123B63] placeholder-[#39434D]/50 focus:border-[#123B63] focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#123B63] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E5A8A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4 text-[#86EFAC]" />
                  <span>Submit Class XI Enquiry Form</span>
                </button>
                <p className="text-[11px] text-[#39434D] text-center mt-2">
                  Our Simla office desk will contact you within 24 hours.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-14 h-14 bg-[#178653] text-white flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="font-mono-meta text-xs uppercase tracking-wider text-[#178653] font-bold block mb-1">
              Enquiry Registered • #{referenceId}
            </span>
            <h3 className="text-2xl text-[#123B63] font-bold mb-2 font-display">
              Thank You, {formData.parentName || 'Parent'}
            </h3>
            <p className="text-xs sm:text-sm text-[#39434D] max-w-md mx-auto mb-6 leading-relaxed">
              We have received your enquiry for <strong>{formData.studentName || 'the student'}</strong> for <strong>{formData.streamApplying}</strong>. Our admissions team in Simla will connect with you promptly.
            </p>
            <div className="p-4 bg-[#E8EDF1] border border-[#D0D9E1] max-w-md mx-auto text-left text-xs text-[#39434D] space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#123B63]">Campus Location:</span>
                <span>Simla, Baksa District, Assam</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#123B63]">Campus Phone:</span>
                <span className="font-mono-meta text-[#123B63] font-bold">{ACADEMY_INFO.phone}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#123B63] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E5A8A] transition-colors"
            >
              Done &amp; Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
