'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FolderOpen, 
  Search, 
  Filter, 
  ArrowLeft, 
  RefreshCw,
  Sparkles,
  BookOpen,
  PlusCircle
} from 'lucide-react';

interface LearningEmptyStateProps {
  categoryTitle: string;
  categorySlug: string;
  categoryDescription?: string;
  targetAudience?: string;
  filterOptions?: string[];
}

export default function LearningEmptyState({
  categoryTitle,
  categorySlug,
  categoryDescription,
  targetAudience,
  filterOptions = ['All Topics', 'Class XI', 'Class XII', 'Science', 'Arts'],
}: LearningEmptyStateProps) {
  return (
    <div className="space-y-8">
      {/* CMS & Content Filter Bar Scaffold (Ready for live filtering) */}
      <div className="bg-white p-4 sm:p-5 rounded-md border border-[#E8EDF1] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Scaffold */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#39434D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            disabled
            placeholder={`Search ${categoryTitle}...`}
            className="w-full pl-9 pr-4 py-2 bg-[#F1F3F2] border border-[#E8EDF1] rounded-xs text-xs sm:text-sm text-[#123B63] placeholder:text-[#39434D]/60 cursor-not-allowed opacity-80"
          />
        </div>

        {/* Filter Badges Scaffold */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#39434D] mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#123B63]" />
            Filters:
          </span>
          {filterOptions.map((filter, idx) => (
            <span
              key={filter}
              className={`px-3 py-1 text-xs font-medium rounded-xs border ${
                idx === 0
                  ? 'bg-[#123B63] text-white border-[#123B63]'
                  : 'bg-[#F1F3F2] text-[#39434D] border-[#E8EDF1]'
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>

      {/* Dignified & Clean Empty State Card */}
      <div className="bg-white rounded-md border border-[#E8EDF1] p-10 sm:p-16 text-center shadow-xs">
        <div className="max-w-md mx-auto space-y-5">
          {/* Institutional Icon */}
          <div className="w-16 h-16 rounded-md bg-[#F1F3F2] border border-[#E8EDF1] flex items-center justify-center mx-auto text-[#123B63]">
            <FolderOpen className="w-8 h-8 text-[#123B63]/70 stroke-[1.5]" />
          </div>

          {/* Category Heading & Status */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F3F2] text-[#123B63] text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#178653]" />
              <span>Category Structure Ready</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#123B63] font-display uppercase tracking-wide">
              {categoryTitle}
            </h3>

            <p className="text-sm font-semibold text-[#123B63]">
              No content available yet.
            </p>

            <p className="text-xs sm:text-sm text-[#39434D] leading-relaxed max-w-sm mx-auto">
              Learning materials will appear here when published.
            </p>
          </div>

          {/* Section Metadata & Technical Scaffold */}
          <div className="pt-4 border-t border-[#E8EDF1] grid grid-cols-2 gap-3 text-left text-xs font-mono">
            <div className="p-3 bg-[#F1F3F2] rounded-xs border border-[#E8EDF1]/80">
              <span className="text-[#39434D]/70 block text-[10px] uppercase font-bold">Category Key</span>
              <span className="text-[#123B63] font-semibold">{categorySlug}</span>
            </div>
            <div className="p-3 bg-[#F1F3F2] rounded-xs border border-[#E8EDF1]/80">
              <span className="text-[#39434D]/70 block text-[10px] uppercase font-bold">Content Status</span>
              <span className="text-[#178653] font-semibold">Ready for Publishing</span>
            </div>
          </div>

          {/* Quick Action Navigation */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/learning"
              className="px-4 py-2 bg-[#123B63] hover:bg-[#1E5A8A] text-white text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Learning Categories</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
