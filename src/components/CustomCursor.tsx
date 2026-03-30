import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Configuração da "mola" para o efeito de perseguição (mais suave e orgânico)
  const springConfig = { damping: 35, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);

    // Adiciona ouvintes para todos os elementos clicáveis
    const clickables = document.querySelectorAll('button, a, [role="button"], .group');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Ponto central fixo (rápido) */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-black rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Anel externo que persegue (com mola/atraso) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-black/[0.08] rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.03)' : 'rgba(0, 0, 0, 0)',
          borderWidth: isHovered ? '0px' : '1px',
          backdropFilter: isHovered ? 'blur(4px)' : 'blur(0px)'
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
