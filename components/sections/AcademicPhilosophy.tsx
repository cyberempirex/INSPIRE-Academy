'use client';

import React from 'react';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Conceptual Depth Over Rote Memorisation',
    subtitle: 'Building intuitive comprehension of fundamental principles',
    description: 'We deconstruct complex topics in Science and the Humanities from first principles. Students learn the foundational mechanisms behind formulae and theories, enabling them to approach unfamiliar problems in board and entrance examinations with analytical poise.',
  },
  {
    number: '02',
    title: 'Disciplined Study Rhythm & Assessment',
    subtitle: 'Systematic evaluations and continuous feedback loops',
    description: 'Regular unit tests, structured laboratory assignments, and attendance monitoring establish consistent study habits. Students receive clear, actionable feedback to steadily bridge knowledge gaps throughout the academic year.',
  },
  {
    number: '03',
    title: 'Accessible Local Faculty Mentorship',
    subtitle: 'Full-time educators dedicated to student progress',
    description: 'Our faculty members at the Simla campus are readily available for one-on-one doubt clearing and academic guidance. Small batch sizes ensure that individual strengths and difficulties are identified and addressed directly.',
  },
];

export default function AcademicPhilosophy() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16865A] block mb-2 font-mono">
            ACADEMIC LIFE &amp; PEDAGOGY
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2945] font-display leading-tight">
            How Students Learn at Inspire Academy
          </h2>
          <div className="w-12 h-1 bg-[#C62832] mt-3" />
        </div>

        {/* Editorial Narrative Bands */}
        <div className="space-y-6">
          {PRINCIPLES.map((item) => (
            <div
              key={item.number}
              className="bg-white border border-[#E2E8F0] p-6 sm:p-8 rounded-md shadow-xs transition-colors hover:border-[#0B2945]/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
                
                {/* Number & Headline */}
                <div className="md:col-span-5">
                  <span className="text-xs font-mono font-bold text-[#16865A] uppercase tracking-wider block mb-1">
                    Pedagogical Principle {item.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2945] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#64748B] mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Narrative Detail */}
                <div className="md:col-span-7 md:border-l md:border-[#E2E8F0] md:pl-8">
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
