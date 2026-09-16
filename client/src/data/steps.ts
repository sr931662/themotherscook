export type StepIcon = 'whatsapp' | 'ticket' | 'cookingPot' | 'box'

export interface Step {
  icon: StepIcon
  number: string
  title: string
  description: string
  isLast?: boolean
}

export const steps: Step[] = [
  {
    icon: 'whatsapp',
    number: 'Step 01',
    title: 'WhatsApp us',
    description: 'Share the date, guest count, occasion and delivery location.',
  },
  {
    icon: 'ticket',
    number: 'Step 02',
    title: 'Receive a quote',
    description: 'A clear menu and per-plate price within hours. No hidden charges.',
  },
  {
    icon: 'cookingPot',
    number: 'Step 03',
    title: 'We cook fresh',
    description: 'Prepared on the day of your event, in small home-style batches.',
  },
  {
    icon: 'box',
    number: 'Step 04',
    title: 'Delivered sealed',
    description: 'Hot, labelled and on time — anywhere across Delhi, Noida and NCR.',
    isLast: true,
  },
]
