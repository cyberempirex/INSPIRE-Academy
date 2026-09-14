'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Bell, 
  FileText,
  Building,
  GraduationCap,
  Calendar,
  Download,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function UniversityPortalHero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeNoticeTab, setActiveNoticeTab] = useState<'all' | 'admissions' | 'exams' | 'circulars'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const HERO_SLIDES = [
    {
      title: t('hero_title_1'),
      subtitle: t('hero_subtitle_1'),
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
      tag: 'Academic Session 2026–27',
    },
    {
      title: t('hero_title_2'),
      subtitle: t('hero_subtitle_2'),
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop',
      tag: 'Equipped Science Labs',
    },
    {
      title: t('hero_title_3'),
      subtitle: t('hero_subtitle_3'),
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
      tag: 'Classroom Instruction',
    },
    {
      title: 'Annual Sports, Cultural Meets & Felicitation',
      subtitle: 'Holistic student growth fostering team leadership, physical fitness, and cultural appreciation.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop',
      tag: 'Campus Life & Sports',
    }
  ];

  const NOTICES = [
    {
      id: 1,
      date: '24 AUG 2026',
      title: 'Online Application Forms open for HS 1st Year (Science & Arts) Session 2026–27',
      category: 'admissions',
      isNew: true,
      refNo: 'IA/ADM/2026/08',
      link: '/admissions',
    },
    {
      id: 2,
      date: '20 AUG 2026',
      title: 'AHSEC Practical Examination & Unit Assessment Schedule for Class XII Science',
      category: 'exams',
      isNew: true,
      refNo: 'IA/EXAM/AHSEC/2026-41',
      link: '/news',
    },
    {
      id: 3,
      date: '15 AUG 2026',
      title: 'Inspire Academy celebrates 79th Independence Day with patriotic march & tree plantation',
      category: 'circulars',
      isNew: false,
      refNo: 'IA/GEN/CIRCULAR/89',
      link: '/campus-life',
    },
    {
      id: 4,
      date: '10 AUG 2026',
      title: 'Meritorious Scholarship awards for students securing 85%+ in HSLC Board Examination',
      category: 'admissions',
      isNew: false,
      refNo: 'IA/SCHOLARSHIP/2026/02',
      link: '/admissions',
    },
    {
      id: 5,
      date: '02 AUG 2026',
      title: 'Physics, Chemistry & Biology Practical Lab Manuals available for download',
      category: 'circulars',
      isNew: false,
      refNo: 'IA/ACAD/LAB/2026-11',
      link: '/learning',
    }
  ];

  const filteredNotices = NOTICES.filter((n) => {
    if (activeNoticeTab === 'all') return true;
    return n.category === activeNoticeTab;
  });

  // Auto slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [HERO_SLIDES.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. SAFFRON FLASHING ANNOUNCEMENT TICKER (University Reference Marquee)    */}
      {/* ========================================================================= */}
      <div className="bg-[#B71C1C] text-white py-2 px-3 sm:px-6 lg:px-8 border-b-2 border-[#880e0e] shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          
          {/* Latest News Badge */}
          <div className="flex items-center gap-2 bg-[#7F0000] px-3 py-1 rounded text-xs font-black uppercase tracking-wider shrink-0 shadow-xs border border-white/20 self-start sm:self-auto">
            <Bell className="w-3.5 h-3.5 text-yellow-300 animate-bounce" />
            <span>LATEST ANNOUNCEMENTS:</span>
          </div>

          {/* Marquee Headline Links */}
          <div className="flex-1 overflow-hidden relative flex items-center">
            <div className="flex items-center gap-8 text-xs font-semibold whitespace-nowrap animate-marquee">
              <Link href="/admissions" className="hover:text-yellow-200 hover:underline flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-300 animate-ping inline-block" />
                <span>[ADMISSIONS 2026-27] Class XI Science &amp; Arts Admission Application Forms are now available.</span>
              </Link>

              <span className="text-white/40">★</span>

              <Link href="/news" className="hover:text-yellow-200 hover:underline flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-300 inline-block" />
                <span>[AHSEC NOTICE] Higher Secondary Final Examination Practical Test Schedule &amp; Model Question Blueprint released.</span>
              </Link>

              <span className="text-white/40">★</span>

              <Link href="/results" className="hover:text-yellow-200 hover:underline flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-300 inline-block" />
                <span>[BOARD RESULTS] 100% Pass record achieved in Session 2024-25 AHSEC Final Examinations with Star &amp; Distinction marks.</span>
              </Link>
            </div>
          </div>

          {/* Direct Archive Link */}
          <Link
            href="/news"
            className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-[11px] font-bold uppercase rounded transition-colors shrink-0 text-center"
          >
            {t('nav_notices')} →
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. REAL UNIVERSITY PORTAL HERO (SLIDER LEFT + GAZETTE NOTICE BOARD RIGHT) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#F0F7FF] via-[#EBF3FA] to-[#E2E8F0] py-6 sm:py-8 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LEFT COLUMN: Campus Photo Slider (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden border-2 border-[#0275D8] shadow-md bg-[#0B2945]">
                
                {/* Active Image */}
                <Image
                  src={HERO_SLIDES[currentSlide].image}
                  alt={HERO_SLIDES[currentSlide].title}
                  fill
                  priority
                  className="object-cover transition-opacity duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2945]/90 via-[#0B2945]/30 to-transparent" />

                {/* Slide Caption Banner */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white space-y-1">
                  <span className="inline-block px-2 py-0.5 bg-[#FF6F00] text-white text-[10px] sm:text-xs font-mono font-bold uppercase rounded">
                    {HERO_SLIDES[currentSlide].tag}
                  </span>
                  <h2 className="text-base sm:text-xl font-bold font-display leading-tight">
                    {HERO_SLIDES[currentSlide].title}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/90 line-clamp-2">
                    {HERO_SLIDES[currentSlide].subtitle}
                  </p>
                </div>

                {/* Slide Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slider Dot Indicators */}
                <div className="absolute bottom-2 right-4 flex items-center gap-1.5 z-10">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'bg-yellow-400 w-6' : 'bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Fast Action Ribbon under Slider */}
              <div className="bg-white p-3.5 rounded-md border border-[#93C5FD] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                <div className="text-xs text-[#0B2945]">
                  <strong className="block text-sm font-bold text-[#0275D8]">
                    AHSEC Senior Secondary Programs
                  </strong>
                  <span>Science (PCM / PCB / PCMB) &amp; Arts (Humanities)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-[#D84315] hover:bg-[#BF360C] text-white text-xs font-bold uppercase rounded shadow-xs transition-colors cursor-pointer"
                  >
                    Apply for Admission
                  </button>
                  <Link
                    href="/academics"
                    className="px-4 py-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0B2945] text-xs font-bold uppercase rounded transition-colors border border-[#CBD5E1]"
                  >
                    View Syllabus
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Official Notice Board & Dignitaries (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              {/* Authentic University Notice Board Container */}
              <div className="bg-white rounded-md border-2 border-[#0275D8] shadow-md overflow-hidden flex flex-col flex-1">
                {/* Notice Board Header with Blue Banner */}
                <div className="bg-gradient-to-r from-[#0275D8] to-[#01579B] text-white p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold font-display text-sm tracking-wide uppercase">
                    <FileText className="w-4 h-4 text-yellow-300" />
                    <span>Official Circulars &amp; Gazette</span>
                  </div>
                  <Link
                    href="/news"
                    className="text-[11px] font-mono text-yellow-200 hover:text-white underline font-semibold flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Notice Tabs (All / Admissions / Exams / Circulars) */}
                <div className="flex border-b border-[#CBD5E1] bg-[#F1F5F9] text-xs font-semibold">
                  <button
                    onClick={() => setActiveNoticeTab('all')}
                    className={`flex-1 py-2 text-center transition-colors cursor-pointer ${
                      activeNoticeTab === 'all'
                        ? 'bg-white text-[#0275D8] border-b-2 border-[#0275D8] font-bold'
                        : 'text-[#64748B] hover:text-[#0B2945]'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveNoticeTab('admissions')}
                    className={`flex-1 py-2 text-center transition-colors cursor-pointer ${
                      activeNoticeTab === 'admissions'
                        ? 'bg-white text-[#0275D8] border-b-2 border-[#0275D8] font-bold'
                        : 'text-[#64748B] hover:text-[#0B2945]'
                    }`}
                  >
                    Admissions
                  </button>
                  <button
                    onClick={() => setActiveNoticeTab('exams')}
                    className={`flex-1 py-2 text-center transition-colors cursor-pointer ${
                      activeNoticeTab === 'exams'
                        ? 'bg-white text-[#0275D8] border-b-2 border-[#0275D8] font-bold'
                        : 'text-[#64748B] hover:text-[#0B2945]'
                    }`}
                  >
                    Exams
                  </button>
                  <button
                    onClick={() => setActiveNoticeTab('circulars')}
                    className={`flex-1 py-2 text-center transition-colors cursor-pointer ${
                      activeNoticeTab === 'circulars'
                        ? 'bg-white text-[#0275D8] border-b-2 border-[#0275D8] font-bold'
                        : 'text-[#64748B] hover:text-[#0B2945]'
                    }`}
                  >
                    Circulars
                  </button>
                </div>

                {/* Notice List */}
                <div className="divide-y divide-[#E2E8F0] p-2 space-y-1 overflow-y-auto max-h-[280px]">
                  {filteredNotices.map((notice) => (
                    <Link
                      key={notice.id}
                      href={notice.link}
                      className="block p-2.5 rounded hover:bg-[#F0F7FF] transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold bg-[#E2E8F0] text-[#334155] px-1.5 py-0.5 rounded">
                              {notice.date}
                            </span>
                            {notice.isNew && (
                              <span className="text-[9px] font-bold bg-[#DC2626] text-white px-1.5 py-0.5 rounded animate-pulse">
                                NEW
                              </span>
                            )}
                            <span className="text-[10px] font-mono text-[#64748B]">
                              {notice.refNo}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-[#0B2945] group-hover:text-[#0275D8] transition-colors leading-snug line-clamp-2">
                            {notice.title}
                          </p>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#0275D8] shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Notice Board Footer */}
                <div className="p-2.5 bg-[#F8FAFC] border-t border-[#E2E8F0] text-center text-xs">
                  <Link
                    href="/news"
                    className="text-[#0275D8] font-bold hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>View Complete Institutional Circular Archive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Compact Leadership Message Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Principal */}
                <div className="bg-white p-3 rounded border border-[#93C5FD] shadow-2xs flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0275D8] shrink-0 bg-slate-100">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                      alt="Principal, Inspire Academy"
                      fill
                      className="object-cover"
                      sizes="48px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-xs">
                    <strong className="block font-bold text-[#0B2945]">Sri Hemanta Kumar Das</strong>
                    <span className="text-[11px] text-[#0275D8] font-semibold block">Principal &amp; Head</span>
                    <Link href="/about" className="text-[10px] text-[#D84315] font-bold hover:underline">
                      Desk Message →
                    </Link>
                  </div>
                </div>

                {/* Academic Advisor */}
                <div className="bg-white p-3 rounded border border-[#93C5FD] shadow-2xs flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0275D8] shrink-0 bg-slate-100">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                      alt="Academic Advisor, Inspire Academy"
                      fill
                      className="object-cover"
                      sizes="48px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-xs">
                    <strong className="block font-bold text-[#0B2945]">Dr. B. K. Sarma, Ph.D.</strong>
                    <span className="text-[11px] text-[#0275D8] font-semibold block">Chief Academic Advisor</span>
                    <Link href="/about" className="text-[10px] text-[#D84315] font-bold hover:underline">
                      Council Note →
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Global Admissions Enquiry Modal */}
      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

