import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Bloqueio de scroll no body quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // previne travamento de borracha no iOS Safari
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Visibilidade da Navbar: Não esconder se o menu mobile estiver aberto
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Estado isScrolled
    setIsScrolled(latest > 20);

    // Scrollspy (Seção Ativa)
    const sections = ['projetos', 'servicos', 'processo', 'diferencial', 'sobre'];
    const scrollPosition = latest + 80;

    let currentSection = '';
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = section;
          break;
        }
      }
    }
    setActiveSection(currentSection);
  });

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  const navLinks = [
    { id: 'expertise', label: 'Escopo' },
    { id: 'processo', label: 'Como Funciona' },
    { id: 'diferencial', label: 'Investimento' },
    { id: 'sobre', label: 'Quem Somos' },
  ];

  const isProjectSection = activeSection === 'projetos';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: (hidden && !isMobileMenuOpen) ? -120 : 0, 
            opacity: 1,
            backgroundColor: isProjectSection ? "rgba(255, 255, 255, 1)" : (isScrolled ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0)"),
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} 
          className={`w-full max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-700 ease-soft ${
            isScrolled 
              ? `backdrop-blur-2xl border ${isProjectSection ? 'border-zinc-300' : 'border-black/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.04)]'}` 
              : 'border border-transparent'
          }`}
        >
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group shrink-0"
            onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img 
              src={logoImg} 
              alt="N2 Growth Logo" 
              className={`h-[18px] sm:h-5 md:h-6 w-auto object-contain transition-all duration-300 ${isProjectSection ? 'brightness-0' : 'opacity-90 hover:opacity-100'}`}
            />
          </div>

          {/* Desktop Links (Hidden on small screens) */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeSection === link.id 
                    ? (isProjectSection ? 'text-white' : 'text-[#eab308]') 
                    : (isProjectSection ? 'text-zinc-500 hover:text-black' : 'text-zinc-600 hover:text-zinc-900')
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeTab"
                    initial={false}
                    className={`absolute inset-0 rounded-full -z-10 ${isProjectSection ? 'bg-black' : 'bg-black/5'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Status Badge & Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
                Acesso Exclusivo • Proposta Ativa
              </span>
            </div>
            
            <button 
              className="lg:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[45] lg:hidden bg-white/95 backdrop-blur-md px-8 pt-24 h-screen flex flex-col"
          >

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-3xl font-medium text-left transition-colors ${
                    activeSection === link.id ? 'text-[#eab308]' : 'text-zinc-600'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
