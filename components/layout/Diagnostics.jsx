// Diagnostics.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ListItem from '../ui/ListItem';
import SectionHeader from '../ui/SectionHeader';
import MagicCard from '../ui/MagicCard';
import Divider from '../ui/Divider';

gsap.registerPlugin(ScrollTrigger);

export default function Diagnostics() {
  const containerRef = useRef(null);
  
  // Refs Seção 1
  const section1Ref = useRef(null);
  const header1Ref = useRef(null);
  const cardContainer1Ref = useRef(null);
  const items1Ref = useRef([]);
  const text1Ref = useRef(null);

  // Refs Seção 2
  const section2Ref = useRef(null);
  const header2Ref = useRef(null);
  const cardContainer2Ref = useRef(null);
  const items2Ref = useRef([]);
  const text2Ref = useRef(null);
  const text2BottomRef = useRef(null);

  const list = {
    error: [
      'Investe mais e o lucro não acompanha',
      'ROAS instável (um dia bom, outro ruim)',
      'Não sabe se pode investir com segurança',
      'Crescimento sem previsibilidade',
      'Sensação de que está “no escuro”',
    ],
    success: [
      'controle de margem',
      'clareza de produto lucrativo',
      'estrutura de funil',
      'dados organizados',
    ],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configuração responsiva para aplicar o efeito do centro para a direita apenas no desktop
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

      // Estado inicial rigoroso antes do acionamento do ScrollTrigger
      gsap.set([header1Ref.current, header2Ref.current, text1Ref.current, text2Ref.current, text2BottomRef.current, section2Ref.current], { opacity: 0, y: 20 });
      gsap.set(items1Ref.current, { opacity: 0, x: -30 });
      gsap.set(items2Ref.current, { opacity: 0, x: -30 });

      // O MagicCard agora inicia totalmente invisível (opacidade 0)
      // No desktop, ele inicia centralizado negativamente (deslocado para a esquerda em direção ao centro do container)
      gsap.set(cardContainer1Ref.current, { 
        opacity: 0, 
        x: isDesktop ? '-40%' : 0,
        y: isDesktop ? 0 : 30 
      });
      gsap.set(cardContainer2Ref.current, { 
        opacity: 0, 
        x: isDesktop ? '40%' : 0, 
        y: isDesktop ? 0 : 30 
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 2%',
          end: '+=2800', // Aumentado ligeiramente para acomodar o novo movimento fluido
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Passo 1: Cabeçalho 1 surge primeiro
      tl.to(header1Ref.current, { opacity: 1, y: 0, duration: 1 })
        
        // Passo 1.1: MagicCard revela sua opacidade e se desloca do centro para sua vaga correta à direita
        .to(cardContainer1Ref.current, { opacity: 1, x: 0, y: 0, duration: 1.2, ease: 'power2.out' }, '-=0.4')
        
        // Passo 1.2: Itens internos surgem sequencialmente da esquerda para a direita
        .to(items1Ref.current, { opacity: 1, x: 0, duration: 0.8, stagger: 0.15 })
        .to(text1Ref.current, { opacity: 1, y: 0, duration: 0.5 })
        
        // Intervalo de leitura fixado no scroll
        .to({}, { duration: 1.5 })

        // Passo 2: Cross-fade - Seção 1 desaparece enquanto a Seção 2 se estabelece
        .to(section1Ref.current, { opacity: 0, y: -30, duration: 1 }, 'transition')
        .to(section2Ref.current, { opacity: 1, y: 0, duration: 1 }, 'transition')
        
        // Cabeçalho 2 surge
        .to(header2Ref.current, { opacity: 1, y: 0, duration: 1 }, 'transition+=0.3')
        .to(text2Ref.current, { opacity: 1, y: 0, duration: 0.5 })
        
        // MagicCard 2 faz o movimento inverso do centro para a sua vaga correta à esquerda (ou ordem visual configurada)
        .to(cardContainer2Ref.current, { opacity: 1, x: 0, y: 0, duration: 1.2, ease: 'power2.out' }, '-=0.2')
        .to(items2Ref.current, { opacity: 1, x: 0, duration: 0.8, stagger: 0.15 })
        .to(text2BottomRef.current, { opacity: 1, y: 0, duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <article className="w-full" id='s-diagnostics'>
      <div 
        ref={containerRef} 
        className="container mx-auto max-w-7xl px-4 pb-20 "
      >
        <div className="grid w-full items-start">
          
          {/* SEÇÃO 1: ERROS */}
          <section ref={section1Ref} className="col-start-1 row-start-1 flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
            <div ref={header1Ref} data-layer="Cabeçalho de seção" className="lg:max-w-7/12">
              <SectionHeader icon="cart">
                Seu <span className="text-emphasys">e-commerce</span> está assim?
              </SectionHeader>
            </div>

            <div ref={cardContainer1Ref} className="w-full lg:max-w-5/12">
              <MagicCard className="p-4 lg:p-10">
                {list.error.map((item, i) => (
                  <div key={i} ref={(el) => (items1Ref.current[i] = el)}>
                    <ListItem text={item} status="error" border="fullBorder" />
                  </div>
                ))}
              </MagicCard>
              <p ref={text1Ref} className="mx-auto mt-5 block w-fit bg-linear-to-r from-gank-900/25 via-gank-600__main to-gank-600__main/0 px-4 py-2 text-center">
                Isso não é problema de tráfego. É problema de estrutura.
              </p>
            </div>
          </section>

          {/* SEÇÃO 2: SUCESSO */}
          <section ref={section2Ref} className="col-start-1 row-start-1 flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
            <div ref={header2Ref} data-layer="Cabeçalho de seção" className="lg:order-2 lg:max-w-7/12">
              <SectionHeader icon="globe">
                Mais trafego <span className="text-emphasys">não resolve</span> isso
              </SectionHeader>
            </div>

            <div ref={cardContainer2Ref} className="grid w-full gap-5 lg:order-1 lg:max-w-5/12">
              <p ref={text2Ref} className="text-lg">Se você não tem:</p>
              <MagicCard className="p-4 lg:p-10">
                {list.success.map((item, i) => (
                  <div key={i} ref={(el) => (items2Ref.current[i] = el)}>
                    <ListItem text={item} status="success" border="fullBorder" />
                  </div>
                ))}       
              </MagicCard>
              <span ref={text2BottomRef} className="mx-auto inline-block w-fit bg-linear-to-r from-gank-900/25 via-gank-600__main to-gank-600__main/0 px-4 py-2 text-center">
                Escalar só aumenta o risco.
              </span>
            </div>
          </section>
          
        </div>
      </div>
      <Divider />
    </article>
  );
}