'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import LearningNav from '@/components/learning/LearningNav';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';
import { LEARNING_CATEGORIES } from '@/lib/types/learning';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import {
  Newspaper,
  Globe,
  BookOpenCheck,
  HelpCircle,
  FolderDown,
  Compass,
  Wrench,
  UserCheck,
  Search,
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap,
  BookOpen
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Newspaper,
  Globe,
  BookOpenCheck,
  HelpCircle,
  FolderDown,
  Compass,
  Wrench,
  UserCheck,
};

export default function LearningHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCategories = LEARNING_CATEGORIES.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      {/* Institutional Breadcrumb */}
      <InstitutionalBreadcrumb
        items={[{ label: 'E-Learning', href: '/learning' }, { label: 'Digital Learning Hub & Question Bank' }]}
      />

      {/* Sub-navigation for Learning Hub */}
      <LearningNav />

      {/* Page Title & Official Masthead */}
      <section className="bg-[#0B2945] text-white py-10 sm:py-14 border-b-4 border-[#D84315] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/10 border border-white/20 text-[#86EFAC] text-xs font-mono font-bold tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Digital Academic Repository · AHSEC Syllabus Aligned</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Academic Learning Hub &amp; Question Bank
            </h1>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
              Curated digital repository for senior-secondary Science and Arts students. Access current affairs, general knowledge, subject practice sets, self-evaluation quizzes, and career roadmaps.
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
              
              {/* Search & Portal Directory Header */}
              <div className="bg-white p-4 sm:p-5 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0275D8] uppercase tracking-wider block">
                      Portal Directory
                    </span>
                    <h2 className="text-xl font-bold text-[#0B2945] font-display">
                      8 Core Academic Learning Portals
                    </h2>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search learning portals..."
                      className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-[#D8E2EC] rounded-xs text-xs text-[#0B2945] focus:outline-hidden focus:border-[#0275D8]"
                    />
                  </div>
                </div>
              </div>

              {/* 8 Category Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredCategories.map((cat, index) => {
                  const IconComponent = ICON_MAP[cat.iconName] || BookOpenCheck;

                  return (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      className="bg-white rounded-sm border border-[#D8E2EC] p-5 shadow-2xs hover:border-[#0275D8] hover:shadow-xs transition-all flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-3">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="w-9 h-9 rounded-xs bg-[#0B2945] text-white flex items-center justify-center group-hover:bg-[#0275D8] transition-colors">
                            <IconComponent className="w-4 h-4 text-[#86EFAC]" />
                          </div>
                          <span className="text-xs font-mono font-bold text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 rounded-xs border border-[#D8E2EC]">
                            0{index + 1}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-[#0B2945] group-hover:text-[#0275D8] transition-colors flex items-center justify-between font-display">
                            <span>{cat.title}</span>
                            <ArrowRight className="w-4 h-4 text-[#0275D8] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </h3>
                          <p className="text-xs text-[#64748B] leading-relaxed">
                            {cat.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Footer Status */}
                      <div className="pt-3 border-t border-[#EDF2F7] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                        <span className="text-[#16865A] font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16865A]" />
                          Syllabus Verified
                        </span>
                        <span className="text-[#0275D8] font-bold group-hover:underline">Open Portal ↗</span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Faculty-Curated Syllabus Standards Note */}
              <section className="bg-white p-6 sm:p-8 rounded-sm border border-[#D8E2EC] shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-[#0275D8]">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Academic Governance
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0B2945] font-display">
                  AHSEC Aligned Learning Framework
                </h3>
                <p className="text-xs text-[#334155] leading-relaxed">
                  All learning resources, model answers, and mock tests are curated by department faculty members of Inspire Academy in strict accordance with the latest Assam Higher Secondary Education Council (AHSEC) curriculum and National Education Policy (NEP) guidelines.
                </p>
              </section>

            </div>

            {/* Right Column: Official University Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <InstitutionalSidebar
                currentSection="learning"
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
