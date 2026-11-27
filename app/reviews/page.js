import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import CTA from '@/components/CTA';
import { reviews, waLink } from '@/lib/data';
export const metadata = { title: 'Customer Reviews', description: 'What customers say about PAK Rent A Car & Tours in Lahore.' };

export default function Reviews() {
  return (
    <>
      <PageHead title="Customer reviews" text="Real feedback from people who have travelled with us." />
      <Sec tone="light">
        {reviews.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name + r.text} className="rounded-2xl border border-ink/10 bg-white p-6">
                <div className="mb-3 flex gap-1 text-gold" aria-label="5 out of 5 stars">{'★★★★★'}</div>
                <blockquote className="text-ink/80">{r.text}</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink">{r.name}{r.car ? <span className="font-normal text-ink/55"> · {r.car}</span> : null}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl rounded-2xl border border-ink/10 bg-white p-8">
            <h2 className="h text-3xl text-ink">Reviews are coming soon</h2>
            <p className="mt-3 text-ink/70">We are collecting feedback from our customers and will share it here. Travelled with us? We would love to hear how it went.</p>
            <a href={waLink("Hello PAK Rent A Car & Tours, I'd like to share a review of my trip:")} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-md bg-ink px-6 py-3 font-semibold text-white transition hover:bg-golddk">Share your experience on WhatsApp</a>
          </div>
        )}
      </Sec>
      <CTA />
    </>
  );
}
