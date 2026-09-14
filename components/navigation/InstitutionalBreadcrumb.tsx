'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight, Printer, Share2 } from 'lucide-react';
import { ACADEMY_INFO } from '@/lib/data/academy-data';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InstitutionalBreadcrumbProps {
  items: BreadcrumbItem[];
  category?: string;
}

export default function InstitutionalBreadcrumb({
  items,
  category = 'Institutional Portal',
}: InstitutionalBreadcrumbProps) {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="bg-[#F0F4F8] border-b border-[#D8E2EC] py-2.5 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
        {/* Navigation Hierarchy */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 font-medium text-[#4A5D6E]">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#0275D8] transition-colors text-[#0B2945]"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-[#8EA0B1]" />
                {isLast || !item.href ? (
                  <span className="text-[#0B2945] font-bold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#0275D8] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Institutional Identifier & Utility */}
        <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-[#5A6E82]">
          <span className="px-2 py-0.5 bg-white border border-[#CBD5E1] rounded-xs text-[#0B2945] font-bold">
            AHSEC: {ACADEMY_INFO.schoolCode}
          </span>
          <span className="hidden md:inline text-[#8EA0B1]">|</span>
          <button
            onClick={handlePrint}
            className="hidden md:flex items-center gap-1 hover:text-[#0B2945] transition-colors cursor-pointer"
            title="Print this official page"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
        </div>
      </div>
    </div>
  );
}
