import type { IconProps } from './types'

export function FamilyGroup({ size = 30, className, strokeWidth = 1.4 }: IconProps) {
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
      <circle cx="7" cy="6.5" r="2.2" />
      <circle cx="17" cy="6.5" r="2.2" />
      <circle cx="12" cy="11" r="1.8" />
      <path d="M3 20v-4a4 4 0 0 1 8 0M13 16a4 4 0 0 1 8 0v4M9.5 20v-2a2.5 2.5 0 0 1 5 0v2" />
    </svg>
  )
}
