'use client';
import { useState } from 'react';
import { waLink, cars } from '@/lib/data';

export default function TourForm() {
  const [f, setF] = useState({ name: '', where: '', from: '', days: '', group: '', car: '', note: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const text = `Hello PAK Rent A Car & Tours, I'd like to plan a tour.\nName: ${f.name}\nDestination: ${f.where}\nStart date: ${f.from || '-'}\nDays: ${f.days || '-'}\nGroup size: ${f.group || '-'}\nVehicle: ${f.car || 'Please recommend'}\n${f.note ? 'Note: ' + f.note : ''}`;
    window.open(waLink(text), '_blank');
  };
  const cls = 'w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-ink outline-none focus:border-gold';
  const lab = 'mb-1 block text-sm text-ink/65';
  return (
    <form onSubmit={send} className="grid max-w-xl gap-4 rounded-2xl border border-ink/10 bg-white p-6">
      <div><label htmlFor="t-name" className={lab}>Your name</label><input id="t-name" required value={f.name} onChange={set('name')} className={cls} /></div>
      <div><label htmlFor="t-where" className={lab}>Where do you want to go?</label><input id="t-where" required value={f.where} onChange={set('where')} className={cls} placeholder="e.g. Northern areas" /></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 sm:col-span-1"><label htmlFor="t-from" className={lab}>Start date</label><input id="t-from" type="date" value={f.from} onChange={set('from')} className={cls} /></div>
        <div><label htmlFor="t-days" className={lab}>Days</label><input id="t-days" type="number" min="1" value={f.days} onChange={set('days')} className={cls} /></div>
        <div><label htmlFor="t-group" className={lab}>Group size</label><input id="t-group" type="number" min="1" value={f.group} onChange={set('group')} className={cls} /></div>
      </div>
      <div><label htmlFor="t-car" className={lab}>Vehicle</label>
        <select id="t-car" value={f.car} onChange={set('car')} className={cls}>
          <option value="">Please recommend one</option>
          {cars.filter((c) => c.tour).map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
        </select></div>
      <div><label htmlFor="t-note" className={lab}>Anything else? (optional)</label><textarea id="t-note" rows={3} value={f.note} onChange={set('note')} className={cls} /></div>
      <button type="submit" className="rounded-md bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-ink hover:text-gold">Plan my tour on WhatsApp</button>
      <p className="text-xs text-ink/45">This opens WhatsApp with your details ready to send. Nothing is sent until you confirm.</p>
    </form>
  );
}
