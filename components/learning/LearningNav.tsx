'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LEARNING_CATEGORIES 
} from '@/lib/types/learning';
import { 
  LayoutDashboard, 
  Newspaper, 
  Globe, 
  BookOpenCheck, 
  HelpCircle, 
  FolderDown, 
  Compass, 
  Wrench, 
  UserCheck 
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

export default function LearningNav() {
  const pathname = usePathname();

  const isOverview = pathname === '/learning';

  return (
    <div className="bg-white border-b border-[#E2E8F0] sticky top-[72px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-2.5 gap-2">
          
          {/* Overview Link */}
          <Link
            href="/learning"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0 ${
              isOverview
                ? 'bg-[#0B2945] text-white shadow-xs'
                : 'text-[#334155] hover:bg-[#F3F4F1] hover:text-[#0B2945]'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Hub Overview</span>
          </Link>

          <span className="text-[#E2E8F0] flex-shrink-0">|</span>

          {/* 8 Categories */}
          <nav className="flex items-center gap-1.5">
            {LEARNING_CATEGORIES.map((cat, index) => {
              const isActive = pathname === cat.href || pathname.startsWith(cat.href + '/');
              const IconComponent = ICON_MAP[cat.iconName] || BookOpenCheck;

              return (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0 ${
                    isActive
                      ? 'bg-[#0B2945] text-white shadow-xs'
                      : 'text-[#334155] hover:bg-[#F3F4F1] hover:text-[#0B2945]'
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#86EFAC]' : 'text-[#334155]'}`} />
                  <span>{cat.title}</span>
                  <span className={`text-[10px] font-mono px-1 rounded-xs ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#F3F4F1] text-[#334155]'
                  }`}>
                    0{index + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

        </div>
      </div>
    </div>
  );
}
