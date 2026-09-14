'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function AboutInspireSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2945] font-display uppercase tracking-wide">
            {t('about_heading')}
          </h2>
          <div className="w-20 h-1 bg-[#0275D8] mx-auto mt-2" />
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t('about_subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Photography & Data Sheet */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden border-2 border-[#93C5FD] shadow-xs bg-[#0B2945]">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
                alt="Inspire Academy classroom instruction in Simla, Baksa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2945]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                  {t('about_pedagogy_title')}
                </span>
                <p className="text-xs text-white/90 font-medium">
                  {t('about_pedagogy_desc')}
                </p>
              </div>
            </div>

            {/* Official Registration Registry Table */}
            <div className="bg-white border-2 border-[#CBD5E1] rounded-md p-4 shadow-2xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0275D8] mb-3 pb-2 border-b border-[#E2E8F0] flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                <span>Official Directory Record</span>
              </h4>
              <dl className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
                <div>
                  <dt className="text-[#64748B] font-mono">UDISE Code</dt>
                  <dd className="font-bold text-[#0B2945] font-mono">{ACADEMY_INFO.udiseCode}</dd>
                </div>
                <div>
                  <dt className="text-[#64748B] font-mono">School Code</dt>
                  <dd className="font-bold text-[#0B2945] font-mono">{ACADEMY_INFO.schoolCode}</dd>
                </div>
                <div>
                  <dt className="text-[#64748B] font-mono">Affiliation</dt>
                  <dd className="font-bold text-[#0B2945]">AHSEC, Assam</dd>
                </div>
                <div>
                  <dt className="text-[#64748B] font-mono">Established</dt>
                  <dd className="font-bold text-[#0B2945]">2019</dd>
                </div>
                <div className="col-span-2 pt-1 border-t border-[#E2E8F0]">
                  <dt className="text-[#64748B] font-mono">Campus Address</dt>
                  <dd className="font-semibold text-[#0B2945]">Simla, District Baksa, Assam — PIN 781313</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Institutional Profile & Educational Philosophy */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border-2 border-[#93C5FD] rounded-md p-6 shadow-xs space-y-4">
              <div className="text-[#334155] space-y-3 text-sm sm:text-base leading-relaxed">
                <p>{t('about_p1')}</p>
                <p>{t('about_p2')}</p>
                <p>{t('about_p3')}</p>
              </div>

              {/* Core Institutional Commitments */}
              <div className="pt-2 space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0275D8]">
                  Key Academic Pillars
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#F0F7FF] rounded border-l-4 border-[#0275D8]">
                    <strong className="text-[#0B2945] block font-bold">{t('pillar_1_title')}</strong>
                    <span className="text-[#64748B]">{t('pillar_1_desc')}</span>
                  </div>
                  <div className="p-3 bg-[#F0F7FF] rounded border-l-4 border-[#16865A]">
                    <strong className="text-[#0B2945] block font-bold">{t('pillar_2_title')}</strong>
                    <span className="text-[#64748B]">{t('pillar_2_desc')}</span>
                  </div>
                  <div className="p-3 bg-[#F0F7FF] rounded border-l-4 border-[#E65100]">
                    <strong className="text-[#0B2945] block font-bold">{t('pillar_3_title')}</strong>
                    <span className="text-[#64748B]">{t('pillar_3_desc')}</span>
                  </div>
                  <div className="p-3 bg-[#F0F7FF] rounded border-l-4 border-[#0275D8]">
                    <strong className="text-[#0B2945] block font-bold">{t('pillar_4_title')}</strong>
                    <span className="text-[#64748B]">{t('pillar_4_desc')}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0]">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0275D8] hover:text-[#0056B3] hover:underline transition-colors"
                >
                  <span>{t('about_read_more')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
