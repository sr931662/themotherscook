interface FloralAccentProps {
  className?: string
}

interface Leaf {
  x: number
  y: number
  angle: number
  size: number
}

interface Branch {
  stem: string
  leaves: Leaf[]
  tip: [number, number, number]
}

/** A main stem with two offshoots; leaves alternate sides and taper toward each tip. */
const BRANCHES: Branch[] = [
  {
    stem: 'M12 190C36 164 52 140 68 118C86 94 106 68 132 44C148 29 164 19 184 10',
    tip: [184, 10, 2.8],
    leaves: [
      { x: 34, y: 165, angle: -88, size: 27 },
      { x: 43, y: 154, angle: -8, size: 24 },
      { x: 56, y: 135, angle: -92, size: 24 },
      { x: 65, y: 124, angle: -6, size: 21 },
      { x: 79, y: 106, angle: -96, size: 21 },
      { x: 89, y: 94, angle: -4, size: 19 },
      { x: 103, y: 78, angle: -99, size: 18 },
      { x: 115, y: 65, angle: -2, size: 16 },
      { x: 131, y: 47, angle: -102, size: 15 },
      { x: 145, y: 35, angle: 0, size: 13 },
      { x: 159, y: 25, angle: -104, size: 11 },
    ],
  },
  {
    stem: 'M79 106C77 90 75 76 77 61C78 51 81 43 87 35',
    tip: [87, 35, 2.2],
    leaves: [
      { x: 77, y: 92, angle: -142, size: 18 },
      { x: 76, y: 79, angle: -40, size: 16 },
      { x: 77, y: 66, angle: -146, size: 15 },
      { x: 80, y: 54, angle: -36, size: 13 },
      { x: 84, y: 43, angle: -150, size: 11 },
    ],
  },
  {
    stem: 'M35 167C27 155 21 145 19 131',
    tip: [19, 131, 2],
    leaves: [
      { x: 28, y: 156, angle: -156, size: 15 },
      { x: 24, y: 147, angle: -62, size: 12 },
      { x: 20, y: 136, angle: -160, size: 10 },
    ],
  },
]

function leafPath(size: number): string {
  const a = size * 0.26
  const b = size * 0.4
  const c = size * 0.72
  const d = size * 0.32
  return `M0 0C${a} ${-b} ${c} ${-d} ${size} 0C${c} ${d} ${a} ${b} 0 0Z`
}

/** Faint line-art leaf branch used as a corner decoration. */
export function FloralAccent({ className }: FloralAccentProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      role="presentation"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {BRANCHES.map((branch) => (
        <g key={branch.stem}>
          <path d={branch.stem} />
          <circle cx={branch.tip[0]} cy={branch.tip[1]} r={branch.tip[2]} />
          {branch.leaves.map((leaf) => (
            <g
              key={`${leaf.x}-${leaf.y}`}
              transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle})`}
            >
              <path d={leafPath(leaf.size)} />
              <path d={`M${leaf.size * 0.08} 0L${leaf.size * 0.84} 0`} strokeWidth="0.7" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  )
}
