import type { IconProps } from './types'

export function Flame({ size = 30, className, strokeWidth = 1.4 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 19c-3-2-4-5-4-8 0-2 1.5-4 4-6 2.5 2 4 4 4 6 0 3-1 6-4 8z" />
      <path d="M8 12c-2-1-4-1-5.5-.5.5 4 4 7.5 9.5 7.5M16 12c2-1 4-1 5.5-.5-.5 4-4 7.5-9.5 7.5" />
    </svg>
  )
}
