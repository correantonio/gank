import SectionIcon from '../SectionIcon';
import { cn } from '@/lib/utils';
import React from 'react';

const AnimatedBase = ({ className }) => {
  return (
    <div
      className={cn(
        'group relative w-full h-50 flex justify-between items-center cursor-pointer rounded-xl',
        className,
      )}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-1 { animation: float 3s ease-in-out infinite; }
        .animate-float-2 { animation: float 4s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float 3.5s ease-in-out infinite 1s; }
      `}</style>

      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 z-0 flex items-center justify-center">
        <div className="absolute size-50 rounded-2xl border border-white border-dashed opacity-25 scale-75 transition-all duration-700 ease-out group-hover:opacity-20 group-hover:scale-100" />
        <div className="absolute size-75 rounded-2xl border border-white border-dashed opacity-25 scale-75 transition-all duration-700 delay-75 ease-out group-hover:opacity-10 group-hover:scale-100" />
        <div className="absolute size-100 rounded-2xl border border-white border-dashed opacity-25 scale-75 transition-all duration-700 delay-150 ease-out group-hover:opacity-5 group-hover:scale-100" />
      </div>

      <div className="relative w-1/2">
        <div className="absolute top-[20%] left-[15%] scale-[0.65] -rotate-3 opacity-80">
          <SectionIcon icon="star" className="mb-0 animate-float-1" />
        </div>
        <div className="absolute bottom-[20%] left-[10%] scale-[0.65] rotate-6 opacity-30 transition-opacity duration-500 group-hover:opacity-50">
          <SectionIcon icon="globe" className="mb-0 animate-float-2" />
        </div>
        <div className="absolute top-[10%] left-[55%] scale-[0.65] -rotate-6 opacity-40 transition-opacity duration-500 group-hover:opacity-70">
          <SectionIcon icon="phone" className="mb-0 animate-float-3" />
        </div>
      </div>

      <div className="mr-[5%] group-hover:scale-[110%] ease-in-out duration-100">
        <SectionIcon icon="database" className="mb-0" />
      </div>
    </div>
  );
};

export default AnimatedBase;
