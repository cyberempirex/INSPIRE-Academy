'use client';

import React, { useState } from 'react';
import { ArrowRight, Phone, FileCheck, Users, CheckCircle2, Award } from 'lucide-react';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function AdmissionsGuide() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ADMISSION_STEPS = [
    {
      step: '01',
      title: t('step_1_title'),
      desc: t('step_1_desc'),
    },
    {
      step: '02',
      title: t('step_2_title'),
      desc: t('step_2_desc'),
    },
    {
      step: '03',
      title: t('step_3_title'),
      desc: t('step_3_desc'),
    },
    {
      step: '04',
      title: t('step_4_title'),
      desc: t('step_4_desc'),
    },
  ];

  return (
    <>
      <section className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2945] font-display uppercase tracking-wide">
              {t('admissions_guide_heading')}
            </h2>
            <div className="w-20 h-1 bg-[#0275D8] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#64748B]">
              {t('admissions_guide_subheading')}
            </p>
          </div>

          {/* 4-Step Process Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {ADMISSION_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-5 bg-[#F8FAFC] rounded-md border-2 border-[#CBD5E1] hover:border-[#0275D8] transition-colors space-y-2 shadow-2xs"
              >
                <span className="text-xl font-bold font-mono text-[#0275D8] block">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-[#0B2945]">
                  {s.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Helpdesk Notice */}
          <div className="p-5 bg-[#0275D8] text-white rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-300 font-bold block">
                {t('helpdesk_title')}
              </span>
              <p className="text-xs sm:text-sm text-white/90">
                Monday – Saturday: 8:30 AM – 3:30 PM · Telephone: {ACADEMY_INFO.phone}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-[#FF6F00] hover:bg-[#E65100] text-white text-xs font-bold uppercase rounded shadow-xs transition-colors cursor-pointer"
              >
                {t('btn_apply_online')}
              </button>
              <a
                href={`tel:${ACADEMY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-4 py-2 bg-white text-[#0275D8] hover:bg-slate-100 text-xs font-bold uppercase rounded shadow-xs transition-colors font-mono"
              >
                {t('btn_call_desk')}
              </a>
            </div>
          </div>

        </div>
      </section>

      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
