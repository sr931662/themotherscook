import type { IconProps } from './types'

export function Play({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 4.5v15l13-7.5z" />
    </svg>
  )
}
