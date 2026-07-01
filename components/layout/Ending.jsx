'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import MagicCard from '../ui/MagicCard';
import ListItem from '../ui/ListItem';

gsap.registerPlugin(ScrollTrigger);

const list = {
  success: [
    'onde você está perdendo dinheiro',
    'o que está travando seu crescimento',
    'como escalar com previsibilidade',
  ],
};

export default function Ending() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: '-80%' },
        {
          y: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom', 
            end: 'bottom bottom', 
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gank-950 pb-20"
    >
      {/* LUZ DE FUNDO INFERIOR (Fixo no rodapé) */}
      <div
        className="absolute -bottom-20 left-1/2 size-4/12 -translate-x-1/2 rounded-full bg-gank-300 opacity-50 blur-[120px]"
        aria-hidden="true"
      />

      {/* DIVISOR SUPERIOR (SVG) - Permanece estático no topo para ancorar o design */}
      <div className="relative bg-gank-950 z-20 mb-10 flex w-full items-start justify-center">
        {/* LUZ DE TOPO (Atrás do SVG) */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[150px] w-[300px] -translate-x-1/2 rounded-full bg-[#9738B0]/40 blur-[80px]"
          aria-hidden="true"
        />

        <div className="mt-12 h-[2px] flex-1 bg-linear-to-r from-transparent via-[#9738B0] to-[#F9E2FF]" />

        <div className="relative flex h-[50px] w-[280px] shrink-0 items-start justify-center">
          <svg
            width="280"
            height="80"
            viewBox="0 0 280 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-0 drop-shadow-[0_8px_12px_rgba(249,226,255,0.4)]"
          >
            <path
              d="M0 50 L50 5 L230 5 L280 50 Z"
              fill="url(#notch_glow_inverted)"
              opacity="0.25"
            />
            <path
              d="M0 49 L50 5 L230 5 L280 49"
              stroke="url(#notch_stroke)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="notch_stroke"
                x1="0"
                y1="0"
                x2="280"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9E2FF" />
                <stop offset="0.5" stopColor="#9738B0" />
                <stop offset="1" stopColor="#F9E2FF" />
              </linearGradient>

              <linearGradient
                id="notch_glow_inverted"
                x1="140"
                y1="5"
                x2="140"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9E2FF" stopOpacity="0.8" />
                <stop offset="0.4" stopColor="#9738B0" stopOpacity="0.5" />
                <stop offset="1" stopColor="#130117" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mt-12 h-[2px] flex-1 bg-linear-to-l from-transparent via-[#9738B0] to-[#F9E2FF]" />
      </div>

      {/* CONTEÚDO COM PARALLAX */}
      <div
        ref={contentRef}
        className="relative z-10 flex w-full flex-col items-center justify-center pt-10"
      >
        <article className="flex flex-col items-center justify-center gap-10 px-4 lg:max-w-4/12">
          <div className="text-center">
            <SectionHeader icon="phone">
              Solicite <span className="text-emphasys">uma análise</span> da sua
              operação
            </SectionHeader>
            <p className="mt-4 text-zinc-300">Descubra exatamente:</p>
          </div>

          <MagicCard className="w-full p-10">
            {list.success.map((item, i) => (
              <ListItem
                key={i}
                text={item}
                status="success"
                border="fullBorder"
              />
            ))}
          </MagicCard>
        </article>
      </div>
    </footer>
  );
}
