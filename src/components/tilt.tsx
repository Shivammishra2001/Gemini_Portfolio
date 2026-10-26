'use client';

import React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from 'framer-motion';

// 3D tilt: the element rotates towards the cursor with perspective and a spring.
// Disabled on touch devices and when the user prefers reduced motion.
export function useTilt(max = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 20 });
  const sy = useSpring(y, { stiffness: 220, damping: 20 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);

  const enabled = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches;

  return {
    style: { rotateX, rotateY, transformPerspective: 900 },
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => {
      if (!enabled()) return;
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    onMouseLeave: () => {
      x.set(0);
      y.set(0);
    },
  };
}

type TiltProps = HTMLMotionProps<'div'> & { max?: number };

export function Tilt({ max = 8, style, children, ...rest }: TiltProps) {
  const tilt = useTilt(max);
  return (
    <motion.div
      {...rest}
      style={{ ...tilt.style, ...style }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      whileHover={{ scale: 1.02, zIndex: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

export default Tilt;
