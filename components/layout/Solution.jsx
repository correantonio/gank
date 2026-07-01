'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../ui/SectionHeader';
import ganklogo from '../../assets/0-hero/logogank3d.png';


gsap.registerPlugin(ScrollTrigger);

const solutionList = [
  {
    title: 'Diagnóstico completo',
    p: 'Analisamos seus números, produtos, funil e gargalos reais',
  },
  {
    title: 'Organização da base',
    p: 'Margem, precificação, produtos certos para escalar',
  },
  {
    title: 'Estrutura de aquisição',
    p: 'Campanhas e criativos com foco em conversão',
  },
  {
    title: 'Otimização e escala',
    p: 'Ajustes contínuos com base em dados reais',
  },
];

export default function Solution() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const iconRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Estado inicial garantido antes do scroll
      gsap.set(headerRef.current, { opacity: 0, x: -30 });
      gsap.set(iconRef.current, { scale: 0.3, rotation: 0 }); // Inicia pequeno
      gsap.set(listItemsRef.current, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=3000', // Scroll prolongado para dar tempo à leitura da lista
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. O ícone cresce e gira continuamente até o fim da timeline
      tl.to(iconRef.current, { scale: 1, rotate: 0, duration: 4, ease: 'power1.inOut' }, 0)
        
        // 2. O Header surge rapidamente na esquerda
        .to(headerRef.current, { opacity: 1, x: 0, duration: 1 }, 0.5)
        
        // 3. A lista surge na direita, item por item, atrelada ao scroll
        .to(listItemsRef.current, { opacity: 1, y: 0, duration: 1, stagger: 0.6 }, 1);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-gank-950 px-4 py-20"
    >
      {/* Grid de 3 colunas que mantém a imagem no centro naturalmente */}
      <article className="mx-auto w-full max-w-7xl grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
        
        {/* Coluna Esquerda: Header */}
        <div ref={headerRef} className="w-full">
          <SectionHeader icon="hammer">
            Como a Gank estrutura
            <span className="text-emphasys"> sua operação</span>
          </SectionHeader>
        </div>

        {/* Coluna Central: Imagem/Logo */}
        <div ref={iconRef} className="flex w-full items-center justify-center text-gank-p">
          <Image src={ganklogo} alt="Logo Gank" className="size-auto"/>
        </div>

        {/* Coluna Direita: Lista de Soluções */}
        <div className="w-full">
          <ul className="flex flex-col gap-10">
            {solutionList.map((item, i) => (
              <li
                key={i}
                ref={(el) => (listItemsRef.current[i] = el)}
                className="flex flex-col gap-4 border-b border-gank-p/25 pb-5 lg:flex-row lg:items-center"
              >
                <span className="text-3xl font-bold text-gank-p/25 lg:text-5xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="mb-1 text-2xl text-gank-050">
                    {item.title}
                  </h3>
                  <p className="text-lg text-zinc-400">{item.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      </article>
    </div>
  );
}