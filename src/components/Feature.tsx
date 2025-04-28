import { Check } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureProps {
  children: ReactNode;
}

export const Feature = ({ children }: FeatureProps) => {
  return (
    <div className="flex items-start gap-3">
      <Check className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
      <span className="text-zinc-300">{children}</span>
    </div>
  );
}; 