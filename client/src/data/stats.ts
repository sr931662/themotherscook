export type StatIcon = 'users' | 'starBadge' | 'truck'

export interface Stat {
  icon: StatIcon
  value: string
  label: string
}

/** Used by the occasion band's stats card. */
export const bandStats: Stat[] = [
  { icon: 'users', value: '[100,000+]', label: 'Plates served' },
  { icon: 'starBadge', value: '[4.9]', label: 'on Google' },
  { icon: 'truck', value: 'On-time', label: 'Delivery' },
]
