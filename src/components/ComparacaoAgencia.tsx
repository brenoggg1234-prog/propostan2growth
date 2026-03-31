import React from 'react';
import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';

export default function ComparacaoAgencia() {
  const mercadoItens = [
    "15 Módulos: Desenvolvimento completo de todos os caminhos.",
    "Figma Premium: Design de alta fidelidade focado em UX.",
    "Copywriting: Narrativa de venda personalizada para a Cliniboss.",
    "Suporte: 90 dias de acompanhamento após o lançamento."
  ];

  const nossoDiferencialItens = [
    "Design + Figma: R$ 6.000,00 (Reserva de Layout)",
    "Implementação Framer: R$ 8.000,00 (Desenvolvimento)",
    "Copywriting: R$ 4.000,00 (Estruturação de seções e desenvolvimento de copy)",
    "TOTAL DO PROJETO: R$ 18.000,00"
  ];

  const formatText = (text: string, isRightCard: boolean) => {
    const parts = text.split(':');
    if (parts.length > 1) {
      return (
        <span>
          <span className={`font-medium ${isRightCard ? 'text-zinc-900' : 'text-zinc-600'}`}>
            {parts[0]}:
          </span>
          <span className={isRightCard ? 'text-zinc-600' : 'text-zinc-400'}>
            {parts.slice(1).join(':')}
          </span>
        </span>
      );
    }
    return text;
  };

  return (
    <section id="diferencial" className="relative py-20 md:py-40 px-6 md:px-6 flex flex-col items-center justify-center z-20 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Cabeçalho */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
            <div className="px-3 py-1.5 text-[11px] font-medium text-zinc-600 bg-black/5 border border-black/10 rounded-full shadow-sm tracking-wide uppercase mb-6">
              Investimento
            </div>
            
            <h2 className="text-2xl md:text-[44px] font-medium tracking-tight text-zinc-900 max-w-4xl leading-[1.05] mb-6">
              Transparência e <span className="font-sans font-medium text-yellow-500/80 underline decoration-yellow-500/20 underline-offset-8">visão clara</span> de valor
            </h2>
            
            <p className="text-zinc-600 text-[14px] md:text-[15px] max-w-[540px] font-light leading-[1.6] px-2">
              Quebramos o investimento para que você saiba exatamente o que está sendo construído em cada etapa.
            </p>
          </div>
        </ScrollReveal>
 
        {/* Grid de Comparação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          
          {/* Coluna Esquerda: O Mercado */}
          <ScrollReveal direction="left" delay={0.2} className="flex flex-col h-full">
            <div className="flex flex-col h-full">
              <h3 className="text-center text-lg md:text-xl text-zinc-400 font-medium mb-6 md:mb-8">
                O Escopo <span className="text-zinc-300 text-sm md:text-lg sm:inline block font-sans">(Entregáveis)</span>
              </h3>
              <div className="bg-zinc-50/50 border border-zinc-100 rounded-[24px] md:rounded-[32px] p-6 sm:p-10 md:p-12 flex-1 relative overflow-hidden">
                <ul className="space-y-6 md:space-y-8">
                  {mercadoItens.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 md:gap-4">
                      <div className="mt-1 shrink-0">
                        <Check className="text-zinc-400" size={20} md:size={24} strokeWidth={2} />
                      </div>
                      <p className="text-[14px] md:text-[15px] leading-relaxed font-light text-zinc-600">
                        {formatText(item, false)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
 
          {/* Coluna Direita: Nosso Diferencial */}
          <ScrollReveal direction="right" delay={0.3} className="flex flex-col h-full">
            <div className="flex flex-col h-full">
              <h3 className="text-center text-lg md:text-xl text-zinc-900 font-medium mb-6 md:mb-8 flex items-center justify-center gap-3">
                Investimento <span className="text-[#eab308] text-sm md:text-lg sm:inline block font-sans">(Valores)</span>
              </h3>
              <div className="relative bg-white border border-black/[0.03] shadow-2xl rounded-[24px] md:rounded-[32px] p-6 sm:p-10 md:p-12 flex-1 overflow-hidden">
                {/* Background effects */}
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#eab308]/10 to-[#ca8a04]/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#eab308]/5 pointer-events-none" />

                <ul className="space-y-6 md:space-y-8 relative z-10">
                  {nossoDiferencialItens.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 md:gap-4">
                      <div className="mt-1 shrink-0">
                        <Check className="text-[#eab308]" size={20} md:size={24} strokeWidth={2.5} />
                      </div>
                      <p className="text-[14px] md:text-[15px] leading-relaxed font-light text-zinc-900">
                        {formatText(item, true)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Proposta Validation & Signatures */}
        <ScrollReveal direction="up" delay={0.4} className="mt-16 md:mt-24 border-t border-zinc-100 pt-12 md:pt-16 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Validade Side */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Status: Proposta em Validação
                </span>
              </div>
              <p className="text-zinc-900 font-medium text-lg leading-tight">
                Válido até 07 de Abril, 2026.
              </p>
              <p className="text-zinc-500 text-sm font-light mt-1">
                Documento estratégico exclusivo para o ecossistema Cliniboss.
              </p>
            </div>

            {/* Signatures Side */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                  Consultoria Estratégica
                </span>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-end">
                  <div className="flex flex-col items-center md:items-end group">
                    <p className="text-zinc-900 font-medium text-2xl leading-none">Breno Nery</p>
                    <div className="w-full h-px bg-yellow-500/0 group-hover:bg-yellow-500/40 transition-all duration-700 mt-1 max-w-[100px]" />
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Design & Tech Lead</p>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-zinc-100 self-center" />
                  <div className="flex flex-col items-center md:items-end group">
                    <p className="text-zinc-900 font-medium text-2xl leading-none">Marcos Nery</p>
                    <div className="w-full h-px bg-yellow-500/0 group-hover:bg-yellow-500/40 transition-all duration-700 mt-1 max-w-[100px]" />
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Strategic Copywriter</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Golden Seal Decoration */}
          <div className="mt-16 flex flex-col items-center justify-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="w-16 h-16 flex items-center justify-center border border-yellow-500/30 rounded-full mb-2">
               <div className="w-12 h-12 flex items-center justify-center border border-yellow-500/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
               </div>
            </div>
            <div className="text-yellow-600 font-bold text-[10px] tracking-widest uppercase mb-1">N2 Growth Project</div>
            <div className="text-zinc-400 text-[8px] tracking-tighter uppercase font-medium italic">Garantia de Qualidade</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
