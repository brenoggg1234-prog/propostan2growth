import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Layout, 
  FileText, 
  MessageSquare, 
  Settings, 
  Shield, 
  Layers, 
  Search,
  Calendar,
  Users,
  Bot,
  Zap,
  TrendingUp,
  CreditCard,
  Box,
  CheckCircle2
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const institutionalPages = [
  { 
    title: "Home Estratégica", 
    desc: "Hero, proposta de valor, módulos em destaque e CTA principal.", 
    icon: Globe,
    responsible: "Design: Breno / Copy: Marcos"
  },
  { 
    title: "Hub de Funcionalidades", 
    desc: "Página âncora para os 7 módulos avançados do ecossistema.", 
    icon: Layers,
    responsible: "Design: Breno"
  },
  { 
    title: "Planos & Comparativo", 
    desc: "Tabela de planos, destaques e conversão direta.", 
    icon: Layout,
    responsible: "Design: Breno / Copy: Marcos"
  },
  { 
    title: "Cases & Resultados", 
    desc: "Depoimentos, métricas e prova social da Cliniboss.", 
    icon: TrendingUp,
    responsible: "Copy: Marcos"
  },
  { 
    title: "Sobre a Cliniboss", 
    desc: "História, missão, time e diferenciais da rede.", 
    icon: FileText,
    responsible: "Copy: Marcos"
  },
  { 
    title: "Contato & Suporte", 
    desc: "Formulários inteligentes e FAQ de atendimento.", 
    icon: MessageSquare,
    responsible: "Design: Breno"
  },
  { 
    title: "Ecossistema Blog", 
    desc: "Template de listagem e de artigo estratégico.", 
    icon: Search,
    responsible: "Design: Breno"
  },
  { 
    title: "Privacidade", 
    desc: "Página institucional — compliance e segurança.", 
    icon: Shield,
    responsible: "Design: Breno"
  }
];

const productModules = [
  { 
    title: "Agenda com IA", 
    desc: "Agenda preditiva e gestão automatizada de faltas.", 
    icon: Calendar,
    path: "/agenda"
  },
  { 
    title: "CRM Clínico", 
    desc: "Perfil completo de paciente e histórico clínico.", 
    icon: Users,
    path: "/crm"
  },
  { 
    title: "Assistente Virtual", 
    desc: "IA de atendimento 24/7 integrada.", 
    icon: Bot,
    path: "/assistente"
  },
  { 
    title: "Marketing & Automação", 
    desc: "Gestão de redes sociais e WhatsApp integrado.", 
    icon: Zap,
    path: "/marketing"
  },
  { 
    title: "Financeiro & Faturamento", 
    desc: "Comissões, fluxo de caixa e faturamento digital.", 
    icon: CreditCard,
    path: "/financeiro"
  },
  { 
    title: "Tecnologia 3D", 
    desc: "Scanner 3D e simulador de procedimentos.", 
    icon: Box,
    path: "/3d"
  },
  { 
    title: "BI & Dashboards", 
    desc: "Inteligência estratégica e relatórios gerenciais.", 
    icon: TrendingUp,
    path: "/bi"
  }
];

export default function DetailedScope() {
  return (
    <section id="expertise" className="relative py-24 md:py-40 px-6 bg-white z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header da Seção */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
            <div className="px-3 py-1.5 text-[11px] font-medium text-zinc-500 bg-black/5 border border-black/10 rounded-full tracking-widest uppercase mb-6">
              Detalhamento de Entrega
            </div>
            
            <h2 className="text-3xl md:text-[52px] font-medium tracking-tighter text-zinc-900 leading-[1.05] mb-8">
              Arquitetura de <span className="text-yellow-500 underline decoration-yellow-500/20 underline-offset-8">15 Módulos</span> Únicos
            </h2>
            
            <p className="text-zinc-600 text-[16px] md:text-[18px] max-w-2xl font-light leading-relaxed">
              O projeto contempla a criação de um ecossistema digital completo, mapeando cada ponto de contato 
              da jornada do paciente com a Cliniboss.
            </p>
          </div>
        </ScrollReveal>

        {/* Categoria 01: Institucional */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 border-b border-zinc-200 pb-4">
            <h3 className="text-xl font-medium text-zinc-900">Ecossistema Institucional</h3>
            <span className="text-zinc-400 font-light text-sm italic">8 Páginas Estratégicas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {institutionalPages.map((page, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={0.1 + (index * 0.05)}
                className="group bg-white border border-zinc-100 p-6 rounded-2xl hover:border-yellow-500/30 hover:shadow-xl hover:shadow-black/[0.02] transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-yellow-500 group-hover:bg-yellow-50 transition-colors mb-4">
                    <page.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-medium text-zinc-900 mb-2">{page.title}</h4>
                  <p className="text-zinc-500 text-sm font-light leading-snug mb-6 flex-1">
                    {page.desc}
                  </p>
                  <div className="pt-4 border-t border-zinc-50 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                      {page.responsible}
                    </span>
                    <CheckCircle2 size={12} className="text-zinc-200 group-hover:text-yellow-400 transition-colors" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Categoria 02: Produto */}
        <div>
          <div className="flex items-center gap-4 mb-10 border-b border-zinc-200 pb-4">
            <h3 className="text-xl font-medium text-zinc-900">Módulos de Produto</h3>
            <span className="text-zinc-400 font-light text-sm italic">7 Subpáginas Funcionais</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productModules.map((mod, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={0.2 + (index * 0.05)}
                className="group bg-zinc-900 p-6 rounded-2xl border border-white/[0.05] hover:border-yellow-500/30 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-yellow-500 group-hover:bg-yellow-500/10 transition-colors">
                      <mod.icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-600 group-hover:text-yellow-500/50 transition-colors">
                      {mod.path}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">{mod.title}</h4>
                  <p className="text-zinc-400 text-sm font-light leading-snug">
                    {mod.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            
            {/* Resumo Final Item */}
            <ScrollReveal 
              direction="up" 
              delay={0.6}
              className="group bg-yellow-500 p-6 rounded-2xl border border-yellow-400 flex flex-col items-center justify-center text-center"
            >
              <h4 className="text-yellow-950 font-bold text-3xl mb-1">15</h4>
              <p className="text-yellow-950/80 text-xs font-bold uppercase tracking-tighter mb-4">
                Paths Digitais
              </p>
              <p className="text-yellow-950/60 text-[11px] leading-tight font-medium">
                Design no Figma + <br /> Implementação Framer + <br /> Copy Estratégica
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Disclaimer de Qualidade */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-60">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-yellow-500" />
            <span className="text-sm text-zinc-500">Rodadas de revisões inclusas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-yellow-500" />
            <span className="text-sm text-zinc-500">Ajuste de Design & Copy Pós-Feedback</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-yellow-500" />
            <span className="text-sm text-zinc-500">Entrega 100% Responsiva</span>
          </div>
        </div>

      </div>
    </section>
  );
}
