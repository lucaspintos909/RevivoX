'use client';

import { LucideIcon } from 'lucide-react';

interface PaymentMethodProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function PaymentMethod({ icon: Icon, title, description, className = 'bg-zinc-800' }: PaymentMethodProps) {
  return (
    <div className={`${className} rounded-lg p-4 flex items-start gap-3`}>
      <Icon className="w-5 h-5 text-[#FF8806] flex-shrink-0" />
      <div>
        <h4 className="font-medium text-[#CFCFCF]">{title}</h4>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
} 