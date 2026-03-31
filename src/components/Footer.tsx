import React, { useRef } from 'react';
import logoImg from '../assets/logo.png';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Linkedin, Globe, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });
  
  // Parallax effect for the background text
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0.05]);

  return (
    <footer ref={container} className="relative pt-32 pb-12 px-6 md:px-12 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
      
      {/* Background Parallax Title */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden">
        <motion.h1 
          style={{ y, opacity }}
          className="text-[22vw] leading-none font-black tracking-tighter text-zinc-900 uppercase text-center whitespace-nowrap"
        >
          Cliniboss
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <img 
              src={logoImg} 
              alt="N2 Growth Logo" 
              className="h-10 md:h-12 w-auto mb-8 opacity-90 transition-opacity hover:opacity-100 cursor-pointer"
            />
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xs mb-8">
              Transformando a complexidade em experiências digitais de alto impacto. Design, estratégia e tecnologia em perfeita harmonia.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-yellow-600 hover:border-yellow-600/30 hover:bg-yellow-50/50 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-yellow-600 hover:border-yellow-600/30 hover:bg-yellow-50/50 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-yellow-600 hover:border-yellow-600/30 hover:bg-yellow-50/50 transition-all duration-300">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 md:pl-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-6">Navegação</h4>
              <ul className="space-y-4">
                {['Início', 'Escopo', 'Como Funciona', 'Investimento', 'Quem Somos'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-500 hover:text-yellow-600 text-sm transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-6">Expertise</h4>
              <ul className="space-y-4">
                {['Design UI/UX', 'Copywriting', 'Desenvolvimento', 'Estratégia Digital', 'Analytics'].map((item) => (
                  <li key={item}>
                    <span className="text-zinc-500 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 mb-6">Contato</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-yellow-600 mt-1 shrink-0" />
                  <span className="text-zinc-500 text-sm leading-tight">contato@n2growth.com.br</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-yellow-600 mt-1 shrink-0" />
                  <span className="text-zinc-500 text-sm leading-tight">São Paulo, Brasil <br /> Atendimento Global</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-[10px] md:text-[11px] font-medium tracking-[0.1em] uppercase">
            © 2026 N2 Growth. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 hover:text-zinc-600 text-[10px] md:text-[11px] font-medium tracking-[0.1em] uppercase transition-colors">Termos</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-600 text-[10px] md:text-[11px] font-medium tracking-[0.1em] uppercase transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
