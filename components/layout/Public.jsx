import React from 'react';
import Divider from '../ui/Divider';
import ListItem from '../ui/ListItem';
import rocketImage from '@/assets/06-public/rocketlaunch.jpg';
import Image from 'next/image';

const Public = () => {
  const list = {
    error: [
      'Busca soluções milagrosas',
      'Não investe em mídia',
      'Não tem operação validada',
    ],
    success: [
      'Já vende online',
      'Já investe em tráfego',
      'Quer escalar com controle',
    ],
  };

  const animatedBadges = [
    'foco',
    'colaboração',
    'conquistar objetivos',
    'determinação',
    'trabalho em equipe',
    'performance',
  ];

  return (
    <div className="w-full py-40">
      <article className="container max-w-7xl flex flex-col lg:flex-row gap-10 bg-gank-800 rounded-2xl border border-gank-p/25 mx-auto p-4">
        <div className="lg:max-w-4/12 bg-gank-900 rounded-[inherit] border border-[inherit] px-4 p-10">
          <p className="title-h2 mb-5">
            Esse projeto é <span className="text-emphasys">para você</span> que
          </p>
          <ul className="flex flex-col gap-5">
            {list.success.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  text={item}
                  status="succsess"
                  border="minBorderB"
                />
              );
            })}
          </ul>
        </div>
        <div className="lg:max-w-4/12  rounded-[inherit] px-4 p-10">
          <p className="title-h2 mb-5">Não é para você que</p>
          <ul className="flex flex-col gap-5">
            {list.error.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  text={item}
                  status="error"
                  border="minBorderB"
                />
              );
            })}
          </ul>
        </div>
        <div className="lg:max-w-4/12 w-full rounded-[inherit]  overflow-hidden relative">
          <Image
            src={rocketImage}
            alt="Gank, o foguete que leva sua empresa até o céu"
            className="size-full"
          />
          <style>
            {`
        @keyframes marquee-ping-pong {
          0% { 
            transform: translateX(20%); 
          }
          50% { 
            transform: translateX(80%); 
          }
          100% { 
            transform: translateX(-20%); 
          }
        }

        @keyframes marquee-ping-pong--reverse {
          0% { 
            transform: translateX(-10%); 
          }
          50% { 
            transform: translateX(20%); 
          }
          100% { 
            transform: translateX(-20%); 
          }
        }
        
        .animate-marquee-ping-pong {
          animation: marquee-ping-pong 40s linear infinite;
        }

         .animate-marquee-ping-pong--reverse {
          animation: marquee-ping-pong--reverse 40s ease-in-out infinite alternate;
        }
      `}
          </style>
          <div className="flex flex-col gap-2 -rotate-5 absolute bottom-0 -translate-x-1/2 ">
            <div className="gap-2 flex items-center flex-nowrap animate-marquee-ping-pong">
              {animatedBadges.map((item, i) => {
                return (
                  <span
                    key={i}
                    className="inline-block shrink-0 text-gank-200 bg-gank-600__main rounded-full border border-gank-500 px-4 py-1"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="gap-2 flex items-center justify-center flex-nowrap animate-marquee-ping-pong--reverse ">
              {animatedBadges.map((item, i) => {
                return (
                  <span
                    key={i}
                    className="inline-block shrink-0 text-gank-200 bg-gank-600__main rounded-full border border-gank-500 px-4 py-1"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Public;
