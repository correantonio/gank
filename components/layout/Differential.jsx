'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Divider from '../ui/Divider';
import SectionHeader from '../ui/SectionHeader';
import MagicCard from '../ui/MagicCard';
import AnimatedNotificationList from '../ui/Animated/AnimatedNotificationList';
import AnimatedBase from '../ui/Animated/AnimatedBase';
import AnimatedPaper from '../ui/Animated/AnimatedPaper';
import AnimatedOrbit from '../ui/Animated/AnimatedOrbit';

gsap.registerPlugin(ScrollTrigger);

export default function Differential() {
  const pinWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Estado inicial rigoroso
      gsap.set(containerRef.current, { clipPath: 'circle(0% at 50% 50%)' });
      gsap.set(overlayRef.current, { opacity: 1 }); // Overlay da cor destaque totalmente visível
      gsap.set(headerRef.current, { opacity: 0, y: 30 });
      gsap.set(cardsRef.current, { opacity: 0, y: 60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: 'top top', // Trava exatamente quando a seção bate no topo da tela
          end: '+=1000',    // Define 3000px de scroll virtual para a animação ocorrer
          scrub: 1,         // Atrela a execução da timeline ao scroll
          pin: true,        // Trava a tela
          anticipatePin: 1,
        }
      });

      // Passo 1: O círculo cresce preenchendo a tela (mostrando a cor do overlay)
      tl.to(containerRef.current, { 
        clipPath: 'circle(150% at 50% 50%)', 
        duration: 1.5, 
        ease: 'none' // Linear para parear perfeitamente com o scroll
      })
      
      // Passo 2: O círculo já cobriu a tela, agora a cor principal some lentamente revelando o fundo 950
      .to(overlayRef.current, {
        opacity: 0,
        duration: .5,
        ease: 'power2.inOut'
      })
      
      // Passo 3: O Header aparece após a cor já ter mudado
      .to(headerRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: 'power2.out'
      }) 
      
      // Passo 4: Os cards surgem com o salto, em sequência
      .to(cardsRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        stagger: 0.3,
        ease: 'back.out(1.2)' // Salto mantido, mas levemente suavizado para não parecer travado no scrub
      }, "-=0.5");

    }, pinWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    // Wrapper externo isolado apenas para o GSAP fazer o pin sem quebrar o CSS interno
    <div ref={pinWrapperRef} className="w-full" style={{boxShadow:'inset 0 80px 0 #0c000f'}}>
      <div ref={containerRef} className="relative w-full bg-gank-950">
        
        {/* OVERLAY: Inicia cobrindo o fundo com a cor de destaque */}
        <div 
          ref={overlayRef} 
          className="pointer-events-none absolute inset-0 z-0 bg-gank-600__main" 
        />

        {/* CONTEÚDO */}
        <div className="relative z-10">
          <Divider />
          <article className="container mx-auto max-w-7xl px-4 py-20 lg:py-40">
            
            <div ref={headerRef} className="mx-auto mb-10 text-center lg:max-w-6/12">
              <SectionHeader icon="stars">
                Por que a Gank é <span className="text-emphasys">diferente</span>
              </SectionHeader>
            </div>

            <section className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-12 lg:grid-rows-2 lg:gap-10">
              
              <div className="lg:col-span-4 lg:row-span-2" ref={(el) => (cardsRef.current[0] = el)}>
                <MagicCard className="h-full">
                  <div className="p-2">
                    <AnimatedNotificationList />
                  </div>
                  <div className="p-5 lg:p-10">
                    <h3 className="text-3xl leading-relaxed text-gank-100">
                      Não focamos em clique, focamos em lucro
                    </h3>
                  </div>
                </MagicCard>
              </div>

              <div className="overflow-hidden lg:col-span-8" ref={(el) => (cardsRef.current[1] = el)}>
                <MagicCard className="h-full">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <AnimatedBase className="lg:order-2" />
                    <div className="p-5 lg:p-10">
                      <h3 className="text-3xl leading-relaxed text-gank-100">
                        Estratégia baseada em resultados
                      </h3>
                    </div>
                  </div>
                </MagicCard>
              </div>

              <div className="group min-h-50 overflow-hidden lg:col-span-4" ref={(el) => (cardsRef.current[2] = el)}>
                <MagicCard className="flex h-full items-center">
                  <div className="relative flex items-center p-5 lg:p-10">
                    <h3 className="w-8/12 text-3xl leading-relaxed text-gank-100">
                      Você fala com quem executa
                    </h3>
                    <AnimatedPaper className="absolute right-0 -z-10 w-4/12 opacity-50 transition-opacity group-hover:opacity-100" />
                  </div>
                </MagicCard>
              </div>

              <div className="group min-h-50 overflow-hidden lg:col-span-4" ref={(el) => (cardsRef.current[3] = el)}>
                <MagicCard className="flex h-full items-center">
                  <div className="relative flex items-center p-5 lg:p-10">
                    <h3 className="w-8/12 text-3xl leading-relaxed text-gank-100">
                      Estratégias únicas
                    </h3>
                    <AnimatedOrbit className="absolute right-0 -z-10 w-4/12 opacity-50 transition-opacity group-hover:opacity-100" />
                  </div>
                </MagicCard>
              </div>

            </section>
          </article>
          <Divider />
        </div>

      </div>
    </div>
  );
}