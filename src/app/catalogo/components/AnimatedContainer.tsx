'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

const SLIDE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function FadeIn({ children, className = '', delay = 0 }: AnimatedContainerProps) {
  return (
    <motion.div 
      {...FADE_IN}
      transition={{ ...FADE_IN.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({ children, className = '' }: AnimatedContainerProps) {
  return (
    <motion.div 
      {...SLIDE_UP}
      className={className}
    >
      {children}
    </motion.div>
  );
} 