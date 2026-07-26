import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import clientImage from '../../assets/08-clientExample/ClientExampleImg.avif';
import ProducCard from '../../assets/08-clientExample/1-ProductCard.avif';
import CampaignCard from '../../assets/08-clientExample/2-CampaignCard.avif';
import AdmCard from '../../assets/08-clientExample/3-AdmCard.avif';

const cardContent = [
  {
    img: ProducCard,
    title: 'Produtos',
    text: 'Organização visando qualidade e entrega',
    x: 'lg:left-4',
    y: 'lg:top-50',
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

function ClientExampleCard({ className, x, y, title, text, img }) {
  return (
    <div
      className={cn(
        `lg:max-w-3/12 p-2 rounded-xl bg-gank-050/10 backdrop-blur-md border border-gank-p/25 shadow-2xl shadow-gank-950 text-gank-050 mb-5 lg:absolute ${x} ${y}`,
        className,
      )}
    >
      <Image
        src={img}
        width={290}
        height={145}
        alt="duck&co, um negócio reestruturado pela GANK"
        className="shadow-xl ring-1 ring-white/25 rounded-xl object-cover mx-auto mb-4 w-full lg:aspect-video"
      />
      <p className="text-2xl mb-1">{title}</p>
      <p>{text}</p>
    </div>
  );
}

const ClientExample = () => {
  return (
    <article id="s-client" className="bg-gank-950">
      <div className="lg:max-w-7xl mx-auto px-4 pb-20 pt-44">
        <div className="relative">
          <div className="lg:none mb-10 text-center pb-10 border-b border-gank-p/25">
            <p className="text-2xl lg:text-4xl mb-1 text-gank-050 font-baskerville">duck&co</p>
            <p>Um e-commerce de sucesso com a Gank</p>
          </div>
          <Image
            src={clientImage}
            width={1280}
            height={720}
            alt="duck&co, um negócio reestruturado pela GANK"
            className="rounded-2xl object-cover aspect-video mb-10 lg:mb-0"
          />
          {cardContent.map((item, i) => (
            <ClientExampleCard
              key={i}
              img={item.img}
              x={item.x}
              y={item.y}
              text={item.text}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ClientExample;
