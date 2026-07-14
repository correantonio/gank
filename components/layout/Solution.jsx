'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../ui/SectionHeader';
import gankLetter from '@/public/Gank.svg';
import Circles from '../ui/Circles';

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
  const quoteWrapRef = useRef(null);
  const listItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Estado inicial crítico
      gsap.set(headerRef.current, { opacity: 0, x: -30 });
      gsap.set(quoteWrapRef.current, { height: 0, opacity: 0 });

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: '(min-width: 1024px)',
          mobile: '(max-width: 1023px)',
        },
        (context) => {
          const { mobile } = context.conditions;

          // Preparação individual dos itens baseada na viewport
          listItemsRef.current.forEach((item, i) => {
            if (!item) return;
            const num = item.querySelector('.item-num');
            const title = item.querySelector('.item-title');
            const border = item.querySelector('.item-border');
            const pWrap = item.querySelector('.item-p-wrap');

            if (i === 0) {
              gsap.set([num, title, border], { opacity: 1 });
              gsap.set(pWrap, { height: 'auto', opacity: 1 });
            } else {
              gsap.set([num, title, border], { opacity: 0.5 });
              gsap.set(pWrap, { height: 0, opacity: 0 });
            }
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '+=4000',
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          // 1. Header
          tl.to(headerRef.current, { opacity: 1, x: 0, duration: 1 });

          // 2. Iteração de lista 
          listItemsRef.current.forEach((item, i) => {
            if (i === 0) return;

            const num = item.querySelector('.item-num');
            const title = item.querySelector('.item-title');
            const border = item.querySelector('.item-border');
            const pWrap = item.querySelector('.item-p-wrap');
            const prevItem = listItemsRef.current[i - 1];
            const prevPWrap = prevItem?.querySelector('.item-p-wrap');

            const itemTl = gsap.timeline();

            // Mobile: esconde o parágrafo anterior (Efeito Escada Rolante)
            if (mobile && prevPWrap) {
              itemTl.to(prevPWrap, { height: 0, opacity: 0, duration: 1 }, 0);
            }

            // Iluminação e abertura sequencial
            itemTl.to([num, border], { opacity: 1, duration: 0.4 }, mobile ? 0 : '+=0');
            itemTl.to(title, { opacity: 1, duration: 0.4 }, '<0.2');
            itemTl.to(pWrap, { height: 'auto', opacity: 1, duration: 1 }, '<');

            tl.add(itemTl);
          });

          // 3. A citação aparece por último, abrindo o espaço e a margem originais
          tl.to(
            quoteWrapRef.current,
            {
              height: 'auto',
              opacity: 1,
              duration: 1.5,
              ease: 'power2.out',
            },
            '+=0.5'
          );
        }
      );

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Adicionado `min-h-screen items-center` para garantir que o pin englobe todo o viewport
    // permitindo o crescimento centralizado sem cortar o conteúdo inferior
    <article ref={containerRef} className="flex min-h-screen items-center bg-gank-950 px-4 py-20" id="s-solution">
      <div className="mx-auto w-full flex flex-col justify-center lg:max-w-7xl">
        
        <div ref={headerRef}>
          <SectionHeader icon="hammer" className="mb-10 lg:max-w-6/12">
            Como a Gank estrutura
            <span className="text-emphasys"> sua operação</span>
          </SectionHeader>
        </div>

        {/* Wrapper isolado. Mantém as classes originais da citação completamente intocadas internamente. */}
        <div ref={quoteWrapRef} className="overflow-hidden">
          <div className="quote flex gap-4 items-center justify-between p-1 lg:pr-4 bg-gank-700 rounded-lg lg:mb-20 mb-10">
            <p className="lg:text-2xl flex-1 p-4 bg-gank-900 rounded-lg">
              Acreditamos que nossas ações, geram Resultado e Performance, para
              nós, e nossos clientes.
            </p>
            <Image
              src={gankLetter}
              alt="Logo Gank"
              className="lg:max-w-2/12 hidden lg:block mt-2"
            />
          </div>
        </div>

        <section>
          <ol className="lg:flex gap-8">
            {solutionList.map((item, i) => (
              <li
                key={i}
                ref={(el) => { listItemsRef.current[i] = el; }}
                className="flex flex-col gap-4 pb-5"
              >
                <small className="item-num text-gank-p text-base">0{i + 1}</small>
                <div className="item-border border-l pl-4 ml-2">
                  <h3 className="item-title mb-1 text-2xl text-gank-050">{item.title}</h3>
                  <div className="item-p-wrap overflow-hidden">
                    <p className="text-lg text-zinc-400">{item.p}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
        
      </div>
    </article>
  );
}