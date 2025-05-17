'use client';

import { LucideIcon } from 'lucide-react';

interface ExtraFeatureProps {
  icon: LucideIcon;
  label: string;
}

export default function ExtraFeature({ icon: Icon, label }: ExtraFeatureProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg p-3 flex items-center gap-2 border border-zinc-200 dark:border-zinc-700">
      <Icon className="w-5 h-5 text-[#FF8806] flex-shrink-0" />
      <span className="text-sm text-zinc-900 dark:text-[#CFCFCF]">{label}</span>
    </div>
  );
} 