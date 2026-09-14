'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Megaphone, ArrowRight, Phone, Sparkles, Calendar, Award } from 'lucide-react';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { ACADEMY_INFO } from '@/lib/data/academy-data';

export default function AdmissionsStrip() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#06182C] text-white py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b-2 border-[#178653] shadow-md overflow-hidden">
        
        {/* ========================================================================= */}
        {/* ASYMMETRIC BACKGROUND ARCHITECTURE: Diagonal Split Ribbon & Mesh          */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Asymmetric Emerald & Deep Navy Diagonal Shard */}
          <div 
            className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-l from-[#178653]/30 via-[#123B63]/40 to-transparent"
            style={{
              clipPath: 'polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)'
            }}
          />
          {/* Linear Grid Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* Left: Asymmetric Announcement Hub */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-lg bg-[#178653] border border-[#86EFAC]/30 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
              <Megaphone className="w-5 h-5 text-white" />
            </div>
            
            <div>
              <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                <span className="font-mono-meta text-[10px] font-bold uppercase tracking-widest text-[#06182C] bg-[#86EFAC] px-2 py-0.5 rounded-sm">
                  ADMISSIONS 2026–27
                </span>
                <span className="text-xs text-[#E8EDF1]/60 font-mono-meta flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#86EFAC]" />
                  <span>Enrolment Open For Class XI</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#FFFFFF] mt-1">
                Seats available in <span className="text-[#86EFAC] font-bold">Science (PCM/PCB)</span> and <span className="text-[#E8EDF1] font-bold">Arts (Humanities)</span> at Simla Campus.
              </p>
            </div>
          </div>

          {/* Right: Quick Action Group */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#178653] hover:bg-[#1E9E64] text-white text-xs sm:text-sm font-bold rounded-lg transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-[#86EFAC]" />
              <span>Apply / Enquire Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`tel:${ACADEMY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
          </div>

        </div>
      </section>

      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
