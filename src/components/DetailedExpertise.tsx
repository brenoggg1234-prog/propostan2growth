import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function DetailedExpertise() {
  return (
    <section className="relative py-16 md:py-32 px-6 md:px-12 bg-white z-20 overflow-hidden">
      <style>
        {`
        .visual-card {
            background-color: #fff;
            border: 1px solid rgba(0,0,0,0.05);
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            min-height: 400px;
            box-shadow: 0 30px 60px -15px rgba(0,0,0,0.05), inset 0 0 20px rgba(0,0,0,0.02);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .nebula-canvas {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
            pointer-events: none;
        }
        .cosmic-dust {
            position: absolute;
            inset: -50%;
            width: 200%;
            height: 200%;
            background-color: transparent;
            mix-blend-mode: overlay;
            opacity: 0.8;
            animation: driftDust 60s infinite linear;
        }
        .stars-layer {
            position: absolute;
            inset: 0;
            background-image: 
                radial-gradient(1px 1px at 10px 10px, rgba(0,0,0,0.1), transparent),
                radial-gradient(1.5px 1.5px at 40px 60px, rgba(0,0,0,0.15), transparent),
                radial-gradient(1px 1px at 90px 30px, rgba(0,0,0,0.1), transparent),
                radial-gradient(1.5px 1.5px at 250px 180px, rgba(0,0,0,0.15), transparent);
            background-size: 150px 150px;
            opacity: 0.7;
        }
        .gas-cloud {
            position: absolute;
            filter: blur(40px);
            mix-blend-mode: multiply;
            animation: morphCloud 15s infinite alternate ease-in-out;
        }
        .cloud-1 { width: 80%; height: 80%; top: -20%; left: -20%; background-color: var(--c1); }
        .cloud-2 { width: 100%; height: 70%; bottom: -20%; right: -30%; background-color: var(--c2); animation-delay: -5s; }
        .cloud-3 { width: 60%; height: 60%; top: 30%; left: 20%; background-color: #ffffff; animation-delay: -10s; filter: blur(30px); opacity: 0.3; }
        .vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, transparent 20%, rgba(255,255,255,0.8) 100%);
        }
        .theme-web { --c1: #fef08a; --c2: #fde047; }
        .theme-copy { --c1: #fef08a; --c2: #fde047; }
        .theme-social { --c1: #fee2e2; --c2: #fecaca; }
        .theme-ads { --c1: #ffedd5; --c2: #fed7aa; }
        @keyframes morphCloud {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(10deg) scale(1.1); }
            100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes driftDust {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-10%, -10%); }
        }
        .glass-ui {
            position: relative;
            z-index: 10;
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(0,0,0,0.05);
            border-top: 1px solid rgba(255,255,255,0.8);
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
            width: 80%;
            transition: transform 0.4s ease;
        }
        .visual-card:hover .glass-ui {
            transform: translateY(-5px) scale(1.02);
            border-color: rgba(0,0,0,0.1);
        }
        `}
      </style>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <header className="mb-24 flex flex-col items-center text-center">
            <div className="px-3 py-1.5 text-[11px] font-medium text-zinc-600 bg-black/5 border border-black/10 rounded-full shadow-sm tracking-wide uppercase mb-6">
                Nossa Expertise
            </div>
            <h2 className="text-4xl md:text-[52px] font-medium tracking-tight text-zinc-900 max-w-3xl leading-[1.1] mb-6">
                Como podemos <span className="font-sans font-light text-zinc-800">ajudar?</span>
            </h2>
            <p className="text-zinc-600 text-[15px] max-w-[540px] font-light leading-[1.6]">
                Estratégia visual e conversão para posicionar sua marca no topo.
            </p>
        </header>

        <main className="flex flex-col gap-32 relative">
            {/* SERVIÇO 1: WEBSITES */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7 visual-card theme-web">
                    <div className="nebula-canvas">
                        <div className="gas-cloud cloud-1"></div>
                        <div className="gas-cloud cloud-2"></div>
                        <div className="gas-cloud cloud-3"></div>
                        <div className="cosmic-dust"></div>
                        <div className="stars-layer"></div>
                        <div className="vignette"></div>
                    </div>
                    <div className="glass-ui flex flex-col overflow-hidden w-[85%] max-w-[340px]">
                        <div className="px-4 py-3 bg-black/5 border-b border-black/5 flex gap-1.5 items-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                            <div className="ml-3 text-[10px] text-zinc-400 font-mono">asuaempresa.pt</div>
                        </div>
                        <div className="p-8 flex flex-col items-center text-center gap-3">
                            <span className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-700 text-[9px] font-bold tracking-widest uppercase border border-yellow-500/20">Lançamento</span>
                            <h4 className="text-xl font-bold text-zinc-900 leading-tight mt-1">Presença Digital Impecável</h4>
                            <p className="text-xs text-zinc-600 mt-1">Plataforma focada em converter visitantes em clientes reais.</p>
                            <MagneticButton 
                              text="Ver Resultados" 
                              className="mt-4"
                              onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                        </svg>
                        <h3 className="text-2xl font-semibold text-zinc-900">1 — Websites Profissionais</h3>
                    </div>
                    <p className="text-zinc-600 leading-relaxed font-light text-base md:text-lg">
                        Transformamos sua visão em uma presença digital impecável. Desenvolvemos sites de alto impacto com design premium, focados inteiramente em converter visitantes curiosos em clientes recorrentes.
                    </p>
                    <MagneticButton 
                        text="Saber mais sobre Websites" 
                        variant="outline"
                        className="mt-8"
                    />
                </div>
            </div>

            {/* SERVIÇO 2: COPYWRITING */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7 visual-card theme-copy">
                    <div className="nebula-canvas">
                        <div className="gas-cloud cloud-1"></div>
                        <div className="gas-cloud cloud-2"></div>
                        <div className="gas-cloud cloud-3"></div>
                        <div className="cosmic-dust"></div>
                        <div className="stars-layer"></div>
                        <div class="vignette"></div>
                    </div>
                    <div className="glass-ui p-6 w-[85%] max-w-[340px] flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-black/10 pb-3">
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                <span className="text-xs font-semibold text-zinc-600">Copy do Website</span>
                            </div>
                            <span className="text-[10px] text-green-600 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">Alta Conversão</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-zinc-900 mb-2">Headline (H1): A mensagem que vende por você ✍️</h4>
                            <p className="text-xs text-zinc-600 leading-relaxed font-light">
                                Criamos toda a estrutura persuasiva do seu site do zero. Transformamos as características do seu product em benefícios irresistíveis, guiando o visitante estrategicamente até o botão de compra.
                            </p>
                        </div>
                        <div className="mt-1 text-yellow-600 text-xs font-medium cursor-pointer hover:text-yellow-700 transition-colors">Aprovar textos da Landing Page &rarr;</div>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <h3 className="text-2xl font-semibold text-zinc-900">2 — Copywriting Estratégico</h3>
                    </div>
                    <p className="text-zinc-600 leading-relaxed font-light text-base md:text-lg">
                        O assistente tece a resposta. Palavras que conectam e vendem. Criamos textos persuasivos e roteiros perfeitamente alinhados ao seu público-alvo para gerar autoridade imediata.
                    </p>
                    <MagneticButton 
                        text="Saber mais sobre Copywriting" 
                        variant="outline"
                        className="mt-8"
                    />
                </div>
            </div>

            {/* SERVIÇO 3: MÍDIAS SOCIAIS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7 visual-card theme-social">
                    <div className="nebula-canvas">
                        <div className="gas-cloud cloud-1"></div>
                        <div className="gas-cloud cloud-2"></div>
                        <div className="gas-cloud cloud-3"></div>
                        <div className="cosmic-dust"></div>
                        <div className="stars-layer"></div>
                        <div className="vignette"></div>
                    </div>
                    <div className="glass-ui p-5 w-[85%] max-w-[320px] flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-yellow-500 p-[2px]">
                                    <div className="w-full h-full bg-white rounded-full border border-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-900">M.</div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-zinc-900 leading-none">asuamarca_oficial</h4>
                                    <p className="text-[10px] text-zinc-500 mt-1">Patrocinado</p>
                                </div>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                        </div>
                        <div className="w-full aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-md border border-black/5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50"></div>
                            <span className="text-zinc-900 font-bold tracking-widest text-lg z-10">NOVA COLEÇÃO</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex gap-4 text-zinc-900 pb-1">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" className="text-red-500"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </div>
                            <p className="text-xs text-zinc-900"><span className="font-bold">1.245</span> gostos</p>
                            <p className="text-[11px] text-zinc-600 leading-snug"><span className="font-bold text-zinc-900">asuamarca_oficial</span> O design que a sua marca merece. Eleve o seu padrão com a nossa nova identidade visual...</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <h3 className="text-2xl font-semibold text-zinc-900">3 — Gestão de Mídias</h3>
                    </div>
                    <p className="text-zinc-600 leading-relaxed font-light text-base md:text-lg">
                        Sua marca com presença relevante e constante. Desenhamos o planejamento de conteúdo e artes para que suas redes sociais trabalhem a favor do seu branding, todos os dias.
                    </p>
                    <MagneticButton 
                        text="Saber mais sobre Gestão de Mídias" 
                        variant="outline"
                        className="mt-8"
                    />
                </div>
            </div>

            {/* SERVIÇO 4: TRÁFEGO PAGO */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7 visual-card theme-ads">
                    <div className="nebula-canvas">
                        <div className="gas-cloud cloud-1"></div>
                        <div className="gas-cloud cloud-2"></div>
                        <div className="gas-cloud cloud-3"></div>
                        <div className="cosmic-dust"></div>
                        <div className="stars-layer"></div>
                        <div className="vignette"></div>
                    </div>
                    <div className="glass-ui p-6 w-[85%] max-w-[340px] flex flex-col gap-5">
                        <div className="flex justify-between items-center border-b border-black/10 pb-4">
                            <div className="flex items-center gap-2.5">
                                <span className="relative flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                                </span>
                                <p className="text-xs text-zinc-900 font-semibold tracking-wide">Campanha Ativa</p>
                            </div>
                            <span className="text-[9px] bg-black/5 px-2.5 py-1 rounded font-medium text-zinc-600 uppercase tracking-wider">Meta Ads</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                            <div>
                                <p className="text-[10px] text-zinc-500 mb-1 font-medium uppercase tracking-wider">ROAS</p>
                                <p className="text-xl font-bold text-green-600">4.85x</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-zinc-500 mb-1 font-medium uppercase tracking-wider">Custo / Lead</p>
                                <p className="text-xl font-bold text-zinc-900">2,30€</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-zinc-500 mb-1 font-medium uppercase tracking-wider">Novos Leads</p>
                                <p className="text-xl font-bold text-zinc-900">1.284</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-zinc-500 mb-1 font-medium uppercase tracking-wider">Vendas</p>
                                <p className="text-xl font-bold text-zinc-900">342</p>
                            </div>
                        </div>
                        
                        <div className="mt-2 flex flex-col gap-2">
                            <div className="flex justify-between text-[10px] text-zinc-500">
                                <span>Orçamento Diário Consumido</span>
                                <span className="text-zinc-900">75%</span>
                            </div>
                            <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                                <div className="w-[75%] h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <h3 className="text-2xl font-semibold text-zinc-900">4 — Tráfego Pago</h3>
                    </div>
                    <p className="text-zinc-600 leading-relaxed font-light text-base md:text-lg">
                        Colocamos o seu negócio na frente das pessoas certas. Aceleramos os seus resultados através de anúncios inteligentes e segmentados no Google e Meta Ads para atrair clientes reais.
                    </p>
                    <MagneticButton 
                        text="Saber mais sobre Tráfego Pago" 
                        variant="outline"
                        className="mt-8"
                    />
                </div>
            </div>
        </main>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 relative z-10">
          <MagneticButton 
            text="Falar com um especialista" 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
}
