import React from 'react';
import Image from 'next/image';
import { ArrowUpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Imports de assets originais (preservados conforme seu código)
import rafa from '../../assets/07-group/1-rafaeldalostt.jpg';
import arthur from '../../assets/07-group/2-arthurmarcondes.jpg';
import rodrigo from '../../assets/07-group/3-rodrigorodrigueiro.jpg';
import equipeGank from '../../assets/07-group/4-equipegank.jpg';
import gankLogo from '../../public/Gank.svg';
import gankLogo2 from '../../assets/0-hero/logogank3d.png';

// --- Subcomponentes ---

function GroupCard({ children, className, withImages = false }) {
  return (
    <div
      className={cn(
        // Adicionado w-[290px] e shrink-0 para garantir que o carrossel não esprema os itens
        'w-[290px] shrink-0 rounded-xl bg-gank-600__main overflow-hidden',
        withImages ? 'p-0' : 'p-5 lg:p-10 border border-gank-p/25',
        className
      )}
    >
      {children}
    </div>
  );
}

function GroupCardWithImg({ img, description, className }) {
  return (
    <div className="relative size-full group">
      <div className="absolute z-10 size-full bg-gank-600__main mix-blend-plus-lighter opacity-50 transition-transform duration-500 group-hover:translate-x-full" />
      <Image
        src={img}
        alt={description || ''}
        width={290}
        height={290}
        className={cn(
          'block size-full m-0 p-0 object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0',
          className
        )}
        loading="lazy"
      />
    </div>
  );
}

// --- Dados Estáticos (Içados para fora do componente para evitar recriação a cada render) ---

const ROW_1_CARDS = [
  <GroupCard key="1">
    <ArrowUpCircle aria-hidden="true" className="mb-8 size-10 text-gank-050" />
    <p className="mb-2 text-xl text-gank-050 lg:text-3xl">R$500 mil/mês</p>
    <p className="text-base text-gank-050 lg:text-xl text-balance">
      com controle e previsibilidade
    </p>
  </GroupCard>,
  <GroupCard key="2" withImages>
    <GroupCardWithImg img={rafa} description="Rafael Dalostt" />
  </GroupCard>,
  <GroupCard key="3" className="flex place-items-center bg-gank-800">
    <Image src={gankLogo} alt="Gank Logo" loading="lazy" />
  </GroupCard>,
  <GroupCard key="4" withImages>
    <GroupCardWithImg img={equipeGank} description="Diretoria equipe Gank" />
  </GroupCard>,
  <GroupCard key="5" withImages>
    <GroupCardWithImg img={arthur} description="Arthur Marcondes, fundador" />
  </GroupCard>,
];

const ROW_2_CARDS = [
  <GroupCard key="6" className="flex items-center">
    <p className="font-baskerville text-xl text-gank-050 text-balance lg:text-3xl">
      Faça parte do nosso ecossistema
    </p>
  </GroupCard>,
  <GroupCard key="7" withImages>
    <GroupCardWithImg img={rodrigo} description="Rodrigo Rodrigueiro, fundador" />
  </GroupCard>,
  <GroupCard key="8" className="flex place-items-center bg-gank-800">
    <Image src={gankLogo2} alt="Gank Logo 3D" loading="lazy" />
  </GroupCard>,
  <GroupCard key="9" className="relative flex justify-center bg-gank-800 overflow-hidden">
    <p className="absolute left-1/2 top-1/3 -translate-x-1/2 font-baskerville text-xl text-gank-050 opacity-50 lg:text-3xl">
      Resultados reais
    </p>
    <div className="mt-auto">
      <svg
        aria-hidden="true"
        width="290"
        height="217"
        viewBox="0 0 290 217"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.5 165.743C44 159.909 -2.5 212.743 -2.5 212.743V222.743H293V0.242676C292 4.24268 274 37.2427 262 38.2427C250 39.2427 202 104.743 185.5 97.2426C169 89.7426 146 125.243 126 111.243C106 97.2427 99 160.243 84.5 171.743C72.9 180.943 57 171.576 50.5 165.743Z"
          fill="url(#paint0_linear)"
          stroke="#6C0088"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="145.5"
            y1="-76.7573"
            x2="145.5"
            y2="218.743"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C0088" />
            <stop offset="1" stopColor="#6C0088" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </GroupCard>,
];

// --- Componente Principal ---

export default function Group() {
  return (
    <section id="s-group" className="lg:max-w-7xl mx-auto py-20 overflow-hidden">
      {/* 
        O mask-image aplica o efeito de "fade/blur" nas bordas direita e esquerda. 
        As animações são geradas nativamente injetando um bloco de estilo.
      */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-l {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-r {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>

      <div 
        className="flex flex-col gap-10 [mask-image:linear-gradient(to_right,transparent,#130117_25%,#130117_25%,transparent)]"
      >
        {/* Linha 1: Movimento para a Esquerda */}
        <div className="flex w-max motion-reduce:overflow-x-auto motion-reduce:animate-none animate-marquee-l hover:[animation-play-state:paused]">
          <div className="flex gap-10 pr-10">
            {ROW_1_CARDS}
          </div>
          <div className="flex gap-10 pr-10" aria-hidden="true">
            {ROW_1_CARDS}
          </div>
        </div>

        {/* Linha 2: Movimento para a Direita (Começa com um offset natural pela lógica da animação e um margin left extra) */}
        <div className="flex w-max ml-10 motion-reduce:overflow-x-auto motion-reduce:animate-none animate-marquee-r hover:[animation-play-state:paused]">
          <div className="flex gap-10 pr-10">
            {ROW_2_CARDS}
          </div>
          <div className="flex gap-10 pr-10" aria-hidden="true">
            {ROW_2_CARDS}
          </div>
        </div>
      </div>
    </section>
  );
}