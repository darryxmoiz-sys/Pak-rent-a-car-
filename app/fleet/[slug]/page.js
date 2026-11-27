import Link from 'next/link';
import { notFound } from 'next/navigation';
import Sec from '@/components/Sec';
import Gallery from '@/components/Gallery';
import EnquiryForm from '@/components/EnquiryForm';
import CarCard from '@/components/CarCard';
import { cars, pkr, priceText, TEL, PHONE_DISPLAY, waLink } from '@/lib/data';

export function generateStaticParams() { return cars.map((c) => ({ slug: c.slug })); }
export function generateMetadata({ params }) {
  const car = cars.find((c) => c.slug === params.slug);
  return car ? { title: `Rent ${car.name} in Lahore`, description: `${car.name} for rent in Lahore. ${car.blurb}${car.city ? ' ' + priceText(car) + ' per day.' : ' Call for price.'}` } : {};
}

export default function CarPage({ params }) {
  const car = cars.find((c) => c.slug === params.slug);
  if (!car) notFound();
  const others = cars.filter((c) => c.slug !== car.slug && c.images.length).slice(0, 3);
  const fuel = car.fuel === 'included' ? 'Fuel included' : 'Fuel not included';
  const row = 'flex items-baseline justify-between gap-4';
  const big = 'h text-3xl text-gold';
  return (
    <>
      <section className="bg-night px-5 pb-16 pt-8 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <Link href="/fleet" className="text-sm text-white/60 transition hover:text-gold">&larr; Back to fleet</Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Gallery images={car.images} name={car.name} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{car.type}</p>
              <h1 className="h mt-1 text-4xl md:text-5xl">{car.name}</h1>

              <div className="mt-5 rounded-2xl border border-white/10 bg-navy p-5">
                {car.variants ? (
                  <div>
                    <p className="text-sm text-white/65">Rate per day in Lahore, by model year</p>
                    <ul className="mt-3 divide-y divide-white/10">
                      {car.variants.map(([y, r]) => <li key={y} className="flex justify-between py-2"><span>Civic {y}</span><span className="font-semibold text-gold">{pkr(r)}</span></li>)}
                    </ul>
                    <p className="mt-3 border-t border-white/10 pt-3 text-xs text-white/55">{fuel}. Call to confirm your dates and the model available.</p>
                  </div>
                ) : car.city ? (
                  <dl className="space-y-3">
                    <div className={row}><dt className="text-white/65">In Lahore</dt><dd><span className={big}>{priceText(car)}</span><span className="text-sm text-white/55"> / day</span></dd></div>
                    {car.out && <div className={`${row} border-t border-white/10 pt-3`}><dt className="text-white/65">Outside Lahore</dt><dd><span className={big}>{pkr(car.out)}</span><span className="text-sm text-white/55"> / day</span></dd></div>}
                    <p className="border-t border-white/10 pt-3 text-xs text-white/55">{fuel}. Call to confirm for your dates and route.</p>
                  </dl>
                ) : (
                  <div><p className={big}>Call for price</p><p className="mt-1 text-sm text-white/60">Rates depend on your dates and route. Call or WhatsApp for a quote.</p></div>
                )}
              </div>

              <p className="mt-6 text-white/75">{car.description}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3">
                {car.specs.map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-white/10 bg-navy px-4 py-3"><dt className="text-xs text-white/50">{k}</dt><dd className="font-semibold">{v}</dd></div>
                ))}
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waLink(`Hello PAK Rent A Car & Tours, I'd like to rent the ${car.name}.`)} target="_blank" rel="noreferrer" className="rounded-md bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-white">Book on WhatsApp</a>
                <a href={TEL} className="rounded-md border border-white/30 px-6 py-3 font-semibold transition hover:border-gold hover:text-gold">Call {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sec tone="light" title={`Enquire about the ${car.name}`} intro="Send your dates and we will confirm availability.">
        <EnquiryForm carName={car.name} light />
      </Sec>
      <Sec title="More vehicles">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{others.map((c) => <CarCard key={c.slug} car={c} />)}</div>
      </Sec>
    </>
  );
}
