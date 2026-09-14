'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6 bg-[#FAFAF7] p-8 sm:p-10 rounded-md border border-[#E2E8F0] shadow-xs">
          <div className="w-16 h-16 rounded-md bg-[#0B2945] text-white flex items-center justify-center mx-auto shadow-xs">
            <FileQuestion className="w-8 h-8 text-[#86EFAC]" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#C62832] uppercase tracking-wider">
              Error 404 · Page Not Found
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0B2945] font-display">
              Document Not Located
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              The requested academic page, department portal, or Learning Hub resource could not be found or has been relocated in the institutional catalog.
            </p>
          </div>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0B2945] text-white text-xs font-semibold hover:bg-[#0275D8] transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
