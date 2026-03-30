import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function FinalCTA() {
  return (
    <section id="contato" className="relative w-full min-h-screen px-4 sm:px-6 flex justify-center items-center z-10 overflow-hidden bg-zinc-950">
      
      {/* Background Glow Sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[800px] h-[800px] bg-[#eab308]/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        
        {/* Badge Sutil */}
        <div className="text-[#eab308] text-[10px] font-bold tracking-[0.4em] uppercase mb-12">
          Contato Direto
        </div>

        <h2 className="text-white text-3xl md:text-[52px] font-medium leading-[1.1] tracking-tighter mb-10 max-w-[850px]">
          Sua nova plataforma merece um design <span className="text-[#eab308] font-light">excepcional</span>
        </h2>

        <p className="text-zinc-400 text-sm md:text-lg max-w-[620px] mb-16 leading-relaxed font-light">
          Fale conosco agora e vamos transformar o ecossistema da <span className="text-white font-medium">Cliniboss</span> na maior referência do mercado.
        </p>


      </div>
    </section>
  );
}
