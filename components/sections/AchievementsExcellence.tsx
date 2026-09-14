'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, Target, Trophy, Award, Sparkles } from 'lucide-react';

const METRICS = [
  {
    id: 'since',
    circleBg: 'bg-[#1E5A8A]',
    icon: GraduationCap,
    label: 'ESTABLISHED',
    value: '2019',
    unit: 'SIMLA CAMPUS',
    description: 'Serving the community with dedicated senior-secondary focus.',
  },
  {
    id: 'focus',
    circleBg: 'bg-[#178653]',
    icon: Users,
    label: 'STUDENT FOCUS',
    value: 'XI & XII',
    unit: 'AHSEC BOARD',
    description: 'Science (PCM/PCB) & Arts streams with faculty mentorship.',
  },
  {
    id: 'approach',
    circleBg: 'bg-[#C9252D]',
    icon: Target,
    label: 'PEDAGOGY',
    value: 'Concept',
    unit: 'FIRST PRINCIPLES',
    description: 'Clarity over memorization, weekly drills, and doubt resolution.',
  },
  {
    id: 'goal',
    circleBg: 'bg-[#123B63]',
    icon: Trophy,
    label: 'OUTCOMES',
    value: 'Excellence',
    unit: 'BOARD & ENTRANCE',
    description: 'Preparing students for top universities and competitive careers.',
  },
];

export default function AchievementsExcellence() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#06182C] text-white border-b border-[#1E5A8A]/30 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* ASYMMETRIC BACKGROUND ARCHITECTURE: Midnight Navy & Emerald Geometry     */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Asymmetric Emerald Angled Flare */}
        <div 
          className="absolute top-0 right-0 w-full sm:w-[50%] h-full bg-gradient-to-bl from-[#178653]/20 via-[#123B63]/25 to-transparent"
          style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />

        {/* Orbit Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Technical Coordinate Stamp */}
        <div className="absolute top-6 right-8 font-mono-meta text-[10px] uppercase text-[#86EFAC]/25 font-bold tracking-widest hidden md:block">
          INSTITUTIONAL TRACK RECORD // AHSEC 2019-2026
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono-meta text-xs uppercase tracking-widest text-[#86EFAC] font-bold">
                TRACK RECORD &amp; VALUES
              </span>
              <span className="h-px w-8 bg-[#86EFAC]" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Committed to Excellence
            </h2>
            <div className="w-12 h-1.5 bg-[#C9252D] rounded-full mt-3" />
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#86EFAC] hover:text-white transition-colors self-start sm:self-auto px-4 py-2 bg-white/10 rounded-lg border border-white/15"
          >
            <span>Our Institutional Heritage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Asymmetric Circular Badge Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="relative bg-white/5 border border-white/10 hover:border-[#86EFAC]/40 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-all group overflow-hidden"
              >
                {/* Circular Badge Icon */}
                <div className={`w-16 h-16 rounded-full ${metric.circleBg} flex items-center justify-center text-white shadow-lg border-2 border-white/20 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-8 h-8 stroke-[1.8]" />
                </div>

                {/* Metric Header */}
                <div>
                  <span className="font-mono-meta text-[10px] uppercase tracking-widest text-[#86EFAC] font-bold block mb-1">
                    {metric.label}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {metric.value}
                  </h3>
                  <span className="text-[10px] font-mono-meta text-white/50 block mt-0.5">
                    {metric.unit}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#E8EDF1]/80 leading-relaxed border-t border-white/10 pt-3">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
