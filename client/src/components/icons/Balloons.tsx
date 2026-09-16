import type { IconProps } from './types'

export function Balloons({ size = 30, className, strokeWidth = 1.4 }: IconProps) {
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
      <path d="M4 3h6l-.5 5a2.5 2.5 0 0 1-5 0zM14 3h6l-.5 5a2.5 2.5 0 0 1-5 0zM6.5 10.5V20M17 10.5V20M4 20h5M14.5 20h5" />
    </svg>
  )
}
