'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Bell, 
  Calendar, 
  ArrowRight, 
  Download, 
  FileText, 
  Tag,
  Search
} from 'lucide-react';
import { NOTICES } from '@/lib/data/academy-data';
import NoticeDetailModal from '@/components/sections/NoticeDetailModal';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function NoticeBoardUpdates() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'admissions' | 'academic'>('all');
  const [selectedNotice, setSelectedNotice] = useState<any>(null);

  const filteredNotices = NOTICES.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'admissions') return item.category.toLowerCase().includes('admission');
    if (activeCategory === 'academic') return item.category.toLowerCase().includes('academic') || item.category.toLowerCase().includes('exam');
    return true;
  });

  return (
    <>
      <section id="notices" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* ========================================================================= */}
          {/* Section Heading with Curved Cyan Accent Line (Reference Portal Style)     */}
          {/* ========================================================================= */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b-2 border-[#0275D8]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2945] font-display uppercase tracking-wide">
                  {t('news_heading')}
                </h2>
                <div className="h-1 w-12 bg-[#00BCD4] rounded-full hidden sm:block" />
              </div>
              <p className="text-xs sm:text-sm text-[#64748B]">
                {t('news_subheading')}
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-xs font-bold uppercase rounded transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-[#0275D8] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:bg-[#E2E8F0] border border-[#CBD5E1]'
                }`}
              >
                {t('tab_all_notices')}
              </button>
              <button
                onClick={() => setActiveCategory('admissions')}
                className={`px-3 py-1.5 text-xs font-bold uppercase rounded transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === 'admissions'
                    ? 'bg-[#0275D8] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:bg-[#E2E8F0] border border-[#CBD5E1]'
                }`}
              >
                {t('tab_admissions_notices')}
              </button>
              <button
                onClick={() => setActiveCategory('academic')}
                className={`px-3 py-1.5 text-xs font-bold uppercase rounded transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === 'academic'
                    ? 'bg-[#0275D8] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:bg-[#E2E8F0] border border-[#CBD5E1]'
                }`}
              >
                {t('tab_exam_notices')}
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Tabular / List Official Gazette Items                                     */}
          {/* ========================================================================= */}
          <div className="bg-white border-2 border-[#93C5FD] rounded-md overflow-hidden shadow-xs divide-y divide-[#CBD5E1]">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="p-4 sm:p-5 hover:bg-[#F0F7FF] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Date Badge & Information */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#EBF3FB] border border-[#90CAF9] text-[#0275D8] rounded px-3 py-2 text-center shrink-0 min-w-[75px]">
                    <span className="text-[10px] font-mono uppercase block font-semibold">
                      {notice.date.split(' ')[0]}
                    </span>
                    <span className="text-base sm:text-lg font-bold font-mono block leading-tight">
                      {notice.date.split(' ')[1]?.replace(',', '') || '2026'}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-[#E2E8F0] text-[#0B2945] text-[10px] font-mono font-bold uppercase rounded">
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="px-2 py-0.5 bg-[#E53E3E] text-white text-[10px] font-mono font-bold uppercase rounded">
                          NEW
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-[#64748B]">
                        Ref: {notice.refNo}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0B2945] hover:text-[#0275D8] transition-colors">
                      <button
                        onClick={() => setSelectedNotice(notice)}
                        className="text-left cursor-pointer hover:underline"
                      >
                        {notice.title}
                      </button>
                    </h3>

                    <p className="text-xs text-[#475569] line-clamp-2">
                      {notice.summary}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-2 shrink-0 self-start md:self-center">
                  <button
                    onClick={() => setSelectedNotice(notice)}
                    className="px-3.5 py-1.5 bg-[#0275D8] hover:bg-[#0056B3] text-white text-xs font-bold uppercase rounded transition-colors cursor-pointer"
                  >
                    {t('view_notice_details')}
                  </button>
                  <Link
                    href={`/news?id=${notice.id}`}
                    className="p-1.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0B2945] rounded border border-[#CBD5E1] transition-colors"
                    title="Download Official PDF Gazette"
                  >
                    <Download className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Complete Archive Button */}
          <div className="text-center pt-2">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0B2945] hover:bg-[#0275D8] text-white text-xs sm:text-sm font-bold uppercase rounded-md shadow-md transition-colors"
            >
              <span>{t('view_complete_gazette')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Notice Detail Modal */}
      {selectedNotice && (
        <NoticeDetailModal
          notice={selectedNotice}
          isOpen={!!selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}
    </>
  );
}
