'use client';

import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { NOTICE_ITEMS, NoticeItem } from '@/lib/data/academy-data';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  Bell,
  FileText,
  Search,
  ChevronRight,
  Printer,
  ShieldCheck,
  Calendar,
  Download,
  AlertCircle
} from 'lucide-react';

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Admissions', 'Academics', 'Examination', 'Faculty'];

  const filteredNotices = NOTICE_ITEMS.filter((n) => {
    const matchesCat = activeCategory === 'All' || n.category === activeCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'Circulars & Gazette', href: '/news' }, { label: 'Official Notice Board' }]}
      />

      {/* Official Masthead Header */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <Bell className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Official Institutional Gazette &amp; Dispatches · Simla Campus</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Official Notice Board &amp; Circulars
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              Authentic administrative orders, AHSEC council notifications, examination date-sheets, DARPAN admission circulars, and institutional announcements from Inspire Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout with University Sidebar */}
      <main className="flex-grow py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Main Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Search & Filter Controls */}
              <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search circulars or subject..."
                      className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs text-xs text-[#0B2945] focus:outline-hidden focus:border-[#0275D8]"
                    />
                  </div>

                  <span className="text-xs font-mono text-[#64748B]">
                    Showing <strong className="text-[#0B2945]">{filteredNotices.length}</strong> Official Dispatches
                  </span>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#EDF2F7]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-[#0B2945] text-white shadow-xs'
                          : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#E2E8F0] border border-[#D8E2EC]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Official Notices Ledger */}
              <div className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs">
                <div className="bg-[#0B2945] text-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border-b-2 border-[#D84315]">
                  <span>Inspire Academy Administrative Gazette Archive</span>
                  <span>Code: {ACADEMY_INFO.schoolCode}</span>
                </div>

                <div className="divide-y divide-[#E2E8F0]">
                  {filteredNotices.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 hover:bg-[#F8FAFC] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                    >
                      {/* Date Block */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-center w-24 py-2 px-1.5 bg-[#F0F4F8] border border-[#D8E2EC] rounded-xs">
                          <span className="text-xs font-mono font-bold text-[#0B2945] block">
                            {item.date}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#EBF3FA] text-[#0275D8] border border-[#D0E2FF] rounded-xs uppercase">
                          {item.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-grow space-y-1">
                        <h2
                          onClick={() => setSelectedNotice(item)}
                          className="text-sm sm:text-base font-bold text-[#0B2945] group-hover:text-[#0275D8] transition-colors cursor-pointer font-display"
                        >
                          {item.title}
                        </h2>
                        <p className="text-xs text-[#64748B] line-clamp-2">
                          {item.summary}
                        </p>
                      </div>

                      {/* Action */}
                      <div className="shrink-0 flex items-center gap-2">
                        <button
                          onClick={() => setSelectedNotice(item)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-[#D8E2EC] text-xs font-mono font-bold text-[#0B2945] hover:bg-[#0B2945] hover:text-white rounded-xs transition-colors cursor-pointer"
                        >
                          <span>View Gazette</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="news"
                onOpenAdmissionModal={() => setIsModalOpen(true)}
              />
            </div>

          </div>
        </div>
      </main>

      {/* Official Gazette Dispatch Viewer Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-sm border-2 border-[#0B2945] max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            
            {/* Gazette Official Header */}
            <div className="border-b-2 border-[#0B2945] pb-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D84315] block">
                  OFFICIAL INSTITUTIONAL DISPATCH
                </span>
                <h4 className="text-sm font-bold font-display text-[#0B2945]">
                  Inspire Academy · Office of the Principal
                </h4>
                <p className="text-[11px] font-mono text-[#64748B]">
                  Simla, Dist. Baksa (BTR), Assam · AHSEC Code: {ACADEMY_INFO.schoolCode}
                </p>
              </div>
              <button
                onClick={() => setSelectedNotice(null)}
                className="text-xs font-mono font-bold text-[#64748B] hover:text-[#C62832] cursor-pointer px-2 py-1 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs"
              >
                [ Close ✕ ]
              </button>
            </div>

            {/* Notice Title & Metadata */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#0B2945] text-white text-[10px] font-mono font-bold uppercase rounded-xs">
                  {selectedNotice.category}
                </span>
                <span className="text-xs font-mono text-[#64748B]">
                  Date of Issue: <strong>{selectedNotice.date}</strong>
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0B2945] font-display">
                {selectedNotice.title}
              </h3>
            </div>

            {/* Notice Body */}
            <div className="py-3 text-xs sm:text-sm text-[#334155] leading-relaxed space-y-3 border-y border-[#E2E8F0]">
              <p>{selectedNotice.summary}</p>
              <p className="text-xs text-[#64748B] leading-relaxed">
                All concerned students of Class XI &amp; XII, faculty members, and guardians are hereby notified to strictly comply with the contents of this circular. Any representations or inquiries may be addressed to the Principal’s office during working hours (8:30 AM – 3:30 PM).
              </p>
            </div>

            {/* Official Sign-off & Seal */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-[11px] font-mono text-[#64748B]">
                <span>By Order of the Principal,</span>
                <strong className="block text-[#0B2945]">Inspire Academy, Simla</strong>
              </div>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') window.print();
                }}
                className="px-3.5 py-1.5 bg-[#0B2945] text-white text-xs font-mono font-bold rounded-xs cursor-pointer hover:bg-[#0275D8] transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Gazette</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
