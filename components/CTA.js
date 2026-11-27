import { PHONE_DISPLAY, TEL, WA } from '@/lib/data';
export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-night px-5 py-24 text-center md:py-28">
      <img src="/cta.jpg" alt="" loading="lazy" className="cta-img absolute inset-0 -z-10 h-full w-full object-cover object-center" />
      <div className="mx-auto max-w-2xl">
        <h2 className="h text-3xl md:text-5xl">Book your car today</h2>
        <p className="mt-3 text-white/80">24-hour service. Call or WhatsApp to check availability and confirm your booking.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={TEL} className="rounded-md bg-gold px-7 py-4 font-semibold text-ink transition hover:bg-white">Call {PHONE_DISPLAY}</a>
          <a href={WA} className="rounded-md border border-white/40 px-7 py-4 font-semibold transition hover:border-gold hover:text-gold">WhatsApp us</a>
        </div>
      </div>
    </section>
  );
}
