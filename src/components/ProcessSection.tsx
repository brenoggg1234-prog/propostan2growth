import React from 'react';
import ScrollReveal from './ScrollReveal';
import { 
  FileSearch, 
  Users, 
  PenTool,
  Rotate3d,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';


export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Semana 1-2: Estratégia",
      number: "01",
      icon: <FileSearch className="w-6 h-6" />,
      desc: "Briefing final, moodboard e estrutura de copy — Marcos",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 2,
      title: "Semana 3-4: Design",
      number: "02",
      icon: <PenTool className="w-6 h-6" />,
      desc: "Design no Figma — páginas principais — Breno",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "Semana 5: Revisão",
      number: "03",
      icon: <Users className="w-6 h-6" />,
      desc: "Aprovação do design + ajustes (1ª rodada)",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      title: "Semana 6-7: Desenvolvimento",
      number: "04",
      icon: <Rotate3d className="w-6 h-6" />,
      desc: "Implementação no Framer — Breno",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      title: "Semana 8: Entrega",
      number: "05",
      icon: <CheckCircle2 className="w-6 h-6" />,
      desc: "Testes, ajustes finais e entrega",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 6,
      title: "Mês 2-4: Bônus",
      number: "06",
      icon: <CheckCircle2 className="w-6 h-6" />,
      desc: "Suporte & manutenção (bônus)",
      className: "md:col-span-1 md:row-span-1"
    }
  ];


  return (
    <section id="processo" className="relative py-16 md:py-40 px-4 sm:px-6 flex flex-col items-center justify-center z-20 bg-white overflow-hidden">
      {/* Background Decorative Element (Trail Line) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <path 
            d="M 100 200 Q 500 100 900 400 T 100 800" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeDasharray="10 10"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col items-center mb-10 md:mb-20 text-center">
            <div className="px-3 py-1.5 text-[11px] font-medium text-zinc-600 bg-black/5 border border-black/10 rounded-full shadow-sm tracking-wide uppercase mb-6">
              Cronograma de Lançamento
            </div>
            <h2 className="text-2xl md:text-[44px] font-medium tracking-tight text-zinc-900 max-w-4xl leading-[1.05] mb-6">
              O caminho para o seu <br /> <span className="text-yellow-500/80 underline decoration-yellow-500/20 underline-offset-8">novo padrão digital</span>
            </h2>
            <p className="text-zinc-600 text-[14px] md:text-[15px] max-w-[640px] font-light leading-[1.6] px-2">
              Nossa jornada de 8 semanas foi desenhada para garantir excelência em cada etapa, transformando a complexidade do projeto em clareza absoluta para os usuários.
            </p>

          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className={`${step.className} h-full`}>
              <ScrollReveal 
                direction="up" 
                delay={0.2 + (index * 0.1)}
                className="h-full"
              >
              <div className="bg-zinc-900 text-white p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] h-full flex flex-col justify-between border border-zinc-800 hover:border-yellow-500/50 transition-all duration-700 group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 bg-white/10 text-white group-hover:bg-yellow-500 group-hover:text-zinc-900">
                      {step.icon}
                    </span>
                    <span className="text-3xl sm:text-4xl font-mono font-bold opacity-10 text-white">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed font-light text-zinc-400">
                    {step.desc}
                  </p>
                </div>

              </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
