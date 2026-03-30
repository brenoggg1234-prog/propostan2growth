import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const inclusions = [
  {
    title: "Design no Figma",
    desc: "Prototipação de todas as páginas em alta fidelidade, responsivo (web + mobile).",
    responsible: "Breno Nery"
  },
  {
    title: "Implementação no Framer",
    desc: "Desenvolvimento funcional de todas as páginas diretamente no Framer.",
    responsible: "Breno Nery"
  },
  {
    title: "Copy estratégica",
    desc: "Texto de todas as páginas focado em conversão, com linguagem adequada ao público de clínicas.",
    responsible: "Marcos Nery"
  },
  {
    title: "Protótipo do blog",
    desc: "Layout visual da listagem de artigos e template de post (sem integração ao backend).",
    responsible: null
  },
  {
    title: "Rodadas de revisão",
    desc: "Ajustes de design e copy após aprovação do cliente em cada etapa.",
    responsible: null
  },
  {
    title: "Entrega responsiva",
    desc: "O site funciona corretamente em desktop, tablet e mobile.",
    responsible: null
  }
];

export default function InclusionSection() {
  return (
    <section className="py-24 md:py-32 bg-white px-6 border-t border-zinc-100 z-20 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-2">O que está incluído</h2>
            <div className="w-full h-px bg-zinc-200 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-24 bg-yellow-500" />
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {inclusions.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.05}>
              <div className="flex gap-4 md:gap-6 group">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 size={20} className="text-yellow-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <h3 className="font-medium text-zinc-900 text-lg leading-tight uppercase tracking-tight">
                      {item.title}
                    </h3>
                    {item.responsible && (
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium px-2 py-0.5 bg-zinc-50 border border-zinc-100 rounded-full w-fit">
                        — {item.responsible}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-500 font-light leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Não Incluído */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-20 p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <XCircle size={18} className="text-zinc-400" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed font-light">
                <strong className="text-zinc-900 font-medium">Não incluído:</strong> Desenvolvimento do backend, integração do blog com CMS, hospedagem, imagens licenciadas e domínio.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
