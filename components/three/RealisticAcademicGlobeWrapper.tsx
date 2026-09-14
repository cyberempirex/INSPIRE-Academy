'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const RealisticAcademicGlobe = dynamic(() => import('./RealisticAcademicGlobe'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square max-w-[420px] sm:max-w-[460px] flex items-center justify-center p-8 bg-[#F3EFEA]/40 border border-[#E2DBD0] rounded-full">
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-full border-2 border-[#0A192F] border-t-transparent animate-spin" />
        <span className="font-mono-meta text-xs uppercase tracking-widest text-[#475569]">
          Rendering Earth Model...
        </span>
      </div>
    </div>
  ),
});

interface RealisticAcademicGlobeWrapperProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  initialLightIntensity?: number;
  showControls?: boolean;
}

export default function RealisticAcademicGlobeWrapper({
  className = '',
  size = 'md',
  initialLightIntensity = 2.2,
  showControls = true,
}: RealisticAcademicGlobeWrapperProps) {
  return (
    <RealisticAcademicGlobe
      className={className}
      size={size}
      initialLightIntensity={initialLightIntensity}
      showControls={showControls}
    />
  );
}
