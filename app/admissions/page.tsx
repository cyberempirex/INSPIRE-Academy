'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  FileText,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Phone,
  Calendar,
  AlertCircle,
  HelpCircle,
  Download,
  CreditCard,
  Building
} from 'lucide-react';

const REQUIRED_DOCUMENTS = [
  { name: 'HSLC / Class X Admit Card', count: 'Original + 2 Photocopies', purpose: 'Age proof & council verification' },
  { name: 'HSLC / Class X Official Mark Sheet', count: 'Original + 2 Photocopies', purpose: 'Merit screening & subject eligibility' },
  { name: 'Pass Certificate / Provisional Certificate', count: 'Original + 2 Photocopies', purpose: 'Completion proof from previous school' },
  { name: 'Transfer Certificate (TC) / Migration', count: 'Original Certificate', purpose: 'Institutional migration record' },
  { name: 'Passport Size Photographs', count: '4 Recent Color Copies', purpose: 'Identity card & council registration form' },
  { name: 'Aadhaar Card or Identity Document', count: '1 Self-Attested Photocopy', purpose: 'Student identity & UDISE registration' },
  { name: 'Caste / BPL / EWS Certificate (if applicable)', count: '1 Attested Copy', purpose: 'Concession / government scholarship' },
];

export default function AdmissionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'Admissions', href: '/admissions' }, { label: 'Guidelines & Procedure 2026–27' }]}
      />

      {/* Official Masthead Header */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Academic Session 2026–27 · Class XI (Science &amp; Arts)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Admission Guidelines &amp; DARPAN Portal Procedure
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              Official eligibility criteria, DARPAN online selection protocols, document verification checklists, and enrolment instructions for Higher Secondary 1st Year at Inspire Academy, Simla.
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
              
              {/* 1. Official DARPAN Assam Online Admission Desk */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-5">
                <div className="border-b border-[#EDF2F7] pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                      AHSEC Mandate
                    </span>
                    <h2 className="text-2xl font-bold text-[#0B2945] font-display">
                      DARPAN Online Admission Portal Guide
                    </h2>
                  </div>
                  <a
                    href="https://darpan.ahseconline.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0B2945] text-white text-xs font-mono font-bold rounded-xs hover:bg-[#0275D8] transition-colors"
                  >
                    <span>Visit DARPAN Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  As per the directives of the <strong>Assam Higher Secondary Education Council (AHSEC)</strong>, Govt. of Assam, all candidates seeking admission into Higher Secondary 1st Year (Science &amp; Arts) must register and submit their college preference through the centralized <strong>DARPAN Portal</strong> (<code>darpan.ahseconline.in</code>).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-3.5 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1">
                    <span className="text-[#64748B] block">Search Institution:</span>
                    <strong className="text-[#0B2945] text-xs block">INSPIRE ACADEMY, SIMLA</strong>
                  </div>
                  <div className="p-3.5 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1">
                    <span className="text-[#64748B] block">District &amp; Block:</span>
                    <strong className="text-[#0B2945] text-xs block">BAKSA / SIMLA (BTR)</strong>
                  </div>
                  <div className="p-3.5 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1">
                    <span className="text-[#64748B] block">Council Code:</span>
                    <strong className="text-[#0275D8] text-xs block">{ACADEMY_INFO.schoolCode}</strong>
                  </div>
                </div>

                {/* Step-by-Step DARPAN Procedure */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-[#0B2945] font-display">
                    4-Step DARPAN Online Application Flow:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                      <strong className="text-[#0B2945] block font-mono">Step 1: Student Registration</strong>
                      <p className="text-[#64748B] mt-0.5">Register on DARPAN using Class X Roll Code, Roll No, and valid mobile number.</p>
                    </div>
                    <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                      <strong className="text-[#0B2945] block font-mono">Step 2: Select Inspire Academy</strong>
                      <p className="text-[#64748B] mt-0.5">Select Baksa District &gt; Inspire Academy, Simla &gt; Science / Arts stream.</p>
                    </div>
                    <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                      <strong className="text-[#0B2945] block font-mono">Step 3: Merit List &amp; Acceptance</strong>
                      <p className="text-[#64748B] mt-0.5">Accept the admission offer from Inspire Academy once the merit list is published.</p>
                    </div>
                    <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                      <strong className="text-[#0B2945] block font-mono">Step 4: Physical Verification</strong>
                      <p className="text-[#64748B] mt-0.5">Report to the Simla campus desk with original certificates to finalize enrolment.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Stream-wise Eligibility Criteria Ledger */}
              <section className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs">
                <div className="bg-[#0B2945] text-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border-b-2 border-[#D84315]">
                  <span>Eligibility &amp; Minimum Academic Standards</span>
                  <span>Session 2026–27</span>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Science Eligibility */}
                    <div className="p-5 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#0275D8] uppercase">Class XI Science</span>
                        <span className="px-2 py-0.5 bg-[#EBF3FA] text-[#0275D8] text-[10px] font-mono font-bold rounded-xs">PCM / PCB</span>
                      </div>
                      <h3 className="font-bold text-base text-[#0B2945]">Higher Secondary Science</h3>
                      <div className="w-8 h-0.5 bg-[#0275D8]" />
                      <ul className="space-y-2 text-xs text-[#334155]">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16865A] shrink-0 mt-0.5" />
                          <span>Candidate must have passed HSLC / Class X from SEBA, CBSE, ICSE, or recognized council.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16865A] shrink-0 mt-0.5" />
                          <span>Minimum 50% aggregate marks recommended with solid performance in General Science and Mathematics.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16865A] shrink-0 mt-0.5" />
                          <span>Subject counseling conducted to allocate PCM, PCB, or PCMB combinations.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Arts Eligibility */}
                    <div className="p-5 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#D84315] uppercase">Class XI Arts</span>
                        <span className="px-2 py-0.5 bg-[#FFF7ED] text-[#D84315] text-[10px] font-mono font-bold rounded-xs">Humanities</span>
                      </div>
                      <h3 className="font-bold text-base text-[#0B2945]">Higher Secondary Arts</h3>
                      <div className="w-8 h-0.5 bg-[#D84315]" />
                      <ul className="space-y-2 text-xs text-[#334155]">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16865A] shrink-0 mt-0.5" />
                          <span>Candidate must have passed HSLC / Class X Board Examination from any recognized board.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16865A] shrink-0 mt-0.5" />
                          <span>Open to students with aptitude for Social Sciences, Economics, Philosophy, and Languages.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16865A] shrink-0 mt-0.5" />
                          <span>Civil Services Foundation track &amp; analytical answer writing mentorship included.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Mandatory Documents Checklist Table */}
              <section className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs">
                <div className="bg-[#0B2945] text-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border-b-2 border-[#D84315]">
                  <span>Mandatory Documents for Verification Desk</span>
                  <span>Self-Attested Copies Required</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#F0F4F8] text-[#0B2945] font-mono border-b border-[#D8E2EC]">
                      <tr>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Sl.</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Document Description</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Requirement Type</th>
                        <th className="py-3 px-4 font-bold">Purpose / Verification Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
                      {REQUIRED_DOCUMENTS.map((doc, idx) => (
                        <tr key={idx} className="hover:bg-[#F8FAFC]">
                          <td className="py-3 px-4 font-mono font-bold text-[#64748B]">0{idx + 1}</td>
                          <td className="py-3 px-4 font-bold text-[#0B2945]">{doc.name}</td>
                          <td className="py-3 px-4 font-mono text-[11px] text-[#0275D8] font-semibold">{doc.count}</td>
                          <td className="py-3 px-4 text-xs text-[#64748B]">{doc.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 4. Institutional Fee Transparency Policy */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Institutional Transparency
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    Fee Structure &amp; Installment Policy
                  </h3>
                </div>

                <div className="text-xs sm:text-sm text-[#334155] leading-relaxed space-y-3">
                  <p>
                    Inspire Academy maintains an affordable, highly transparent fee framework designed to make top-tier senior-secondary education accessible to all families in Baksa District.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                    <div className="p-3 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs">
                      <strong className="text-[#0B2945] block">Flexible Installments</strong>
                      <span className="text-[#64748B]">Term-wise payment options available upon request.</span>
                    </div>
                    <div className="p-3 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs">
                      <strong className="text-[#0B2945] block">Merit Scholarships</strong>
                      <span className="text-[#64748B]">Fee waivers for HSLC Board Star Marks &amp; Rank holders.</span>
                    </div>
                    <div className="p-3 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs">
                      <strong className="text-[#0B2945] block">No Hidden Charges</strong>
                      <span className="text-[#64748B]">Includes laboratory sessions, library access, &amp; tests.</span>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="admissions"
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
