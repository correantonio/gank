"use client";
import React, { useState, useRef } from 'react';

const ListContainer = ({children}) => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calcula a posição do mouse relativa ao container
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    // Fundo da página escuro para dar contraste
    <div>
      <div
        ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        className="relative p-4 lg:p-10 rounded-2xl bg-[#11051f] border border-gank-p/25 overflow-hidden shadow-2xl">
        
        <div className="absolute top-0 inset-x-0 h-64 bg-linear-to-b from-gank-600__main/50  to-transparent" />

        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-in-out"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-gank-600__main), transparent 50%)`,
          }}
        />

        <ul className="relative z-10 flex flex-col gap-5">{children}</ul>
      </div>
    </div>
  );
};

export default ListContainer;
