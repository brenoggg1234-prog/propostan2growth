import { Figma, Framer, Search, TrendingUp, ArrowRight, ArrowUpRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import opalOakImg from './assets/body-wrapper.png';
import orthogonalImg from './assets/orthogonal-studio.png';
import DetailedScope from './components/DetailedScope';
import ProcessSection from './components/ProcessSection';
import InvestmentSection from './components/InvestmentSection';
import FinalCTA from './components/FinalCTA';
import Navbar from './components/Navbar';
import MagneticButton from './components/MagneticButton';
import ScrollReveal from './components/ScrollReveal';
import InclusionSection from './components/InclusionSection';
import { useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';

// Custom Google Icon SVG
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
  </svg>
);

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth mouse values for parallax
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  // Parallax transforms for auroras
  const aurora1X = useTransform(smoothX, [-500, 500], [-30, 30]);
  const aurora1Y = useTransform(smoothY, [-500, 500], [-20, 20]);
  const aurora2X = useTransform(smoothX, [-500, 500], [40, -40]);
  const aurora2Y = useTransform(smoothY, [-500, 500], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  // Split text into characters for Supreme animation
  const titleLine1 = "N2 Growth + Cliniboss.".split("");

  const { scrollY } = useScroll();
  
  // Scroll Parallax for Hero (Adjusted for Mobile)
  const heroY = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -150]);
  const bgY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, isMobile ? 1 : 0]);

  // Sticky stacking transformations
  // Sticky stacking transformations (Disabled on Mobile for Performance)
  const heroScale = useTransform(scrollY, [0, 800], [1, isMobile ? 1 : 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, isMobile ? 1 : 0.2]);
  const heroBlur = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(0px)"]);

  return (
    <div className="bg-white font-sans text-zinc-900 relative min-h-screen selection:bg-yellow-500 selection:text-white overflow-x-hidden" onMouseMove={handleMouseMove}>
      {/* Global Studio Lighting (Blobs) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={isMobile ? undefined : { x: aurora1X, y: aurora1Y }}
          className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] studio-blob studio-blob-yellow opacity-[0.03] md:opacity-10" 
        />
        <motion.div 
          style={isMobile ? undefined : { x: aurora2X, y: aurora2Y }}
          className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] studio-blob studio-blob-yellow opacity-[0.02] md:opacity-5" 
        />
      </div>

      <Navbar />

      {/* Hero Section - Dynamic Positioning (Linear on Mobile, Sticky on Desktop) */}
      <section id="hero" className={`${isMobile ? 'relative' : 'fixed top-0 left-0'} w-full h-screen flex flex-col items-center justify-center overflow-hidden z-0 bg-white`}>
        
        {/* Cinematic Background Gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/40 via-white to-zinc-50/20"></div>
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
        </div>

        <motion.div 
          className="absolute inset-0 z-[1] opacity-20 pointer-events-none" 
          style={isMobile ? {
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          } : { 
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            y: bgY
          }} 
        />

        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            style={isMobile ? undefined : { x: aurora1X, y: useTransform(scrollY, [0, 500], [0, -80]) }}
            animate={isMobile ? undefined : { 
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.18, 0.1]
            }}
            transition={isMobile ? undefined : { duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-yellow-600/30 blur-[130px] rounded-full"
          />
          <motion.div 
            style={isMobile ? undefined : { x: aurora2X, y: useTransform(scrollY, [0, 500], [0, -100]) }}
            animate={isMobile ? undefined : { 
              scale: [1.15, 1, 1.15],
              opacity: [0.05, 0.13, 0.05]
            }}
            transition={isMobile ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-15%] right-[-15%] w-[70%] h-[70%] bg-blue-600/20 blur-[160px] rounded-full"
          />
        </div>

        <motion.div 
          style={isMobile ? undefined : { x: smoothX, y: smoothY, opacity: opacityHero }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none z-0"
        />

        <motion.div 
          initial={isMobile ? undefined : { opacity: 0, y: 20 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          style={isMobile ? undefined : { y: heroY, opacity: heroOpacity, scale: heroScale, filter: heroBlur }}
          transition={isMobile ? undefined : { duration: 0.8 }}
          className="relative z-10 flex flex-col items-center px-4 w-full max-w-7xl mx-auto text-center"
        >
          {/* Posicionamento de Valor: Disclaimer de Qualidade */}
          <motion.div 
            initial={isMobile ? undefined : { opacity: 0, scale: 0.95 }}
            animate={isMobile ? undefined : { opacity: 1, scale: 1 }}
            transition={isMobile ? undefined : { delay: 0.5, duration: 1 }}
            className="mb-8 md:mb-12 flex flex-col items-center gap-3"
          >
            <div className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm shadow-sm flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Apresentação Estratégica • Proposta Exclusiva
              </span>
            </div>
            <p className="text-[12px] md:text-[13px] text-zinc-400 max-w-[450px] leading-relaxed font-medium italic">
              "Este ambiente é uma vitrine da nossa visão. A plataforma final será construída com rigor artesanal, etapa por etapa, sob o padrão de excelência N2 Growth."
            </p>
          </motion.div>

          <div className="mb-6 sm:mb-8 select-none w-full">
            <motion.h1 
              initial={isMobile ? undefined : { opacity: 0 }}
              animate={isMobile ? undefined : { opacity: 1 }}
              transition={isMobile ? undefined : { duration: 0.1 }}
              className="text-[38px] sm:text-[48px] md:text-[58px] lg:text-[72px] font-medium text-zinc-900 text-center leading-[1.1] sm:leading-[1] flex flex-col items-center w-full max-w-[1100px] mx-auto px-4 tracking-tighter"
            >
              <div className="flex flex-wrap justify-center overflow-hidden py-1">
                {isMobile ? (
                  <span className="text-zinc-900">N2 <span className="text-yellow-500">Growth</span> + Clini<span className="text-yellow-500">boss</span>.</span>
                ) : (
                  titleLine1.map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
                      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: i * 0.03 + 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className={char === " " ? "mr-4" : "inline-block"}
                    >
                      {/* Cor para "Growth" (indices 3-8) e "boss" (indices 17-20) */}
                      { (i >= 3 && i <= 8) || (i >= 17 && i <= 20) ? (
                        <span className="text-yellow-500">{char}</span>
                      ) : char}
                    </motion.span>
                  ))
                )}
              </div>
            </motion.h1>
          </div>

          <motion.p 
            initial={isMobile ? undefined : { opacity: 0, filter: "blur(8px)" }}
            whileInView={isMobile ? undefined : { opacity: 1, filter: "blur(0px)" }}
            viewport={isMobile ? undefined : { once: true, amount: 0 }}
            transition={isMobile ? undefined : { duration: 1, delay: 0.6 }}
            className="text-zinc-600 text-center max-w-[650px] md:max-w-[850px] mb-8 sm:mb-10 text-[16px] sm:text-[18px] md:text-[21px] leading-[1.6] font-light tracking-tight opacity-90 px-6 mt-6 md:mt-10"
          >
            Transformaremos a robustez das 131+ ferramentas da Cliniboss <br className="hidden md:block" />
            em um site fluido de alta conversão. 
            
            <span className="block mt-4 md:mt-6 text-[15px] md:text-[19px] opacity-70 font-normal">
              Uma proposta exclusiva de design, copy e tecnologia feita sob <br className="hidden md:block" />
              medida para o seu ecossistema.
            </span>
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        {!isMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[9px] text-zinc-900/30 uppercase tracking-[0.4em] font-medium">Explore</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 animate-bounce" />
          </motion.div>
        )}
      </section>

      {/* Main Content Scroll Layer */}
      <div className="relative z-20 w-full">
        <div className="hidden md:block h-screen w-full pointer-events-none bg-transparent" />
        
        <div className="bg-white relative z-10">
          <DetailedScope />
          <InclusionSection />
          <ProcessSection />
          <InvestmentSection />
        </div>

        <div className="relative z-20 -mb-40 md:-mb-64">
          <FinalCTA />
        </div>
      </div>
    </div>
  );
}
