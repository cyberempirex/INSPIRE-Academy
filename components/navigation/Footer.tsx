'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  Clock, 
  Globe,
  Building2
} from 'lucide-react';
import { ACADEMY_INFO } from '@/lib/data/academy-data';
import InspireLogo from '@/components/brand/InspireLogo';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const GOV_PARTNER_LINKS = [
    { name: 'Govt. of Assam', url: 'https://assam.gov.in' },
    { name: 'AHSEC Official Portal', url: 'https://ahsec.assam.gov.in' },
    { name: 'Ministry of Education (MoE)', url: 'https://education.gov.in' },
    { name: 'DARPAN Admission Desk', url: 'https://darpan.ahsec.assam.gov.in' },
    { name: 'SWAYAM NPTEL Portal', url: 'https://swayam.gov.in' },
    { name: 'National Digital Library (NDLI)', url: 'https://ndl.iitkgp.ac.in' },
    { name: 'Bodoland Territorial Region (BTR)', url: 'https://bodoland.gov.in' },
  ];

  return (
    <footer className="bg-[#071E33] text-[#E2E8F0] border-t-4 border-[#0275D8] selection:bg-[#0275D8] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. TOP PARTNER PORTALS & GOVERNMENT LINKS STRIP                          */}
      {/* ========================================================================= */}
      <div className="bg-[#0B2945] border-b border-[#1E3A8A]/50 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono font-bold text-[#86EFAC] uppercase tracking-wider text-[11px]">
            <Globe className="w-3.5 h-3.5" />
            <span>Essential Academic &amp; Government Portals:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1.5 text-[11px] text-[#93C5FD]">
            {GOV_PARTNER_LINKS.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 hover:underline flex items-center gap-1 transition-colors"
              >
                <span>{item.name}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN 4-COLUMN INSTITUTIONAL DIRECTORY                                 */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          
          {/* Column 1: Institution Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <InspireLogo variant="compact" size="lg" inverted />
            </Link>
            
            <div className="space-y-2 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              <p>
                Inspire Academy is a premier co-educational senior-secondary institution located in Simla, Baksa (Assam), established in 2019. Providing dedicated instruction in Science and Arts under the Assam Higher Secondary Education Council (AHSEC).
              </p>
            </div>

            {/* Official Registry Badges */}
            <div className="pt-2 space-y-1.5 font-mono text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                <span className="text-[#86EFAC] font-bold">AHSEC Council Code:</span>
                <span className="text-white font-bold">015707</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                <span className="text-[#86EFAC] font-bold">UDISE Identification:</span>
                <span className="text-white font-bold">{ACADEMY_INFO.udiseCode}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                <span className="text-[#86EFAC] font-bold">Academic Scope:</span>
                <span className="text-white">Classes XI &amp; XII (Science &amp; Arts)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Academics & Admissions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#86EFAC] font-bold block border-b border-white/10 pb-1.5">
              Academics &amp; Programs
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <Link href="/academics" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Science Stream (PCM / PCB / PCMB)</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Arts / Humanities Stream</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span className="text-white font-bold">Online Admission Portal (2026–27)</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>AHSEC Syllabus &amp; Course Blueprint</span>
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Board Results &amp; Merit Ledger</span>
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Academic Council &amp; Faculty</span>
                </Link>
              </li>
              <li>
                <Link href="/learning" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5 text-[#93C5FD]">
                  <span className="text-yellow-400">›</span>
                  <span>Digital Learning &amp; e-Library</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Governance & Student Cells (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#86EFAC] font-bold block border-b border-white/10 pb-1.5">
              Governance &amp; Cells
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <Link href="/about" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Governing Body</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Internal Quality (IQAC)</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Anti-Ragging Cell</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Grievance Redressal</span>
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Official Gazette</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-yellow-300 hover:underline transition-colors flex items-center gap-1.5">
                  <span className="text-yellow-400">›</span>
                  <span>Photo Archive</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Campus Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#86EFAC] font-bold block border-b border-white/10 pb-1.5">
              Official Campus Desk
            </span>
            <div className="space-y-3 text-xs text-[#CBD5E1] font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <span>
                  Office of the Principal, Inspire Academy, Simla, District Baksa, Assam (BTR) — PIN 781313
                </span>
              </div>
              
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>
                    <a href={`tel:${ACADEMY_INFO.phones[0]}`} className="hover:text-yellow-300 font-bold text-white">
                      {ACADEMY_INFO.phones[0]}
                    </a>
                    <span className="text-white/50 text-[10px] ml-1.5">(Principal Desk)</span>
                  </div>
                  <div>
                    <a href={`tel:${ACADEMY_INFO.phones[1]}`} className="hover:text-yellow-300 text-white/90">
                      {ACADEMY_INFO.phones[1]}
                    </a>
                    <span className="text-white/50 text-[10px] ml-1.5">(Admissions)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#86EFAC] shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.email}`} className="hover:text-yellow-300 text-white break-all">
                  {ACADEMY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-[#94A3B8]">
                <Clock className="w-3.5 h-3.5 text-[#86EFAC] shrink-0 mt-0.5" />
                <span>Mon – Sat: 8:30 AM – 3:30 PM (Sunday Closed)</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. POLICY LINKS, VISITOR COUNTER & COMPLIANCE BAR                        */}
        {/* ========================================================================= */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          
          {/* Institutional Compliance Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px]">
            <Link href="/about" className="hover:text-white hover:underline">Website Policy</Link>
            <span>|</span>
            <Link href="/about" className="hover:text-white hover:underline">RTI Act 2005</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white hover:underline">Hyperlink Policy</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white hover:underline">Privacy &amp; Terms</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white hover:underline">Web Information Manager</Link>
          </div>

          {/* Visitor Counter and Scroll to Top */}
          <div className="flex items-center gap-4 text-[11px]">
            <span className="bg-white/10 px-2.5 py-1 rounded text-[#86EFAC] font-bold border border-white/15">
              Visitor Count: 1,84,390
            </span>
            <span className="hidden sm:inline text-white/50">
              Last Updated: August 2026
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-[#0275D8] hover:bg-[#0056B3] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-sm"
              aria-label="Scroll back to top"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-4 mt-4 border-t border-white/10 text-center text-[11px] font-mono text-[#64748B]">
          <p>
            © 2026 Inspire Academy, Simla, District Baksa, Assam (BTR) - 781313. All Rights Reserved. Affiliated to Assam Higher Secondary Education Council (AHSEC). Content managed and updated by Inspire Academy Administrative Office.
          </p>
        </div>

      </div>
    </footer>
  );
}

