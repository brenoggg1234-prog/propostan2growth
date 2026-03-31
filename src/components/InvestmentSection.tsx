import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CreditCard, Calendar, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function InvestmentSection() {
  const investmentItems = [
    { label: "Design + Prototipação (Figma)", pages: "15 páginas", responsible: "Breno Nery", value: "R$ 6.000" },
    { label: "Implementação no Framer", pages: "15 páginas", responsible: "Breno Nery", value: "R$ 8.000" },
    { label: "Copy estratégica", pages: "15 páginas", responsible: "Marcos Nery", value: "R$ 4.000" },
    { label: "Protótipo do blog", pages: "", responsible: "Breno Nery", value: "incluso" },
    { label: "Suporte & manutenção", pages: "3 meses", responsible: "Equipe", value: "BÔNUS", highlight: true },
  ];

  return (
    <section id="investimento" className="relative py-24 md:py-40 px-6 bg-white overflow-hidden z-20">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header da Seção */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-zinc-400 bg-zinc-50 border border-zinc-100 rounded-full uppercase mb-6 text-center">
              Transparência Comercial
            </div>
            <h2 className="text-3xl md:text-[52px] font-medium tracking-tight text-zinc-900 leading-[1.1] max-w-3xl">
              Investimento em <span className="text-yellow-500">Engenharia Digital</span>
            </h2>
            <p className="mt-6 text-zinc-500 text-[15px] md:text-lg font-light max-w-xl mx-auto leading-relaxed">
              Quebramos cada etapa do projeto para garantir clareza total sobre onde seu investimento está sendo aplicado.
            </p>
          </div>
        </ScrollReveal>

        {/* Card de Bônus Exclusivo */}
        <ScrollReveal direction="up" delay={0.2} className="mb-16">
          <div className="relative group">
            {/* Efeito de Brilho no Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 via-yellow-400/10 to-yellow-500/20 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-zinc-50/50 border border-yellow-500/20 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star size={120} className="text-yellow-500 rotate-12" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 text-center md:text-left">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Star className="text-white fill-current" size={32} />
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-zinc-900 mb-3 flex items-center justify-center md:justify-start gap-3">
                    Bônus Exclusivo: 3 Meses de Suporte
                    <span className="text-[10px] bg-yellow-500/10 text-yellow-600 px-2 py-0.5 rounded-full border border-yellow-500/20 uppercase font-bold tracking-tighter">Gold Tier</span>
                  </h3>
                  <p className="text-zinc-600 font-light leading-relaxed max-w-2xl">
                    Após o lançamento, nossa equipe permanece <span className="font-medium text-zinc-900">100% disponível</span> para correções técnicas, ajustes de conteúdo e suporte operacional no Framer. Sem custos extras nos primeiros 90 dias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tabela de Investimento */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50/80 border-b border-zinc-100 uppercase tracking-widest text-[10px] font-bold text-zinc-400">
                    <th className="px-8 py-6">Entrega Técnica</th>
                    <th className="px-8 py-6">Responsável</th>
                    <th className="px-8 py-6 text-right">Valor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {investmentItems.map((item, index) => (
                    <tr key={index} className="group hover:bg-zinc-50/30 transition-colors">
                      <td className="px-8 py-8">
                        <div className="flex flex-col">
                          <span className="text-[16px] font-medium text-zinc-900 group-hover:text-yellow-600 transition-colors">
                            {item.label}
                          </span>
                          {item.pages && (
                            <span className="text-[12px] text-zinc-400 font-light mt-0.5">
                               {item.pages}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-8">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 text-zinc-500 border border-zinc-200">
                           {item.responsible}
                        </span>
                      </td>
                      <td className="px-8 py-8 text-right">
                        <span className={`font-mono text-lg ${item.highlight ? 'text-yellow-600 font-bold' : 'text-zinc-900'}`}>
                          {item.value}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {/* Linha de Total */}
                  <tr className="bg-zinc-900 text-white">
                    <td className="px-8 py-10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center shrink-0">
                          <ShieldCheck size={20} className="text-zinc-900" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xl font-medium tracking-tight">Investimento Total Projeto</span>
                          <span className="text-[11px] text-white/40 uppercase tracking-widest font-bold mt-1">Escopo Completo Cliniboss</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-10"></td>
                    <td className="px-8 py-10 text-right">
                      <span className="text-3xl md:text-4xl font-medium tracking-tight text-white tabular-nums">
                        R$ 18.000
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Condições de Pagamento & Validação */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Condições de Pagamento */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="h-full bg-zinc-50 border border-zinc-200/60 rounded-[32px] p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-zinc-400 mb-6">
                  <CreditCard size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">Fluxo de Pagamento</span>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-zinc-500 text-sm font-light">Entrada na Assinatura</span>
                      <span className="text-zinc-900 font-medium text-xl">50% — R$ 9.000</span>
                    </div>
                    <div className="flex flex-col items-end text-zinc-300">
                      <Calendar size={16} className="mb-1" />
                      <span className="text-[9px] uppercase font-bold">Imediato</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-zinc-200" />
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-zinc-500 text-sm font-light">Final na Entrega</span>
                      <span className="text-zinc-900 font-medium text-xl">50% — R$ 9.000</span>
                    </div>
                    <div className="flex flex-col items-end text-zinc-300">
                      <Check size={16} className="mb-1" />
                      <span className="text-[9px] uppercase font-bold">Publicação</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Validade e Assinaturas */}
          <ScrollReveal direction="right" delay={0.5}>
            <div className="h-full bg-white border border-zinc-100 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
               {/* Selo Digital Background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-zinc-50 rounded-full pointer-events-none opacity-50" />
               
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                   <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Proposta Ativa</span>
                 </div>
                 
                 <p className="text-zinc-900 font-medium text-2xl leading-tight">
                   Válido até 07 de Abril, 2026.
                 </p>
                 <p className="text-zinc-500 text-sm font-light mt-2 max-w-[240px]">
                   Documento estratégico de uso exclusivo da Cliniboss.
                 </p>
               </div>

               <div className="mt-8 relative z-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-zinc-50 pt-8">
                 <div className="flex flex-col">
                    <span className="text-zinc-900 text-2xl font-medium leading-none">Breno Nery</span>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest mt-2 font-bold">Design & Tech Lead</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-zinc-900 text-2xl font-medium leading-none">Marcos Nery</span>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest mt-2 font-bold">Strategic Copywriter</span>
                 </div>
               </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
