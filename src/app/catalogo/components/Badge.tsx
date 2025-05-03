'use client';

import { FadeIn } from './AnimatedContainer';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <FadeIn className={`bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded ${className}`}>
      {children}
    </FadeIn>
  );
} 