'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bell, FileText, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function QuickActionPortalBars() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ACTION_ITEMS = [
    {
      id: 'act-1',
      title: t('action_1_title') || 'AHSEC HS 1st & 2nd Year Academic Session 2026–27 Online Registration',
      category: 'AHSEC Board Portal',
      href: '/academics',
      isNew: true,
      isAction: false,
      btnLabel: 'Click Here >>',
      code: 'REG-2026',
    },
    {
      id: 'act-2',
      title: t('action_2_title') || 'Fresh Admissions Open for Class XI Science & Arts (DARPAN Integrated)',
      category: 'Admissions Desk',
      href: '#',
      isNew: true,
      isAction: true,
      btnLabel: 'Apply Online >>',
      code: 'ADM-XI',
    },
    {
      id: 'act-3',
      title: t('action_3_title') || 'Download AHSEC Model Question Papers & Unit Evaluation Schedules',
      category: 'Academic Repository',
      href: '/learning',
      isNew: true,
      isAction: false,
      btnLabel: 'Download PDF >>',
      code: 'SYL-2026',
    },
    {
      id: 'act-4',
      title: t('action_4_title') || 'Merit Scholarship & Fee Waiver Application for High Achievers (90%+ in HSLC)',
      category: 'Scholarship Office',
      href: '/admissions',
      isNew: false,
      isAction: false,
      btnLabel: 'View Criteria >>',
      code: 'SCHOLAR-26',
    },
    {
      id: 'act-5',
      title: 'Institutional Anti-Ragging Cell & Student Disciplinary Charter 2026',
      category: 'Statutory Body',
      href: '/about',
      isNew: false,
      isAction: false,
      btnLabel: 'Read Charter >>',
      code: 'STAT-05',
    },
  ];

  return (
    <>
      <section className="bg-[#EBF3FA] py-8 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          {/* Institutional Header Strip */}
          <div className="flex items-center justify-between pb-2 border-b border-[#CBD5E1]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D84315] animate-ping" />
              <h3 className="text-xs sm:text-sm font-bold text-[#0B2945] font-display uppercase tracking-wider">
                Official Board &amp; Institutional Gazette Notifications
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#0275D8] hidden sm:inline font-semibold">
              Inspire Academy · Simla Campus
            </span>
          </div>

          {/* Action Row Elements (High-Authority Gazette Style with Sharp Contrast & Badges) */}
          <div className="space-y-2.5">
            {ACTION_ITEMS.map((item) => {
              const isHighlighted = item.isNew;

              if (item.isAction) {
                return (
                  <div
                    key={item.id}
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1E293B] hover:bg-[#0B2945] text-white p-3 sm:p-3.5 rounded-xs border-l-4 border-[#0275D8] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5 flex-wrap min-w-0 pr-2">
                      {isHighlighted ? (
                        <span className="px-2 py-0.5 bg-[#D84315] text-white text-[10px] font-mono font-bold uppercase rounded-xs tracking-wider">
                          NEW
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-[#475569] text-white text-[10px] font-mono font-bold uppercase rounded-xs tracking-wider">
                          NOTICE
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-[#94A3B8] uppercase">
                        [{item.code}]
                      </span>
                      <span className="text-xs sm:text-sm font-bold tracking-wide uppercase group-hover:text-[#86EFAC] transition-colors line-clamp-1">
                        {item.title}
                      </span>
                    </div>

                    <span className="px-3.5 py-1.5 bg-[#0275D8] group-hover:bg-[#025aa5] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors self-start sm:self-auto shrink-0 shadow-2xs">
                      [{item.btnLabel}]
                    </span>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="bg-[#1E293B] hover:bg-[#0B2945] text-white p-3 sm:p-3.5 rounded-xs border-l-4 border-[#0275D8] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-2.5 flex-wrap min-w-0 pr-2">
                    {isHighlighted ? (
                      <span className="px-2 py-0.5 bg-[#D84315] text-white text-[10px] font-mono font-bold uppercase rounded-xs tracking-wider">
                        NEW
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-[#475569] text-white text-[10px] font-mono font-bold uppercase rounded-xs tracking-wider">
                        NOTICE
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-[#94A3B8] uppercase">
                      [{item.code}]
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-wide uppercase group-hover:text-[#86EFAC] transition-colors line-clamp-1">
                      {item.title}
                    </span>
                  </div>

                  <span className="px-3.5 py-1.5 bg-[#0275D8] group-hover:bg-[#025aa5] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors self-start sm:self-auto shrink-0 shadow-2xs">
                    [{item.btnLabel}]
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Global Admissions Enquiry Modal */}
      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}


