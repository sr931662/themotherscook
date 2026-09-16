export interface PanelData {
  kicker: string
  kickerAccent?: boolean
  headingPlain: string
  headingScript: string
  paragraph: string
  ticks: string[]
  ctaLabel: string
  ctaVariant: 'cream' | 'primary'
  photoLabel: string
}

export const corporatePanel: PanelData = {
  kicker: 'For Corporates',
  headingPlain: 'Boardroom-grade',
  headingScript: 'vegetarian catering.',
  paragraph:
    'Hygienic, portion-controlled, individually packed meals that arrive on schedule — with GST invoicing for your finance team.',
  ticks: ['Board meetings', 'CSR & CXO dinners', 'Office team lunches', 'Conferences & offsites'],
  ctaLabel: 'Enquire for corporate catering',
  ctaVariant: 'cream',
  photoLabel: 'Photo · boxed meals on a boardroom table',
}

export const satvikPanel: PanelData = {
  kicker: 'Satvik Menu',
  kickerAccent: true,
  headingPlain: 'No onion. No garlic.',
  headingScript: 'No compromise.',
  paragraph:
    'For Navratri, pooja, havan, grihapravesh and every religious occasion — freshly prepared in a dedicated satvik batch, with separate utensils.',
  ticks: ['Navratri vrat thalis', 'Bhog & prasad', 'Jain menus', 'Separate cooking batch'],
  ctaLabel: 'Ask about the satvik menu',
  ctaVariant: 'primary',
  photoLabel: 'Photo · diya, marigolds & satvik thali',
}
