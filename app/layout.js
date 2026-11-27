import './globals.css';
import Link from 'next/link';
import { Barlow_Condensed, DM_Sans } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Nav from '@/components/Nav';
import FloatingButtons from '@/components/FloatingButtons';
import { PHONES, WA, EMAIL, ADDRESS } from '@/lib/data';

const display = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-display' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: { default: 'PAK Rent A Car & Tours | Car Rental in Lahore', template: '%s | PAK Rent A Car & Tours' },
  description: 'Rent Land Cruiser, Range Rover, G Wagon, Mercedes, Prado, Fortuner, Hilux, Civic, Grand Cabin and Coaster in Lahore. Weddings, events and tours. 24-hour service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScroll /><Preloader /><Nav />
        <main className="overflow-x-clip">{children}</main>
        <footer className="bg-night px-5 py-12 text-sm text-white/60">
          <div className="mx-auto grid max-w-6xl gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <p className="h text-xl text-white">PAK <span className="text-gold">Rent A Car</span> &amp; Tours</p>
              <p className="mt-2">{ADDRESS}</p>
            </div>
            <div className="space-y-1"><Link href="/fleet" className="block hover:text-gold">Our Fleet</Link><Link href="/tours" className="block hover:text-gold">Tours</Link><Link href="/reviews" className="block hover:text-gold">Reviews</Link><Link href="/about" className="block hover:text-gold">About</Link><Link href="/contact" className="block hover:text-gold">Contact</Link></div>
            <div className="space-y-1">
              {PHONES.map((p) => <a key={p.intl} href={`tel:+${p.intl}`} className="block hover:text-gold">{p.display}</a>)}
              <a href={`mailto:${EMAIL}`} className="block hover:text-gold">{EMAIL}</a>
              <a href={WA} className="block hover:text-gold">WhatsApp</a>
            </div>
          </div>
        </footer>
        <FloatingButtons />
      </body>
    </html>
  );
}
