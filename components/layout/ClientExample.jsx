'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import clientImage from '../../assets/08-clientExample/ClientExampleImg.avif';
import ProducCard from '../../assets/08-clientExample/1-ProductCard.avif';
import CampaignCard from '../../assets/08-clientExample/2-CampaignCard.avif';
import AdmCard from '../../assets/08-clientExample/3-AdmCard.avif';

gsap.registerPlugin(ScrollTrigger);

const cardContent = [
  {
    img: ProducCard,
    title: 'Produtos',
    text: 'Organização visando qualidade e entrega',
    x: 'lg:left-4',
    y: 'lg:top-[200px]',
  },
  {
    img: CampaignCard,
    title: 'Campanhas',
    text: 'Otimização de campanhas com foco em resultados',
    x: 'lg:right-4',
    y: 'lg:bottom-20',
  },
  {
    img: AdmCard,
    title: 'Gestão',
    text: 'Apoio na gestão com ajuste de precificação',
    x: 'lg:left-20',
    y: 'lg:-bottom-10',
  },
];

function ClientExampleCard({ className, x, y, title, text, img, style }) {
  return (
    <div
      style={style}
      className={cn(
        `w-[280px] shrink-0 snap-center p-2 rounded-xl bg-gank-050/10 backdrop-blur-md border border-gank-p/25 shadow-2xl shadow-gank-950 text-gank-050 lg:absolute lg:w-auto lg:max-w-3/12 ${x} ${y}`,
        className
      )}
    >
      <Image
        src={img}
        width={290}
        height={145}
        alt=""
        aria-hidden="true"
        className="shadow-xl ring-1 ring-white/25 rounded-xl object-cover mx-auto mb-4 w-full lg:aspect-video"
      />
      <p className="text-2xl mb-1">{title}</p>
      <p>{text}</p>
    </div>
  );
}

export default function ClientExample() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        gsap.fromTo(
          imageWrapRef.current,
          { scale: 0.50 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
              end: 'center center',
              scrub: true, // Amarrado perfeitamente ao scroll
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <article id="s-client" ref={sectionRef} className="bg-gank-950 overflow-hidden">
     
      <style>{`
        @keyframes pureCssEntry {
          0% { transform: translateY(-100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-pure-css {
          animation: pureCssEntry 650ms ease-out forwards;
        }
      `}</style>

      <div className="lg:max-w-7xl mx-auto px-4 pb-20 pt-44">
        <div className="relative">
          
          <div className="mb-10 text-center pb-10 border-b border-gank-p/25">
            <p className="text-2xl lg:text-4xl mb-1 text-gank-050 font-baskerville">duck&co</p>
            <p className="text-gray-300">Um e-commerce de sucesso com a Gank</p>
          </div>
          
          <div ref={imageWrapRef} className="mb-10 lg:mb-0 lg:scale-75">
            <Image
              src={clientImage}
              width={1280}
              height={720}
              alt="duck&co, um negócio reestruturado pela GANK"
              className="rounded-2xl object-cover aspect-video"
            />
          </div>

          
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-10 lg:block lg:overflow-visible lg:pb-0">
            {cardContent.map((item, i) => (
              <ClientExampleCard
                key={i}
                img={item.img}
                x={item.x}
                y={item.y}
                text={item.text}
                title={item.title}
                // Aplicação da classe animada nativa e um atraso em cascata
                className="animate-pure-css"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}