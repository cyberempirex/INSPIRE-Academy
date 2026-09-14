'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicInspireBrandSculpture = dynamic(
  () => import('@/components/three/InspireBrandSculpture'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square max-w-[380px] sm:max-w-[420px] flex items-center justify-center">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#09233F]/10 border border-[#09233F]/20 animate-pulse flex items-center justify-center" />
      </div>
    ),
  }
);

interface InspireBrandSculptureWrapperProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function InspireBrandSculptureWrapper(props: InspireBrandSculptureWrapperProps) {
  return <DynamicInspireBrandSculpture {...props} />;
}
