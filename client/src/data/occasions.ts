export type OccasionIcon = 'house' | 'flame' | 'balloons' | 'family' | 'briefcase' | 'building'

export interface Occasion {
  icon: OccasionIcon
  label: string
  href: string
}

export const occasions: Occasion[] = [
  { icon: 'house', label: 'Grihapravesh', href: '#menus' },
  { icon: 'flame', label: 'Pooja & Havan', href: '#menus' },
  { icon: 'balloons', label: 'Birthdays & Anniversaries', href: '#menus' },
  { icon: 'family', label: 'Family Gatherings', href: '#menus' },
  { icon: 'briefcase', label: 'Corporate Events', href: '#corporate' },
  { icon: 'building', label: 'Board Meetings / CXO Dinners', href: '#corporate' },
]
