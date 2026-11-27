import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import CarCard from '@/components/CarCard';
import TourForm from '@/components/TourForm';
import CTA from '@/components/CTA';
import { cars, ALL_DRIVER } from '@/lib/data';
export const metadata = { title: 'Tours & Northern Areas', description: 'Rent a Grand Cabin, Coaster, Prado, Fortuner or Hilux for family trips, group tours and journeys to the northern areas from Lahore.' };

const steps = [
  ['Tell us about the trip', 'Share your destination, start date, number of days and group size.'],
  ['We recommend a vehicle', 'We suggest the right vehicle for your group and terrain, and confirm the price.'],
  ['Travel in comfort', 'Your driver arrives on time and the journey is taken care of.'],
];

export default function Tours() {
  const tour = cars.filter((c) => c.tour);
  return (
    <>
      <PageHead title="Tours & northern areas" text={`Comfortable vehicles for family trips, group tours and journeys to the northern areas. ${ALL_DRIVER}.`} />
      <Sec tone="light" title="Vehicles for tours" intro="Roomy vans and coasters for groups, and tough 4x4s for rough roads.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{tour.map((c) => <CarCard key={c.slug} car={c} light />)}</div>
      </Sec>
      <Sec title="How it works">
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-navy p-6">
              <p className="h text-4xl text-gold">0{i + 1}</p>
              <h3 className="h mt-3 text-xl">{t}</h3>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </Sec>
      <Sec tone="light" title="Plan your tour" intro="Fill in the details and send them on WhatsApp. We will reply with a quote.">
        <TourForm />
      </Sec>
      <CTA />
    </>
  );
}
