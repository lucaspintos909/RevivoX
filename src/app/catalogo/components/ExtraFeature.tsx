'use client';

import { LucideIcon } from 'lucide-react';

interface ExtraFeatureProps {
  icon: LucideIcon;
  label: string;
}

export default function ExtraFeature({ icon: Icon, label }: ExtraFeatureProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
      <Icon className="w-5 h-5 text-green-600" />
      <span className="text-sm">{label}</span>
    </div>
  );
} 