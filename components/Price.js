import { priceText } from '@/lib/data';
export default function Price({ car, light = false, size = 'text-2xl' }) {
  const ink = light ? 'text-ink' : 'text-white';
  if (!car.city) return <span className={`h ${size} ${ink}`}>Call for price</span>;
  return <span className={ink}><span className={`h ${size}`}>{priceText(car)}</span><span className={`text-sm ${light ? 'text-ink/60' : 'text-white/60'}`}> / day</span></span>;
}
