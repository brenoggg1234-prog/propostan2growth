import React from 'react';

interface NeumorphicButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  dark?: boolean;
}

export default function NeumorphicButton({ text, onClick, className = '', dark = false }: NeumorphicButtonProps) {
  return (
    <div className={`inline-flex ${className}`}>
      <button 
        onClick={onClick}
        className="group bg-[#eab308] hover:bg-[#ca8a04] text-white px-8 py-4 rounded-full font-medium text-[15px] flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
      >
        {text}
        <svg 
          className="w-4 h-4 fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round transition-transform duration-300 group-hover:translate-x-1" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12H19M19 12L12 5M19 12L12 19" />
        </svg>
      </button>
    </div>
  );
}
