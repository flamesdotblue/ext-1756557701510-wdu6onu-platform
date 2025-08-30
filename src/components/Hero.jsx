import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EFlEghJH3qCmzyRi/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-zinc-950/40 to-zinc-950" />

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-['Mona_Sans'] text-4xl font-extrabold tracking-tight text-white drop-shadow sm:text-5xl">
            Board Game Library Card
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-balance text-zinc-200/90 sm:text-lg">
            Slide between design traits to capture the character of any tabletop experience.
          </p>
        </div>
      </div>
    </section>
  );
}
