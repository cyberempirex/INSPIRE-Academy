'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const AcademyGlobe3D = dynamic(() => import('./AcademyGlobe3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center opacity-30 pointer-events-none">
      <div className="relative w-72 h-72 rounded-full border border-[#0B2545]/15 bg-[#F3EFEA]/30 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-[#0B2545]/10 border-dashed animate-spin" style={{ animationDuration: '20s' }} />
      </div>
    </div>
  ),
});

interface AcademyGlobeWrapperProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'background';
}

export default function AcademyGlobeWrapper({ className = '', size = 'hero' }: AcademyGlobeWrapperProps) {
  return <AcademyGlobe3D className={className} size={size} />;
}
