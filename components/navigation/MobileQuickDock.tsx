'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bell, Edit3, Image as ImageIcon, Phone } from 'lucide-react';
import AdmissionsModal from '@/components/admissions/AdmissionsModal';

export default function MobileQuickDock() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#06182C] text-white border-t border-[#1E5A8A]/40 shadow-2xl px-2 py-1.5 safe-area-pb">
        <div className="grid grid-cols-5 items-center text-center">
          
          {/* 1. Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              pathname === '/' ? 'text-[#C9252D]' : 'text-[#E8EDF1]/70 hover:text-white'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-0.5">Home</span>
          </Link>

          {/* 2. Updates / Notices */}
          <Link
            href="/news"
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              pathname === '/news' ? 'text-[#C9252D]' : 'text-[#E8EDF1]/70 hover:text-white'
            }`}
          >
            <Bell className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-0.5">Updates</span>
          </Link>

          {/* 3. Elevated Enquire Action Button (Green Circle with Pencil/Edit Icon) */}
          <div className="flex flex-col items-center justify-center -mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-12 h-12 rounded-full bg-[#178653] hover:bg-[#1E9E64] text-white flex items-center justify-center shadow-lg border-2 border-[#06182C] transition-transform active:scale-95 cursor-pointer"
              aria-label="Enquire for Admission"
            >
              <Edit3 className="w-5 h-5" />
            </button>
            <span className="text-[10px] font-bold text-[#86EFAC] mt-0.5">Enquire</span>
          </div>

          {/* 4. Campus Gallery */}
          <Link
            href="/campus-life"
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              pathname === '/campus-life' ? 'text-[#C9252D]' : 'text-[#E8EDF1]/70 hover:text-white'
            }`}
          >
            <ImageIcon className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-0.5">Gallery</span>
          </Link>

          {/* 5. Contact */}
          <Link
            href="/contact"
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              pathname === '/contact' ? 'text-[#C9252D]' : 'text-[#E8EDF1]/70 hover:text-white'
            }`}
          >
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight mt-0.5">Contact</span>
          </Link>

        </div>
      </div>

      <AdmissionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
