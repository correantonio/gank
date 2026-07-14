import React from 'react';

const RING_ANIMATION = [
  'motion-safe:animate-ring-spin-slow',
  'motion-safe:animate-ring-spin-slower',
  'motion-safe:animate-ring-spin-slowest',
];

const Circles = () => {
  const multipliers = [1, 2, 3];
  const baseSize = 320;

  return (
    <div className="absolute left-0 top-0 size-full -z-10 flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 size-[980px] -translate-1/2 z-20 rounded-full opacity-40 lg:opacity-100 bg-radial from-gank-700 to-gank-900/0 blur-3xl" />
      <div className="size-[1080px] relative">
        {multipliers.map((multiplier, i) => {
          const currentSize = baseSize * multiplier;
          return (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 -translate-1/2 border border-dashed border-gank-grayish-100/50 rounded-full -z-10 ${RING_ANIMATION[i]}`}
              style={{
                width: `${currentSize}px`,
                height: `${currentSize}px`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Circles;
