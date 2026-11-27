export default function PageHead({ title, text }) {
  return (
    <section className="bg-navy px-5 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="h text-3xl md:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-xl text-white/70">{text}</p>}
      </div>
    </section>
  );
}
