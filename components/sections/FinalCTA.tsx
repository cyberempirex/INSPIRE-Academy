'use client';

import React, { useState } from 'react';
import { ArrowRight, GraduationCap, Phone, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { ACADEMY_INFO } from '@/lib/data/academy-data';

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-24 bg-[#06182C] text-white border-b border-[#1E5A8A]/30 overflow-hidden">
        
        {/* ========================================================================= */}
        {/* ASYMMETRIC BACKGROUND ARCHITECTURE: Diagonal Royal Shard & Grid           */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Asymmetric Royal Blue Blade */}
          <div 
            className="absolute top-0 right-0 w-full sm:w-[60%] h-full bg-gradient-to-bl from-[#123B63] via-[#178653]/30 to-transparent opacity-60"
            style={{
              clipPath: 'polygon(25% 0, 100% 0%, 100% 100%, 0% 100%)'
            }}
          />

          {/* Micro Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Technical Section Watermark */}
          <div className="absolute bottom-6 right-8 font-mono-meta text-[10px] uppercase text-[#86EFAC]/25 font-bold tracking-widest hidden md:block">
            ACADEMIC SESSION 2026–27 // ENROLMENT DESK
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#178653]/20 border border-[#86EFAC]/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#86EFAC] animate-pulse" />
            <span className="font-mono-meta text-xs uppercase tracking-widest text-[#86EFAC] font-bold">
              ADMISSIONS OPEN • SESSION 2026–27
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white font-display max-w-3xl mx-auto leading-tight">
            Ready to Take the Next Step Towards Your Future?
          </h2>

          <p className="text-sm sm:text-base text-[#E8EDF1]/90 max-w-2xl mx-auto leading-relaxed">
            Secure admission in Class XI Science (PCM/PCB) or Arts &amp; Humanities at Inspire Academy Simla. Experience focused faculty mentorship, disciplined study habits, and equipped laboratories.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-7 py-3.5 bg-[#178653] hover:bg-[#1E9E64] text-white text-xs sm:text-sm font-bold rounded-lg tracking-wide transition-all flex items-center gap-2 shadow-md cursor-pointer active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-[#86EFAC]" />
              <span>Enquire for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${ACADEMY_INFO.whatsappNumber.replace('+', '')}?text=Hello%20Inspire%20Academy%20Admissions`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold rounded-lg tracking-wide transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#86EFAC]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 text-xs font-mono-meta text-[#E8EDF1]/70 flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#86EFAC]" />
            <span>Simla Campus, Baksa District, Assam • Office Hours: {ACADEMY_INFO.officeHours}</span>
          </div>

        </div>
      </section>

      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
