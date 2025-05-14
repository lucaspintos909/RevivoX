import { Check } from 'lucide-react';
import { ReactNode, memo } from 'react';
import { cn } from '@/lib/utils';

/**
 * Props para el componente Feature
 * @interface FeatureProps
 * @property {ReactNode} children - Contenido del feature
 * @property {string} [className] - Clases CSS adicionales
 */
export interface FeatureProps {
  children: ReactNode;
  className?: string;
}

/**
 * Componente que muestra una característica con un ícono de check
 * @component
 * @param {FeatureProps} props - Props del componente
 * @returns {JSX.Element} Componente Feature
 */
export const Feature = memo(({ children, className }: FeatureProps) => {
  return (
    <div 
      className={cn(
        "flex items-start gap-3",
        className
      )}
      role="listitem"
    >
      <Check 
        className="w-5 h-5 text-[#FF8806] flex-shrink-0" 
        aria-hidden="true"
        role="img"
      />
      <span className="text-zinc-300">{children}</span>
    </div>
  );
});

Feature.displayName = 'Feature'; 