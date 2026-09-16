import type { IconProps } from './types'

export function House({ size = 30, className, strokeWidth = 1.4 }: IconProps) {
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
      <path d="M3 11l9-7 9 7" />
      <path d="M5 9.5V20h14V9.5M10 20v-6h4v6" />
    </svg>
  )
}
