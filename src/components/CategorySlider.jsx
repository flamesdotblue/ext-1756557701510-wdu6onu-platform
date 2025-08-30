import React from 'react';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function CategorySlider({
  name,
  left,
  center,
  right,
  value,
  onChange,
  accent = 'emerald',
}) {
  const colors = {
    emerald: {
      track: 'from-emerald-400/30 via-emerald-500/50 to-emerald-400/30',
      thumb: 'bg-emerald-400 ring-emerald-300',
      glow: 'shadow-[0_0_0_6px_rgba(52,211,153,0.15)]',
    },
    violet: {
      track: 'from-violet-400/30 via-violet-500/50 to-violet-400/30',
      thumb: 'bg-violet-400 ring-violet-300',
      glow: 'shadow-[0_0_0_6px_rgba(167,139,250,0.15)]',
    },
    amber: {
      track: 'from-amber-400/30 via-amber-500/50 to-amber-400/30',
      thumb: 'bg-amber-400 ring-amber-300',
      glow: 'shadow-[0_0_0_6px_rgba(251,191,36,0.15)]',
    },
    sky: {
      track: 'from-sky-400/30 via-sky-500/50 to-sky-400/30',
      thumb: 'bg-sky-400 ring-sky-300',
      glow: 'shadow-[0_0_0_6px_rgba(56,189,248,0.15)]',
    },
    rose: {
      track: 'from-rose-400/30 via-rose-500/50 to-rose-400/30',
      thumb: 'bg-rose-400 ring-rose-300',
      glow: 'shadow-[0_0_0_6px_rgba(251,113,133,0.15)]',
    },
  };

  const palette = colors[accent] ?? colors.emerald;

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <h3 className="font-['IBM_Plex_Sans'] text-sm font-semibold tracking-wide text-zinc-800/80">
          {name}
        </h3>
        <span className="text-xs tabular-nums text-zinc-500">{['A','B','C'][clamp(value,0,2)]}</span>
      </div>

      <div className="relative">
        <div className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r ${palette.track}`} />
        <input
          aria-label={name}
          type="range"
          min={0}
          max={2}
          step={1}
          value={clamp(value, 0, 2)}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative z-10 h-10 w-full appearance-none bg-transparent"
        />

        <div className="pointer-events-none absolute inset-x-2 bottom-1.5 flex justify-between text-[10px] font-medium text-zinc-600">
          <span>{left}</span>
          <span className="-translate-x-1/2">{center}</span>
          <span>{right}</span>
        </div>

        <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2">
          <div className="mx-3 flex items-center justify-between">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-2 w-[2px] rounded-full bg-zinc-700/60" />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        input[type='range'] { outline: none; }
        input[type='range']::-webkit-slider-runnable-track { height: 8px; background: transparent; border-radius: 9999px; }
        input[type='range']::-moz-range-track { height: 8px; background: transparent; border-radius: 9999px; }
        input[type='range']::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 9999px; background: white; border: 0; box-shadow: 0 4px 16px rgba(0,0,0,0.25); position: relative; margin-top: -7px; }
        input[type='range']::-moz-range-thumb { width: 22px; height: 22px; border-radius: 9999px; border: 0; background: white; box-shadow: 0 4px 16px rgba(0,0,0,0.25); }
      `}</style>

      <style>{`
        /* Colorize thumb via ring */
        input[type='range']:focus::-webkit-slider-thumb { box-shadow: 0 4px 16px rgba(0,0,0,0.25); }
      `}</style>

      <div className="sr-only">Current: {['left','center','right'][clamp(value,0,2)]}</div>
    </div>
  );
}
