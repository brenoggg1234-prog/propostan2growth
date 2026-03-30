import React, { useRef } from 'react';
import logoImg from '../assets/logo.png';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });
  
  // O texto move-se mais devagar que o scroll normal, criando parallax
  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <footer ref={container} className="relative pt-12 md:pt-40 pb-10 px-6 flex flex-col items-center z-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
        
        {/* Nome Grandão Animado com Parallax */}
        <motion.h1 
          style={{ y, opacity }}
          className="text-[12vw] md:text-[14vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black/[0.1] via-black/[0.07] to-black/[0.04] uppercase select-none text-center w-full mb-16"
        >
          Cliniboss

        </motion.h1>
        
        {/* Copyright */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={logoImg} 
              alt="N2 Growth Logo" 
              className="h-10 md:h-12 w-auto object-contain mb-6 opacity-80"
            />
            <p className="text-zinc-400 text-[10px] font-medium tracking-[0.2em] uppercase text-center">
              © 2026 N2 Growth. <br className="sm:hidden" /> TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
      </div>
      
    </footer>
  );
}
