export interface PanelData {
  kicker: string
  kickerAccent?: boolean
  headingPlain: string
  headingScript: string
  paragraph: string
  ticks: string[]
  tickIcon: 'check' | 'leaf'
  ctaLabel: string
  ctaVariant: 'cream' | 'primary'
  photoLabel: string
  /** Handwritten note set over the photo, one word per line. */
  photoNote: string[]
  /** Small caption printed beside the call to action. */
  footnote: [string, string]
}

export const pairIntro = {
  kicker: 'Catering, with intention',
  headingPlain: 'Different Occasions.',
  headingScript: 'Same Care.',
  paragraph:
    'From boardrooms to pujas, every meal is prepared with the same belief — wholesome food brings people closer.',
}

export const corporatePanel: PanelData = {
  kicker: 'For Corporates',
  headingPlain: 'Boardroom-grade',
  headingScript: 'vegetarian catering.',
  paragraph:
    'Hygienic, portion-controlled, individually packed meals that arrive on schedule — with GST invoicing for your finance team.',
  ticks: ['Board meetings', 'CSR & CXO dinners', 'Office team lunches', 'Conferences & offsites'],
  tickIcon: 'check',
  ctaLabel: 'Enquire for corporate catering',
  ctaVariant: 'cream',
  photoLabel: 'Photo · boxed meals on a boardroom table',
  photoNote: ['Good', 'Food', 'Brighter', 'Meetings'],
  footnote: ['Good food', 'Brighter workdays'],
}

export const satvikPanel: PanelData = {
  kicker: 'Satvik Menu',
  kickerAccent: true,
  headingPlain: 'No onion. No garlic.',
  headingScript: 'No compromise.',
  paragraph:
    'For Navratri, pooja, havan, grihapravesh and every religious occasion — freshly prepared in a dedicated satvik batch, with separate utensils.',
  ticks: ['Navratri vrat thalis', 'Bhog & prasad', 'Jain menus', 'Separate cooking batch'],
  tickIcon: 'leaf',
  ctaLabel: 'Ask about the satvik menu',
  ctaVariant: 'primary',
  photoLabel: 'Photo · diya, marigolds & satvik thali',
  photoNote: ['Pure', 'Ingredients', 'Happier', 'Moments'],
  footnote: ['Traditional taste', 'That brings us together'],
}
