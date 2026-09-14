'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import LearningNav from '@/components/learning/LearningNav';
import GeneralKnowledgeReader from '@/components/learning/gk/GeneralKnowledgeReader';
import { 
  ChevronRight, 
  Globe, 
  BookOpen, 
  Sparkles, 
  Layers 
} from 'lucide-react';

export default function GeneralKnowledgePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />
      <LearningNav />

      <main className="flex-grow">
        {/* Category Header */}
        <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b border-[#0B2945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Path */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#86EFAC] mb-3">
              <Link href="/learning" className="hover:underline text-white/80">
                Learning Hub
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <span className="font-bold text-[#86EFAC]">
                General Knowledge
              </span>
            </div>

            <div className="max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-xs bg-white/10 text-white text-[11px] font-mono font-semibold uppercase">
                  CATEGORY 02
                </span>
                <span className="text-white/60 text-xs font-mono">·</span>
                <span className="text-[#86EFAC] text-xs font-mono">Reference Reader</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-white font-display leading-tight">
                General Knowledge
              </h1>

              <p className="text-xs sm:text-base text-[#E2E8F0] leading-relaxed max-w-2xl font-normal">
                Structured factual knowledge base covering Indian polity &amp; constitution, Assam &amp; Northeast history, physical geography, fundamental sciences, and world affairs.
              </p>
            </div>

          </div>
        </section>

        {/* General Knowledge Reader Workspace */}
        <section className="py-8 sm:py-12 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GeneralKnowledgeReader initialCategory="all" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
