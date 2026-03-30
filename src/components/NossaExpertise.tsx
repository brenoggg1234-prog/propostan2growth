import React, { useState } from 'react';
import { Monitor, PenTool, Rotate3d, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    id: 'design',
    icon: <Monitor size={36} />,
    title: 'ESTRATÉGIA &\nDESIGN (FIGMA)',
    subtitle: 'ALTA FIDELIDADE',
    description: 'Transformamos a complexidade das 131+ ferramentas da Cliniboss em uma interface minimalista e intuitiva. Criamos um protótipo no Figma focado em UX, com referências visuais de elite (Tivita).',
    problems: ["Interface poluída com excesso de ferramentas.", "Dificuldade do cliente em entender o valor real.", "Design que não transparece o poder do SaaS."],
    solutions: ["Visual Clean & Premium integrado ao Branding.", "Protótipo antes de ir para produção.", "Foco total em clareza e conversão de novos usuários."]
  },
  {
    id: 'framer',
    icon: <Rotate3d size={32} />,
    title: 'IMPLEMENTAÇÃO &\nPERFORMANCE (FRAMER)',
    subtitle: 'TECNOLOGIA DE PONTA',
    description: 'Desenvolvimento de 15 caminhos e páginas otimizadas. Utilizamos o Framer para garantir animações fluidas, SEO de elite e performance máxima em qualquer dispositivo.',
    problems: ["Sites lentos que aumentam a taxa de rejeição.", "Experiência mobile inferior ao desktop.", "Dificuldade em atualizar módulos dinâmicos."],
    solutions: ["Performance extrema com carregamento instantâneo.", "Design 100% responsivo e otimizado para Mobile.", "Infraestrutura escalável para os 15 módulos do projeto."]
  }
];


interface ServiceData {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  problems: string[];
  solutions: string[];
}

interface FlipCardProps {
  service: ServiceData;
}

function FlipCard({ service }: FlipCardProps) {
  return (
    <div 
      className="relative h-[520px] sm:h-[580px] md:h-[600px] w-full cursor-default transition-all duration-500 hover:scale-[1.01]"
    >
      <div className="w-full h-full relative">
        {/* SEMPRE EXIBE A FACE DE TRÁS (DESIGN DETALHADO) */}
        <div 
          className="absolute inset-0 rounded-[1.5rem] bg-zinc-950 border border-white/10 shadow-2xl flex flex-col p-6 sm:p-8 md:p-11"
        >
          <div className="flex justify-between items-start mb-5 sm:mb-7">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg border border-white/10 text-[#eab308]">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 16 })}
                </div>
                <h4 className="text-[#eab308] text-[7px] sm:text-[8px] font-black uppercase tracking-[0.5em] sm:tracking-[0.6em]">ESTRATÉGIA N2</h4>
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-[22px] font-medium tracking-tight leading-none uppercase whitespace-pre-line">
                {service.title}
              </h3>
            </div>
          </div>

          <div className="flex-1 space-y-4 sm:space-y-7 overflow-y-auto scrollbar-hide py-1">
            <style dangerouslySetInnerHTML={{ __html: `
              .scrollbar-hide::-webkit-scrollbar { display: none; }
              .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            ` }} />
            <p className="text-zinc-400 text-[12px] sm:text-[14px] leading-relaxed font-light opacity-80 sm:opacity-90">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 border-t border-white/5 pt-4 sm:pt-6">
              {/* Precupações */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500">OBSTÁCULOS</p>
                <div className="space-y-2 sm:space-y-2.5">
                  {service.problems.map((p, i) => (
                    <p key={i} className="text-[9px] sm:text-[10px] text-zinc-600 font-medium leading-[1.3] uppercase tracking-wider pl-4 relative">
                      <span className="absolute left-0 top-1.5 w-0.5 h-[1px] bg-zinc-800" />
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Benefícios */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.3em] text-[#eab308]">ENTREGA ELITE</p>
                <div className="space-y-2 sm:space-y-2.5">
                  {service.solutions.map((s, i) => (
                    <p key={i} className="text-[9px] sm:text-[10px] text-zinc-100 font-bold leading-[1.3] uppercase tracking-wide pl-4 relative">
                      <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-[#eab308] opacity-60" />
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NossaExpertise() {
  return (
    <section id="expertise" className="relative py-16 md:py-36 px-6 md:px-12 bg-white z-20 flex flex-col items-center">
      <div className="max-w-[1440px] w-full">

        
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col items-center mb-10 md:mb-20 text-center">
            <div className="px-3 py-1.5 text-[11px] font-medium text-zinc-600 bg-black/5 border border-black/10 rounded-full shadow-sm tracking-wide uppercase mb-6">
              Escopo do Projeto
            </div>
            
            <h2 className="text-2xl md:text-[44px] font-medium tracking-tight text-zinc-900 max-w-4xl leading-[1.05] mb-6">
              O Que Vamos <span className="font-sans font-medium text-yellow-500/80 underline decoration-yellow-500/20 underline-offset-8">Construir</span>
            </h2>
            
            <p className="text-zinc-600 text-[14px] md:text-[15px] max-w-[540px] font-light leading-[1.6] px-2">
              Uma solução completa de ponta a ponta: da estratégia de conteúdo à implementação técnica de alta performance para a Cliniboss.
            </p>

          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.id}>
              <ScrollReveal direction="up" delay={0.15 + (index * 0.1)}>
                <FlipCard service={service} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
