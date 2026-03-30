import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface MagneticButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'navbar' | 'outline' | 'white';
  href?: string;
}

export default function MagneticButton({ 
  text, 
  onClick, 
  className = "", 
  variant = 'primary',
  href
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Motion values for the magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Mouse position inside the button for the glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate position relative to the center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull (limited range)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Scale down the movement
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);

    // Glow position
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Styles based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'navbar':
        return 'px-6 py-2.5 bg-[#eab308] text-white text-sm';
      case 'white':
        return 'px-10 py-5 bg-white text-black border-white/20';
      case 'outline':
        return 'px-6 py-2.5 bg-transparent text-zinc-600 border-black/10 text-sm';
      default:
        return 'px-10 py-5 bg-zinc-950 text-white border-white/10';
    }
  };

  const getGradientStyles = () => {
    switch (variant) {
      case 'white':
        return 'bg-white group-hover:bg-zinc-50';
      case 'navbar':
        return 'bg-[#eab308] group-hover:bg-[#ca8a04]';
      case 'outline':
        return 'bg-transparent group-hover:bg-black/5';
      default:
        return 'bg-gradient-to-tr from-zinc-900 via-zinc-950 to-zinc-900 group-hover:from-yellow-600/20 group-hover:to-zinc-950';
    }
  };

  const glowColor = variant === 'white' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(234, 179, 8, 0.15)';

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        if (href) {
          if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView();
            }
          } else {
            window.open(href, '_blank', 'noopener,noreferrer');
          }
        }
        if (onClick) onClick();
      }}
      style={{
        x: springX,
        y: springY,
      }}
      className={`relative inline-block cursor-pointer ${className}`}
    >
      <motion.button
        className={`group relative rounded-full font-medium overflow-hidden border flex items-center gap-4 shadow-2xl transition-all active:scale-95 cursor-pointer ${getButtonStyles()}`}
      >
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 transition-colors duration-700 ${getGradientStyles()}`} />
        
        {/* Dynamic Glow that follows mouse */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([mx, my]) => `radial-gradient(120px circle at ${mx}px ${my}px, ${glowColor}, transparent)`
            )
          }}
        />

        {/* Shimmer line passing through (only on dark variants) */}
        {variant !== 'white' && variant !== 'outline' && (
          <motion.div 
            className="absolute inset-0 z-10 pointer-events-none"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
              skewX: -20
            }}
          />
        )}

        {/* Content */}
        <span className="relative z-20 flex items-center gap-3 tracking-tight">
          {text}
          <div className="relative flex items-center justify-center">
            <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300 ${variant === 'outline' ? 'w-4 h-4' : ''}`} />
            
            {/* Pulsing ring around arrow on hover */}
            {variant !== 'outline' && (
              <motion.div 
                className={`absolute inset-[-4px] border rounded-full group-hover:border-yellow-500/40 ${variant === 'white' ? 'border-black/5' : 'border-yellow-500/0'}`}
                animate={ { scale: [1, 1.3, 1], opacity: [0, 0.5, 0] } }
                transition={ { duration: 1.5, repeat: Infinity } }
              />
            )}
          </div>
        </span>

        {/* Hover Border Glow */}
        <div className={`absolute inset-0 rounded-full border transition-all duration-500 ${variant === 'white' ? 'border-black/0 group-hover:border-black/10' : 'border-yellow-500/0 group-hover:border-yellow-500/20'}`} />
      </motion.button>

      {/* Subtle outer drop shadow glow */}
      {variant !== 'outline' && (
        <div className={`absolute inset-4 -z-10 blur-2xl rounded-full transition-all duration-700 ${variant === 'white' ? 'bg-black/0 group-hover:bg-black/5' : 'bg-yellow-500/0 group-hover:bg-yellow-500/10'}`} />
      )}
    </motion.div>
  );
}
