import React from 'react';

const Circles = () => {
  const multipliers = [1, 2, 3];
  const baseSize = 512;

  return (
    <div className="absolute inset-0 size-full -top-50 -z-10">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full opacity-40 lg:opacity-100"
        style={{
          width: '1080px',
          height: '1080px',
          background:
            'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, var(--brand-700, var(--color-gank-600__main, var(--color-gank-950))), transparent)',
        }}
      ></div>
      {multipliers.map((multiplier, i) => {
        const currentSize = baseSize * multiplier;

        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-gank-grayish-100/50 rounded-full -z-10"
            style={{
              width: `${currentSize}px`,
              height: `${currentSize}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Circles;
