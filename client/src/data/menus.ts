export interface MenuCard {
  name: string
  price: string
  priceSuffix?: string
  items: string[]
  ctaLabel: string
  variant?: 'featured' | 'custom'
  badge?: string
}

export const menus: MenuCard[] = [
  {
    name: 'Essentials',
    price: '₹150',
    priceSuffix: '/ plate',
    items: ['Seasonal sabzi', 'Dal tadka', 'Jeera rice', 'Tawa roti', 'Salad & achaar'],
    ctaLabel: 'Get this quote',
  },
  {
    name: 'Classic',
    price: '₹170–200',
    priceSuffix: '/ plate',
    items: [
      'Paneer curry',
      'Mix veg · dal makhani',
      'Jeera rice',
      'Roti / poori',
      'Raita · salad · sweet',
    ],
    ctaLabel: 'Get this quote',
  },
  {
    name: 'Signature',
    price: '₹250',
    priceSuffix: '/ plate',
    items: [
      'Welcome drink',
      'Shahi paneer',
      'Seasonal sabzi · dal makhani',
      'Veg pulao · naan / poori',
      'Raita · salad · gulab jamun',
    ],
    ctaLabel: 'Get this quote',
    variant: 'featured',
    badge: 'Most loved',
  },
  {
    name: 'Celebration',
    price: '₹280',
    priceSuffix: '/ plate',
    items: [
      'Two starters',
      'Paneer · dal makhani · sabzi',
      'Veg pulao · assorted breads',
      'Raita · salad · papad',
      'Two sweets',
    ],
    ctaLabel: 'Get this quote',
  },
  {
    name: 'Premium',
    price: '₹320',
    priceSuffix: '/ plate',
    items: [
      'Welcome drink · three starters',
      'Two paneer specials',
      'Dal · seasonal sabzi',
      'Pulao · breads basket',
      'Raita · salad · sweets',
    ],
    ctaLabel: 'Get this quote',
  },
  {
    name: 'Bespoke',
    price: 'Your menu',
    items: [
      'Tailored dishes',
      'Live counters on request',
      'Regional & festive specials',
      'Jain & satvik versions',
      '200+ guests',
    ],
    ctaLabel: 'Plan a custom menu',
    variant: 'custom',
  },
]
