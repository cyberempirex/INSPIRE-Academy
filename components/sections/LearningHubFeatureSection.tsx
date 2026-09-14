'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, BookOpen, FileText, CheckSquare, HelpCircle, Compass, Calculator } from 'lucide-react';

const FEATURED_RESOURCES = [
  {
    title: 'General Knowledge Reference Bank',
    description: 'Fact bank covering Indian polity, history, geography, Assam & Northeast affairs, and science fundamentals.',
    href: '/learning/general-knowledge',
    category: 'Reference Reader',
  },
  {
    title: 'Current Affairs & Monthly Digest',
    description: 'National and regional events, policy developments, scientific breakthroughs, and editorial summaries.',
    href: '/learning/current-affairs',
    category: 'Daily Updates',
  },
  {
    title: 'AHSEC Subject Practice Sets',
    description: 'Curriculum-aligned question banks and model answer frameworks for Classes XI & XII Science and Arts.',
    href: '/learning/subject-practice',
    category: 'Board Prep',
  },
  {
    title: 'Academic Tools & Percentage Calculator',
    description: 'AHSEC aggregate percentage calculation, board examination division estimates, and official countdowns.',
    href: '/learning/tools',
    category: 'Student Tools',
  },
];

export default function LearningHubFeatureSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAFAF7] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16865A] block mb-1">
              DIGITAL ACADEMIC REPOSITORY
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2945] font-display leading-tight">
              Inspire Academy Learning Hub
            </h2>
            <div className="w-12 h-1 bg-[#C62832] mt-3" />
          </div>

          <Link
            href="/learning"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B2945] hover:text-[#16865A] transition-colors border-b border-[#0B2945] pb-0.5"
          >
            <span>Explore All 8 Learning Sections</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Structured Resource Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {FEATURED_RESOURCES.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="p-6 bg-white rounded-md border border-[#E2E8F0] hover:border-[#0B2945] transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#16865A] uppercase tracking-wider block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-[#0B2945] group-hover:text-[#16865A] transition-colors font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#E2E8F0] text-xs font-mono font-bold text-[#0B2945]">
                <span>Access Resource</span>
                <ChevronRight className="w-4 h-4 text-[#16865A] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
