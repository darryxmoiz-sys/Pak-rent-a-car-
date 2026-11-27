import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import EnquiryForm from '@/components/EnquiryForm';
import { PHONES, EMAIL, ADDRESS, MAP, OWNER } from '@/lib/data';
export const metadata = { title: 'Contact', description: 'Call or WhatsApp PAK Rent A Car & Tours in Lahore. 24-hour service.' };

export default function Contact() {
  return (
    <>
      <PageHead title="Book your car" text={`Call or WhatsApp ${OWNER} and the team, any time of day.`} />
      <Sec tone="light">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ul className="space-y-3">
              {PHONES.map((p) => (
                <li key={p.intl} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4">
                  <div>
                    <a href={`tel:+${p.intl}`} className="h text-3xl text-ink transition hover:text-golddk">{p.display}</a>
                    {p.label && <p className="text-xs font-semibold text-golddk">{p.label}</p>}
                  </div>
                  <span className="flex gap-2">
                    <a href={`tel:+${p.intl}`} className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-golddk">Call</a>
                    <a href={`https://wa.me/${p.intl}`} target="_blank" rel="noreferrer" className="rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-ink transition hover:opacity-90">WhatsApp</a>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6"><a href={`mailto:${EMAIL}`} className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-golddk">{EMAIL}</a></p>
            <div className="mt-6 text-ink/75">
              <p>{ADDRESS}</p>
              <a href={MAP} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-golddk hover:underline">Open in Google Maps</a>
            </div>
          </div>
          <EnquiryForm light />
        </div>
      </Sec>
    </>
  );
}
