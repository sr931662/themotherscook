/**
 * All copy that will change with real business details lives here.
 * Search this file for "TODO" and bracketed placeholders like [PHONE] before launch.
 */

export interface NavLink {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  tagline: string
  /** Display text exactly as it appears in the design — keep the brackets until filled in. */
  phoneDisplay: string
  /**
   * Digits-only number (country code + number, no symbols) used to build tel:/wa.me links.
   * TODO: replace with the real number once available — wa.me/tel links will not work with this placeholder.
   */
  phoneDigits: string
  email: string
  kitchenAddress: string
  fssaiNumber: string
  serviceAreas: string[]
  rating: string
  reviewCount: string
  platesServed: string
  minPlates: string
  navLinks: NavLink[]
}

export const site: SiteConfig = {
  name: 'The Mothers Cook',
  tagline: 'Healthy · Homely · Hygienic',
  phoneDisplay: '+91 [PHONE]',
  phoneDigits: '91[PHONE]',
  email: '[EMAIL]',
  kitchenAddress: '[KITCHEN ADDRESS]',
  fssaiNumber: '[NUMBER]',
  serviceAreas: ['Delhi', 'Noida', 'Gurugram', 'Ghaziabad'],
  rating: '[4.9]',
  reviewCount: '[COUNT]',
  platesServed: '[100,000+]',
  minPlates: '[MIN PLATES]',
  navLinks: [
    { label: 'Bulk Catering', href: '#occasions' },
    { label: 'Monthly Meals', href: '#menus' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menus' },
    { label: 'Gallery', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ],
}

/** Builds a tel: link from the configured phone number. */
export function telLink(): string {
  return `tel:+${site.phoneDigits.replace(/\D/g, '')}`
}

/**
 * Builds a wa.me link with a prefilled enquiry message.
 * TODO: wire this to a real enquiry API/backend later — for now it only opens WhatsApp.
 */
export function whatsappLink(params?: {
  occasion?: string
  date?: string
  guests?: string
}): string {
  const lines = [`Hi The Mothers Cook, I'd like a catering quote.`]
  if (params?.occasion) lines.push(`Occasion: ${params.occasion}`)
  if (params?.date) lines.push(`Date: ${params.date}`)
  if (params?.guests) lines.push(`Guests: ${params.guests}`)
  const message = encodeURIComponent(lines.join('\n'))
  const digits = site.phoneDigits.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${message}`
}
