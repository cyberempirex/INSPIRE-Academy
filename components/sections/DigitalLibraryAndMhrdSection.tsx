'use client';

import React from 'react';
import { 
  ExternalLink, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2,
  Download,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

/* ========================================================================= */
/* CRISP OFFICIAL LOGO EMBLEMS (High clarity, professional light palette)   */
/* ========================================================================= */

// 1. Government of India / Ministry of Education Emblem
function GovtOfIndiaEmblem({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Emblem of India">
      <circle cx="50" cy="50" r="46" fill="#F8FAFC" stroke="#0B2945" strokeWidth="2" />
      {/* Central Lion Capital Stylized Silhouette */}
      <path d="M50 18C44 18 41 22 41 27C41 33 45 37 47 40C45 42 41 45 39 49C37 53 38 58 41 62H59C62 58 63 53 61 49C59 45 55 42 53 40C55 37 59 33 59 27C59 22 56 18 50 18Z" fill="#0B2945" />
      <path d="M37 28C33 28 30 32 30 36C30 41 33 44 36 47C35 49 33 51 32 54C31 57 32 60 34 62H41C38 58 37 53 39 49C41 45 45 42 47 40C45 37 41 33 41 27C41 24 42 22 43 20C40 22 38 25 37 28Z" fill="#334155" />
      <path d="M63 28C67 28 70 32 70 36C70 41 67 44 64 47C65 49 67 51 68 54C69 57 68 60 66 62H59C62 58 63 53 61 49C59 45 55 42 53 40C55 37 59 33 59 27C59 24 58 22 57 20C60 22 62 25 63 28Z" fill="#334155" />
      {/* Ashoka Chakra Base Wheel */}
      <circle cx="50" cy="72" r="8" stroke="#0275D8" strokeWidth="1.5" />
      <circle cx="50" cy="72" r="1.5" fill="#0275D8" />
      <line x1="50" y1="64" x2="50" y2="80" stroke="#0275D8" strokeWidth="1" />
      <line x1="42" y1="72" x2="58" y2="72" stroke="#0275D8" strokeWidth="1" />
      <rect x="28" y="82" width="44" height="3.5" rx="1" fill="#D97706" />
    </svg>
  );
}

// 2. SWAYAM Official Emblem
function SwayamOfficialEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SWAYAM Logo">
      <rect width="100" height="100" rx="8" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.5" />
      <ellipse cx="50" cy="46" rx="34" ry="15" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(-20 50 46)" />
      <ellipse cx="50" cy="46" rx="34" ry="15" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(20 50 46)" />
      <circle cx="50" cy="46" r="12" fill="#0B2945" />
      {/* Book & Flame */}
      <path d="M50 42C45 39 40 40 36 42V54C40 52 45 51 50 54C55 51 60 52 64 54V42C60 40 55 39 50 42Z" fill="#38BDF8" />
      <path d="M50 32C52 35 53 37 53 39C53 40.7 51.7 42 50 42C48.3 42 47 40.7 47 39C47 37 48 35 50 32Z" fill="#F59E0B" />
      <text x="50" y="78" textAnchor="middle" fill="#0B2945" fontSize="12" fontWeight="900" fontFamily="monospace" letterSpacing="1.5">SWAYAM</text>
      <text x="50" y="88" textAnchor="middle" fill="#64748B" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">MoE · GOVT OF INDIA</text>
    </svg>
  );
}

// 3. e-Pathshala / NCERT Official Emblem
function EPathshalaOfficialEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="e-Pathshala Logo">
      <rect width="100" height="100" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
      <circle cx="50" cy="44" r="24" stroke="#16A34A" strokeWidth="2" />
      <circle cx="50" cy="44" r="20" fill="#DCFCE7" />
      {/* Tri-Swan Motif */}
      <path d="M50 28C46 33 45 38 48 41C51 44 56 43 59 39C56 35 54 31 50 28Z" fill="#15803D" />
      <path d="M42 50C47 48 51 50 53 53C55 56 54 61 49 62C46 59 44 54 42 50Z" fill="#16A34A" />
      <path d="M58 50C53 48 49 50 47 53C45 56 46 61 51 62C54 59 56 54 58 50Z" fill="#22C55E" />
      <circle cx="50" cy="44" r="4" fill="#0B2945" />
      <text x="50" y="78" textAnchor="middle" fill="#0B2945" fontSize="11" fontWeight="900" fontFamily="monospace" letterSpacing="1">e-Pathshala</text>
      <text x="50" y="88" textAnchor="middle" fill="#64748B" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">NCERT · CIET</text>
    </svg>
  );
}

// 4. NDLI (National Digital Library of India - IIT Kharagpur)
function NdliOfficialEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="NDLI Logo">
      <rect width="100" height="100" rx="8" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
      <circle cx="50" cy="44" r="22" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="1.5" />
      {/* Honeycomb Tri-Nodes */}
      <polygon points="50,30 56,33 56,41 50,44 44,41 44,33" fill="#4338CA" />
      <polygon points="38,44 44,47 44,55 38,58 32,55 32,47" fill="#4F46E5" />
      <polygon points="62,44 68,47 68,55 62,58 56,55 56,47" fill="#4F46E5" />
      <line x1="50" y1="44" x2="38" y2="51" stroke="#4338CA" strokeWidth="1.5" />
      <line x1="50" y1="44" x2="62" y2="51" stroke="#4338CA" strokeWidth="1.5" />
      <text x="50" y="78" textAnchor="middle" fill="#0B2945" fontSize="12" fontWeight="900" fontFamily="monospace" letterSpacing="2">NDLI</text>
      <text x="50" y="88" textAnchor="middle" fill="#64748B" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">IIT KHARAGPUR · MoE</text>
    </svg>
  );
}

// 5. DIKSHA (National QR-Coded Learning Infrastructure)
function DikshaOfficialEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="DIKSHA Logo">
      <rect width="100" height="100" rx="8" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" />
      <circle cx="50" cy="44" r="20" stroke="#D97706" strokeWidth="2" fill="#FEF3C7" />
      {/* QR Nodes Symbol */}
      <rect x="42" y="36" width="16" height="16" rx="2" fill="#0B2945" />
      <rect x="45" y="39" width="4" height="4" fill="#38BDF8" />
      <rect x="51" y="39" width="4" height="4" fill="#F59E0B" />
      <rect x="45" y="45" width="4" height="4" fill="#F59E0B" />
      <rect x="51" y="45" width="4" height="4" fill="#10B981" />
      <text x="50" y="78" textAnchor="middle" fill="#0B2945" fontSize="11" fontWeight="900" fontFamily="monospace" letterSpacing="1.5">DIKSHA</text>
      <text x="50" y="88" textAnchor="middle" fill="#64748B" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">NATIONAL QR PORTAL</text>
    </svg>
  );
}

// 6. SWAYAM PRABHA (34 DTH Educational Channels)
function SwayamPrabhaOfficialEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SWAYAM PRABHA Logo">
      <rect width="100" height="100" rx="8" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.5" />
      <path d="M36 52C36 42 44 34 54 34" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 52C30 36 42 24 58 24" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
      <path d="M58 44L66 36M66 36L70 40M66 36L62 32" stroke="#0B2945" strokeWidth="2" strokeLinecap="round" />
      <rect x="32" y="54" width="36" height="3" rx="1.5" fill="#0284C7" />
      <text x="50" y="77" textAnchor="middle" fill="#0B2945" fontSize="9" fontWeight="900" fontFamily="monospace" letterSpacing="0.8">SWAYAM PRABHA</text>
      <text x="50" y="88" textAnchor="middle" fill="#64748B" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">34 DTH CHANNELS</text>
    </svg>
  );
}

// 7. NROER (National Repository of Open Educational Resources)
function NroerOfficialEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="NROER Logo">
      <rect width="100" height="100" rx="8" fill="#FDF2F8" stroke="#FBCFE8" strokeWidth="1.5" />
      <circle cx="50" cy="44" r="18" stroke="#DB2777" strokeWidth="1.5" fill="#FCE7F3" />
      <path d="M38 44H62M50 32C55 38 55 50 50 56C45 50 45 38 50 32Z" stroke="#BE185D" strokeWidth="1.2" />
      <rect x="44" y="40" width="12" height="9" rx="1.5" fill="#9D174D" />
      <circle cx="50" cy="44" r="1.5" fill="#FFFFFF" />
      <text x="50" y="78" textAnchor="middle" fill="#0B2945" fontSize="11" fontWeight="900" fontFamily="monospace" letterSpacing="1.5">NROER</text>
      <text x="50" y="88" textAnchor="middle" fill="#64748B" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">OPEN REPOSITORY · CIET</text>
    </svg>
  );
}

/* ========================================================================= */
/* COMPACT MHRD PORTALS DIRECTORY                                           */
/* ========================================================================= */

interface PortalEntry {
  id: string;
  sl: string;
  name: string;
  code: string;
  agency: string;
  url: string;
  domain: string;
  subjects: string;
  keyOffering: string;
  Emblem: React.ComponentType<{ className?: string }>;
}

export default function DigitalLibraryAndMhrdSection() {
  const { t } = useLanguage();

  const PORTALS: PortalEntry[] = [
    {
      id: 'swayam',
      sl: '01',
      name: 'SWAYAM Centralized Courseware',
      code: 'MOE/SWAYAM',
      agency: 'Ministry of Education & NPTEL/AICTE',
      url: 'https://swayam.gov.in',
      domain: 'swayam.gov.in',
      subjects: 'Physics, Chem, Math, Bio, Economics',
      keyOffering: 'Free video lectures & Class XI-XII course modules',
      Emblem: SwayamOfficialEmblem,
    },
    {
      id: 'epathshala',
      sl: '02',
      name: 'e-Pathshala Digital Textbooks',
      code: 'NCERT/EPATH',
      agency: 'NCERT & CIET Digital Division',
      url: 'https://epathshala.nic.in',
      domain: 'epathshala.nic.in',
      subjects: 'Science, Arts, Languages, Exemplar Sets',
      keyOffering: 'Complete NCERT e-books, flipbooks & audio lectures',
      Emblem: EPathshalaOfficialEmblem,
    },
    {
      id: 'ndli',
      sl: '03',
      name: 'National Digital Library (NDLI)',
      code: 'IIT-KGP/NDLI',
      agency: 'IIT Kharagpur & Ministry of Education',
      url: 'https://ndl.iitkgp.ac.in',
      domain: 'ndl.iitkgp.ac.in',
      subjects: 'PCM, PCB, Social Sciences, NEET/JEE',
      keyOffering: '60M+ academic papers, books & 10-year question banks',
      Emblem: NdliOfficialEmblem,
    },
    {
      id: 'diksha',
      sl: '04',
      name: 'DIKSHA National QR Platform',
      code: 'NCERT/DIKSHA',
      agency: 'Department of School Education & Literacy',
      url: 'https://diksha.gov.in',
      domain: 'diksha.gov.in',
      subjects: 'State & National QR-coded syllabus chapters',
      keyOffering: 'Interactive worksheets & chapter-wise self-tests',
      Emblem: DikshaOfficialEmblem,
    },
    {
      id: 'swayamprabha',
      sl: '05',
      name: 'SWAYAM PRABHA 34 DTH Channels',
      code: 'INFLIBNET/SP',
      agency: 'INFLIBNET & BISAG-N Satellite Network',
      url: 'https://swayamprabha.gov.in',
      domain: 'swayamprabha.gov.in',
      subjects: 'Higher Secondary Science & Humanities',
      keyOffering: '24x7 educational telecast on GSAT-15 satellite',
      Emblem: SwayamPrabhaOfficialEmblem,
    },
    {
      id: 'nroer',
      sl: '06',
      name: 'NROER Open Resource Repository',
      code: 'CIET/NROER',
      agency: 'Central Institute of Educational Technology',
      url: 'https://nroer.gov.in',
      domain: 'nroer.gov.in',
      subjects: 'STEM simulations & multilingual resources',
      keyOffering: 'Open-access multimedia, concept maps & 3D models',
      Emblem: NroerOfficialEmblem,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-8 sm:py-10 border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        
        {/* Masthead Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0B2945]">
          <div className="flex items-center gap-3.5">
            <div className="shrink-0 p-1 bg-white rounded-xs border border-[#CBD5E1] shadow-2xs">
              <GovtOfIndiaEmblem className="w-10 h-10 sm:w-11 sm:h-11" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-xs bg-[#0B2945] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  National Repositories
                </span>
                <span className="text-xs font-mono font-bold text-[#0275D8]">
                  MHRD / Ministry of Education, Govt. of India
                </span>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-[#0B2945] tracking-tight">
                MHRD&apos;s Online Learning Resources
              </h2>
              <p className="text-xs text-[#475569]">
                National open educational gateways officially integrated for Class XI &amp; XII curriculum enrichment.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#CBD5E1] rounded-xs text-xs font-mono text-[#0B2945] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16865A]" />
              <span>NMEICT Open Access (100% Free)</span>
            </span>
          </div>
        </div>

        {/* Professional Tabular Directory (No generic cards / Clean crisp academic list) */}
        <div className="border border-[#CBD5E1] rounded-xs overflow-hidden shadow-2xs bg-white">
          
          {/* Table Column Headers */}
          <div className="hidden lg:grid grid-cols-12 bg-[#0B2945] text-white text-xs font-mono font-bold uppercase tracking-wider py-2.5 px-4">
            <div className="col-span-1 text-center">SL</div>
            <div className="col-span-4">NATIONAL PORTAL &amp; NODAL AGENCY</div>
            <div className="col-span-3">COVERED STREAMS &amp; SUBJECTS</div>
            <div className="col-span-3">KEY ACADEMIC DELIVERABLES</div>
            <div className="col-span-1 text-right">GATEWAY</div>
          </div>

          {/* Directory Rows */}
          <div className="divide-y divide-[#E2E8F0]">
            {PORTALS.map((portal, idx) => {
              const EmblemComponent = portal.Emblem;
              return (
                <div 
                  key={portal.id}
                  className={`p-3.5 sm:p-4 flex flex-col lg:grid lg:grid-cols-12 gap-3 lg:gap-4 items-start lg:items-center transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
                  } hover:bg-[#EFF6FF]`}
                >
                  {/* SL Column */}
                  <div className="hidden lg:block col-span-1 text-center font-mono font-bold text-xs text-[#64748B]">
                    {portal.sl}
                  </div>

                  {/* Portal Branding, Title & Nodal Agency */}
                  <div className="w-full lg:col-span-4 flex items-center gap-3 min-w-0">
                    <div className="shrink-0 p-1 bg-white rounded-xs border border-[#E2E8F0] shadow-2xs">
                      <EmblemComponent className="w-9 h-9" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="lg:hidden font-mono font-bold text-xs text-[#0275D8]">
                          [{portal.sl}]
                        </span>
                        <span className="px-1.5 py-0.2 rounded-xs bg-[#E2E8F0] text-[#0B2945] text-[10px] font-mono font-bold">
                          {portal.code}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0B2945] font-display truncate mt-0.5">
                        {portal.name}
                      </h3>
                      <p className="text-[11px] text-[#64748B] truncate font-mono">
                        {portal.agency}
                      </p>
                    </div>
                  </div>

                  {/* Streams & Disciplines */}
                  <div className="w-full lg:col-span-3 text-xs text-[#334155]">
                    <span className="lg:hidden text-[10px] font-mono font-bold text-[#64748B] block uppercase">
                      Disciplines:
                    </span>
                    <span className="font-sans text-xs text-[#1E293B]">
                      {portal.subjects}
                    </span>
                  </div>

                  {/* Key Offerings */}
                  <div className="w-full lg:col-span-3 text-xs text-[#475569]">
                    <span className="lg:hidden text-[10px] font-mono font-bold text-[#64748B] block uppercase">
                      Resources:
                    </span>
                    <span className="text-xs text-[#475569]">
                      {portal.keyOffering}
                    </span>
                  </div>

                  {/* Launch Official Portal */}
                  <div className="w-full lg:col-span-1 flex lg:justify-end">
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xs bg-[#0275D8] hover:bg-[#025aa5] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-2xs"
                    >
                      <span>Open</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Compact Footer Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] font-mono gap-2 pt-1">
          <span>Official Academic Linkage · National Mission on Education through ICT (NMEICT)</span>
          <span className="text-[#0275D8]">AHSEC Simla Campus Knowledge Desk</span>
        </div>

      </div>
    </section>
  );
}
