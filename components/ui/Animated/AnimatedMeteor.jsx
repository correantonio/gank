import React from 'react';

// Determinístico: mesmo resultado no build (server) e no cliente.
// Zero Math.random(), zero useEffect — sem risco de mismatch de hidratação.
const METEOR_COUNT = 20;
const METEORS = Array.from({ length: METEOR_COUNT }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  delay: +((i * 0.83) % 6).toFixed(2),
  duration: +(2.5 + (i % 4) * 0.4).toFixed(2),
}));

const AnimatedMeteor = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {METEORS.map((m) => (
        <span
          key={m.id}
          className="absolute top-[-5%] h-px w-28 rounded-full bg-gradient-to-r from-gank-grayish-100/90 via-gank-grayish-100/40 to-transparent motion-safe:animate-meteor motion-reduce:hidden"
          style={{
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedMeteor;