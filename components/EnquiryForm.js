'use client';
import { useState } from 'react';
import { waLink, cars } from '@/lib/data';

export default function EnquiryForm({ carName = '', light = false }) {
  const [f, setF] = useState({ name: '', car: carName, from: '', to: '', note: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const text = `Hello PAK Rent A Car & Tours, I'd like to rent a car.\nName: ${f.name}\nCar: ${f.car || 'Not sure yet'}\nPickup: ${f.from || '-'}\nReturn: ${f.to || '-'}\n${f.note ? 'Note: ' + f.note : ''}`;
    window.open(waLink(text), '_blank');
  };
  const wrap = light ? 'bg-white border border-ink/10' : 'bg-navy border border-white/10';
  const label = light ? 'text-ink/65' : 'text-white/65';
  const input = light ? 'border-ink/15 bg-white text-ink' : 'border-white/15 bg-white/5 text-white [color-scheme:dark]';
  const cls = `w-full rounded-md border px-4 py-3 outline-none focus:border-gold ${input}`;
  return (
    <form onSubmit={send} className={`${wrap} grid max-w-xl gap-4 rounded-2xl p-6`}>
      <div><label htmlFor="name" className={`mb-1 block text-sm ${label}`}>Your name</label><input id="name" required value={f.name} onChange={set('name')} className={cls} /></div>
      <div><label htmlFor="car" className={`mb-1 block text-sm ${label}`}>Car</label>
        <select id="car" value={f.car} onChange={set('car')} className={cls}>
          <option value="">Not sure yet</option>
          {cars.map((c) => <option key={c.slug} value={c.name} className="text-ink">{c.name}</option>)}
        </select></div>
      <div className="grid grid-cols-2 gap-4">
        <div><label htmlFor="from" className={`mb-1 block text-sm ${label}`}>Pickup date</label><input id="from" type="date" value={f.from} onChange={set('from')} className={cls} /></div>
        <div><label htmlFor="to" className={`mb-1 block text-sm ${label}`}>Return date</label><input id="to" type="date" value={f.to} onChange={set('to')} className={cls} /></div>
      </div>
      <div><label htmlFor="note" className={`mb-1 block text-sm ${label}`}>Anything else? (optional)</label><textarea id="note" rows={3} value={f.note} onChange={set('note')} className={cls} /></div>
      <button type="submit" className="rounded-md bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-ink hover:text-gold">Send enquiry on WhatsApp</button>
      <p className={`text-xs ${light ? 'text-ink/45' : 'text-white/45'}`}>This opens WhatsApp with your details ready to send. Nothing is sent until you confirm.</p>
    </form>
  );
}
