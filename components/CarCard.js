import Link from 'next/link';
import PhotoSoon from './PhotoSoon';
import Price from './Price';

export default function CarCard({ car, light = false }) {
  const cover = car.images[0];
  const accent = light ? 'text-golddk' : 'text-gold';
  return (
    <Link href={`/fleet/${car.slug}`} className={`group block overflow-hidden rounded-2xl border transition hover:-translate-y-1 ${light ? 'border-ink/10 bg-white' : 'border-white/10 bg-navy'}`}>
      <div className="aspect-[4/3] overflow-hidden bg-panel">
        {cover ? <img src={cover[0]} alt={cover[1]} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <PhotoSoon name={car.name} />}
      </div>
      <div className="p-5">
        <p className={`text-xs font-semibold uppercase tracking-wider ${accent}`}>{car.type}</p>
        <h3 className={`h mt-1 text-xl ${light ? 'text-ink' : 'text-white'}`}>{car.name}</h3>
        <p className={`mt-1 text-sm ${light ? 'text-ink/65' : 'text-white/65'}`}>{car.blurb}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <Price car={car} light={light} />
            {car.city && <p className={`text-xs ${light ? 'text-ink/50' : 'text-white/50'}`}>In Lahore{car.fuel === 'included' ? ' · fuel included' : ''}</p>}
          </div>
          <span className={`shrink-0 text-sm font-semibold group-hover:underline ${accent}`}>View details</span>
        </div>
      </div>
    </Link>
  );
}
