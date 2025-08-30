import React, { useMemo, useState } from 'react';
import CategorySlider from './CategorySlider';

export default function LibraryCard() {
  const [title, setTitle] = useState('Wingspan');
  const [dewey, setDewey] = useState('794.1 W72');

  const [theme, setTheme] = useState(1); // Abstract—Decorated—Immersive
  const [randomness, setRandomness] = useState(1); // Luck—Tactical—Skill
  const [interaction, setInteraction] = useState(1); // Solitaire—Indirect—Constant
  const [learning, setLearning] = useState(1); // Intuitive—Moderate—Heavy
  const [tempo, setTempo] = useState(1); // Fast—Thoughtful—Brain Melting

  const accentByCategory = useMemo(
    () => ({ theme: 'amber', randomness: 'sky', interaction: 'rose', learning: 'violet', tempo: 'emerald' }),
    []
  );

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50/95 shadow-xl shadow-zinc-900/10">
          <div className="relative overflow-hidden rounded-t-xl border-b border-zinc-200/80 bg-gradient-to-b from-zinc-100 to-zinc-50 px-5 py-4">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_4px)]" />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex-1">
                <label className="block text-[10px] font-semibold tracking-wider text-zinc-600">TITLE</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-md border border-zinc-200 bg-white/80 px-3 py-2 font-['IBM_Plex_Sans'] text-lg font-medium text-zinc-900 shadow-inner focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div className="w-full sm:w-40">
                <label className="block text-[10px] font-semibold tracking-wider text-zinc-600">DEWEY DECIMAL</label>
                <input
                  value={dewey}
                  onChange={(e) => setDewey(e.target.value)}
                  className="w-full rounded-md border border-zinc-200 bg-white/80 px-3 py-2 font-mono text-sm text-zinc-900 shadow-inner focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>

          <div className="relative px-5 py-6">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-[repeating-linear-gradient(0deg,transparent,transparent_23px,rgba(0,0,0,0.06)_23px,rgba(0,0,0,0.06)_24px)]" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[repeating-linear-gradient(0deg,transparent,transparent_23px,rgba(0,0,0,0.06)_23px,rgba(0,0,0,0.06)_24px)]" />

            <div className="space-y-6">
              <CategorySlider
                name="Theme"
                left="Abstract"
                center="Decorated"
                right="Immersive"
                value={theme}
                onChange={setTheme}
                accent={accentByCategory.theme}
              />

              <CategorySlider
                name="Randomness"
                left="Luck"
                center="Tactical"
                right="Skill"
                value={randomness}
                onChange={setRandomness}
                accent={accentByCategory.randomness}
              />

              <CategorySlider
                name="Interaction"
                left="Solitaire"
                center="Indirect"
                right="Constant"
                value={interaction}
                onChange={setInteraction}
                accent={accentByCategory.interaction}
              />

              <CategorySlider
                name="Learning"
                left="Intuitive"
                center="Moderate"
                right="Heavy"
                value={learning}
                onChange={setLearning}
                accent={accentByCategory.learning}
              />

              <CategorySlider
                name="Tempo"
                left="Fast"
                center="Thoughtful"
                right="Brain Melting"
                value={tempo}
                onChange={setTempo}
                accent={accentByCategory.tempo}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 rounded-b-xl border-t border-zinc-200/80 bg-zinc-100/60 px-5 py-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600">
              <span className="rounded bg-zinc-200/60 px-2 py-0.5 font-medium text-zinc-700">A</span>
              <span className="text-zinc-500">left</span>
              <span className="rounded bg-zinc-200/60 px-2 py-0.5 font-medium text-zinc-700">B</span>
              <span className="text-zinc-500">center</span>
              <span className="rounded bg-zinc-200/60 px-2 py-0.5 font-medium text-zinc-700">C</span>
              <span className="text-zinc-500">right</span>
            </div>
            <CompactSummary
              theme={theme}
              randomness={randomness}
              interaction={interaction}
              learning={learning}
              tempo={tempo}
            />
          </div>
        </div>
      </div>

      <div className="md:col-span-1">
        <CardSidePanel title={title} values={{ theme, randomness, interaction, learning, tempo }} />
      </div>
    </div>
  );
}

function CompactSummary({ theme, randomness, interaction, learning, tempo }) {
  const idxToWord = (i, [a, b, c]) => [a, b, c][Math.max(0, Math.min(2, i))];
  return (
    <div className="hidden items-center gap-2 text-xs text-zinc-600 sm:flex">
      <span>{idxToWord(theme, ['Abstract', 'Decorated', 'Immersive'])}</span>
      <span>•</span>
      <span>{idxToWord(randomness, ['Luck', 'Tactical', 'Skill'])}</span>
      <span>•</span>
      <span>{idxToWord(interaction, ['Solitaire', 'Indirect', 'Constant'])}</span>
      <span>•</span>
      <span>{idxToWord(learning, ['Intuitive', 'Moderate', 'Heavy'])}</span>
      <span>•</span>
      <span>{idxToWord(tempo, ['Fast', 'Thoughtful', 'Brain Melting'])}</span>
    </div>
  );
}

function CardSidePanel({ title, values }) {
  const chips = [
    { k: 'Theme', v: values.theme, labels: ['Abstract', 'Decorated', 'Immersive'], c: 'amber' },
    { k: 'Randomness', v: values.randomness, labels: ['Luck', 'Tactical', 'Skill'], c: 'sky' },
    { k: 'Interaction', v: values.interaction, labels: ['Solitaire', 'Indirect', 'Constant'], c: 'rose' },
    { k: 'Learning', v: values.learning, labels: ['Intuitive', 'Moderate', 'Heavy'], c: 'violet' },
    { k: 'Tempo', v: values.tempo, labels: ['Fast', 'Thoughtful', 'Brain Melting'], c: 'emerald' },
  ];

  const dot = (c) => ({
    emerald: 'bg-emerald-400',
    violet: 'bg-violet-400',
    amber: 'bg-amber-400',
    sky: 'bg-sky-400',
    rose: 'bg-rose-400',
  }[c] || 'bg-emerald-400');

  return (
    <aside className="sticky top-8 rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-lg backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-['IBM_Plex_Sans'] text-sm font-semibold tracking-wide text-zinc-700">Profile</h4>
        <span className="rounded-full bg-zinc-100 px-2 py-1 text-[10px] font-medium text-zinc-600">{title.length} chars</span>
      </div>
      <ul className="space-y-2">
        {chips.map((chip) => (
          <li key={chip.k} className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-3 py-2">
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${dot(chip.c)}`} />
              <span className="text-xs font-medium text-zinc-700">{chip.k}</span>
            </div>
            <span className="text-xs text-zinc-600">{chip.labels[Math.max(0, Math.min(2, chip.v))]}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify({ title, ...values }, null, 2));
          }}
          className="inline-flex flex-1 items-center justify-center rounded-md bg-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Copy Profile JSON
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
        >
          Top
        </button>
      </div>
    </aside>
  );
}
