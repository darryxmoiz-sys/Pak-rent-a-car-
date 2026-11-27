export default function PhotoSoon({ name }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-panel text-white/50">
      <svg viewBox="0 0 64 32" className="h-12 w-24 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22v-4l6-2 7-8h22l9 8h8v6" /><path d="M4 22h8M20 22h26M54 22h6" /><circle cx="16" cy="24" r="4" /><circle cx="50" cy="24" r="4" /></svg>
      <span className="px-4 text-center text-xs">{name}<br />Photos coming soon</span>
    </div>
  );
}
