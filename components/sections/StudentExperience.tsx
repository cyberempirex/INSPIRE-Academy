'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function StudentExperience() {
  const { t } = useLanguage();

  const CAMPUS_MOMENTS = [
    {
      title: t('fac_1_title'),
      caption: t('fac_1_desc'),
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=900&auto=format&fit=crop',
      alt: 'Science laboratory apparatus at Inspire Academy, Simla',
    },
    {
      title: t('fac_2_title'),
      caption: t('fac_2_desc'),
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=900&auto=format&fit=crop',
      alt: 'Inspire Academy library and reading desks',
    },
    {
      title: t('fac_3_title'),
      caption: t('fac_3_desc'),
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=900&auto=format&fit=crop',
      alt: 'Inspire Academy students in sports and athletic activities',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2945] font-display uppercase tracking-wide">
            {t('campus_fac_heading')}
          </h2>
          <div className="w-20 h-1 bg-[#0275D8] mx-auto mt-2" />
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t('campus_fac_subheading')}
          </p>
        </div>

        {/* Narrative Rows with Soft Blue Borders */}
        <div className="space-y-8">
          {CAMPUS_MOMENTS.map((moment, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={moment.title}
                className={`bg-[#F8FAFC] border-2 border-[#CBD5E1] hover:border-[#0275D8] rounded-md p-5 sm:p-6 transition-colors shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                  <div className="relative aspect-[16/10] w-full rounded overflow-hidden border border-[#CBD5E1] bg-[#0B2945] shadow-xs">
                    <Image
                      src={moment.image}
                      alt={moment.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2945]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                        Simla Campus Facilities
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Column */}
                <div className={`lg:col-span-6 space-y-2.5 ${isEven ? '' : 'lg:col-start-1'}`}>
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase">
                    Facility 0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2945] font-display">
                    {moment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {moment.caption}
                  </p>
                  <div className="pt-1">
                    <Link
                      href="/campus-life"
                      className="text-xs font-bold text-[#0275D8] hover:text-[#0056B3] hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore campus infrastructure</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
