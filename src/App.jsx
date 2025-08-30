import React from 'react';
import Hero from './components/Hero';
import LibraryCard from './components/LibraryCard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100 antialiased">
      <Hero />
      <main className="relative mx-auto -mt-24 max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <LibraryCard />
      </main>
      <Footer />
    </div>
  );
}
