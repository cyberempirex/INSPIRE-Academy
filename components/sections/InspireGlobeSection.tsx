'use client';

import React from 'react';
import InspireBrandSculptureWrapper from '@/components/three/InspireBrandSculptureWrapper';

export default function InspireGlobeSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#06182C] text-[#FFFFFF] border-b border-[#1E5A8A]/30 relative overflow-hidden">
      
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Signature 3D Inspire Globe derived from brand emblem */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <InspireBrandSculptureWrapper size="lg" className="w-full h-full" />
            </div>
          </div>

          {/* Right: Authoritative Philosophical Narrative */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div>
              <span className="font-mono-meta text-xs uppercase tracking-widest text-[#86EFAC] font-bold block mb-1">
                A LOCAL ROODEDNESS &amp; GLOBAL HORIZON
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-display leading-[1.15]">
                From Simla to the Wider World.
              </h2>
              <div className="w-14 h-1 bg-[#178653] rounded-full mt-3 mx-auto lg:mx-0" />
            </div>

            <p className="text-base sm:text-lg text-[#E8EDF1] leading-relaxed max-w-xl font-normal">
              Education begins with a place, but it should expand a student&apos;s sense of what is possible.
            </p>

            <p className="text-xs sm:text-sm text-[#E8EDF1]/80 leading-relaxed max-w-xl">
              At Inspire Academy, we believe that academic rigor in Assam&apos;s senior-secondary years lays the groundwork for national entrance success, higher university scholarship, and principled leadership.
            </p>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs font-mono-meta text-[#86EFAC]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#178653]" />
                Simla Campus, Baksa
              </span>
              <span className="text-[#1E5A8A]">/</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C9252D]" />
                Senior Secondary Focus
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
