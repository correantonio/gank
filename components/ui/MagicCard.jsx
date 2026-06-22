"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils.js";

export default function MagicCard({
  children,
  className,
  gradientSize = 250, 
  glowColor = "rgba(255, 255, 255, 0.03)",
  borderColor = "var(--color-gank-500)", 
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    // Obtém as dimensões exatas do card em relação à tela
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calcula a posição do mouse relativa ao canto superior esquerdo do card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Mutação direta na raiz do DOM (Alta performance)
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-xl bg-transparent border border-gank-p/15",
        className
      )}
    >
      {/* CAMADA 1: A Borda Dinâmica
        Esticada 1px para fora (-inset-px). 
        Começa invisível (opacity-0) e só revela a cor onde o mouse está durante o hover (group-hover:opacity-100).
      */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at var(--mouse-x) var(--mouse-y), ${borderColor}, transparent 100%)`,
        }}
      />

      {/* CAMADA 2: A Máscara de Conteúdo
        Recua 1px para revelar a Camada 1 apenas nas extremidades.
      */}
      <div className="absolute inset-px rounded-[inherit] bg-radial-[at_50%_10%] from-gank-700 to-gank-900 z-0" />

      {/* CAMADA 3: O Brilho Interno */}
      <div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 z-10 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 100%)`,
        }}
      />

      {/* CAMADA 4: O Conteúdo (Textos, botões, inputs) */}
      <div className="relative z-20 flex flex-col flex-1 gap-5">
        {children}
      </div>
    </div>
  );
}