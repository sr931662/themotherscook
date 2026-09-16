import type { IconProps } from './types'

export function WhatsApp({ size = 20, className, strokeWidth = 1.7 }: IconProps) {
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
      <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" />
      <path d="M9 9.5c.3 2 2.5 4.2 4.5 4.5l1-1.2 1.8.8c-.3 1-1.1 1.6-2 1.6-3 0-6-3-6-6 0-.9.6-1.7 1.6-2l.8 1.8z" />
    </svg>
  )
}
