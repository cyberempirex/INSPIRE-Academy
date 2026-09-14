'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function FeaturedSchoolMoment() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const MOMENTS = [
    {
      id: 'classroom',
      category: 'ACADEMIC PEDAGOGY',
      title: 'Classroom Immersion & Conceptual Depth',
      subtitle: 'Focused lectures and structured problem-solving sessions in Simla',
      description: 'At Inspire Academy, senior-secondary education moves beyond memorisation. Our faculty break down foundational concepts in small batches, ensuring every student develops the analytical confidence necessary for board examinations and national entrance tests.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1400&auto=format&fit=crop',
      alt: 'Inspire Academy students in classroom session at Simla campus',
      linkText: 'Explore Academic Curriculum',
      linkHref: '/academics',
      tag: 'Classroom Experience',
    },
    {
      id: 'labs',
      category: 'EXPERIMENTAL SCIENCE',
      title: 'Physics, Chemistry & Biology Laboratories',
      subtitle: 'Systematic AHSEC practical coursework and scientific observation',
      description: 'Our laboratory facilities allow Class XI & XII Science stream students to verify theoretical principles through individual experimentation, specimen analysis, and accurate titration practicals under senior faculty supervision.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1400&auto=format&fit=crop',
      alt: 'Science laboratory practicals at Inspire Academy',
      linkText: 'Discover Science Stream',
      linkHref: '/academics',
      tag: 'Practical Laboratories',
    },
    {
      id: 'culture',
      category: 'CAMPUS LIFE & VALUES',
      title: 'Literary Symposiums & Regional Heritage',
      subtitle: 'Celebrating Assam’s rich intellectual and regional traditions',
      description: 'Academic discipline thrives alongside cultural rootedness. Students participate in annual debate symposiums, Assamese and Bodo literary seminars, recitation competitions, and seasonal festival observances that nurture articulate, principled leaders.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop',
      alt: 'Inspire Academy student seminar and cultural celebrations',
      linkText: 'View Campus Life',
      linkHref: '/campus-life',
      tag: 'Cultural Expression',
    },
    {
      id: 'athletics',
      category: 'PHYSICAL DISCIPLINE',
      title: 'Outdoor Athletics & Campus Sports Grounds',
      subtitle: 'Building endurance, teamwork, and sportsmanship on campus grounds',
      description: 'Physical well-being complements classroom diligence. Students engage in volleyball, football, track athletics, and regular morning fitness routines on the Simla campus grounds, fostering resilience and healthy camaraderie.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop',
      alt: 'Students playing sports and participating in athletic events',
      linkText: 'Sports & Facilities',
      linkHref: '/campus-life',
      tag: 'Athletics & Fitness',
    },
  ];

  const current = MOMENTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? MOMENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === MOMENTS.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe handling
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev === 0 ? MOMENTS.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev === MOMENTS.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [MOMENTS.length]);

  return (
    <section className="relative py-12 sm:py-16 bg-[#0B2945] text-white border-b border-[#163E66] overflow-hidden select-none">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header with Section Title & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-white/15 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#93C5FD] block mb-1 font-mono">
              CAMPUS GALLERY &amp; MOMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display uppercase tracking-wide">
              Academic &amp; Student Life in Simla
            </h2>
            <div className="w-16 h-1 bg-[#0275D8] mt-2" />
          </div>

          {/* Slider Control Bar */}
          <div className="flex items-center gap-4 self-start sm:self-auto">
            {/* Step Counter Indicator */}
            <div className="text-xs tracking-widest text-[#E2E8F0]/70 font-mono">
              <span className="text-yellow-300 font-bold text-sm">0{currentIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>0{MOMENTS.length}</span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded bg-white/10 hover:bg-[#0275D8] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15 active:scale-95"
                aria-label="Previous Moment"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded bg-[#0275D8] hover:bg-[#0056B3] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 active:scale-95 shadow-xs"
                aria-label="Next Moment"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Slider Stage */}
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          {/* Left Column: Big Editorial Photography */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden shadow-lg border-2 border-white/20 bg-[#0B2945]">
              <Image
                key={current.id}
                src={current.image}
                alt={current.alt}
                fill
                priority
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 60vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2945]/85 via-transparent to-transparent pointer-events-none" />

              {/* Tag Stamp on Image */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-[#0B2945]/90 text-yellow-300 text-xs font-semibold rounded border border-white/20">
                  {current.tag}
                </span>
              </div>

              {/* Bottom Caption on Image */}
              <div className="absolute bottom-3 left-4 right-4 text-xs text-[#E2E8F0]/80 flex items-center justify-between pointer-events-none font-mono">
                <span>Simla, District Baksa, Assam</span>
                <span className="hidden sm:inline">AHSEC Senior Secondary</span>
              </div>
            </div>

            {/* Progress Indicators under Image */}
            <div className="flex items-center gap-2 mt-3">
              {MOMENTS.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-yellow-400'
                      : 'w-2 bg-white/25 hover:bg-white/50'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Action */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-yellow-300 font-bold block mb-1 font-mono">
                {current.category}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display leading-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#93C5FD] mt-1.5">
                {current.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#E2E8F0]/90 leading-relaxed font-normal">
              {current.description}
            </p>

            <div className="pt-2">
              <Link
                href={current.linkHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0275D8] hover:bg-[#0056B3] text-white text-xs font-bold uppercase rounded tracking-wide transition-colors shadow-xs"
              >
                <span>{current.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
