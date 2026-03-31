import React from 'react';
import { CheckCircle2, XCircle, Layout, Code2, PenTool, Columns, MonitorSmartphone, Rotate3d } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const inclusions = [
  {
    title: "Design no Figma",
    desc: "Prototipação de todas as páginas em alta fidelidade, responsivo (web + mobile).",
    responsible: "Breno Nery",
    icon: <Layout className="w-5 h-5" />
  },
  {
    title: "Implementação Framer",
    desc: "Desenvolvimento funcional de todas as páginas diretamente no Framer.",
    responsible: "Breno Nery",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    title: "Copy Estratégica",
    desc: "Texto de todas as páginas focado em conversão, com linguagem adequada ao público de clínicas.",
    responsible: "Marcos Nery",
    icon: <PenTool className="w-5 h-5" />
  },
  {
    title: "Protótipo do Blog",
    desc: "Layout visual estático da listagem de artigos e template de post interno (sem integração CMS).",
    responsible: null,
    icon: <Columns className="w-5 h-5" />
  },
  {
    title: "Rodadas de Revisão",
    desc: "Ajustes iterativos de design e copy após a aprovação do cliente em cada macro-etapa.",
    responsible: null,
    icon: <Rotate3d className="w-5 h-5" />
  },
  {
    title: "Entrega Responsiva",
    desc: "O site e a experiência funcionam perfeitamente adaptados em desktop, tablet e mobile.",
    responsible: null,
    icon: <MonitorSmartphone className="w-5 h-5" />
  }
];

export default function InclusionSection() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50/50 px-6 border-t border-zinc-100 relative overflow-hidden z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <div className="px-3 py-1.5 text-[11px] font-medium text-zinc-600 bg-white border border-zinc-200 rounded-full shadow-sm tracking-wide uppercase mb-6">
              Escopo Técnico
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 max-w-3xl leading-[1.1] mb-6">
              O que está <span className="text-yellow-500">incluído</span>
            </h2>
            <p className="text-zinc-500 text-[15px] md:text-lg font-light leading-relaxed max-w-2xl px-4">
              Transparência máxima sobre as nossas entregas técnicas e responsabilidades para cada etapa do seu projeto.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Inclusões */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1} className="h-full">
              <div className="bg-white border border-zinc-200/60 rounded-[24px] p-8 h-full flex flex-col hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500 group relative overflow-hidden">
                {/* Efeito Hover Decorativo (Ícone Grande Transparente) */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none">
                  {React.cloneElement(item.icon, { className: 'w-32 h-32 text-yellow-500' })}
                </div>

                {/* Ícone Prinicpal do Card */}
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-600 mb-6 group-hover:bg-yellow-50 group-hover:text-yellow-600 group-hover:border-yellow-100 transition-colors duration-300 relative z-10">
                  {item.icon}
                </div>
                
                <h3 className="font-medium text-zinc-900 text-lg mb-3 tracking-tight relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6 flex-grow relative z-10">
                  {item.desc}
                </p>

                {item.responsible ? (
                  <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between relative z-10">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Responsável</span>
                    <span className="text-[11px] font-medium text-zinc-700 bg-zinc-100 border border-zinc-200/60 px-2.5 py-1 rounded-md">
                      {item.responsible}
                    </span>
                  </div>
                ) : (
                  <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between relative z-10">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Incluso no pacote</span>
                    <CheckCircle2 size={16} className="text-zinc-300" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Not Included Banner */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 md:mt-16 bg-white border border-zinc-200/80 rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 shadow-sm relative overflow-hidden group hover:border-red-200 transition-colors duration-500">
            {/* Linha Vermelha de Detalhe à esquerda */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400/30 group-hover:bg-red-400/60 transition-colors duration-500" />
            
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-red-500 shadow-sm border border-red-100 ml-4 md:ml-2">
              <XCircle size={24} strokeWidth={1.5} />
            </div>
            
            <div className="pr-4">
              <h4 className="text-zinc-900 font-medium mb-2 text-lg">O que <span className="text-red-500">não está</span> no escopo</h4>
              <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-4xl">
                Desenvolvimento de sistemas backend personalizados, integração do blog diretamente com um CMS de conteúdo (entregaremos apenas a UI/protótipo), hospedagem do site, compra de imagens com licenciamento pago, ou a gestão financeira e técnica de domínios.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

