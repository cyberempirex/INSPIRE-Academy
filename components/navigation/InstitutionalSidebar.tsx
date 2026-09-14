'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileText,
  Download,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Bell,
  Clock,
  MapPin
} from 'lucide-react';
import { ACADEMY_INFO } from '@/lib/data/academy-data';

interface InstitutionalSidebarProps {
  currentSection?: string;
  onOpenAdmissionModal?: () => void;
}

export default function InstitutionalSidebar({
  currentSection,
  onOpenAdmissionModal,
}: InstitutionalSidebarProps) {
  const pathname = usePathname();

  const navLinks = [
    { label: 'About Inspire Academy', href: '/about', icon: BookOpen },
    { label: 'Academic Streams (HS Science & Arts)', href: '/academics', icon: GraduationCap },
    { label: 'Admission Guidelines 2026–27', href: '/admissions', icon: FileText },
    { label: 'Faculty & Academic Council', href: '/faculty', icon: Users },
    { label: 'Board Examination Results', href: '/results', icon: Award },
    { label: 'Official Circulars & Notices', href: '/news', icon: Bell },
    { label: 'Campus & Infrastructure Tour', href: '/campus-life', icon: MapPin },
    { label: 'Photo Archive & Activities', href: '/gallery', icon: BookOpen },
    { label: 'Learning Hub & Question Bank', href: '/learning', icon: BookOpen },
    { label: 'Campus Office & Helpdesk', href: '/contact', icon: Phone },
  ];

  return (
    <aside className="space-y-6">
      {/* 1. Official Section Navigation Menu */}
      <div className="bg-white border border-[#D8E2EC] rounded-sm overflow-hidden shadow-2xs">
        <div className="bg-[#0B2945] text-white px-4 py-3 border-b-2 border-[#D84315] flex items-center justify-between">
          <span className="font-bold text-xs uppercase tracking-wider font-mono">
            Institutional Navigation
          </span>
          <span className="w-2 h-2 rounded-full bg-[#0275D8] animate-pulse" />
        </div>
        <nav className="divide-y divide-[#EDF2F7]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold transition-all group ${
                  isActive
                    ? 'bg-[#EBF3FA] text-[#0B2945] border-l-4 border-[#0275D8] font-bold'
                    : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0275D8]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0275D8]' : 'text-[#64748B] group-hover:text-[#0275D8]'}`} />
                  <span>{link.label}</span>
                </div>
                <ChevronRight className={`w-3 h-3 ${isActive ? 'text-[#0275D8]' : 'text-[#CBD5E1] group-hover:translate-x-0.5 transition-transform'}`} />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 2. Admissions & DARPAN Helpdesk Card */}
      <div className="bg-gradient-to-b from-[#0B2945] to-[#071E33] text-white p-5 rounded-sm border border-[#0B2945] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#86EFAC] animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#86EFAC]">
            Admissions Desk 2026–27
          </span>
        </div>
        <div>
          <h4 className="text-sm font-bold font-display text-white">
            Class XI Science &amp; Arts Enrolment
          </h4>
          <p className="text-xs text-[#CBD5E1] mt-1 leading-relaxed">
            Direct &amp; DARPAN Portal admissions open for Higher Secondary 1st Year.
          </p>
        </div>

        <div className="pt-1 space-y-2">
          {onOpenAdmissionModal ? (
            <button
              onClick={onOpenAdmissionModal}
              className="w-full py-2 px-3 bg-[#D84315] hover:bg-[#BF360C] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Apply / Enquiry</span>
            </button>
          ) : (
            <Link
              href="/admissions"
              className="w-full py-2 px-3 bg-[#D84315] hover:bg-[#BF360C] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Admission Rules</span>
            </Link>
          )}

          <a
            href="https://darpan.ahseconline.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5 border border-white/20"
          >
            <span>AHSEC DARPAN Portal</span>
            <ExternalLink className="w-3 h-3 text-[#86EFAC]" />
          </a>
        </div>
      </div>

      {/* 3. Official Affiliation & Recognition Verification */}
      <div className="bg-[#F8FAFC] border border-[#D8E2EC] p-4 rounded-sm space-y-3 text-xs">
        <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-2">
          <ShieldCheck className="w-4 h-4 text-[#0275D8]" />
          <span className="font-bold text-[#0B2945] uppercase font-mono tracking-wider text-[11px]">
            Council Affiliation Record
          </span>
        </div>
        <div className="space-y-2 font-mono text-[11px]">
          <div className="flex justify-between items-center py-1 border-b border-[#EDF2F7]">
            <span className="text-[#64748B]">Board:</span>
            <span className="font-bold text-[#0B2945]">AHSEC, Assam</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-[#EDF2F7]">
            <span className="text-[#64748B]">Council Code:</span>
            <span className="font-bold text-[#0275D8]">{ACADEMY_INFO.schoolCode}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-[#EDF2F7]">
            <span className="text-[#64748B]">UDISE Code:</span>
            <span className="font-bold text-[#0B2945]">{ACADEMY_INFO.udiseCode}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-[#EDF2F7]">
            <span className="text-[#64748B]">Streams:</span>
            <span className="font-bold text-[#0B2945]">Science &amp; Arts</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-[#64748B]">Established:</span>
            <span className="font-bold text-[#0B2945]">2019 (Simla, Baksa)</span>
          </div>
        </div>
      </div>

      {/* 4. Campus Office & Direct Line */}
      <div className="bg-[#FFFFFF] border border-[#D8E2EC] p-4 rounded-sm space-y-2.5 text-xs">
        <span className="text-[11px] font-mono font-bold text-[#D84315] uppercase tracking-wider block">
          Administrative Desk
        </span>
        <h5 className="font-bold text-[#0B2945]">
          Inspire Academy, Simla Campus
        </h5>
        <div className="space-y-1.5 text-[#475569] text-[11px]">
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#0275D8] shrink-0 mt-0.5" />
            <span>Simla Town, Dist. Baksa (BTR), Assam — 781313</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#0275D8] shrink-0" />
            <a href={`tel:${ACADEMY_INFO.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#0B2945] hover:text-[#0275D8]">
              {ACADEMY_INFO.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#0275D8] shrink-0" />
            <span>Mon – Sat: 8:30 AM to 3:30 PM</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
