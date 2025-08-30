import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/10 bg-zinc-950/80 py-10 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">Built for playful classification of tabletop games.</p>
          <div className="text-xs text-zinc-500">Use the sliders to capture a game’s vibe.</div>
        </div>
      </div>
    </footer>
  );
}
