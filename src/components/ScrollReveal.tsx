import React, { ReactNode, useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className={className} style={{ width }}>
        {children}
      </div>
    );
  }

  const directions = {
    up: { y: 60, x: 0, scale: 0.98, filter: "blur(10px)" },
    down: { y: -60, x: 0, scale: 0.98, filter: "blur(10px)" },
    left: { x: 60, y: 0, scale: 0.98, filter: "blur(10px)" },
    right: { x: -60, y: 0, scale: 0.98, filter: "blur(10px)" },
    none: { x: 0, y: 0, scale: 0.98, filter: "blur(10px)" }
  };

  return (
    <motion.div
      initial={{ ...directions[direction], opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 1.2,
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
