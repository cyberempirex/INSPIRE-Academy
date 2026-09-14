'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import LearningNav from '@/components/learning/LearningNav';
import InstitutionalBreadcrumb from '@/components/navigation/InstitutionalBreadcrumb';
import InstitutionalSidebar from '@/components/navigation/InstitutionalSidebar';
import { SECOND_LAYER_CATEGORIES } from '@/lib/types/learning-subcategories';
import { LEARNING_CATEGORIES } from '@/lib/types/learning';
import { ArrowRight, BookOpen, Layers, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;

  const categoryConfig = SECOND_LAYER_CATEGORIES[category];
  const mainCategory = LEARNING_CATEGORIES.find((c) => c.id === category);

  if (!categoryConfig && !mainCategory) {
    notFound();
  }

  const title = categoryConfig?.title || mainCategory?.title || category;
  const description = categoryConfig?.description || mainCategory?.description || 'Academic Repository';
  const subcategories = categoryConfig?.subcategories || [];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />

      <InstitutionalBreadcrumb
        items={[
          { label: 'E-Learning', href: '/learning' },
          { label: title }
        ]}
      />

      <LearningNav />

      {/* Header Masthead */}
      <section className="bg-[#0B2945] text-white py-10 border-b-4 border-[#D84315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-2">
            <Link
              href="/learning"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#86EFAC] hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Learning Hub</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white p-5 rounded-sm border border-[#D8E2EC] shadow-2xs">
                <h2 className="text-lg font-bold text-[#0B2945] font-display mb-1">
                  Available Modules &amp; Subcategories
                </h2>
                <p className="text-xs text-[#64748B]">
                  Select a section below to access curated study materials and syllabus resources.
                </p>
              </div>

              {subcategories.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subcategories.map((sub, idx) => (
                    <Link
                      key={sub.slug}
                      href={`/learning/${category}/${sub.slug}`}
                      className="bg-white p-5 rounded-sm border border-[#D8E2EC] hover:border-[#0275D8] hover:shadow-xs transition-all flex flex-col justify-between group space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-[#0275D8] bg-[#EFF6FF] px-2 py-0.5 rounded-xs">
                            Module 0{idx + 1}
                          </span>
                          <Layers className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0275D8] transition-colors" />
                        </div>
                        <h3 className="text-sm font-bold text-[#0B2945] group-hover:text-[#0275D8] transition-colors font-display">
                          {sub.title}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                          {sub.shortDescription}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-mono text-[#0275D8]">
                        <span>Open Module</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-sm border border-[#D8E2EC] text-center space-y-3">
                  <BookOpen className="w-8 h-8 text-[#94A3B8] mx-auto" />
                  <p className="text-sm text-[#475569]">
                    Content modules for this section are curated according to the AHSEC syllabus.
                  </p>
                  <Link
                    href="/learning"
                    className="inline-block px-4 py-2 bg-[#0275D8] text-white text-xs font-mono font-bold uppercase rounded-xs hover:bg-[#025aa5]"
                  >
                    Return to Directory
                  </Link>
                </div>
              )}
            </div>

            <div className="lg:col-span-4">
              <InstitutionalSidebar currentSection="learning" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
