'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { CAMPUS_FACILITIES } from '@/lib/data/academy-data';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  MapPin,
  FlaskConical,
  BookOpen,
  Trophy,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Building,
  Sparkles
} from 'lucide-react';

export default function CampusLifePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'Campus & Facilities', href: '/campus-life' }, { label: 'Infrastructure & Student Amenities' }]}
      />

      {/* Official Masthead Header */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <Building className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Simla Campus Infrastructure · Baksa District (BTR)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Campus Infrastructure &amp; Student Life
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              An enriching academic environment equipped with modern experimental science laboratories, scholarly reading rooms, sports grounds, and active student clubs in Simla, Assam.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout with University Sidebar */}
      <main className="flex-grow py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Main Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Section 1: Campus Infrastructure Overview */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-5">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Campus Blueprint
                  </span>
                  <h2 className="text-2xl font-bold text-[#0B2945] font-display">
                    Educational Infrastructure at Simla Campus
                  </h2>
                </div>

                <p className="text-sm text-[#334155] leading-relaxed">
                  Inspire Academy’s campus at Simla is purpose-built to provide students with a distraction-free, stimulating, and safe academic atmosphere. Every facility conforms to the rigorous standards established by the <strong>Assam Higher Secondary Education Council (AHSEC)</strong>.
                </p>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {CAMPUS_FACILITIES.map((facility, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F8FAFC] border border-[#D8E2EC] rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#0275D8] transition-all"
                    >
                      <div>
                        <div className="relative aspect-[16/10] w-full bg-[#0B2945]">
                          <Image
                            src={facility.image}
                            alt={facility.name}
                            fill
                            className="object-cover group-hover:scale-102 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 35vw"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2945]/80 via-transparent to-transparent" />
                          <span className="absolute bottom-2.5 left-2.5 text-xs font-bold text-white font-display">
                            {facility.name}
                          </span>
                        </div>
                        <div className="p-4 space-y-2">
                          <p className="text-xs text-[#475569] leading-relaxed">
                            {facility.description}
                          </p>
                          <ul className="space-y-1 text-[11px] text-[#334155] font-mono">
                            {facility.highlights.map((h, i) => (
                              <li key={i} className="flex items-center gap-1.5 text-[#0B2945]">
                                <CheckCircle2 className="w-3 h-3 text-[#16865A] shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2: Student Societies & Co-Curricular Forums */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-5">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#D84315] uppercase tracking-wider block">
                    Student Enrichment
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    Co-Curricular Societies &amp; Student Clubs
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-[#0B2945]">
                      <FlaskConical className="w-4 h-4 text-[#0275D8]" />
                      <span>Inspire Science &amp; Innovation Forum</span>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      Conducts science quiz tournaments, experimental demonstration workshops, National Science Day symposia, and robotics seminars.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-[#0B2945]">
                      <BookOpen className="w-4 h-4 text-[#D84315]" />
                      <span>Literary &amp; Debating Guild</span>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      Organizes trilingual debates (Assamese, Bodo, English), creative writing competitions, poetry recitals, and wall-magazine publications.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-[#0B2945]">
                      <Trophy className="w-4 h-4 text-[#16865A]" />
                      <span>Sports &amp; Athletics Committee</span>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      Coordinates annual inter-house sports meets, volleyball tournaments, badminton championships, and track &amp; field events.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-[#0B2945]">
                      <Users className="w-4 h-4 text-[#0B2945]" />
                      <span>Green Campus &amp; Social Service Cell</span>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      Engages in campus tree plantation drives, Swachh Bharat cleanliness campaigns, and local community outreach programs in Baksa.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Campus Code of Discipline & Safety */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Disciplinary Framework
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    Student Code of Conduct &amp; Zero-Tolerance Policy
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#334155] leading-relaxed">
                  <p>
                    All enrolled students are required to maintain strict adherence to institutional dress codes, punctuality (8:30 AM arrival), minimum 75% classroom attendance for AHSEC exam eligibility, and disciplined conduct on campus.
                  </p>
                  <div className="p-4 bg-[#FEF2F2] border border-[#FEE2E2] rounded-xs text-xs text-[#991B1B] space-y-1">
                    <strong className="block font-bold">Anti-Ragging Notification (Supreme Court of India Mandate):</strong>
                    <p>Ragging in any form is strictly prohibited within or outside the Academy premises. Any violation will lead to immediate expulsion and police reporting.</p>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="campus-life"
                onOpenAdmissionModal={() => setIsModalOpen(true)}
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
