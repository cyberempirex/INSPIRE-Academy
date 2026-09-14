'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function SeniorAcademics() {
  const { t } = useLanguage();
  const [activeStream, setActiveStream] = useState<'science' | 'arts'>('science');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="academics" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2945] font-display uppercase tracking-wide">
              {t('academics_heading')}
            </h2>
            <div className="w-20 h-1 bg-[#0275D8] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-[#64748B]">
              {t('academics_subheading')}
            </p>
          </div>

          {/* Stream Selector Tab Buttons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveStream('science')}
              className={`px-6 py-2.5 text-xs sm:text-sm font-bold uppercase rounded-full transition-all cursor-pointer flex items-center gap-2 ${
                activeStream === 'science'
                  ? 'bg-[#0275D8] text-white shadow-md'
                  : 'bg-white text-[#475569] hover:bg-[#E2E8F0] border border-[#CBD5E1]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t('tab_science')}</span>
            </button>
            <button
              onClick={() => setActiveStream('arts')}
              className={`px-6 py-2.5 text-xs sm:text-sm font-bold uppercase rounded-full transition-all cursor-pointer flex items-center gap-2 ${
                activeStream === 'arts'
                  ? 'bg-[#E65100] text-white shadow-md'
                  : 'bg-white text-[#475569] hover:bg-[#E2E8F0] border border-[#CBD5E1]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('tab_arts')}</span>
            </button>
          </div>

          {/* Stream 1: Science Prospectus Matrix */}
          {activeStream === 'science' && (
            <div className="space-y-6">
              <div className="bg-[#FFFFFF] border-2 border-[#93C5FD] rounded-md p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0275D8] uppercase">
                      Higher Secondary Science Division
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B2945] font-display">
                      {t('science_div_title')}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-[#EBF3FB] border border-[#90CAF9] text-[#0275D8] text-xs font-mono font-bold rounded self-start sm:self-auto">
                    Practical Labs Included
                  </span>
                </div>

                <p className="text-sm text-[#334155] leading-relaxed max-w-4xl">
                  {t('science_div_desc')}
                </p>

                {/* Structured Academic Subject Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-[#CBD5E1]">
                    <thead className="bg-[#0275D8] text-white font-mono uppercase text-[11px]">
                      <tr>
                        <th className="py-3 px-4">{t('th_subject')}</th>
                        <th className="py-3 px-4">{t('th_category')}</th>
                        <th className="py-3 px-4">{t('th_theory')}</th>
                        <th className="py-3 px-4">{t('th_practical')}</th>
                        <th className="py-3 px-4">{t('th_total')}</th>
                        <th className="py-3 px-4">{t('th_focus')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#CBD5E1] text-[#334155]">
                      <tr className="hover:bg-[#F0F7FF]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Physics</td>
                        <td className="py-3 px-4 font-mono">Elective Core</td>
                        <td className="py-3 px-4 font-mono">70 Marks</td>
                        <td className="py-3 px-4 font-mono">30 Marks (Lab)</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Mechanics, Thermodynamics, Electromagnetism, Optics</td>
                      </tr>
                      <tr className="hover:bg-[#F0F7FF]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Chemistry</td>
                        <td className="py-3 px-4 font-mono">Elective Core</td>
                        <td className="py-3 px-4 font-mono">70 Marks</td>
                        <td className="py-3 px-4 font-mono">30 Marks (Lab)</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Inorganic Trends, Organic Synthesis, Physical Chemistry</td>
                      </tr>
                      <tr className="hover:bg-[#F0F7FF]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Mathematics</td>
                        <td className="py-3 px-4 font-mono">Elective / Optional</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks (Internal)</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Calculus, Coordinate Geometry, Algebra, Probability</td>
                      </tr>
                      <tr className="hover:bg-[#F0F7FF]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Biology</td>
                        <td className="py-3 px-4 font-mono">Elective / Optional</td>
                        <td className="py-3 px-4 font-mono">70 Marks</td>
                        <td className="py-3 px-4 font-mono">30 Marks (Lab)</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Botany, Zoology, Genetics, Human Physiology, Ecology</td>
                      </tr>
                      <tr className="hover:bg-[#F0F7FF]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">English</td>
                        <td className="py-3 px-4 font-mono">Compulsory</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks (Internal)</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Core Literature, Prose, Grammar &amp; Composition</td>
                      </tr>
                      <tr className="hover:bg-[#F0F7FF]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">MIL / Alt. English</td>
                        <td className="py-3 px-4 font-mono">Compulsory</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks (Internal)</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Assamese / Bodo / Alternative English</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#CBD5E1]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                    <span className="font-bold text-[#0B2945]">Permitted Combinations:</span>
                    <span>PCM (Physics, Chemistry, Math) or PCB (Physics, Chemistry, Biology) or PCMB</span>
                  </div>
                  <Link
                    href="/academics"
                    className="text-xs font-bold text-[#0275D8] hover:text-[#0056B3] flex items-center gap-1.5 transition-colors"
                  >
                    <span>{t('view_syllabus_blueprint')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Stream 2: Arts Prospectus Matrix */}
          {activeStream === 'arts' && (
            <div className="space-y-6">
              <div className="bg-[#FFFFFF] border-2 border-[#FFCC80] rounded-md p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E65100] uppercase">
                      Higher Secondary Humanities Division
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B2945] font-display">
                      {t('arts_div_title')}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-[#FFF3E0] border border-[#FFB74D] text-[#E65100] text-xs font-mono font-bold rounded self-start sm:self-auto">
                    Humanities &amp; Social Sciences
                  </span>
                </div>

                <p className="text-sm text-[#334155] leading-relaxed max-w-4xl">
                  {t('arts_div_desc')}
                </p>

                {/* Structured Academic Subject Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-[#CBD5E1]">
                    <thead className="bg-[#E65100] text-white font-mono uppercase text-[11px]">
                      <tr>
                        <th className="py-3 px-4">{t('th_subject')}</th>
                        <th className="py-3 px-4">{t('th_category')}</th>
                        <th className="py-3 px-4">{t('th_theory')}</th>
                        <th className="py-3 px-4">{t('th_practical')}</th>
                        <th className="py-3 px-4">{t('th_total')}</th>
                        <th className="py-3 px-4">{t('th_focus')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#CBD5E1] text-[#334155]">
                      <tr className="hover:bg-[#FFF8E1]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Political Science</td>
                        <td className="py-3 px-4 font-mono">Elective Core</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Indian Constitution, Contemporary World Politics, Political Theory</td>
                      </tr>
                      <tr className="hover:bg-[#FFF8E1]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Economics</td>
                        <td className="py-3 px-4 font-mono">Elective Core</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Micro &amp; Macro Economics, Indian Economic Development, Statistics</td>
                      </tr>
                      <tr className="hover:bg-[#FFF8E1]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Education</td>
                        <td className="py-3 px-4 font-mono">Elective</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Educational Psychology, History of Indian Education, Methods</td>
                      </tr>
                      <tr className="hover:bg-[#FFF8E1]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Logic &amp; Philosophy</td>
                        <td className="py-3 px-4 font-mono">Elective</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Deductive &amp; Inductive Logic, Epistemology, Ethics</td>
                      </tr>
                      <tr className="hover:bg-[#FFF8E1]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">Advance Assamese / Bodo</td>
                        <td className="py-3 px-4 font-mono">Elective / Lang</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Classical Literature, Regional Poetry, Literary Criticism</td>
                      </tr>
                      <tr className="hover:bg-[#FFF8E1]">
                        <td className="py-3 px-4 font-bold text-[#0B2945]">English &amp; MIL</td>
                        <td className="py-3 px-4 font-mono">Compulsory</td>
                        <td className="py-3 px-4 font-mono">80 Marks</td>
                        <td className="py-3 px-4 font-mono">20 Marks</td>
                        <td className="py-3 px-4 font-mono font-bold">100 Marks</td>
                        <td className="py-3 px-4">Core English + Assamese / Bodo / Alt. English</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#CBD5E1]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                    <span className="font-bold text-[#0B2945]">Humanities Mentorship:</span>
                    <span>Model answer writing, essay critique, and civil services analytical drills</span>
                  </div>
                  <Link
                    href="/academics"
                    className="text-xs font-bold text-[#E65100] hover:underline flex items-center gap-1.5 transition-colors"
                  >
                    <span>{t('view_syllabus_blueprint')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
