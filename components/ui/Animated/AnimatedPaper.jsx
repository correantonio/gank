import React from 'react';
import { cn } from '@/lib/utils';
import SectionIcon from '../SectionIcon';

const RING_CONFIG = [
  { size: 'w-[200px] h-[200px]', opacity: 'group-hover:opacity-75', delay: '' },
  {
    size: 'w-[300px] h-[300px]',
    opacity: 'group-hover:opacity-50',
    delay: 'delay-75',
  },
  {
    size: 'w-[400px] h-[400px]',
    opacity: 'group-hover:opacity-25',
    delay: 'delay-150',
  },
];

const AnimatedPaper = ({ className }) => {
  return (
    <div className={cn("group relative w-full h-50 flex items-center justify-center cursor-pointer", className)}>
      {/* CAMADA 1: Anéis de Luz Emanada (Explodem do centro) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex items-center justify-center">
        {RING_CONFIG.map((ring, index) => (
          <div
            key={`light-ring-${index}`}
            className={`absolute rounded-full border border-gank-p/50 border-dashed opacity-50 scale-75 transition-all duration-700 ease-out group-hover:scale-100 ${ring.size} ${ring.opacity} ${ring.delay}`}
          />
        ))}
      </div>

      {/* CAMADA 2: CLUSTER DE ÍCONES (Isolado no centro) */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="absolute z-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] -translate-x-[45px] group-hover:-translate-x-[90px]">
          <div className="scale-[0.70] -rotate-6 opacity-60 transition-all duration-500 ease-out group-hover:-rotate-[20deg] group-hover:opacity-100">
            <SectionIcon icon="newspaper" className="mb-0" />
          </div>
        </div>

        <div className="absolute z-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] translate-x-[45px] group-hover:translate-x-[90px]">
          <div className="scale-[0.70] rotate-6 opacity-60 transition-all duration-500 ease-out group-hover:rotate-[20deg] group-hover:opacity-100">
            <SectionIcon icon="newspaper" className="mb-0" />
          </div>
        </div>
        <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] drop-shadow-2xl scale-110 group-hover:scale-125">
          <SectionIcon icon="newspaper" className="mb-0" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedPaper;
