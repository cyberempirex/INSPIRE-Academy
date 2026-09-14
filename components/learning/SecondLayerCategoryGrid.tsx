'use client';

import React from 'react';
import Link from 'next/link';
import { SECOND_LAYER_CATEGORIES, SubCategory } from '@/lib/types/learning-subcategories';
import { ArrowRight, Folder, Layers, BookOpen } from 'lucide-react';

interface SecondLayerCategoryGridProps {
  categorySlug: string;
}

export default function SecondLayerCategoryGrid({ categorySlug }: SecondLayerCategoryGridProps) {
  const categoryData = SECOND_LAYER_CATEGORIES[categorySlug];

  if (!categoryData) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16865A]">
            SECOND-LAYER SECTIONS ({categoryData.subcategories.length})
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2945] font-display">
            Select a Topic Area
          </h2>
        </div>
        <span className="text-xs font-mono text-[#64748B]">
          Click any section to view content modules
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categoryData.subcategories.map((sub, idx) => {
          const href = `/learning/${categorySlug}/${sub.slug}`;

          return (
            <Link
              key={sub.id}
              href={href}
              className="group bg-white rounded-md border border-[#E2E8F0] p-5 sm:p-6 shadow-xs hover:border-[#0B2945] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-sm bg-[#0B2945] text-white flex items-center justify-center group-hover:bg-[#16865A] transition-colors">
                    <Folder className="w-4 h-4 text-[#86EFAC]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#64748B] bg-[#FAFAF7] px-2 py-0.5 rounded-xs border border-[#E2E8F0]">
                    {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#0B2945] group-hover:text-[#16865A] transition-colors flex items-center justify-between">
                    <span>{sub.title}</span>
                    <ArrowRight className="w-4 h-4 text-[#0B2945] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  {sub.shortDescription && (
                    <p className="text-xs text-[#334155] leading-relaxed">
                      {sub.shortDescription}
                    </p>
                  )}
                </div>

                {/* If streams exist (like in Class 11 / 12) */}
                {sub.streams && sub.streams.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {sub.streams.map((stream) => (
                      <span
                        key={stream}
                        className="px-2 py-0.5 bg-[#FAFAF7] text-[#0B2945] border border-[#E2E8F0] rounded-xs text-[10px] font-semibold"
                      >
                        {stream}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span className="text-[#16865A] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16865A]" />
                  Section Ready
                </span>
                <span className="text-[#64748B] group-hover:text-[#0B2945] font-medium flex items-center gap-1">
                  Open Section <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
