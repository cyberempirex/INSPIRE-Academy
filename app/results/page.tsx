'use client';

import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { RESULT_HIGHLIGHTS } from '@/lib/data/academy-data';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  Award,
  Trophy,
  CheckCircle2,
  Calendar,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  Download
} from 'lucide-react';

export default function ResultsPage() {
  const [filterStream, setFilterStream] = useState<'All' | 'Science' | 'Arts'>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredResults = filterStream === 'All'
    ? RESULT_HIGHLIGHTS
    : RESULT_HIGHLIGHTS.filter((r) => r.stream === filterStream || r.stream === 'Combined');

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'Examination Records', href: '/results' }, { label: 'AHSEC Board Results Archive' }]}
      />

      {/* Official Masthead Header */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>AHSEC Final Examination Record Archive · Sessions 2020–2025</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Academic Results &amp; Examination Ledger
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              Official council examination performance records, subject star marks, first-division recipients, and academic honors achieved by Inspire Academy students in Science and Arts under AHSEC.
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
              
              {/* Summary Stats Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#64748B] uppercase">Pass Consistency</span>
                    <TrendingUp className="w-4 h-4 text-[#16865A]" />
                  </div>
                  <strong className="text-2xl font-mono font-bold text-[#0B2945]">98% – 100%</strong>
                  <p className="text-[11px] text-[#64748B]">Across all AHSEC final sessions</p>
                </div>

                <div className="bg-white p-5 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#64748B] uppercase">First Divisions</span>
                    <Trophy className="w-4 h-4 text-[#D84315]" />
                  </div>
                  <strong className="text-2xl font-mono font-bold text-[#D84315]">85%+</strong>
                  <p className="text-[11px] text-[#64748B]">Secured 60%+ aggregate marks</p>
                </div>

                <div className="bg-white p-5 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#64748B] uppercase">Council Registry</span>
                    <ShieldCheck className="w-4 h-4 text-[#0275D8]" />
                  </div>
                  <strong className="text-2xl font-mono font-bold text-[#0275D8]">015707</strong>
                  <p className="text-[11px] text-[#64748B]">AHSEC Official School Code</p>
                </div>
              </div>

              {/* Official Results Ledger & Filter */}
              <div className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs">
                {/* Filter Header Band */}
                <div className="bg-[#0B2945] text-white p-4 sm:p-5 border-b-2 border-[#D84315] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold font-display text-white">
                      AHSEC Class XII Final Examination Tabulation Ledger
                    </h2>
                    <p className="text-xs font-mono text-[#CBD5E1] mt-0.5">
                      Verified council gazette records by academic session
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setFilterStream('All')}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                        filterStream === 'All'
                          ? 'bg-[#D84315] text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      All Streams
                    </button>
                    <button
                      onClick={() => setFilterStream('Science')}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                        filterStream === 'Science'
                          ? 'bg-[#D84315] text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Science
                    </button>
                    <button
                      onClick={() => setFilterStream('Arts')}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                        filterStream === 'Arts'
                          ? 'bg-[#D84315] text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Arts
                    </button>
                  </div>
                </div>

                {/* Ledger Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#F0F4F8] text-[#0B2945] font-mono border-b border-[#D8E2EC]">
                      <tr>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Session Year</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Curriculum Stream</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Pass Percentage</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">1st Division Honors</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Star Marks &amp; Highlights</th>
                        <th className="py-3 px-4 font-bold">Council Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
                      {filteredResults.map((item, idx) => (
                        <tr key={`${item.year}-${idx}`} className="hover:bg-[#F8FAFC] transition-colors">
                          <td className="py-4 px-4 font-mono font-bold text-[#0B2945]">
                            Session {item.year}
                          </td>
                          <td className="py-4 px-4 font-bold text-[#0B2945]">
                            {item.stream} Stream
                          </td>
                          <td className="py-4 px-4 font-mono font-bold text-[#16865A] text-sm">
                            {item.passPercentage}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#0B2945]">
                            {item.firstDivisions}
                          </td>
                          <td className="py-4 px-4 text-xs text-[#475569]">
                            {item.starMarks}
                          </td>
                          <td className="py-4 px-4 font-mono text-[11px] text-[#16865A] font-bold whitespace-nowrap">
                            <span className="inline-flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#16865A]" />
                              Council Verified
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examination Methodology & Verification Protocol */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Institutional Record Verification
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    Marksheet Verification &amp; Pass Certificate Desk
                  </h3>
                </div>

                <div className="text-xs sm:text-sm text-[#334155] leading-relaxed space-y-3">
                  <p>
                    All marksheets, provisional certificates, and character testimonials issued to graduating students are backed by the official gazette of the <strong>Assam Higher Secondary Education Council (AHSEC)</strong>.
                  </p>
                  <p className="text-xs text-[#64748B]">
                    Universities, verification agencies, and prospective employers seeking official transcript attestation may direct requests to the Principal’s Office at <code>inspireacademysimla@gmail.com</code> referencing the candidate’s AHSEC Roll Number and examination year.
                  </p>
                </div>
              </section>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="results"
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
