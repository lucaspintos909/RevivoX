'use client';

import { motion } from 'framer-motion';

const SCALE_IN = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { duration: 0.3 }
};

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <motion.span 
      {...SCALE_IN}
      className={`bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded ${className}`}
    >
      {children}
    </motion.span>
  );
} 