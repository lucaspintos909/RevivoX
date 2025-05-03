'use client';

import { LucideIcon } from 'lucide-react';

interface PaymentMethodProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function PaymentMethod({ icon: Icon, title, description }: PaymentMethodProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-green-600" />
        <span className="font-medium text-gray-900">{title}</span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
} 