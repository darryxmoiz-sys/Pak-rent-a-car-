import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import CTA from '@/components/CTA';
import { OWNER, ALL_DRIVER } from '@/lib/data';
export const metadata = { title: 'About', description: 'PAK Rent A Car & Tours rents cars, vans and coasters in Lahore for weddings, events and tours. 24-hour service.' };

export default function About() {
  return (
    <>
      <PageHead title="About PAK Rent A Car & Tours" text="Cars for weddings, events and tours, any time of day." />
      <Sec tone="light">
        <div className="max-w-2xl space-y-4 text-lg text-ink/80">
          <h2 className="h text-3xl text-ink">The right vehicle for the occasion</h2>
          <p>PAK Rent A Car & Tours is based in Lahore and provides vehicles for weddings, other events and sightseeing tours: luxury cars like the Mercedes S Class, G Wagon and Range Rover, SUVs such as the Land Cruiser, Prado and Fortuner, everyday sedans, and Hiace Grand Cabins and Coasters for group trips to the northern areas.</p>
          <p>{ALL_DRIVER}, and the service runs 24 hours a day. Pick your vehicle on this site, then book with a quick call or WhatsApp message to {OWNER} and the team.</p>
        </div>
      </Sec>
      <CTA />
    </>
  );
}
