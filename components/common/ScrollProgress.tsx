'use client';

import { motion, MotionValue } from 'framer-motion';

interface ScrollProgressProps {
  progress: MotionValue<number>;
}

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 z-[100] origin-left"
      style={{ scaleX: progress }}
    />
  );
}