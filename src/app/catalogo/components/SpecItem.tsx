'use client';

import { LucideIcon } from 'lucide-react';

interface SpecItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function SpecItem({ icon: Icon, label, value }: SpecItemProps) {
  return (
    <li className="flex items-center gap-2">
      <Icon className="w-5 h-5 text-green-600" />
      <span>{label}: {value}</span>
    </li>
  );
} 