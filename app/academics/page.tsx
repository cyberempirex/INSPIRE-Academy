'use client';

import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Calendar,
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Clock,
  Award
} from 'lucide-react';

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState<'science' | 'arts' | 'calendar' | 'evaluation'>('science');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'Academics', href: '/academics' }, { label: 'AHSEC Curriculum & Syllabi' }]}
      />

      {/* Official Masthead Header */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <GraduationCap className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Assam Higher Secondary Education Council (AHSEC) · 10+2 Framework</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Academic Streams &amp; Curriculum
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              Comprehensive two-year senior-secondary curriculum for Classes XI &amp; XII in Science (PCM / PCB / PCMB) and Arts (Humanities) affiliated with AHSEC under Council Code {ACADEMY_INFO.schoolCode}.
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
              
              {/* Tab Selector Bar */}
              <div className="bg-white border border-[#D8E2EC] p-1.5 rounded-sm flex flex-wrap gap-1 shadow-2xs">
                <button
                  onClick={() => setActiveTab('science')}
                  className={`px-4 py-2.5 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === 'science'
                      ? 'bg-[#0B2945] text-white shadow-xs'
                      : 'text-[#334155] hover:bg-[#F0F4F8] hover:text-[#0B2945]'
                  }`}
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Science Stream (PCM/PCB)</span>
                </button>

                <button
                  onClick={() => setActiveTab('arts')}
                  className={`px-4 py-2.5 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === 'arts'
                      ? 'bg-[#0B2945] text-white shadow-xs'
                      : 'text-[#334155] hover:bg-[#F0F4F8] hover:text-[#0B2945]'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Arts Stream (Humanities)</span>
                </button>

                <button
                  onClick={() => setActiveTab('calendar')}
                  className={`px-4 py-2.5 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === 'calendar'
                      ? 'bg-[#0B2945] text-white shadow-xs'
                      : 'text-[#334155] hover:bg-[#F0F4F8] hover:text-[#0B2945]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Academic Calendar</span>
                </button>

                <button
                  onClick={() => setActiveTab('evaluation')}
                  className={`px-4 py-2.5 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === 'evaluation'
                      ? 'bg-[#0B2945] text-white shadow-xs'
                      : 'text-[#334155] hover:bg-[#F0F4F8] hover:text-[#0B2945]'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Evaluation Scheme</span>
                </button>
              </div>

              {/* 1. SCIENCE STREAM CONTENT */}
              {activeTab === 'science' && (
                <div className="space-y-8">
                  {/* Overview Card */}
                  <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                    <div className="border-b border-[#EDF2F7] pb-3 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                          Department of Science
                        </span>
                        <h2 className="text-2xl font-bold text-[#0B2945] font-display">
                          Higher Secondary Science Course Blueprint
                        </h2>
                      </div>
                      <span className="px-2.5 py-1 bg-[#EBF3FA] text-[#0275D8] text-xs font-mono font-bold rounded-xs">
                        2-Year Program
                      </span>
                    </div>

                    <p className="text-sm text-[#334155] leading-relaxed">
                      The Science stream at Inspire Academy prepares students for senior-secondary board mastery as well as future professional careers in Engineering (JEE), Medicine (NEET), Pure Sciences, Pharmacy, and Agricultural Technology. The curriculum emphasizes rigorous classroom instruction complemented by daily laboratory experiments.
                    </p>

                    {/* Permitted Subject Combinations */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                        <span className="text-xs font-mono font-bold text-[#0B2945] block">PCM Group</span>
                        <p className="text-[11px] text-[#64748B]">Physics, Chemistry, Mathematics, English, MIL (Assamese/Bodo/Alt. Eng)</p>
                        <span className="text-[10px] font-mono text-[#0275D8] font-semibold block pt-1">Ideal for: Engineering &amp; Technology</span>
                      </div>

                      <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                        <span className="text-xs font-mono font-bold text-[#0B2945] block">PCB Group</span>
                        <p className="text-[11px] text-[#64748B]">Physics, Chemistry, Biology, English, MIL (Assamese/Bodo/Alt. Eng)</p>
                        <span className="text-[10px] font-mono text-[#16865A] font-semibold block pt-1">Ideal for: Medical, Nursing &amp; Bio</span>
                      </div>

                      <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                        <span className="text-xs font-mono font-bold text-[#0B2945] block">PCMB Group</span>
                        <p className="text-[11px] text-[#64748B]">Physics, Chemistry, Mathematics, Biology, English, MIL</p>
                        <span className="text-[10px] font-mono text-[#D84315] font-semibold block pt-1">Ideal for: Comprehensive Dual Track</span>
                      </div>
                    </div>
                  </div>

                  {/* Science Subject Ledger Table */}
                  <div className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs">
                    <div className="bg-[#0B2945] text-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border-b-2 border-[#D84315]">
                      <span>AHSEC Science Examination Matrix &amp; Marks Distribution</span>
                      <span>Total Marks: 500 / 600</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-[#F0F4F8] text-[#0B2945] font-mono border-b border-[#D8E2EC]">
                          <tr>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Sl.</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Subject Name</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Status</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Theory Exam</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Practical / Lab</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Total</th>
                            <th className="py-3 px-4 font-bold">Curricular Scope &amp; Lab Sessions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">01</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Physics (PHYS)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Compulsory Core</td>
                            <td className="py-3.5 px-4 font-mono">70 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">30 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Mechanics, Gravitation, Thermodynamics, Ray/Wave Optics, Electromagnetism, Modern Physics</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">02</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Chemistry (CHEM)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Compulsory Core</td>
                            <td className="py-3.5 px-4 font-mono">70 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">30 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Atomic Structure, Chemical Bonding, Thermodynamics, Organic Reaction Mechanisms, Salt Analysis &amp; Titrations</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">03</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Mathematics (MATH)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Elective / Optional</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks (Internal)</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Differential &amp; Integral Calculus, Linear Algebra, Coordinate Geometry, Vectors, 3D Geometry, Probability</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">04</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Biology (BIOL)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Elective / Optional</td>
                            <td className="py-3.5 px-4 font-mono">70 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">30 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Botany (Plant Physiology, Genetics, Biotechnology) &amp; Zoology (Human Anatomy, Reproduction, Ecology)</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">05</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">English (ENGL)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Compulsory</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks (Internal)</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Prescribed AHSEC Prose &amp; Poetry, Reading Comprehension, Applied Grammar, Report &amp; Notice Writing</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">06</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">MIL (Assamese / Bodo / Alt. Eng)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Compulsory</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks (Internal)</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Regional Literary Heritage, Classical Texts, Grammar, Creative Composition, Essay Writing</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Laboratory Infrastructure Standards */}
                  <div className="bg-white p-6 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-3">
                    <div className="flex items-center gap-2 text-[#0275D8]">
                      <FlaskConical className="w-5 h-5" />
                      <h3 className="font-bold text-sm text-[#0B2945] font-display uppercase tracking-wider font-mono">
                        Laboratory Guidelines &amp; Practical Assessment
                      </h3>
                    </div>
                    <p className="text-xs text-[#334155] leading-relaxed">
                      Every science student attends mandatory double-period practical sessions in Physics, Chemistry, and Biology laboratories every week. Observation notebooks, experimental logs, and specimen slide reports must be signed weekly by the departmental lab in-charge. AHSEC practical board exams are conducted in February each year.
                    </p>
                  </div>
                </div>
              )}

              {/* 2. ARTS STREAM CONTENT */}
              {activeTab === 'arts' && (
                <div className="space-y-8">
                  {/* Overview Card */}
                  <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                    <div className="border-b border-[#EDF2F7] pb-3 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                          Department of Humanities
                        </span>
                        <h2 className="text-2xl font-bold text-[#0B2945] font-display">
                          Higher Secondary Arts Course Blueprint
                        </h2>
                      </div>
                      <span className="px-2.5 py-1 bg-[#EBF3FA] text-[#0275D8] text-xs font-mono font-bold rounded-xs">
                        2-Year Program
                      </span>
                    </div>

                    <p className="text-sm text-[#334155] leading-relaxed">
                      The Arts Stream at Inspire Academy provides intensive intellectual training in political philosophy, economic theory, educational pedagogy, logic, and regional literature. It provides an ideal springboard for students aspiring toward Civil Services (UPSC / APSC), Law (CLAT), University Bachelor Degrees, Journalism, and Public Administration.
                    </p>
                  </div>

                  {/* Arts Subject Ledger Table */}
                  <div className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs">
                    <div className="bg-[#0B2945] text-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border-b-2 border-[#D84315]">
                      <span>AHSEC Arts Examination Matrix &amp; Marks Distribution</span>
                      <span>Total Marks: 500</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-[#F0F4F8] text-[#0B2945] font-mono border-b border-[#D8E2EC]">
                          <tr>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Sl.</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Subject Name</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Status</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Theory Exam</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Internal / Project</th>
                            <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Total</th>
                            <th className="py-3 px-4 font-bold">Curricular Scope &amp; Focus Areas</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">01</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Political Science (POLS)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Elective Core</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Indian Constitution, Contemporary World Politics, Regional Governance, International Organizations</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">02</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Economics (ECON)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Elective Core</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Micro &amp; Macroeconomic Theory, Indian Economy, Public Finance, Monetary Policy, Basic Statistics</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">03</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Education (EDUC)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Elective</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Principles of Education, Educational Psychology, Historical Development of Secondary Education in India</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">04</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Logic &amp; Philosophy (LOGP)</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Elective</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Formal Deductive &amp; Inductive Logic, Aristotelian Syllogisms, Indian Philosophical Traditions &amp; Ethics</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">05</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">Advance Assamese / Bodo</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Elective</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Classical Literature, Poetics, History of Assamese/Bodo Literature, Regional Cultural Traditions</td>
                          </tr>
                          <tr className="hover:bg-[#F8FAFC]">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#64748B]">06</td>
                            <td className="py-3.5 px-4 font-bold text-[#0B2945]">English &amp; MIL</td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">Compulsory</td>
                            <td className="py-3.5 px-4 font-mono">80 Marks (3 Hrs)</td>
                            <td className="py-3.5 px-4 font-mono text-[#0275D8] font-semibold">20 Marks</td>
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0B2945]">100</td>
                            <td className="py-3.5 px-4 text-xs">Core English &amp; Modern Indian Language (Assamese / Bodo / Alternative English)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. ACADEMIC CALENDAR */}
              {activeTab === 'calendar' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                    <div className="border-b border-[#EDF2F7] pb-3">
                      <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                        Session Schedule
                      </span>
                      <h2 className="text-2xl font-bold text-[#0B2945] font-display">
                        Annual Academic Calendar &amp; Milestone Timeline
                      </h2>
                    </div>

                    <div className="divide-y divide-[#E2E8F0]">
                      <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <strong className="text-xs text-[#0B2945] block font-mono">June – July</strong>
                          <span className="text-sm text-[#334155] font-semibold">Session Commencement &amp; Orientation</span>
                        </div>
                        <span className="text-xs font-mono text-[#16865A] bg-[#F0FDF4] px-2.5 py-1 border border-[#DCFCE7] rounded-xs font-bold">
                          HS 1st &amp; 2nd Year Induction
                        </span>
                      </div>

                      <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <strong className="text-xs text-[#0B2945] block font-mono">August – September</strong>
                          <span className="text-sm text-[#334155] font-semibold">First Term Unit Assessments &amp; Lab Audits</span>
                        </div>
                        <span className="text-xs font-mono text-[#0275D8] bg-[#EBF3FA] px-2.5 py-1 border border-[#D0E2FF] rounded-xs font-bold">
                          Unit Tests 01 &amp; 02
                        </span>
                      </div>

                      <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <strong className="text-xs text-[#0B2945] block font-mono">October – November</strong>
                          <span className="text-sm text-[#334155] font-semibold">Mid-Term Terminal Examinations &amp; PTM</span>
                        </div>
                        <span className="text-xs font-mono text-[#D84315] bg-[#FFF7ED] px-2.5 py-1 border border-[#FFEDD5] rounded-xs font-bold">
                          Mid-Term Comprehensive Exam
                        </span>
                      </div>

                      <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <strong className="text-xs text-[#0B2945] block font-mono">December – January</strong>
                          <span className="text-sm text-[#334155] font-semibold">AHSEC Simulated Pre-Board Test Series</span>
                        </div>
                        <span className="text-xs font-mono text-[#C62832] bg-[#FEF2F2] px-2.5 py-1 border border-[#FEE2E2] rounded-xs font-bold">
                          Full 100-Mark Pre-Board
                        </span>
                      </div>

                      <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <strong className="text-xs text-[#0B2945] block font-mono">February – March</strong>
                          <span className="text-sm text-[#334155] font-semibold">AHSEC Final Council Board Examinations</span>
                        </div>
                        <span className="text-xs font-mono text-[#0B2945] bg-[#F1F5F9] px-2.5 py-1 border border-[#CBD5E1] rounded-xs font-bold">
                          Official Board Exam
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. EVALUATION SCHEME */}
              {activeTab === 'evaluation' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                    <div className="border-b border-[#EDF2F7] pb-3">
                      <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                        Standards &amp; Pass Criteria
                      </span>
                      <h2 className="text-2xl font-bold text-[#0B2945] font-display">
                        AHSEC Board Passing Standards &amp; Internal Evaluation
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-2">
                        <span className="font-bold text-[#0B2945] block text-sm">Theory Pass Criteria (30%)</span>
                        <p className="text-[#64748B] leading-relaxed">
                          Students must secure a minimum of 30% marks in each theory paper (21 out of 70 in practical subjects, 24 out of 80 in internal subjects).
                        </p>
                      </div>

                      <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-2">
                        <span className="font-bold text-[#0B2945] block text-sm">Practical Pass Criteria (40%)</span>
                        <p className="text-[#64748B] leading-relaxed">
                          Students must secure a minimum of 40% marks in practical lab assessments (12 out of 30 marks) separately from the theory examination.
                        </p>
                      </div>

                      <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-2">
                        <span className="font-bold text-[#0B2945] block text-sm">1st Division Standard</span>
                        <p className="text-[#64748B] leading-relaxed">
                          Awarded to candidates who secure an aggregate of 60% or more (300+ marks out of 500) across five best subjects.
                        </p>
                      </div>

                      <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-2">
                        <span className="font-bold text-[#0B2945] block text-sm">Star Marks &amp; Distinction</span>
                        <p className="text-[#64748B] leading-relaxed">
                          Star marks awarded for 75%+ overall aggregate (375+ out of 500) and Letter Distinction for 80%+ in individual subjects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="academics"
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
