'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import LearningNav from '@/components/learning/LearningNav';
import { SECOND_LAYER_CATEGORIES } from '@/lib/types/learning-subcategories';
import PercentageCalculatorWidget from '@/components/learning/tools/PercentageCalculatorWidget';
import ExamCountdownWidget from '@/components/learning/tools/ExamCountdownWidget';
import GeneralKnowledgeReader from '@/components/learning/gk/GeneralKnowledgeReader';
import { GKCategorySlug } from '@/lib/types/general-knowledge';
import { 
  ArrowLeft, 
  FolderOpen, 
  Search, 
  Filter, 
  ChevronRight, 
  Layers,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Tag,
  Calendar,
  Clock,
  Compass,
  FileText
} from 'lucide-react';

interface SubCategoryPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

export default function SubCategoryPage({ params }: SubCategoryPageProps) {
  const resolvedParams = use(params);
  const { category, subcategory } = resolvedParams;

  const parentCategory = SECOND_LAYER_CATEGORIES[category];
  if (!parentCategory) {
    notFound();
  }

  const currentSub = parentCategory.subcategories.find((s) => s.slug === subcategory);
  if (!currentSub) {
    notFound();
  }

  // In-Page Interactive Filter State (Shallow UX — no deep navigation)
  const initialFilter = currentSub.inPageFilters && currentSub.inPageFilters.length > 0 
    ? currentSub.inPageFilters[0] 
    : 'All';
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [activeStream, setActiveStream] = useState<string>('All Streams');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Check if this is an interactive tool or GK reader
  const isPercentageCalc = category === 'tools' && subcategory === 'percentage-calculator';
  const isExamCountdown = category === 'tools' && subcategory === 'exam-countdown';
  const isGKCategory = category === 'general-knowledge';

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />
      <LearningNav />

      <main className="flex-grow">
        {/* Shallow Category Header with Breadcrumbs */}
        <section className="bg-[#0B2945] text-white py-8 sm:py-12 border-b border-[#0B2945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Direct Breadcrumb Path (Max 2 Steps: Hub -> Parent -> Page) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#86EFAC] mb-3">
              <Link href="/learning" className="hover:underline text-white/80">
                Learning Hub
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <Link href={parentCategory.href} className="hover:underline text-white/80">
                {parentCategory.title}
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <span className="font-bold text-[#86EFAC]">
                {currentSub.title}
              </span>
            </div>

            <div className="max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-xs bg-white/10 text-white text-[11px] font-mono font-semibold uppercase">
                  {parentCategory.title}
                </span>
                <span className="text-white/60 text-xs font-mono">·</span>
                <span className="text-[#86EFAC] text-xs font-mono">Full Content Page</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold text-white font-display leading-tight">
                {currentSub.title}
              </h1>

              {currentSub.shortDescription && (
                <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed max-w-2xl font-normal">
                  {currentSub.shortDescription}
                </p>
              )}
            </div>

          </div>
        </section>

        {/* Quick Sibling Switcher Bar */}
        <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
              <span className="text-[11px] font-mono text-[#64748B] font-bold uppercase whitespace-nowrap mr-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#0B2945]" />
                {parentCategory.title}:
              </span>
              {parentCategory.subcategories.map((sibling) => {
                const isCurrent = sibling.slug === currentSub.slug;
                return (
                  <Link
                    key={sibling.id}
                    href={`/learning/${parentCategory.slug}/${sibling.slug}`}
                    className={`px-3 py-1 rounded-xs text-xs font-semibold whitespace-nowrap transition-colors border ${
                      isCurrent
                        ? 'bg-[#0B2945] text-white border-[#0B2945] shadow-xs'
                        : 'bg-white text-[#334155] border-[#E2E8F0] hover:text-[#0B2945] hover:border-[#0B2945]'
                    }`}
                  >
                    {sibling.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content Area — Single Screen, Shallow Architecture */}
        <section className="py-8 sm:py-12 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 1. Interactive Widgets for Academic Tools */}
            {isPercentageCalc ? (
              <div className="space-y-6">
                <PercentageCalculatorWidget />
              </div>
            ) : isExamCountdown ? (
              <div className="space-y-6">
                <ExamCountdownWidget />
              </div>
            ) : isGKCategory ? (
              /* 2. General Knowledge Full Content Reader for the selected subcategory */
              <div className="space-y-6">
                <GeneralKnowledgeReader 
                  initialCategory={subcategory as GKCategorySlug} 
                />
              </div>
            ) : (
              /* 3. Direct In-Page Content Hub (Tabs, Search, and In-Page Topic Sections) for CMS Readiness */
              <div className="space-y-6">

                {/* In-Page Stream Selector for Subject Practice */}
                {currentSub.streams && currentSub.streams.length > 0 && (
                  <div className="flex items-center gap-2 bg-[#FAFAF7] p-1.5 rounded-md border border-[#E2E8F0] max-w-md">
                    {currentSub.streams.map((stream) => (
                      <button
                        key={stream}
                        onClick={() => setActiveStream(stream)}
                        className={`flex-1 py-1.5 px-3 text-xs font-bold rounded-xs transition-colors cursor-pointer text-center ${
                          activeStream === stream
                            ? 'bg-[#0B2945] text-white shadow-xs'
                            : 'text-[#334155] hover:text-[#0B2945]'
                        }`}
                      >
                        {stream}
                      </button>
                    ))}
                  </div>
                )}

                {/* In-Page Search Bar & Direct Filters Bar */}
                <div className="bg-white p-4 sm:p-5 rounded-md border border-[#E2E8F0] shadow-xs space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-lg">
                      <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={currentSub.searchPlaceholder || `Search within ${currentSub.title}...`}
                        className="w-full pl-9 pr-4 py-2 bg-[#FAFAF7] border border-[#E2E8F0] rounded-xs text-xs sm:text-sm text-[#0B2945] placeholder:text-[#64748B]/70 focus:border-[#0B2945] focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div className="text-xs font-mono text-[#64748B] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16865A]" />
                      <span className="font-semibold text-[#0B2945]">Active View:</span>
                      <span className="text-[#16865A] font-bold">{activeFilter}</span>
                    </div>
                  </div>

                  {/* In-Page Topic Tabs / Category Filters (Shallow In-Page Filtering, NOT navigation links) */}
                  {currentSub.inPageFilters && currentSub.inPageFilters.length > 0 && (
                    <div className="pt-2 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                        <span className="text-[11px] font-mono text-[#64748B] uppercase font-bold mr-1 flex items-center gap-1 shrink-0">
                          <Filter className="w-3 h-3 text-[#0B2945]" />
                          Filter:
                        </span>
                        {currentSub.inPageFilters.map((filterName) => {
                          const isActive = activeFilter === filterName;
                          return (
                            <button
                              key={filterName}
                              onClick={() => setActiveFilter(filterName)}
                              className={`px-3 py-1 text-xs font-semibold rounded-xs border transition-colors whitespace-nowrap cursor-pointer ${
                                isActive
                                  ? 'bg-[#0B2945] text-white border-[#0B2945] shadow-xs'
                                  : 'bg-[#FAFAF7] text-[#334155] border-[#E2E8F0] hover:text-[#0B2945] hover:border-[#0B2945]'
                              }`}
                            >
                              {filterName}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct In-Page Content Grid / Empty State */}
                <div className="bg-white rounded-md border border-[#E2E8F0] p-8 sm:p-14 text-center shadow-xs">
                  <div className="max-w-md mx-auto space-y-5">
                    <div className="w-16 h-16 rounded-md bg-[#FAFAF7] border border-[#E2E8F0] flex items-center justify-center mx-auto text-[#0B2945]">
                      <FolderOpen className="w-8 h-8 text-[#0B2945]/70 stroke-[1.5]" />
                    </div>

                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAF7] text-[#0B2945] text-xs font-mono font-semibold border border-[#E2E8F0]">
                        <span className="w-2 h-2 rounded-full bg-[#16865A]" />
                        <span>{parentCategory.title} · {currentSub.title}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#0B2945] font-display uppercase tracking-wide">
                        {activeFilter !== 'All' && activeFilter !== 'All Topics' && activeFilter !== 'All Sections' ? activeFilter : currentSub.title}
                      </h3>

                      <p className="text-sm font-semibold text-[#0B2945]">
                        No content available yet.
                      </p>

                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-sm mx-auto">
                        Content will appear here when published.
                      </p>
                    </div>

                    {/* Metadata Scaffold */}
                    <div className="pt-4 border-t border-[#E2E8F0] grid grid-cols-2 gap-3 text-left text-xs font-mono">
                      <div className="p-3 bg-[#FAFAF7] rounded-xs border border-[#E2E8F0]">
                        <span className="text-[#64748B] block text-[10px] uppercase font-bold">Active Section</span>
                        <span className="text-[#0B2945] font-semibold truncate block">
                          {activeFilter}
                        </span>
                      </div>
                      <div className="p-3 bg-[#FAFAF7] rounded-xs border border-[#E2E8F0]">
                        <span className="text-[#64748B] block text-[10px] uppercase font-bold">Publishing Status</span>
                        <span className="text-[#16865A] font-semibold">CMS Ready</span>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <Link
                        href={parentCategory.href}
                        className="px-4 py-2 bg-[#0B2945] hover:bg-[#16865A] text-white text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-2 shadow-xs"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to {parentCategory.title}</span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
