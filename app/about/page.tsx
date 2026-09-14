'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap,
  Scale
} from 'lucide-react';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'About Us', href: '/about' }, { label: 'Institutional Profile & Governance' }]}
      />

      {/* Page Title & Official Masthead */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Estd. 2019 · AHSEC Council Affiliated Code: {ACADEMY_INFO.schoolCode}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              About Inspire Academy, Simla
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              A premier senior-secondary educational institution in District Baksa, Assam, dedicated to rigorous academic excellence, character formation, and holistic preparation in Science and Arts streams under AHSEC.
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
              
              {/* Section 1: Genesis & Institutional Foundation */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-5">
                <div className="border-b border-[#EDF2F7] pb-4">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block mb-1">
                    Institutional Genesis
                  </span>
                  <h2 className="text-2xl font-bold text-[#0B2945] font-display">
                    Foundation &amp; Academic Mission in Baksa
                  </h2>
                </div>

                <div className="text-[#334155] text-sm leading-relaxed space-y-4">
                  <p>
                    <strong>Inspire Academy was established in 2019</strong> at Simla in the Baksa District of Assam (Bodoland Territorial Region). The institution was founded by a collective of visionary educationists, academicians, and social patrons who recognized the urgent need for a disciplined, high-standard senior-secondary institution in this region.
                  </p>
                  <p>
                    Historically, students from Baksa, Tamulpur, and adjoining rural districts had to migrate to distant cities like Guwahati or Nalbari for competitive Higher Secondary guidance in Science and Arts. Inspire Academy was created to provide top-tier academic instruction, modern experimental science laboratories, well-stocked libraries, and rigorous board examination coaching right at home in Simla.
                  </p>
                  <p>
                    Affiliated with the <strong>Assam Higher Secondary Education Council (AHSEC)</strong> under Council Code <strong>{ACADEMY_INFO.schoolCode}</strong> and recognized under UDISE <strong>{ACADEMY_INFO.udiseCode}</strong>, the Academy has consistently produced outstanding results, first-division ranks, and student distinctions across all academic sessions since inception.
                  </p>
                </div>

                {/* Official Image Showcase */}
                <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#D8E2EC] mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                    alt="Inspire Academy classroom instruction, Simla"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2945]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                    <span className="text-[11px] font-mono font-bold text-[#86EFAC] uppercase">Simla Campus Main Block</span>
                    <p className="text-xs text-white/90">Daily interactive lectures and academic mentoring</p>
                  </div>
                </div>
              </section>

              {/* Section 2: Institutional Identification & Data Ledger */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                      Institutional Record
                    </span>
                    <h3 className="text-xl font-bold text-[#0B2945] font-display">
                      Official Identification &amp; Registrations
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 bg-[#EBF3FA] text-[#0275D8] rounded-xs font-bold">
                    AHSEC Verified
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse border border-[#D8E2EC]">
                    <thead className="bg-[#0B2945] text-white font-mono">
                      <tr>
                        <th className="py-2.5 px-4 font-bold border-r border-[#1E3A5A]">Parameter</th>
                        <th className="py-2.5 px-4 font-bold border-r border-[#1E3A5A]">Institutional Record</th>
                        <th className="py-2.5 px-4 font-bold">Verification Authority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#334155] font-mono text-[11px]">
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-2.5 px-4 font-bold text-[#0B2945] bg-[#F8FAFC]">Institution Name</td>
                        <td className="py-2.5 px-4 font-bold text-[#0B2945]">INSPIRE ACADEMY, SIMLA</td>
                        <td className="py-2.5 px-4 text-[#16865A]">AHSEC, Govt. of Assam</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-2.5 px-4 font-bold text-[#0B2945] bg-[#F8FAFC]">AHSEC Council Code</td>
                        <td className="py-2.5 px-4 font-bold text-[#0275D8]">{ACADEMY_INFO.schoolCode}</td>
                        <td className="py-2.5 px-4 text-[#16865A]">AHSEC Council Gazette</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-2.5 px-4 font-bold text-[#0B2945] bg-[#F8FAFC]">UDISE Registration</td>
                        <td className="py-2.5 px-4 font-bold text-[#0B2945]">{ACADEMY_INFO.udiseCode}</td>
                        <td className="py-2.5 px-4 text-[#16865A]">Ministry of Education, GoI</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-2.5 px-4 font-bold text-[#0B2945] bg-[#F8FAFC]">Level of Education</td>
                        <td className="py-2.5 px-4">Higher Secondary / Senior Secondary (10+2)</td>
                        <td className="py-2.5 px-4 text-[#16865A]">Class XI &amp; XII</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-2.5 px-4 font-bold text-[#0B2945] bg-[#F8FAFC]">Approved Streams</td>
                        <td className="py-2.5 px-4 font-bold">Science (PCM/PCB/PCMB) &amp; Arts (Humanities)</td>
                        <td className="py-2.5 px-4 text-[#16865A]">AHSEC Sanctioned</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-2.5 px-4 font-bold text-[#0B2945] bg-[#F8FAFC]">Medium of Instruction</td>
                        <td className="py-2.5 px-4">English &amp; Assamese / Bodo Bilingual Pedagogical Support</td>
                        <td className="py-2.5 px-4 text-[#16865A]">Bilingual Curriculum</td>
                      </tr>
                      <tr className="hover:bg-[#F8FAFC]">
                        <td className="py-2.5 px-4 font-bold text-[#0B2945] bg-[#F8FAFC]">Location &amp; District</td>
                        <td className="py-2.5 px-4">Simla, District Baksa, PIN 781313, Assam</td>
                        <td className="py-2.5 px-4 text-[#16865A]">BTR Administration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Vision, Mission & Core Values */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Mission Card */}
                <div className="bg-white p-6 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#0275D8]">
                    <Target className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Our Mission</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2945] font-display">
                    Academic Mission
                  </h3>
                  <div className="w-8 h-0.5 bg-[#D84315]" />
                  <p className="text-xs text-[#334155] leading-relaxed">
                    To deliver rigorous higher-secondary education in Science and Arts through systematic curriculum delivery, regular laboratory experimentation, continuous student evaluation, and ethical mentorship—empowering every student to achieve board distinction and secure entry into top universities and competitive entrance programs.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="bg-white p-6 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#D84315]">
                    <Eye className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Our Vision</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2945] font-display">
                    Institutional Vision
                  </h3>
                  <div className="w-8 h-0.5 bg-[#0275D8]" />
                  <p className="text-xs text-[#334155] leading-relaxed">
                    To stand as the foremost center of senior-secondary excellence in Baksa District and Lower Assam, recognized for uncompromising academic discipline, moral integrity, scientific spirit, and transformative societal impact in rural and semi-urban communities.
                  </p>
                </div>
              </section>

              {/* Section 4: Principal's Desk Message */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#D84315] uppercase tracking-wider block">
                    Leadership Desk
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    Message from the Desk of the Principal
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4 space-y-2 text-center">
                    <div className="relative aspect-[3/4] w-full max-w-[200px] mx-auto rounded-sm overflow-hidden border-2 border-[#0B2945] bg-[#0B2945]">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                        alt="Office of the Principal, Inspire Academy"
                        fill
                        className="object-cover"
                        sizes="200px"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[#0B2945]">Office of the Principal</h4>
                      <p className="text-[11px] font-mono text-[#64748B]">Inspire Academy, Simla</p>
                    </div>
                  </div>

                  <div className="md:col-span-8 text-[#334155] text-xs sm:text-sm leading-relaxed space-y-3">
                    <p className="italic text-[#0B2945] font-medium border-l-2 border-[#D84315] pl-3">
                      &quot;Senior-secondary education is the golden bridge between school life and professional destiny. At Inspire Academy, we ensure that this foundation is unshakeable.&quot;
                    </p>
                    <p>
                      Welcome to Inspire Academy, Simla. Since our establishment in 2019, our singular priority has been to provide every student with an environment of uncompromising academic discipline, high-quality teaching, and empathetic pastoral care.
                    </p>
                    <p>
                      Whether in our physics and chemistry laboratories or our political science seminars, our students are challenged daily to think critically, practice consistently, and prepare systematically for the AHSEC final examinations. We invite parents and aspirants to visit our campus and partner with us in this journey of academic distinction.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Institutional Governance & Disciplinary Cells */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Statutory Bodies
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    Governance &amp; Statutory Compliance Cells
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#0B2945]">
                      <GraduationCap className="w-4 h-4 text-[#0275D8]" />
                      <span>Academic Council (AC)</span>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      Oversees curriculum implementation, weekly test cycles, terminal evaluations, and syllabus completion according to AHSEC schedules.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#0B2945]">
                      <Scale className="w-4 h-4 text-[#D84315]" />
                      <span>Anti-Ragging &amp; Discipline Cell</span>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      Enforces zero-tolerance anti-ragging mandates and student codes of conduct as per Supreme Court of India directives.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#0B2945]">
                      <Users className="w-4 h-4 text-[#16865A]" />
                      <span>Internal Quality Assurance (IQAC)</span>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      Monitors teaching methodology, student feedback, laboratory apparatus maintenance, and faculty continuous professional growth.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#0B2945]">
                      <Building className="w-4 h-4 text-[#0B2945]" />
                      <span>Campus Grievance &amp; Welfare Desk</span>
                    </div>
                    <p className="text-[#64748B] leading-relaxed">
                      Addresses student, parent, and staff inquiries, welfare requests, and ensures equal educational opportunity for all admitted pupils.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Key Institutional Milestones */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Chronology
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    Key Institutional Milestones
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                    <span className="px-2 py-1 bg-[#0B2945] text-white font-mono font-bold text-xs rounded-xs shrink-0">
                      2019
                    </span>
                    <div className="text-xs space-y-0.5">
                      <strong className="text-[#0B2945] block font-semibold">Inauguration of Inspire Academy at Simla</strong>
                      <p className="text-[#64748B]">Foundation stone laid and first batch admitted for Higher Secondary Science and Arts streams.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                    <span className="px-2 py-1 bg-[#0275D8] text-white font-mono font-bold text-xs rounded-xs shrink-0">
                      2021
                    </span>
                    <div className="text-xs space-y-0.5">
                      <strong className="text-[#0B2945] block font-semibold">Inaugural AHSEC Board Results &amp; 100% Pass Rate</strong>
                      <p className="text-[#64748B]">First graduating class achieved 100% pass rates in both streams with multiple subject star marks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                    <span className="px-2 py-1 bg-[#D84315] text-white font-mono font-bold text-xs rounded-xs shrink-0">
                      2023
                    </span>
                    <div className="text-xs space-y-0.5">
                      <strong className="text-[#0B2945] block font-semibold">Upgradation of Science Laboratories &amp; Reading Room</strong>
                      <p className="text-[#64748B]">Expanded practical physics, chemistry, and biology labs with new optical benches, microscopes, and reference archives.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs">
                    <span className="px-2 py-1 bg-[#16865A] text-white font-mono font-bold text-xs rounded-xs shrink-0">
                      2025–26
                    </span>
                    <div className="text-xs space-y-0.5">
                      <strong className="text-[#0B2945] block font-semibold">Digital Learning Hub &amp; DARPAN Portal Integration</strong>
                      <p className="text-[#64748B]">Launched digital question bank archives, trilingual academic portal, and streamlined DARPAN online admission desk.</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="about"
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
