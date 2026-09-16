import type { IconProps } from './types'

export function CookingPot({ size = 28, className, strokeWidth = 1.5 }: IconProps) {
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
      <path d="M4 11h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6z" />
      <path d="M2 11h20M9 7c0-1.5 1-2 1-3.5M14 7c0-1.5 1-2 1-3.5" />
    </svg>
  )
}
