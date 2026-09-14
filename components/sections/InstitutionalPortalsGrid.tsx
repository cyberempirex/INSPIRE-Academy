'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ExternalLink,
  BookOpen, 
  GraduationCap, 
  FileText, 
  Building2, 
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Database,
  Search,
  SlidersHorizontal,
  Compass,
  FileSpreadsheet
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';

interface PortalItem {
  sl: string;
  id: string;
  title: string;
  category: 'academic' | 'admissions' | 'student' | 'governance';
  categoryLabel: string;
  code: string;
  description: string;
  href: string;
  isAction?: boolean;
  statusBadge: string;
  statusType: 'verified' | 'urgent' | 'active';
  actionText: string;
  specs: string[];
  department: string;
}

export default function InstitutionalPortalsGrid() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'admissions' | 'student' | 'governance'>('all');
  const [selectedPortalId, setSelectedPortalId] = useState<string>('portal-1');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const PORTALS: PortalItem[] = [
    {
      sl: '01',
      id: 'portal-1',
      title: 'AHSEC Curriculum & Subject Syllabus Repository',
      category: 'academic',
      categoryLabel: 'Academic Core',
      code: 'AHSEC/SYL/2026',
      description: 'Official Higher Secondary syllabi for Science (PCM/PCB) & Arts streams, chapter-wise mark distributions, and practical laboratory manuals.',
      href: '/academics',
      statusBadge: 'AHSEC Aligned 2026',
      statusType: 'verified',
      actionText: 'Access Syllabus',
      specs: ['Science & Arts Syllabi', 'Practical Lab Protocols', 'NEP 2020 Framework'],
      department: 'Department of Academic Affairs',
    },
    {
      sl: '02',
      id: 'portal-2',
      title: 'Class XI Admissions & DARPAN Online Portal',
      category: 'admissions',
      categoryLabel: 'Admissions Office',
      code: 'DARPAN/ADM/XI',
      description: 'Assam State Higher Secondary DARPAN portal integration, seat allotment for Simla campus, fee norms, and document desk.',
      href: '#',
      isAction: true,
      statusBadge: 'Session 2026–27 Active',
      statusType: 'urgent',
      actionText: 'Apply Online',
      specs: ['Online Registration Desk', 'Merit Verification Cell', 'Direct Counseling'],
      department: 'Central Admissions Board',
    },
    {
      sl: '03',
      id: 'portal-3',
      title: 'HS Final Examination Board Distinction Ledger',
      category: 'academic',
      categoryLabel: 'Examination Records',
      code: 'REC/EXAM/LEDGER',
      description: 'Audited AHSEC Board results, Star Marks roll registers, subject letter distinction archives, and university placement tracking.',
      href: '/results',
      statusBadge: '100% Pass Record',
      statusType: 'verified',
      actionText: 'View Distinction Ledger',
      specs: ['100% Pass Percentage', 'Star Marks Roll Register', 'Rank Holders Archive'],
      department: 'Controller of Examinations',
    },
    {
      sl: '04',
      id: 'portal-4',
      title: 'Digital E-Learning Hub & 8-Tier Question Bank',
      category: 'student',
      categoryLabel: 'E-Learning & LMS',
      code: 'LMS/BANK/8T',
      description: 'Self-assessment quiz modules, 10-year AHSEC solved papers, daily Assam/National current affairs, and mock test drills.',
      href: '/learning',
      statusBadge: 'Free Student Access',
      statusType: 'active',
      actionText: 'Open LMS Repository',
      specs: ['Previous 10-Year Papers', 'Chapter MCQ Drills', 'Faculty Class Notes'],
      department: 'Digital Learning & ICT Cell',
    },
    {
      sl: '05',
      id: 'portal-5',
      title: 'Science Experimental Labs & Workstation Directory',
      category: 'academic',
      categoryLabel: 'Laboratories',
      code: 'LAB/SCI/WKSTN',
      description: 'Dedicated Physics, Chemistry, and Biology practical laboratories equipped with certified apparatus and safety compliance protocols.',
      href: '/campus-life',
      statusBadge: 'Practical Cells Verified',
      statusType: 'verified',
      actionText: 'Explore Laboratories',
      specs: ['Individual Workstations', 'Apparatus Certification', 'Safety Protocols'],
      department: 'Science Faculty Laboratory Board',
    },
    {
      sl: '06',
      id: 'portal-6',
      title: 'Institutional Governance, Committees & Disclosures',
      category: 'governance',
      categoryLabel: 'Statutory Body',
      code: 'GOV/COMM/STAT',
      description: 'Statutory Governing Body resolutions, Internal Complaints Committee (ICC), Anti-Ragging Cell, and mandatory public disclosures.',
      href: '/about',
      statusBadge: 'Statutory Governance',
      statusType: 'active',
      actionText: 'Read Charters & Disclosures',
      specs: ['Anti-Ragging Cell', 'Internal Complaints (ICC)', 'Parent-Teacher Council'],
      department: 'Governing Body Secretariat',
    },
  ];

  const STATUTORY_DIRECTORIES = [
    { title: 'Campus Security & Safety Cell', href: '/about', code: 'SEC-01' },
    { title: 'Academic Grievance Committee', href: '/about', code: 'GRV-02' },
    { title: 'Annual Administrative Audit', href: '/results', code: 'AUD-03' },
    { title: 'AHSEC Subject Question Bank', href: '/learning', code: 'QPB-04' },
    { title: 'Fee Regulations & Waivers', href: '/admissions', code: 'FEE-05' },
    { title: 'NEET/JEE Career Guidance', href: '/academics', code: 'CAR-06' },
  ];

  const filteredPortals = activeTab === 'all' 
    ? PORTALS 
    : PORTALS.filter((p) => p.category === activeTab);

  // Active selected item
  const selectedPortal = PORTALS.find((p) => p.id === selectedPortalId) || filteredPortals[0] || PORTALS[0];

  return (
    <>
      <section className="bg-[#0B1523] text-white py-8 sm:py-10 border-y border-[#1E293B] relative overflow-hidden">
        {/* Subtle Background Geometry */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute -top-32 right-0 w-96 h-96 bg-[#0275D8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#1E293B]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-xs bg-[#0275D8] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  Official Directory
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">
                  Inspire Academy · AHSEC Affiliated #080345
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                Institutional Portals &amp; Quick Access
              </h2>
              <p className="text-xs text-[#94A3B8] max-w-2xl">
                Centralized academic gateways for curriculum, online admissions, examination archives, e-learning repositories, and administrative services.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 flex-wrap bg-[#131F33] p-1 rounded-xs border border-[#1E293B] shrink-0">
              {(['all', 'academic', 'admissions', 'student', 'governance'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    const matching = tab === 'all' ? PORTALS : PORTALS.filter((p) => p.category === tab);
                    if (matching.length > 0 && !matching.some((m) => m.id === selectedPortalId)) {
                      setSelectedPortalId(matching[0].id);
                    }
                  }}
                  className={`px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider rounded-xs transition-colors ${
                    activeTab === tab
                      ? 'bg-[#0275D8] text-white shadow-xs'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#1E293B]'
                  }`}
                >
                  {tab === 'all' ? `All (${PORTALS.length})` : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Compact Institutional Console (Two-Pane Responsive Layout with Smooth Vertical Scroll) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0E1B2D] border border-[#1E293B] rounded-xs overflow-hidden shadow-xl divide-y lg:divide-y-0 lg:divide-x divide-[#1E293B]">
            
            {/* Left Pane: Smooth Vertical Scroll List */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-[#131F33] px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#94A3B8] border-b border-[#1E293B] flex items-center justify-between">
                <span>Select Portal / Gateway</span>
                <span>{filteredPortals.length} Available</span>
              </div>

              <div className="max-h-[340px] overflow-y-auto divide-y divide-[#1E293B] scrollbar-thin scrollbar-thumb-[#1E293B] scrollbar-track-transparent">
                {filteredPortals.map((item) => {
                  const isSelected = item.id === selectedPortal.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedPortalId(item.id)}
                      className={`p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#16273F] border-l-4 border-l-[#0275D8] text-white' 
                          : 'hover:bg-[#131F33]/60 text-[#CBD5E1]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded-xs ${
                          isSelected ? 'bg-[#0275D8] text-white' : 'bg-[#1E293B] text-[#94A3B8]'
                        }`}>
                          {item.sl}
                        </span>
                        
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                              {item.code}
                            </span>
                            <span className="text-[10px] font-mono text-[#0275D8] uppercase">
                              · {item.categoryLabel}
                            </span>
                          </div>
                          <h3 className={`text-xs sm:text-sm font-semibold truncate ${
                            isSelected ? 'text-white font-bold' : 'text-[#E2E8F0]'
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs uppercase hidden sm:inline-block ${
                          item.statusType === 'urgent' 
                            ? 'bg-[#D84315] text-white' 
                            : item.statusType === 'verified'
                            ? 'bg-[#16865A] text-white'
                            : 'bg-[#1E293B] text-[#CBD5E1]'
                        }`}>
                          {item.statusBadge}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-[#0275D8] translate-x-0.5' : 'text-[#475569]'
                        }`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Pane: Active Selected Portal Detail & 1-Click Launch */}
            <div className="lg:col-span-5 bg-[#0B1523] flex flex-col justify-between p-4 sm:p-6 space-y-4">
              <div className="space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 border-b border-[#1E293B] pb-3">
                  <span className="text-[11px] font-mono font-bold text-[#0275D8] uppercase tracking-wider">
                    {selectedPortal.department}
                  </span>
                  <span className="px-2 py-0.5 rounded-xs bg-[#1E293B] text-white text-[10px] font-mono font-bold">
                    {selectedPortal.code}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white leading-snug">
                    {selectedPortal.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    {selectedPortal.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="space-y-1.5 pt-1">
                  {selectedPortal.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16865A] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#1E293B] flex items-center justify-between gap-3">
                <span className="text-[10px] font-mono text-[#64748B] uppercase">
                  Status: <strong className="text-[#86EFAC] font-semibold">{selectedPortal.statusBadge}</strong>
                </span>

                {selectedPortal.isAction ? (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#D84315] hover:bg-[#BF360C] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <span>{selectedPortal.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Link
                    href={selectedPortal.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#0275D8] hover:bg-[#025aa5] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <span>{selectedPortal.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

            </div>

          </div>

          {/* Statutory Cells Quick-Access Strip (Compact Dark Slate Ledger) */}
          <div className="bg-[#0E1B2D] border border-[#1E293B] rounded-xs p-3 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#86EFAC]" />
              <span className="text-xs font-mono font-bold uppercase text-[#CBD5E1]">
                Statutory Cells:
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {STATUTORY_DIRECTORIES.map((cell, cIdx) => (
                <Link
                  key={cIdx}
                  href={cell.href}
                  className="px-2.5 py-1 rounded-xs bg-[#131F33] hover:bg-[#1E293B] text-[#CBD5E1] hover:text-white border border-[#1E293B] text-[11px] font-mono whitespace-nowrap transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#0275D8] font-bold">[{cell.code}]</span>
                  <span>{cell.title}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Global Admissions Enquiry Modal */}
      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
