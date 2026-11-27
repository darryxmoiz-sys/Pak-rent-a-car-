'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TEL, PHONE_DISPLAY } from '@/lib/data';

const links = [['/', 'Home'], ['/fleet', 'Our Fleet'], ['/tours', 'Tours'], ['/reviews', 'Reviews'], ['/about', 'About'], ['/contact', 'Contact']];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (h) => (h === '/' ? path === '/' : path.startsWith(h));
  const item = (h) => `transition hover:text-gold ${active(h) ? 'text-gold' : 'text-white/80'}`;
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-night/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="PAK Rent A Car & Tours" className="h-11 w-11 rounded-full" />
          <span className="h text-base tracking-wide sm:text-lg">PAK <span className="text-gold">Rent A Car</span> &amp; Tours</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {links.map(([h, l]) => <Link key={h} href={h} className={item(h)}>{l}</Link>)}
          <a href={TEL} className="rounded-md bg-gold px-5 py-2 font-semibold text-ink transition hover:bg-white">Call {PHONE_DISPLAY}</a>
        </nav>
        <button className="rounded-md border border-white/30 px-4 py-2 lg:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 lg:hidden">
          {links.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)} className={`py-2 text-lg ${item(h)}`}>{l}</Link>)}
        </nav>
      )}
    </header>
  );
}
