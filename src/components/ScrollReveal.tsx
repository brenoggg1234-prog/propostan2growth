import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  width?: 'fit-content' | '100%';
  key?: number | string;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "",
  width = '100%'
}: ScrollRevealProps) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const directions = {
    up: { y: isMobile ? 30 : 60, x: 0, scale: 0.98, filter: isMobile ? "none" : "blur(10px)" },
    down: { y: isMobile ? -30 : -60, x: 0, scale: 0.98, filter: isMobile ? "none" : "blur(10px)" },
    left: { x: isMobile ? 30 : 60, y: 0, scale: 0.98, filter: isMobile ? "none" : "blur(10px)" },
    right: { x: isMobile ? -30 : -60, y: 0, scale: 0.98, filter: isMobile ? "none" : "blur(10px)" },
    none: { x: 0, y: 0, scale: 0.98, filter: isMobile ? "none" : "blur(10px)" }
  };

  return (
    <motion.div
      initial={{ ...directions[direction], opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: isMobile ? "-5%" : "-10%" }}
      transition={{ 
        duration: isMobile ? 0.5 : 1.2,
        delay: isMobile ? delay * 0.2 : delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
