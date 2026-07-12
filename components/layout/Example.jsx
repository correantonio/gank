'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../ui/SectionHeader';
import ListItem from '../ui/ListItem';
import Image from 'next/image';

import FirstImage from '../../assets/04-example/example-image-one.png';
import SecondImage from '../../assets/04-example/example-image-two.png';

gsap.registerPlugin(ScrollTrigger);

const list = {
  error: [
    'Sem clareza de margem',
    'Produtos desorganizados',
    'Tráfego sem direção',
  ],
  success: [
    'Ajuste de produtos e precificação',
    'Organização da operação',
    'Otimização das campanhas',
  ],
};

export default function Example() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  
  // Refs Colunas
  const col1Ref = useRef(null);
  const img1Ref = useRef(null);
  const list1ItemsRef = useRef([]);

  const col2Ref = useRef(null);
  const img2Ref = useRef(null);
  const list2ItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // gsao.matchMedia permite criar lógicas de timeline específicas por breakpoint
      const mm = gsap.matchMedia();

      // ==========================================
      // ANIMAÇÃO DESKTOP (>= 1024px)
      // ==========================================
      mm.add("(min-width: 1024px)", () => {
        gsap.set(headerRef.current, { opacity: 0, y: 30 });
        gsap.set([col1Ref.current, col2Ref.current], { opacity: 0 });
        gsap.set(img1Ref.current, { scale: 0.95, filter: 'grayscale(0%)' });
        gsap.set(img2Ref.current, { scale: 0.95 });
        gsap.set(list1ItemsRef.current, { opacity: 0, y: 20 });
        gsap.set(list2ItemsRef.current, { opacity: 0, y: 20 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top -5%',
            end: '+=3000',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(headerRef.current, { opacity: 1, y: 0, duration: 1 })
          .to(col1Ref.current, { opacity: 1, duration: 1 })
          .to(img1Ref.current, { scale: 1, duration: 1.5, ease: 'power2.out' }, '<')
          .to(list1ItemsRef.current, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, '-=0.5')
          
          .to({}, { duration: 1.5 }) // Pausa de leitura para desktop
          
          .to(img1Ref.current, { opacity: 0.4, filter: 'grayscale(100%)', scale: 0.98, duration: 1.5 }, 'transition')
          .to(col2Ref.current, { opacity: 1, duration: 1.5 }, 'transition+=0.2')
          .to(img2Ref.current, { scale: 1, duration: 1.5, ease: 'power2.out' }, 'transition+=0.2')
          .to(list2ItemsRef.current, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, '-=0.5');
      });

      // ==========================================
      // ANIMAÇÃO MOBILE (< 1024px)
      // ==========================================
      mm.add("(max-width: 1023px)", () => {
        gsap.set(headerRef.current, { opacity: 0, y: 20 });
        gsap.set(col1Ref.current, { opacity: 0 });
        gsap.set(img1Ref.current, { scale: 0.95, filter: 'grayscale(0%)' });
        
        // Preparando a segunda coluna para iniciar abaixo e invisível, com Z-index superior
        gsap.set(col2Ref.current, { opacity: 0, y: 150, zIndex: 20 });
        gsap.set(img2Ref.current, { scale: 0.95 });
        gsap.set(list1ItemsRef.current, { opacity: 0, y: 15 });
        gsap.set(list2ItemsRef.current, { opacity: 0, y: 15 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 2%',
            end: '+=1500', // Distância menor no mobile para a animação ser mais responsiva ao toque
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.5 })
          .to(col1Ref.current, { opacity: 1, duration: 0.5 })
          .to(img1Ref.current, { scale: 1, duration: 0.8, ease: 'power2.out' }, '<')
          .to(list1ItemsRef.current, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '<0.2')
          
          // SEM PAUSA LONGAS: A coluna 2 já começa a subir imediatamente sobrepondo a 1
          .to(col1Ref.current, { opacity: 0.3, filter: 'grayscale(100%)', scale: 0.95, duration: 1.5 }, 'overlap')
          .to(col2Ref.current, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }, 'overlap')
          .to(img2Ref.current, { scale: 1, duration: 1.5, ease: 'power2.out' }, 'overlap')
          .to(list2ItemsRef.current, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 'overlap+=0.5');
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <article ref={containerRef} className="w-full bg-gank-950">
      <div className="s-example container mx-auto max-w-7xl px-4 py-10 lg:py-20">
        
        <div ref={headerRef} className="mx-auto mb-16 text-center lg:max-w-6/12">
          <SectionHeader icon="bowarrow">
            Veja um <span className="text-emphasys">exemplo real</span> do nosso
            trabalho
          </SectionHeader>
        </div>

        {/* Container relativo com altura mínima no mobile para garantir o espaço do absolute */}
        <section className="relative flex min-h-[580px] w-full flex-col items-center justify-start lg:min-h-0 lg:flex-row lg:justify-around lg:gap-0">
          
          {/* COLUNA 1: ERRO */}
          <div 
            ref={col1Ref} 
            className="relative flex w-full justify-center lg:max-w-6/12"
          >
            <div ref={img1Ref}>
              <Image
                src={FirstImage}
                alt="Exemplo Erro"
                width={400}
                height={510}
                loading="eager"
                className="object-cover shadow-lg"
              />
            </div>
            
            {/* Lista ajustada com posição mais alta no mobile para não cortar fora da tela */}
            <ul className="absolute left-10 top-0 h-fit z-10 flex max-w-[240px] flex-col gap-3 rounded-lg bg-gank-800 p-3 sm:right-10 lg:bottom-0 lg:right-0 lg:max-w-[290px] lg:translate-y-1/2 lg:gap-4 lg:p-4">
              {list.error.map((item, i) => (
                <div key={i} ref={(el) => (list1ItemsRef.current[i] = el)}>
                  <ListItem text={item} status="error" border="minBorderB" />
                </div>
              ))}
            </ul>
          </div>

          {/* COLUNA 2: SUCESSO (Posicionada com absolute diretamente em cima da Col 1 no mobile) */}
          <div 
            ref={col2Ref} 
            className="absolute top-0 flex w-full justify-center opacity-0 lg:static lg:top-auto lg:max-w-6/12"
          >
            <div ref={img2Ref}>
              <Image
                src={SecondImage}
                alt="Exemplo Sucesso"
                width={400}
                height={510}
                loading="eager"
                className="object-cover"
              />
            </div>
            
            <ul className="absolute -bottom-8 right-2 z-20 flex max-w-[240px] flex-col gap-3 rounded-lg bg-gank-800 p-3 sm:right-10 lg:-bottom-15 lg:-right-20 lg:max-w-[290px] lg:-translate-x-1/2 lg:gap-4 lg:p-4">
              {list.success.map((item, i) => (
                <div key={i} ref={(el) => (list2ItemsRef.current[i] = el)}>
                  <ListItem text={item} status="success" border="minBorderB" />
                </div>
              ))}
            </ul>
          </div>

        </section>
      </div>
    </article>
  );
}