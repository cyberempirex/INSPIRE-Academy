'use client';

import React from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import LearningNav from '@/components/learning/LearningNav';
import SecondLayerCategoryGrid from '@/components/learning/SecondLayerCategoryGrid';

export default function SubjectPracticePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />
      <LearningNav />

      <main className="flex-grow">
        {/* Category Header */}
        <section className="bg-[#0B2945] text-white py-12 sm:py-16 border-b border-[#0B2945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#86EFAC] font-bold block">
                LEARNING HUB · CATEGORY 03
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-white font-display leading-tight">
                Subject Practice
              </h1>
              <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed font-normal">
                Class XI &amp; Class XII curriculum practice sets covering Science (PCM/PCB) and Arts &amp; Humanities disciplines aligned with the AHSEC board syllabus.
              </p>
            </div>
          </div>
        </section>

        {/* Second-Layer Sections Grid */}
        <section className="py-12 sm:py-16 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SecondLayerCategoryGrid categorySlug="subject-practice" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
