'use client';

import React, { useRef } from 'react';

export default function MagneticWrapper({ children, strength = 15, className = '' }) {
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    
    // getBoundingClientRect garante a precisão das coordenadas independente do scroll
    const rect = wrapperRef.current.getBoundingClientRect();
    
    // Normaliza a posição do mouse entre -1 e 1 em relação ao centro do elemento
    const xPos = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const yPos = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    // O eixo Y controla o rotateX (inverso) e o eixo X controla o rotateY
    const rotateX = yPos * -strength;
    const rotateY = xPos * strength;

    wrapperRef.current.style.setProperty('--rx', `${rotateX}deg`);
    wrapperRef.current.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.setProperty('--rx', '0deg');
    wrapperRef.current.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-flex items-center justify-center [perspective:1000px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
  );
}