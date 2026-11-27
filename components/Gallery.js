'use client';
import { useEffect, useState } from 'react';
import PhotoSoon from './PhotoSoon';

// Built for cars with 50-60 photos: only the first 12 are rendered, "Show more" adds 12 at a time,
// and every image is lazy-loaded.
export default function Gallery({ images, name }) {
  const [shown, setShown] = useState(12);
  const [i, setI] = useState(null);
  const n = images.length;
  useEffect(() => {
    if (i === null) return;
    const k = (e) => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') setI((i + 1) % n); if (e.key === 'ArrowLeft') setI((i + n - 1) % n); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [i, n]);

  if (!n) return <div className="aspect-[4/3] overflow-hidden rounded-2xl"><PhotoSoon name={name} /></div>;
  const [first, ...rest] = images;
  return (
    <div>
      <button onClick={() => setI(0)} className="block w-full overflow-hidden rounded-2xl" aria-label="Enlarge photo">
        <img src={first[0]} alt={first[1]} className="aspect-[4/3] w-full object-cover" />
      </button>
      {rest.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-3 md:grid-cols-4">
          {rest.slice(0, shown - 1).map(([src, alt], k) => (
            <button key={src} onClick={() => setI(k + 1)} className="overflow-hidden rounded-lg" aria-label={`Enlarge: ${alt}`}>
              <img src={src} alt={alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition hover:scale-105" />
            </button>
          ))}
        </div>
      )}
      {n > shown && <button onClick={() => setShown(shown + 12)} className="mt-4 rounded-md border border-white/30 px-5 py-2 text-sm transition hover:border-gold hover:text-gold">Show more photos ({n - shown} left)</button>}
      {i !== null && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4" onClick={() => setI(null)} role="dialog" aria-label="Photo viewer">
          <img src={images[i][0]} alt={images[i][1]} className="max-h-[85vh] max-w-full rounded-lg" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 top-4 rounded-md bg-white px-4 py-2 text-ink" onClick={() => setI(null)}>Close</button>
          {n > 1 && <>
            <button className="absolute left-3 top-1/2 rounded-md bg-white/90 px-3 py-2 text-ink" onClick={(e) => { e.stopPropagation(); setI((i + n - 1) % n); }} aria-label="Previous">&lsaquo;</button>
            <button className="absolute right-3 top-1/2 rounded-md bg-white/90 px-3 py-2 text-ink" onClick={(e) => { e.stopPropagation(); setI((i + 1) % n); }} aria-label="Next">&rsaquo;</button>
          </>}
        </div>
      )}
    </div>
  );
}
