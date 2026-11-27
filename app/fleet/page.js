import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import FleetGrid from '@/components/FleetGrid';
import CTA from '@/components/CTA';
import { ALL_DRIVER } from '@/lib/data';
export const metadata = { title: 'Our Fleet', description: 'Land Cruiser, G Wagon, Range Rover, S Class, Prado, Fortuner, Hilux, Civic, Grand Cabin, Coaster and more for rent in Lahore.' };

export default function Fleet() {
  return (
    <>
      <PageHead title="Our fleet" text={`${ALL_DRIVER}. Rates are per day and fuel is not included unless stated. Call or WhatsApp to confirm your dates and final price.`} />
      <Sec tone="light"><FleetGrid /></Sec>
      <CTA />
    </>
  );
}
