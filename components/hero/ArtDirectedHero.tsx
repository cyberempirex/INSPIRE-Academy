'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bell, Calendar, ChevronRight } from 'lucide-react';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';

export default function ArtDirectedHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#FFFFFF] border-b border-[#E2E8F0]">
        
        {/* Main Institutional Entrance Canvas */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Authoritative Institutional Identification */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Academic Affiliation Bar */}
                <div className="inline-flex flex-wrap items-center gap-2 text-xs font-mono text-[#0B2945]">
                  <span className="px-2.5 py-0.5 bg-[#0B2945] text-white font-bold tracking-wider uppercase rounded-xs">
                    ESTD. 2019
                  </span>
                  <span className="font-semibold text-[#64748B]">
                    SIMLA, BAKSA · ASSAM
                  </span>
                  <span className="text-[#CBD5E1]">·</span>
                  <span className="text-[#16865A] font-bold">
                    AHSEC AFFILIATION
                  </span>
                </div>

                {/* The Academy Name Itself is the Hero Identity */}
                <div className="space-y-1">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#0B2945] font-display tracking-tight leading-[1.04]">
                    INSPIRE ACADEMY
                  </h1>
                  <p className="text-lg sm:text-2xl font-bold text-[#16865A]">
                    Senior Secondary School · Classes XI &amp; XII
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-[#64748B] pt-0.5">
                    Science (PCM / PCB) &amp; Arts (Humanities) · Simla, District Baksa, Assam
                  </p>
                </div>

                {/* Substantive Institutional Statement */}
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-2xl font-normal pt-2">
                  Inspire Academy is a dedicated higher secondary institution in Simla, District Baksa, providing focused two-year academic instruction for Higher Secondary first and second year students. With fully equipped science laboratories, experienced local faculty, regular unit tests, and comprehensive board preparation, the academy fosters disciplined study routines and academic distinction.
                </p>
              </div>

              {/* Institutional Facts Strip */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#E2E8F0] bg-[#FAFAF7] px-4 rounded-xs">
                <div>
                  <span className="block text-[11px] font-mono text-[#64748B] uppercase">Academic Streams</span>
                  <span className="text-sm sm:text-base font-bold text-[#0B2945]">Science &amp; Arts</span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#64748B] uppercase">Affiliated Council</span>
                  <span className="text-sm sm:text-base font-bold text-[#0B2945]">AHSEC, Assam</span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#64748B] uppercase">Campus Desk</span>
                  <span className="text-sm sm:text-base font-bold text-[#16865A]">Simla, Baksa</span>
                </div>
              </div>

              {/* Single Dignified Action */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 bg-[#16865A] hover:bg-[#126b48] text-white text-sm font-bold tracking-wide rounded-md transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Apply for Admission (2026–27)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/academics"
                  className="text-xs sm:text-sm font-bold text-[#0B2945] hover:text-[#16865A] underline underline-offset-4 transition-colors"
                >
                  View Academic Curriculum →
                </Link>
              </div>

            </div>

            {/* Right Column: Real School Photography with Institutional Dignity */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] rounded-md overflow-hidden border border-[#E2E8F0] bg-[#0B2945] flex flex-col justify-end shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="Inspire Academy classroom and student campus life in Simla, Baksa"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2945]/95 via-[#0B2945]/30 to-transparent" />
                
                {/* Official Institutional Caption Plate */}
                <div className="relative z-10 p-5 text-white border-t border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#86EFAC] font-bold">
                      Campus Archive
                    </span>
                    <span className="text-[10px] font-mono text-white/80 bg-white/15 px-2 py-0.5 rounded-xs">
                      Simla, Baksa
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white font-display">
                    Inspire Academy Campus &amp; Academic Learning
                  </p>
                  <p className="text-xs text-[#E2E8F0]/80">
                    Higher Secondary Classes XI &amp; XII · Science &amp; Arts Streams
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Institutional Notice / Gazette Dispatch Strip */}
        <div className="bg-[#0B2945] text-white border-t border-[#163E66] py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 bg-[#C62832] text-white font-bold font-mono text-[10px] uppercase tracking-wider rounded-xs flex items-center gap-1 shrink-0">
                <Bell className="w-3 h-3" />
                Official Gazette
              </span>
              <p className="text-[#E2E8F0] font-medium truncate">
                AHSEC Class XI &amp; XII Admissions 2026–27 Open · Merit-based Enrolment in Science &amp; Arts
              </p>
            </div>
            <Link
              href="/news"
              className="text-[#86EFAC] hover:text-white font-mono text-xs font-semibold shrink-0 flex items-center gap-1 self-end sm:self-auto"
            >
              <span>View All Notices</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </section>

      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
