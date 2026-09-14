'use client';

import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  Users,
  GraduationCap,
  BookOpen,
  FlaskConical,
  Search,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  ShieldCheck
} from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualifications: string;
  subjects: string;
  experience: string;
  role: string;
}

const FACULTY_DIRECTORY: FacultyMember[] = [
  // Physical Sciences
  {
    id: 'fac-1',
    name: 'Department of Physical Sciences',
    designation: 'Senior Faculty & Laboratory In-Charge',
    department: 'Physical Sciences',
    qualifications: 'M.Sc (Physics), B.Ed',
    subjects: 'Physics (Mechanics, Optics, Electromagnetism, Modern Physics)',
    experience: 'Senior Secondary Instruction & Entrance Foundation',
    role: 'Physics Laboratory Custodian',
  },
  {
    id: 'fac-2',
    name: 'Department of Chemical Sciences',
    designation: 'Senior Faculty in Chemistry',
    department: 'Physical Sciences',
    qualifications: 'M.Sc (Chemistry), CSIR-NET',
    subjects: 'Inorganic, Organic & Physical Chemistry, Salt Analysis',
    experience: 'Board Question Paper Setting & Titration Laboratory',
    role: 'Chemistry Laboratory Custodian',
  },
  // Mathematical & Life Sciences
  {
    id: 'fac-3',
    name: 'Department of Mathematical Sciences',
    designation: 'Head of Mathematics Division',
    department: 'Mathematical & Life Sciences',
    qualifications: 'M.Sc (Mathematics)',
    subjects: 'Differential & Integral Calculus, Algebra, Coordinate Geometry, Vectors',
    experience: '10+ Years Senior Secondary Board & Competitive Mentorship',
    role: 'Examination Cell Co-Coordinator',
  },
  {
    id: 'fac-4',
    name: 'Department of Biological Sciences',
    designation: 'Senior Faculty in Biology',
    department: 'Mathematical & Life Sciences',
    qualifications: 'M.Sc (Botany / Zoology), B.Ed',
    subjects: 'Botany (Plant Physiology, Genetics) & Zoology (Human Anatomy, Evolution)',
    experience: 'Laboratory Practical Demonstrator & Histology In-Charge',
    role: 'Biology Laboratory Custodian',
  },
  // Social Sciences & Humanities
  {
    id: 'fac-5',
    name: 'Department of Political Science',
    designation: 'Department Head (Humanities)',
    department: 'Social Sciences & Humanities',
    qualifications: 'M.A. (Political Science), SLET',
    subjects: 'Indian Constitution, Political Philosophy, Contemporary World Politics',
    experience: 'Civil Services Foundation Mentor & Model Answer Evaluator',
    role: 'Academic Council Member',
  },
  {
    id: 'fac-6',
    name: 'Department of Economics',
    designation: 'Senior Faculty in Economics',
    department: 'Social Sciences & Humanities',
    qualifications: 'M.A. (Economics)',
    subjects: 'Microeconomics, Macroeconomics, Indian Economic Development, Statistics',
    experience: 'Senior Secondary Economics & Public Policy Instructor',
    role: 'Student Career Guidance In-Charge',
  },
  {
    id: 'fac-7',
    name: 'Department of Education & Philosophy',
    designation: 'Faculty in Education & Logic',
    department: 'Philosophy & Education',
    qualifications: 'M.A. (Education / Philosophy)',
    subjects: 'Educational Psychology, Deductive Logic & Indian Epistemology',
    experience: 'Pedagogical Mentorship & Analytical Writing Coordinator',
    role: 'Internal Quality Assurance Cell (IQAC)',
  },
  // Languages & Literature
  {
    id: 'fac-8',
    name: 'Department of English Language',
    designation: 'Senior Faculty in English',
    department: 'Languages & Literature',
    qualifications: 'M.A. (English Literature), B.Ed',
    subjects: 'Core English, Applied Grammar, Rhetoric & Textual Analysis',
    experience: 'Language Laboratory Coordinator & Debate Mentor',
    role: 'Literary Society In-Charge',
  },
  {
    id: 'fac-9',
    name: 'Department of Assamese Literature',
    designation: 'Faculty in Assamese (MIL & Advance)',
    department: 'Languages & Literature',
    qualifications: 'M.A. (Assamese)',
    subjects: 'MIL Assamese, Advance Assamese, Regional Literary Traditions',
    experience: 'Regional Heritage & Literary Symposium Coordinator',
    role: 'Campus Cultural In-Charge',
  },
  {
    id: 'fac-10',
    name: 'Department of Bodo Literature',
    designation: 'Faculty in Bodo (MIL & Advance)',
    department: 'Languages & Literature',
    qualifications: 'M.A. (Bodo)',
    subjects: 'MIL Bodo, Advance Bodo Literature, Grammar & Cultural Heritage',
    experience: 'Bodo Sahitya Sabha Liaison & Regional Language Mentorship',
    role: 'Bilingual Support Coordinator',
  },
];

export default function FacultyPage() {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = [
    'All',
    'Physical Sciences',
    'Mathematical & Life Sciences',
    'Social Sciences & Humanities',
    'Philosophy & Education',
    'Languages & Literature',
  ];

  const filteredFaculty = FACULTY_DIRECTORY.filter((f) => {
    const matchesDept = selectedDept === 'All' || f.department === selectedDept;
    const matchesSearch =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.subjects.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.qualifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'Faculty', href: '/faculty' }, { label: 'Academic Staff Directory' }]}
      />

      {/* Official Masthead Header */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <Users className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Teaching Faculty Register · AHSEC Verified Staff</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Academic Faculty &amp; Teaching Divisions
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              Qualified subject educators, laboratory custodians, and department heads dedicated to higher-secondary academic excellence in Science and Arts at Inspire Academy, Simla.
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
              
              {/* Search & Department Filter Bar */}
              <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                  {/* Search Field */}
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search faculty or subject..."
                      className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs text-xs text-[#0B2945] focus:outline-hidden focus:border-[#0275D8]"
                    />
                  </div>

                  <span className="text-xs font-mono text-[#64748B]">
                    Showing <strong className="text-[#0B2945]">{filteredFaculty.length}</strong> of {FACULTY_DIRECTORY.length} Faculty Members
                  </span>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#EDF2F7]">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer ${
                        selectedDept === dept
                          ? 'bg-[#0B2945] text-white shadow-xs'
                          : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#E2E8F0] border border-[#D8E2EC]'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Faculty Directory Table / Ledger */}
              <div className="bg-white rounded-sm border border-[#D8E2EC] overflow-hidden shadow-2xs">
                <div className="bg-[#0B2945] text-white px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border-b-2 border-[#D84315]">
                  <span>Inspire Academy Senior Secondary Faculty Register</span>
                  <span>AHSEC Code: {ACADEMY_INFO.schoolCode}</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#F0F4F8] text-[#0B2945] font-mono border-b border-[#D8E2EC]">
                      <tr>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Department &amp; Role</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Qualifications</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Curricular Subjects Taught</th>
                        <th className="py-3 px-4 font-bold border-r border-[#D8E2EC]">Administrative Scope</th>
                        <th className="py-3 px-4 font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
                      {filteredFaculty.map((member) => (
                        <tr key={member.id} className="hover:bg-[#F8FAFC] transition-colors">
                          <td className="py-4 px-4">
                            <strong className="text-sm font-bold text-[#0B2945] block font-display">
                              {member.designation}
                            </strong>
                            <span className="text-[11px] font-mono text-[#0275D8] font-bold block mt-0.5">
                              {member.department}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-mono font-semibold text-[#0B2945]">
                            {member.qualifications}
                          </td>
                          <td className="py-4 px-4 text-xs text-[#334155] max-w-xs">
                            {member.subjects}
                          </td>
                          <td className="py-4 px-4 text-xs font-mono text-[#64748B]">
                            {member.role}
                          </td>
                          <td className="py-4 px-4 font-mono text-[11px] text-[#16865A] font-bold whitespace-nowrap">
                            <span className="inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#16865A]" />
                              Verified
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Faculty Mentorship & Office Hours Charter */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="border-b border-[#EDF2F7] pb-3">
                  <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                    Mentorship Standards
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2945] font-display">
                    Faculty Consultation &amp; Daily Doubt-Clearing Cell
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <strong className="text-[#0B2945] block text-sm">Post-Lecture Doubt Sessions</strong>
                    <p className="text-[#64748B] leading-relaxed">
                      Faculty members remain available daily from 2:00 PM to 3:30 PM for individual student doubt resolution and laboratory journal corrections.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs space-y-1.5">
                    <strong className="text-[#0B2945] block text-sm">Parent-Teacher Progress Audits</strong>
                    <p className="text-[#64748B] leading-relaxed">
                      Department heads conduct scheduled Parent-Teacher Meetings following each terminal examination to review marks and improvement plans.
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="faculty"
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
