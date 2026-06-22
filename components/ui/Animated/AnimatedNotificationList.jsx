"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Os dados originais extraídos do seu código HTML
const notifications = [
  { name: "Novo Contrato", time: "2m atrás", color: "var(--color-gank-600__main)", icon: "📄" },
  { name: "Novo Lead", time: "5m atrás", color: "var(--color-gank-600__main)", icon: "🙋‍♂️" },
  { name: "Orçamento", time: "10m atrás", color: "var(--color-gank-600__main)", icon: "🚀" },
  { name: "Pagamento recebido", time: "15m atrás", color: "var(--color-gank-600__main)", icon: "💸" },
];

// Sub-componente responsável por renderizar cada card individual com precisão
const NotificationCard = ({ name, time, color, icon }) => {
  return (
    <figure className="opacity-50 hover:opacity-100 relative cursor-pointer rounded-2xl p-4 transition-transform duration-200 ease-in-out scale-[90%] hover:scale-[100%] grayscale-75 hover:grayscale-0 bg-gank-100/10 shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col ">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg text-gank-100">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gank-p/75">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gank-p/50">Sistema Gank</p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedNotificationList() {
  return (
    // Container principal: Oculta o vazamento e aplica a máscara de gradiente (fade no topo e na base)
    <div className={`relative flex flex-col h-50 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]`}>
      
      <style>{`
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-50% - 0.5rem)); } 
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 40s linear infinite;
          will-change: transform;
        }
        .animate-marquee-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* A Trilha de Animação */}
      <div className="flex flex-col gap-2 animate-marquee-vertical py-2">
        {/* O TRUQUE DO LOOP INFINITO: 
          Duplicamos a array de notificações. Quando a primeira metade terminar de subir,
          a segunda metade estará exatamente no mesmo lugar geométrico, o CSS reseta para 0ms,
          e o cérebro humano não percebe o corte.
        */}
        {[...notifications, ...notifications].map((item, idx) => (
          <NotificationCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}