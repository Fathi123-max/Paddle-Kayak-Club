// src/components/effects/FloatingShape.tsx
import { motion } from 'framer-motion';
import { memo } from 'react';

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  amplitude?: number;
}

export const FloatingShape = memo(function FloatingShape({
  className = '',
  delay = 0,
  duration = 6,
  amplitude = 20,
}: FloatingShapeProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      aria-hidden="true"
    />
  );
});
