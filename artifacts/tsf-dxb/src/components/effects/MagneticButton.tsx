// src/components/effects/MagneticButton.tsx
import { useRef, memo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';

export interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

export const MagneticButton = memo(function MagneticButton({
  children,
  strength = 0.5,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Button
      ref={ref}
      asChild
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.button
        style={{ x: springX, y: springY }}
        className="cursor-pointer"
      >
        {children}
      </motion.button>
    </Button>
  );
});
