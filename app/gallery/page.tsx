'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { GALLERY_PHOTOS } from '@/lib/data/academy-data';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  Camera,
  Image as ImageIcon,
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Campus',
  'Classroom',
  'Students',
  'Events',
  'Sports',
  'Educational Tours',
  'Academic Activities',
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_PHOTOS[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'Media & Campus', href: '/gallery' }, { label: 'Photographic Archive' }]}
      />

      {/* Official Masthead Header */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <Camera className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Campus Photography Archive · Simla, Baksa</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Photographic Archive &amp; Campus Activities
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              Visual documentation of practical science laboratories, daily classroom pedagogy, annual athletic meets, regional literary festivals, and educational excursions at Inspire Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout with University Sidebar */}
      <main className="flex-grow py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Main Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Category Filter Controls */}
              <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider">
                    Filter Photo Archive:
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">
                    Showing <strong className="text-[#0B2945]">{filteredPhotos.length}</strong> Photographs
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#EDF2F7]">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-[#0B2945] text-white shadow-xs'
                          : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#E2E8F0] border border-[#D8E2EC]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedPhoto(photo)}
                    className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs hover:border-[#0275D8] transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full bg-[#0B2945] overflow-hidden">
                        <Image
                          src={photo.image}
                          alt={photo.caption || photo.title}
                          fill
                          className="object-cover group-hover:scale-102 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2945]/80 via-transparent to-transparent opacity-80" />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#0B2945] text-white text-[10px] font-mono font-bold uppercase rounded-xs">
                          {photo.category}
                        </span>
                        <div className="absolute top-2.5 right-2.5 p-1.5 bg-black/40 text-white rounded-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="p-4 space-y-1">
                        <p className="text-xs sm:text-sm font-bold text-[#0B2945] font-display leading-snug group-hover:text-[#0275D8] transition-colors">
                          {photo.caption || photo.title}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 border-t border-[#EDF2F7] bg-[#F8FAFC] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                      <span>Inspire Academy Archive</span>
                      <span className="text-[#0275D8] font-bold group-hover:underline">Inspect Photo ↗</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="gallery"
                onOpenAdmissionModal={() => setIsModalOpen(true)}
              />
            </div>

          </div>
        </div>
      </main>

      {/* Selected Photo Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
          <div className="bg-white rounded-sm border-2 border-[#0B2945] max-w-3xl w-full overflow-hidden shadow-2xl space-y-0">
            
            {/* Modal Header */}
            <div className="p-4 bg-[#0B2945] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#D84315] text-white text-[10px] font-mono font-bold uppercase rounded-xs">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs font-mono text-[#CBD5E1]">
                  Official Photographic Record
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-xs font-mono font-bold text-[#CBD5E1] hover:text-white cursor-pointer"
              >
                [ Close ✕ ]
              </button>
            </div>

            {/* Photo Container */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.caption || selectedPhoto.title}
                fill
                className="object-contain"
                sizes="100vw"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-white space-y-2 border-t border-[#D8E2EC]">
              <h4 className="text-base font-bold text-[#0B2945] font-display">
                {selectedPhoto.caption || selectedPhoto.title}
              </h4>
              <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>Inspire Academy · Simla Campus, District Baksa, Assam</span>
                <span>AHSEC Code: {ACADEMY_INFO.schoolCode}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
