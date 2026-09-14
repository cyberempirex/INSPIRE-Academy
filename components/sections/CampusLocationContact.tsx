'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function CampusLocationContact() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2945] font-display uppercase tracking-wide">
            {t('campus_loc_heading')}
          </h2>
          <div className="w-20 h-1 bg-[#0275D8] mx-auto mt-2" />
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t('campus_loc_subheading')}
          </p>
        </div>

        {/* Directory Ledger Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Campus Location */}
          <div className="bg-white p-6 rounded-md border-2 border-[#93C5FD] shadow-xs space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#0275D8] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#E65100]" />
              <span>{t('card_location_title')}</span>
            </span>
            <h3 className="text-lg font-bold text-[#0B2945]">
              Inspire Academy Campus
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              {t('card_location_body')}
            </p>
          </div>

          {/* Official Telephones */}
          <div className="bg-white p-6 rounded-md border-2 border-[#93C5FD] shadow-xs space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#0275D8] flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#16865A]" />
              <span>{t('card_phones_title')}</span>
            </span>
            <h3 className="text-lg font-bold text-[#0B2945]">
              Contact Helpline
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm text-[#334155]">
              <p>
                <strong className="text-[#0B2945]">Admissions:</strong>{' '}
                <a href={`tel:${ACADEMY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-[#0275D8] hover:underline font-semibold">
                  {ACADEMY_INFO.phone}
                </a>
              </p>
              <p>
                <strong className="text-[#0B2945]">Email:</strong>{' '}
                <a href={`mailto:${ACADEMY_INFO.email}`} className="text-[#0275D8] hover:underline font-semibold">
                  {ACADEMY_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Office Timings */}
          <div className="bg-white p-6 rounded-md border-2 border-[#93C5FD] shadow-xs space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase text-[#0275D8] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E65100]" />
              <span>{t('card_hours_title')}</span>
            </span>
            <h3 className="text-lg font-bold text-[#0B2945]">
              Campus Office Timings
            </h3>
            <div className="space-y-1 text-xs sm:text-sm text-[#334155]">
              <p>{t('card_hours_body')}</p>
            </div>
          </div>

        </div>

        {/* View Full Contact Page Link */}
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0275D8] hover:bg-[#0056B3] text-white text-xs sm:text-sm font-bold uppercase rounded-full shadow-md transition-colors"
          >
            <span>{t('btn_campus_directions')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
