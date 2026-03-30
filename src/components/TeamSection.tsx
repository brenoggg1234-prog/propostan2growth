import brenoImage from '../assets/breno-nery.png';
import marcosImage from '../assets/marcos-nery.png';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';

export default function TeamSection() {
  const team = [
    {
      name: "Marcos Nery",
      role: "Copywriter",
      image: marcosImage
    },
    {
      name: "Breno Nery",
      role: "WebDesigner",
      image: brenoImage
    }
  ];

  return (
    <section id="sobre" className="relative py-16 md:py-40 px-4 md:px-6 flex flex-col items-center justify-center z-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        
        {/* Título e Subtítulo */}
        <ScrollReveal direction="up" delay={0.1} className="w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-[42px] font-medium tracking-tighter text-zinc-900 max-w-4xl leading-[1.1] mb-8">
            Nossa <span className="font-sans font-medium text-yellow-500/80 underline decoration-yellow-500/20 underline-offset-8">Equipe Especializada</span>
          </h2>
 
          <p className="text-zinc-500 text-sm md:text-base max-w-[600px] font-light leading-relaxed mb-12">
            Profissionais dedicados a transformar seu projeto e visão em interfaces de alta performance e resultados.
          </p>
        </ScrollReveal>
 

 
        <ScrollReveal direction="up" delay={0.3} className="w-full flex justify-center">
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-12 w-full px-4">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border border-zinc-100 shadow-sm transition-all duration-700 ease-soft hover:shadow-xl hover:-translate-y-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-soft group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-lg font-medium text-zinc-900 mb-1">{member.name}</h3>
                <p className="text-zinc-500 text-[13px] font-light tracking-wide uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
