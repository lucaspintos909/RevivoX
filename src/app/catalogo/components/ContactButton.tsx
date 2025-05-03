'use client';

import { LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className: string;
}

export default function ContactButton({ 
  href, 
  icon: Icon, 
  label, 
  className 
}: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity ${className}`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
} 