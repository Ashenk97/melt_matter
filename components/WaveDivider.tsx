type Point = readonly [number, number];
type Segment = readonly [number, number, number, number, number, number];
type Curve = { start: Point; segments: readonly Segment[] };

const WAVES: readonly { front: Curve; back: Curve }[] = [
  {
    back: { start: [0, 28], segments: [[260, 62, 500, -2, 760, 22], [1000, 46, 1220, 4, 1440, 28]] },
    front: { start: [0, 44], segments: [[240, 84, 480, 4, 720, 36], [960, 68, 1200, 18, 1440, 46]] },
  },
  {
    back: { start: [0, 16], segments: [[220, -6, 440, 54, 740, 34], [1040, 14, 1240, 58, 1440, 20]] },
    front: { start: [0, 32], segments: [[200, 8, 420, 72, 720, 52], [1020, 32, 1220, 76, 1440, 38]] },
  },
  {
    back: { start: [0, 36], segments: [[280, 6, 540, 8, 780, 30], [1020, 52, 1250, -4, 1440, 12]] },
    front: { start: [0, 52], segments: [[300, 20, 520, 24, 760, 46], [1000, 68, 1240, 10, 1440, 28]] },
  },
];

function forward({ start, segments }: Curve) {
  return `M${start} ${segments.map((s) => `C${s[0]},${s[1]} ${s[2]},${s[3]} ${s[4]},${s[5]}`).join(" ")}`;
}

function reversed({ start, segments }: Curve) {
  const points = [start, ...segments.map((s) => [s[4], s[5]] as const)];
  return segments
    .map((s, i) => `C${s[2]},${s[3]} ${s[0]},${s[1]} ${points[i]}`)
    .reverse()
    .join(" ");
}

type WaveDividerProps = {
  /** Tailwind fill class for the section above, e.g. "fill-cream-200/75". */
  from: string;
  /** Tailwind fill class for the section below. */
  to: string;
  /** Tailwind fill class for the soft ribbon between the two waves. */
  accent?: string;
  variant?: 0 | 1 | 2;
  flip?: boolean;
};

export default function WaveDivider({
  from,
  to,
  accent = "fill-blush-200/55",
  variant = 0,
  flip = false,
}: WaveDividerProps) {
  const { back, front } = WAVES[variant];
  const backStart = back.start.join(",");
  const frontEnd = front.segments[front.segments.length - 1];

  return (
    <div aria-hidden="true" className="pointer-events-none relative">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-10 w-full sm:h-14 lg:h-20 ${flip ? "-scale-x-100" : ""}`}
      >
        <path d={`${forward(back)} L1440,0 L0,0 Z`} className={from} />
        <path
          d={`${forward(back)} L${frontEnd[4]},${frontEnd[5]} ${reversed(front)} L${backStart} Z`}
          className={accent}
        />
        <path d={`${forward(front)} L1440,80 L0,80 Z`} className={to} />
      </svg>
    </div>
  );
}
