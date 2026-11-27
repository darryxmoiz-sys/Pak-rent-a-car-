'use client';
import { useState } from 'react';
import CarCard from './CarCard';
import { cars, types } from '@/lib/data';

export default function FleetGrid() {
  const [t, setT] = useState('All');
  const list = t === 'All' ? cars : cars.filter((c) => c.type === t);
  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {types.map((x) => (
          <button key={x} onClick={() => setT(x)} aria-pressed={t === x}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${t === x ? 'border-ink bg-ink text-white' : 'border-ink/20 text-ink/70 hover:border-ink hover:text-ink'}`}>{x}</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((c) => <CarCard key={c.slug} car={c} light />)}</div>
    </div>
  );
}
