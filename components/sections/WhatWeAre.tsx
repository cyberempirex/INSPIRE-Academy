'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Users, FlaskConical, BookCheck } from 'lucide-react';

export default function WhatWeAre() {
  return (
    <section className="bg-[#FFFFFF] border-b border-[#E8EDF1] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline pb-8 border-b border-[#E8EDF1]">
          
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#C9252D]" />
              <span className="font-mono-meta text-xs uppercase tracking-wider text-[#178653] font-bold">
                Institutional Profile
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B63] leading-tight font-display">
              Focused Senior Secondary Academy.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-[#39434D] leading-relaxed">
              Inspire Academy was established in 2019 in Simla, Assam, specializing exclusively in Class XI and XII education. Our academic schedule, laboratory setup, and faculty mentorship are specifically tailored for board examinations and competitive entrance readiness.
            </p>
          </div>
        </div>

        {/* 4 Academic Pillars in Cool Grey with Blue Accents */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-6 bg-[#E8EDF1] space-y-3 border-t-2 border-[#123B63]">
            <div className="w-9 h-9 bg-[#123B63] text-white flex items-center justify-center">
              <Award className="w-4 h-4 text-[#86EFAC]" />
            </div>
            <h3 className="font-bold text-[#123B63] text-base font-display">
              AHSEC Board Focus
            </h3>
            <p className="text-xs text-[#39434D] leading-relaxed">
              Direct curriculum alignment with regular chapter assessments and model board test papers.
            </p>
          </div>

          <div className="p-6 bg-[#E8EDF1] space-y-3 border-t-2 border-[#178653]">
            <div className="w-9 h-9 bg-[#123B63] text-white flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-[#86EFAC]" />
            </div>
            <h3 className="font-bold text-[#123B63] text-base font-display">
              Practical Science Labs
            </h3>
            <p className="text-xs text-[#39434D] leading-relaxed">
              Equipped Physics, Chemistry, and Biology apparatus for hands-on experiments and viva preparation.
            </p>
          </div>

          <div className="p-6 bg-[#E8EDF1] space-y-3 border-t-2 border-[#1E5A8A]">
            <div className="w-9 h-9 bg-[#123B63] text-white flex items-center justify-center">
              <Users className="w-4 h-4 text-[#86EFAC]" />
            </div>
            <h3 className="font-bold text-[#123B63] text-base font-display">
              Personal Mentorship
            </h3>
            <p className="text-xs text-[#39434D] leading-relaxed">
              Accessible batch sizes enabling dedicated doubt-solving and individual student tracking.
            </p>
          </div>

          <div className="p-6 bg-[#E8EDF1] space-y-3 border-t-2 border-[#C9252D]">
            <div className="w-9 h-9 bg-[#123B63] text-white flex items-center justify-center">
              <BookCheck className="w-4 h-4 text-[#86EFAC]" />
            </div>
            <h3 className="font-bold text-[#123B63] text-base font-display">
              Entrance Foundations
            </h3>
            <p className="text-xs text-[#39434D] leading-relaxed">
              Integrated foundational orientation for NEET, JEE, CUET, and university degree programs.
            </p>
          </div>

        </div>

        {/* Footer Navigation Link */}
        <div className="mt-8 pt-4 border-t border-[#E8EDF1] flex flex-wrap items-center justify-between gap-2 text-xs font-mono-meta">
          <span className="text-[#39434D]">
            Estd. 2019 • Simla, Baksa, Assam
          </span>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 font-bold text-[#123B63] hover:text-[#178653] uppercase tracking-wider transition-colors"
          >
            <span>Learn More About Our Academy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
