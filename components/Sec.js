export default function Sec({ tone = 'dark', title, intro, children }) {
  const light = tone === 'light';
  return (
    <section className={`${light ? 'bg-cream text-ink' : 'bg-night text-white'} px-5 py-16 md:py-20`}>
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-10 max-w-2xl">
            <h2 className="h text-2xl md:text-4xl">{title}</h2>
            {intro && <p className={`mt-3 ${light ? 'text-ink/70' : 'text-white/70'}`}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
