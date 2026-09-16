import { useId } from 'react'

interface RotatingBadgeProps {
  className?: string
}

/**
 * Circular seal: "GOOD FOOD" arcs over the top, "BRIGHTER MOMENTS" under the
 * bottom. Two separate arcs (rather than one full circle) keep both halves
 * reading upright, and their radii are offset so the type sits in one even
 * band just inside the ring.
 */
export function RotatingBadge({ className }: RotatingBadgeProps) {
  const id = useId()
  const topArc = `${id}-top`
  const bottomArc = `${id}-bottom`

  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true" role="presentation">
      <defs>
        <path id={topArc} d="M25 70A45 45 0 0 1 115 70" />
        <path id={bottomArc} d="M16 70A54 54 0 0 0 124 70" />
      </defs>

      <circle cx="70" cy="70" r="58" fill="none" stroke="currentColor" strokeWidth="1" />

      <text fontSize="9" letterSpacing="2.6" fill="currentColor" fontWeight="600">
        <textPath href={`#${topArc}`} startOffset="50%" textAnchor="middle">
          GOOD FOOD
        </textPath>
      </text>
      <text fontSize="9" letterSpacing="2.6" fill="currentColor" fontWeight="600">
        <textPath href={`#${bottomArc}`} startOffset="50%" textAnchor="middle">
          BRIGHTER MOMENTS
        </textPath>
      </text>

      <circle cx="19" cy="70" r="1.5" fill="currentColor" />
      <circle cx="121" cy="70" r="1.5" fill="currentColor" />

      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M70 48C79 56 81 67 70 80C59 67 61 56 70 48Z" />
        <path d="M70 80L70 92" />
        <path d="M70 55L70 78" strokeWidth="0.8" />
      </g>
    </svg>
  )
}
