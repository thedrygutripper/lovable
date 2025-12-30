export default function SectionDivider({ flip = false }) {
  return (
    <div className="relative w-full h-24 overflow-hidden">
      <div
        className={`absolute inset-0 bg-black ${
          flip ? "-skew-y-3" : "skew-y-3"
        } origin-top-left`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent opacity-60" />
    </div>
  );
}
