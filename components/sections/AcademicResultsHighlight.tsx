'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Trophy, CheckCircle2 } from 'lucide-react';
import { RESULT_HIGHLIGHTS } from '@/lib/data/academy-data';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function AcademicResultsHighlight() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2945] font-display uppercase tracking-wide">
            {t('results_heading')}
          </h2>
          <div className="w-20 h-1 bg-[#0275D8] mx-auto mt-2" />
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t('results_subheading')}
          </p>
        </div>

        {/* Academic Record Ledger Table */}
        <div className="overflow-x-auto border-2 border-[#93C5FD] rounded-md bg-white shadow-xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-[#0275D8] text-white font-mono uppercase text-[11px]">
              <tr>
                <th className="py-3.5 px-4 font-bold">{t('th_session')}</th>
                <th className="py-3.5 px-4 font-bold">{t('th_stream')}</th>
                <th className="py-3.5 px-4 font-bold">{t('th_pass_rate')}</th>
                <th className="py-3.5 px-4 font-bold">{t('th_first_div')}</th>
                <th className="py-3.5 px-4 font-bold">{t('th_star_marks')}</th>
                <th className="py-3.5 px-4 font-bold">{t('th_board_status')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#CBD5E1] text-[#334155]">
              {RESULT_HIGHLIGHTS.map((item, idx) => (
                <tr key={`${item.year}-${idx}`} className="hover:bg-[#F0F7FF] transition-colors">
                  <td className="py-4 px-4 font-mono font-bold text-[#0B2945]">
                    {item.year}
                  </td>
                  <td className="py-4 px-4 font-semibold text-[#0B2945]">
                    {item.stream}
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-[#16865A] text-sm">
                    {item.passPercentage}
                  </td>
                  <td className="py-4 px-4 font-medium">
                    {item.firstDivisions}
                  </td>
                  <td className="py-4 px-4 text-[#334155]">
                    {item.starMarks}
                  </td>
                  <td className="py-4 px-4 font-mono text-[11px] text-[#0275D8] font-bold">
                    AHSEC Verified
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Advisory & Full Result Link */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#64748B] pt-2">
          <span>{t('results_footer_note')}</span>
          <Link
            href="/results"
            className="inline-flex items-center gap-1.5 font-bold text-[#0275D8] hover:text-[#0056B3] hover:underline"
          >
            <span>{t('view_full_results')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
