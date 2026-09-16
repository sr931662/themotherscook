export type FeatIcon = 'leaf' | 'heart' | 'shieldCheck' | 'users'

export interface Feat {
  icon: FeatIcon
  lines: [string, string]
}

export const feats: Feat[] = [
  { icon: 'leaf', lines: ['100%', 'Vegetarian'] },
  { icon: 'heart', lines: ['Home-style', 'Taste'] },
  { icon: 'shieldCheck', lines: ['Hygienic &', 'Sealed Delivery'] },
  { icon: 'users', lines: ['Small gatherings', 'to 500+ guests'] },
]
