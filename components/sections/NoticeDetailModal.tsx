'use client';

import React from 'react';
import { X, Calendar, Tag, FileText, Download, Printer } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface NoticeDetailModalProps {
  notice: {
    id: string;
    title: string;
    date: string;
    category: string;
    refNo: string;
    summary: string;
    fullText?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function NoticeDetailModal({
  notice,
  isOpen,
  onClose,
}: NoticeDetailModalProps) {
  const { t } = useLanguage();

  if (!isOpen || !notice) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-2xl rounded-md border-2 border-[#0275D8] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="bg-[#0275D8] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-yellow-300" />
            <span className="font-mono text-xs uppercase tracking-wider font-bold">
              Official Notification &amp; Circular
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded transition-colors text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#CBD5E1] text-xs font-mono">
            <span className="px-2.5 py-1 bg-[#EBF3FB] text-[#0275D8] rounded font-bold">
              {notice.category}
            </span>
            <span className="text-[#64748B]">
              Ref No: <strong className="text-[#0B2945]">{notice.refNo}</strong>
            </span>
            <span className="text-[#64748B]">
              Date: <strong className="text-[#0B2945]">{notice.date}</strong>
            </span>
          </div>

          {/* Notice Title */}
          <h2 className="text-lg sm:text-xl font-bold text-[#0B2945] font-display">
            {notice.title}
          </h2>

          {/* Official Letterhead Simulation */}
          <div className="bg-[#F8FAFC] p-4 rounded border border-[#CBD5E1] text-xs text-[#334155] leading-relaxed space-y-3">
            <p className="font-semibold text-[#0B2945]">
              Office of the Principal / Controller of Examinations, Inspire Academy, Simla, Baksa, Assam:
            </p>
            <p>
              {notice.summary}
            </p>
            {notice.fullText ? (
              <p className="pt-2 border-t border-[#E2E8F0] whitespace-pre-line">
                {notice.fullText}
              </p>
            ) : (
              <p className="pt-2 border-t border-[#E2E8F0]">
                All concerned students, guardians, and academic faculty members are advised to note the official directives above. Detailed guidelines and physical application copies may be collected from the Academy Administrative Office during regular hours (8:30 AM – 3:30 PM).
              </p>
            )}
          </div>

          {/* Authority Signatory */}
          <div className="pt-3 text-right text-xs font-mono">
            <p className="font-bold text-[#0B2945]">By Order of Academic Authority</p>
            <p className="text-[#64748B]">Inspire Academy, Simla, Baksa (Assam)</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#F1F5F9] px-6 py-3 border-t border-[#CBD5E1] flex items-center justify-between">
          <button
            onClick={handlePrint}
            className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-[#0B2945] text-xs font-bold uppercase rounded border border-[#CBD5E1] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Gazette</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0275D8] hover:bg-[#0056B3] text-white text-xs font-bold uppercase rounded transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
