'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface InspireLogoProps {
  variant?: 'full' | 'emblem' | 'horizontal' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
  inverted?: boolean;
  showSubtitle?: boolean;
  useImage?: boolean;
}

export default function InspireLogo({
  variant = 'full',
  size = 'md',
  className = '',
  theme = 'auto',
  inverted = false,
  showSubtitle = true,
  useImage = true,
}: InspireLogoProps) {
  const [imgError, setImgError] = useState(false);
  const isDark = inverted || theme === 'dark';

  // Dimension definitions
  const sizeMap = {
    sm: { emblem: 'w-8 h-8', px: 32, text: 'text-xs', sub: 'text-[9px]' },
    md: { emblem: 'w-10 h-10', px: 40, text: 'text-sm sm:text-base', sub: 'text-[10px]' },
    lg: { emblem: 'w-14 h-14', px: 56, text: 'text-lg sm:text-xl', sub: 'text-xs' },
    xl: { emblem: 'w-20 h-20', px: 80, text: 'text-xl sm:text-2xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // Official Logo Image from local public/brand directory
  const renderLogoImage = (imgClass: string) => {
    if (!imgError && useImage) {
      return (
        <div className={`relative ${imgClass} flex items-center justify-center flex-shrink-0`}>
          <Image
            src="/brand/inspire-academy-logo.png"
            alt="Inspire Academy Official Emblem Simla Estd. 2019"
            width={currentSize.px * 2}
            height={currentSize.px * 2}
            className="w-full h-full object-contain"
            priority={size === 'md' || size === 'sm'}
            onError={() => setImgError(true)}
          />
        </div>
      );
    }

    // High fidelity SVG fallback
    return (
      <div className={`relative ${imgClass} flex items-center justify-center flex-shrink-0`}>
        <Image
          src="/brand/inspire-academy-logo.svg"
          alt="Inspire Academy Official Emblem Simla Estd. 2019"
          width={currentSize.px * 2}
          height={currentSize.px * 2}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    );
  };

  if (variant === 'emblem') {
    return (
      <div className={`relative flex items-center justify-center ${currentSize.emblem} ${className}`}>
        {renderLogoImage('w-full h-full')}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className={`${currentSize.emblem} flex-shrink-0`}>
          {renderLogoImage('w-full h-full')}
        </div>
        <div className="leading-tight">
          <span className={`font-bold tracking-tight block ${isDark ? 'text-[#FFFFFF]' : 'text-[#0B2945]'} ${currentSize.text}`}>
            INSPIRE ACADEMY
          </span>
          {showSubtitle && (
            <span className={`font-mono-meta tracking-wider uppercase block text-[10px] ${isDark ? 'text-[#86EFAC]' : 'text-[#16865A]'} font-semibold`}>
              Simla, Baksa • Estd. 2019
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className={`${currentSize.emblem} flex-shrink-0`}>
          {renderLogoImage('w-full h-full')}
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className={`font-bold tracking-tight ${isDark ? 'text-[#FFFFFF]' : 'text-[#0B2945]'} ${currentSize.text}`}>
              INSPIRE ACADEMY
            </span>
          </div>
          {showSubtitle && (
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[#C62832] text-[10px] font-bold tracking-wider uppercase">SIMLA</span>
              <span className={`text-[10px] ${isDark ? 'text-white/40' : 'text-[#64748B]/40'}`}>•</span>
              <span className={`text-[10px] font-mono-meta uppercase tracking-wider ${isDark ? 'text-[#86EFAC]' : 'text-[#16865A]'} font-semibold`}>
                ESTD. 2019
              </span>
              <span className={`text-[10px] ${isDark ? 'text-white/40' : 'text-[#64748B]/40'}`}>•</span>
              <span className={`text-[10px] tracking-wider uppercase ${isDark ? 'text-[#E2E8F0]/80' : 'text-[#64748B]'}`}>
                ASSAM
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Full Crest Layout
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className={`${currentSize.emblem} mb-2.5`}>
        {renderLogoImage('w-full h-full')}
      </div>
      <span className={`font-bold tracking-tight ${isDark ? 'text-[#FFFFFF]' : 'text-[#0B2945]'} ${currentSize.text}`}>
        INSPIRE ACADEMY
      </span>
      {showSubtitle && (
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="w-3 h-0.5 bg-[#C62832]" />
          <span className={`font-mono-meta font-bold tracking-widest text-[11px] uppercase ${isDark ? 'text-[#86EFAC]' : 'text-[#16865A]'}`}>
            ESTD. 2019 • SIMLA, ASSAM
          </span>
          <span className="w-3 h-0.5 bg-[#C62832]" />
        </div>
      )}
    </div>
  );
}
