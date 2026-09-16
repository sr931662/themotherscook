import { Star } from './icons'

interface StarRowProps {
  count?: number
  size?: number
  className?: string
}

/** A row of filled rating stars, used in the proof row and review cards. */
export function StarRow({ count = 5, size = 16, className }: StarRowProps) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={size} />
      ))}
    </div>
  )
}
