import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Sec from '@/components/Sec';
import CarCard from '@/components/CarCard';
import CTA from '@/components/CTA';
import { PHONE_DISPLAY, TEL, WA, ALL_DRIVER, cars } from '@/lib/data';

const what = [
  ['Weddings & events', 'Luxury sedans, SUVs and limousines for the bride and groom, VIP guests and wedding parties.', '/fleet'],
  ['Tours & northern areas', 'Grand Cabin vans, Coasters and rugged 4x4s for family and group trips.', '/tours'],
  ['24-hour service', 'Call or WhatsApp any time of day to book your vehicle.', '/contact'],
];

export default function Home() {
  const featured = cars.filter((c) => c.featured);
  return (
    <>
      <section className="relative isolate overflow-hidden bg-night">
        <div className="fade-d absolute inset-y-0 right-0 -z-10 hidden w-[58%] md:block"><img src="/hero.jpg" alt="" className="h-full w-full object-cover object-center" /></div>
        <div className="fade-m md:hidden"><img src="/hero-mobile.jpg" alt="White Mercedes G Wagon for rent in Lahore" className="h-[240px] w-full object-cover" /></div>
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-8 md:py-32">
          <div className="max-w-xl">
            <Reveal delay={0.1}><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Lahore &middot; 24-hour service</p></Reveal>
            <Reveal delay={0.2}><h1 className="h text-5xl sm:text-6xl md:text-7xl">Premium cars for <span className="text-gold">every occasion.</span></h1></Reveal>
            <Reveal delay={0.35}><p className="mt-5 max-w-md text-lg text-white/75">Weddings, events and tours. {ALL_DRIVER}.</p></Reveal>
            <Reveal delay={0.5} className="mt-8 flex flex-wrap gap-3">
              <Link href="/fleet" className="rounded-md bg-gold px-7 py-4 font-semibold text-ink transition hover:bg-white">View our fleet</Link>
              <a href={TEL} className="rounded-md border border-white/30 px-7 py-4 transition hover:border-gold hover:text-gold">Call {PHONE_DISPLAY}</a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gold text-ink">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-4 text-center text-sm font-semibold md:grid-cols-4">
          {['Weddings & events', 'Tours & northern areas', '24-hour service', 'Call or WhatsApp to book'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      <Sec tone="light" title="Our top picks" intro="Luxury and premium SUVs for weddings, VIP guests and family trips.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featured.map((c) => <CarCard key={c.slug} car={c} light />)}</div>
        <Link href="/fleet" className="mt-9 inline-block rounded-md bg-ink px-7 py-3 font-semibold text-white transition hover:bg-golddk">See all {cars.length} vehicles</Link>
      </Sec>

      <Sec title="What we do">
        <div className="grid gap-5 md:grid-cols-3">
          {what.map(([t, d, href], i) => (
            <Link key={t} href={href} className="group rounded-2xl border border-white/10 bg-navy p-6 transition hover:border-gold/60">
              <p className="h text-4xl text-gold">0{i + 1}</p>
              <h3 className="h mt-3 text-xl">{t}</h3>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </Link>
          ))}
        </div>
      </Sec>

      <section className="bg-gold px-5 py-14 text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div><h2 className="h text-3xl md:text-4xl">Not sure which vehicle suits your event?</h2><p className="mt-2 text-ink/75">Tell us the date, occasion and group size and we will recommend one.</p></div>
          <a href={WA} className="shrink-0 rounded-md bg-ink px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-ink">Ask on WhatsApp</a>
        </div>
      </section>
      <CTA />
    </>
  );
}
