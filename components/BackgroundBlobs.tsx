const BLOBS = [
  "left-[-10rem] top-[8%] h-[26rem] w-[26rem] bg-blush-200/70",
  "right-[-8rem] top-[30%] h-[22rem] w-[30rem] bg-caramel-light/70 [animation-delay:-6s]",
  "left-[20%] bottom-[-6rem] h-[24rem] w-[24rem] bg-blush-100/80 [animation-delay:-12s]",
  "right-[18%] top-[-6rem] h-[18rem] w-[18rem] bg-cream-500/50 [animation-delay:-3s]",
] as const;

export default function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {BLOBS.map((className) => (
        <div key={className} className={`blob-drift absolute blur-3xl ${className}`} />
      ))}
    </div>
  );
}
