'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Search, 
  Award,
  Building2,
  Globe
} from 'lucide-react';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import InspireLogo from '@/components/brand/InspireLogo';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { useLanguage, Language } from '@/lib/context/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const NAV_ITEMS = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_about'), href: '/about' },
    { label: t('nav_academics'), href: '/academics' },
    { label: t('nav_admissions'), href: '/admissions' },
    { label: t('nav_faculty'), href: '/faculty' },
    { label: t('nav_results'), href: '/results' },
    { label: t('nav_campus_life'), href: '/campus-life' },
    { label: t('nav_gallery'), href: '/gallery' },
    { label: t('nav_notices'), href: '/news' },
    { label: t('nav_learning'), href: '/learning' },
    { label: t('nav_contact'), href: '/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/news?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP UTILITY BAR (Inspired by Assam University Reference Header)        */}
      {/* ========================================================================= */}
      <div className="bg-[#B71C1C] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-[#880e0e]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Quick Institutional Quicklinks */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-white/95 font-medium">
            <Link href="/results" className="hover:text-yellow-200 hover:underline">{t('top_results')}</Link>
            <span className="text-white/40">|</span>
            <Link href="/academics" className="hover:text-yellow-200 hover:underline">{t('top_mentorship')}</Link>
            <span className="text-white/40">|</span>
            <span className="hidden md:inline font-mono font-semibold text-yellow-200">
              {t('top_udise')}
            </span>
            <span className="text-white/40 hidden md:inline">|</span>
            <span className="hidden lg:inline font-mono font-semibold text-yellow-200">
              {t('top_ahsec')}
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <Link href="/learning" className="hover:text-yellow-200 hover:underline font-semibold text-amber-200">
              {t('top_swayam')}
            </Link>
          </div>

          {/* Right Controls: Multilingual Language Switcher, Font Resizing, Webmail */}
          <div className="flex items-center gap-2 sm:gap-2.5 text-white/95">
            
            {/* Language Selector Buttons (English / हिन्दी / অসমীয়া) */}
            <div className="flex items-center bg-black/25 rounded p-0.5 border border-white/20">
              <Globe className="w-3 h-3 text-amber-300 ml-1 mr-1 hidden sm:inline" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 text-[10px] sm:text-xs font-bold rounded transition-colors cursor-pointer ${
                  language === 'en' ? 'bg-white text-[#B71C1C]' : 'text-white/90 hover:text-white'
                }`}
                title="Switch to English"
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-1.5 py-0.5 text-[10px] sm:text-xs font-bold rounded transition-colors cursor-pointer ${
                  language === 'hi' ? 'bg-white text-[#B71C1C]' : 'text-white/90 hover:text-white'
                }`}
                title="हिन्दी में देखें"
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLanguage('as')}
                className={`px-1.5 py-0.5 text-[10px] sm:text-xs font-bold rounded transition-colors cursor-pointer ${
                  language === 'as' ? 'bg-white text-[#B71C1C]' : 'text-white/90 hover:text-white'
                }`}
                title="অসমীয়াত চাওক"
              >
                অসমীয়া
              </button>
            </div>

            <span className="text-white/40">|</span>

            {/* Font Size Adjusters (A- A A+) */}
            <div className="hidden sm:flex items-center gap-1 font-bold">
              <button className="px-1.5 py-0.5 hover:bg-black/20 rounded text-[10px] cursor-pointer" title="Small Text">A-</button>
              <button className="px-1.5 py-0.5 hover:bg-black/20 rounded text-xs cursor-pointer" title="Default Text">A</button>
              <button className="px-1.5 py-0.5 hover:bg-black/20 rounded text-sm cursor-pointer" title="Large Text">A+</button>
            </div>

            <span className="text-white/40 hidden sm:inline">|</span>

            {/* Webmail / Portal Access */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-2.5 py-0.5 bg-[#880E0E] hover:bg-black/30 rounded text-[11px] font-bold text-white transition-colors cursor-pointer"
            >
              {t('top_webmail')}
            </button>

            <span className="text-white/40">|</span>
            <Link href="/contact" className="hover:text-yellow-200 hover:underline">
              {t('top_contact')}
            </Link>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. AUTHENTIC GOVERNMENT / UNIVERSITY MASTHEAD BANNER                       */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-[#EBF3FB] via-[#F4F9FF] to-[#EBF3FB] border-b-2 border-[#93C5FD] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left + Center: Official Crest + Bilingual Institutional Title */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 text-center sm:text-left">
            {/* Crest Emblem with Golden Border */}
            <Link href="/" className="group shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white p-1.5 rounded-full border-3 border-[#0275D8] shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
                <InspireLogo variant="emblem" size="lg" />
              </div>
            </Link>

            {/* Bilingual Institutional Heading Block */}
            <div className="space-y-1">
              {/* Regional Assamese Script */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F3A66] tracking-wide font-serif">
                {language === 'hi' ? t('masthead_title_hi') : t('masthead_title_as')}
              </h2>

              {/* Main English Name */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C62832] tracking-tight uppercase font-display leading-none">
                {t('masthead_title_en')}
              </h1>

              {/* Official Affiliation & Academic Scope */}
              <p className="text-xs sm:text-sm font-semibold text-[#1E3A8A]">
                A Premier Senior Secondary Institution for Science &amp; Arts
              </p>

              {/* Govt Affiliation & Council Code Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[11px] font-mono text-[#475569] pt-0.5">
                <span className="bg-[#DBEAFE] text-[#1E40AF] px-2 py-0.5 rounded font-bold border border-[#BFDBFE]">
                  Affiliated to AHSEC (Code: 015707)
                </span>
                <span className="bg-[#DCFCE7] text-[#166534] px-2 py-0.5 rounded font-bold border border-[#BBF7D0]">
                  UDISE: 18240400312
                </span>
                <span className="text-[#64748B] hidden lg:inline">
                  · Simla, District Baksa, Assam (BTR) - 781313
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Admission CTA & Helpline Card */}
          <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-2 shrink-0">
            {/* Direct Online Admission 2026-27 Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-[#D84315] to-[#E65100] hover:from-[#BF360C] hover:to-[#D84315] text-white text-xs sm:text-sm font-black rounded shadow-md transition-all cursor-pointer uppercase tracking-wider flex items-center gap-2 border border-[#FFCC80]"
            >
              <Award className="w-4 h-4 text-yellow-300" />
              <span>{t('btn_admission_portal')} (2026–27)</span>
            </button>

            {/* Quick Helpline & Email strip */}
            <div className="text-center md:text-right text-[11px] text-[#334155] font-medium space-y-0.5 pt-1">
              <p className="flex items-center justify-center md:justify-end gap-1 font-mono font-bold text-[#0F3A66]">
                <Phone className="w-3 h-3 text-[#D32F2F]" />
                <span>Helpline: {ACADEMY_INFO.phones[0]}</span>
              </p>
              <p className="text-[10px] text-[#64748B] font-mono">
                Office Hours: Mon–Sat (8:30 AM – 3:30 PM)
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. ROYAL AZURE NAVIGATION BAR                                            */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#0275D8] text-white shadow-md border-b-2 border-[#0056B3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wide transition-colors rounded-xs ${
                      isActive
                        ? 'bg-[#0056B3] text-yellow-300 shadow-inner'
                        : 'text-white hover:bg-white/15 hover:text-yellow-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Navigation Header */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-white/20 rounded px-1.5 py-0.5 gap-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${language === 'en' ? 'bg-white text-[#0275D8]' : 'text-white'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('hi')}
                    className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${language === 'hi' ? 'bg-white text-[#0275D8]' : 'text-white'}`}
                  >
                    हिन्दी
                  </button>
                  <button
                    onClick={() => setLanguage('as')}
                    className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${language === 'as' ? 'bg-white text-[#0275D8]' : 'text-white'}`}
                  >
                    অসমীয়া
                  </button>
                </div>
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  Menu
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 bg-white/20 hover:bg-white/30 text-white rounded transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Right Admission CTA in Navbar */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3.5 py-1.5 bg-[#FF6F00] hover:bg-[#E65100] text-white text-xs font-bold uppercase tracking-wider rounded shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5" />
                <span>{t('nav_enquire')}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#01579B] border-t border-white/20 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-sm font-semibold rounded transition-colors ${
                      isActive
                        ? 'bg-yellow-400 text-[#0B2945] font-bold'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/20 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-[#FF6F00] text-white text-center text-sm font-bold uppercase rounded shadow-sm block"
                >
                  {t('nav_enquire')} (2026-27)
                </button>
                <div className="text-xs text-white/80 pt-2 space-y-1">
                  <p>📍 Simla, District Baksa, Assam - 781313</p>
                  <p>📞 Helpline: {ACADEMY_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Admissions Enquiry Modal */}
      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
