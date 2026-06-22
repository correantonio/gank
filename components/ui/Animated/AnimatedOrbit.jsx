import React from 'react';
import { cn } from '@/lib/utils';
import SectionIcon from '../SectionIcon';

const ORBIT_CONFIG = [
  { size: 'w-[240px] h-[240px]', track: 'orbit-1', antiSpin: 'anti-spin-1' },
  { size: 'w-[360px] h-[360px]', track: 'orbit-2', antiSpin: 'anti-spin-2' },
];

const AnimatedOrbit = ({className}) => {
  return (
    <div>
      <div className={cn("group relative w-full flex items-center justify-center cursor-pointer rounded-xl", className)}>
        <style>{`
        /* 1. Flutuação contínua do centro (Já com a inclinação embutida no keyframe) */
        @keyframes float-center {
          0%, 100% { transform: translateY(0) rotate(15deg) scale(1.1); }
          50% { transform: translateY(-16px) rotate(15deg) scale(1.1); }
        }
        .animate-float-center {
          animation: float-center 4s ease-in-out infinite;
        }

        /* 2. Keyframes de Rotação */
        @keyframes spin-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        /* 3. Trilhas de Órbita (Sentidos opostos para dinamismo) */
        .orbit-1 { animation: spin-orbit 15s linear infinite; }
        .orbit-2 { animation: spin-orbit-reverse 20s linear infinite; }

        /* 4. Contra-rotação (Mantém os ícones menores perfeitamente em pé) */
        .anti-spin-1 { animation: spin-orbit-reverse 15s linear infinite; }
        .anti-spin-2 { animation: spin-orbit 20s linear infinite; }

        /* ====================================================================
           ACELERADOR DE HOVER
           Reduz o tempo da animação, forçando-a a rodar mais rápido.
           ==================================================================== */
        .group:hover .orbit-1, .group:hover .anti-spin-1 { animation-duration: 4s; }
        .group:hover .orbit-2, .group:hover .anti-spin-2 { animation-duration: 6s; }
      `}</style>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-9 pointer-events-none flex items-center justify-center">
          {ORBIT_CONFIG.map((orbit, idx) => (
            <div
              key={`orbit-ring-visual-${idx}`}
              className={`absolute rounded-full border border-white/10 ${orbit.size}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-full pointer-events-none flex items-center justify-center">
          <div className={`absolute size-[240px] orbit-1`}>
            {/* Posiciona o ícone exatamente na borda superior do anel (top-0) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.45]">
              {/* O wrapper de anti-spin anula a rotação do pai */}
              <div className="anti-spin-1">
                <SectionIcon icon="globe" className="mb-0" />
              </div>
            </div>
          </div>

          <div className={`absolute size-[360px] orbit-2`}>
            {/* Posiciona o ícone exatamente na borda direita do anel (right-0) */}
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 scale-[0.45]">
              {/* O wrapper de anti-spin anula a rotação do pai */}
              <div className="anti-spin-2">
                <SectionIcon icon="star" className="mb-0" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 pointer-events-none">
          <div className="animate-float-center drop-shadow-[0_0_25px_rgba(151,56,176,0.6)]">
            <SectionIcon
              icon="mousepointer"
              className="mb-0 border-gank-p bg-opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedOrbit;
