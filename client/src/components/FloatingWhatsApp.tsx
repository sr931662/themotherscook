import styles from './FloatingWhatsApp.module.css'
import { WhatsApp } from './icons'
import { whatsappLink } from '../data/site'

/** Floating WhatsApp button shown only at tablet widths (mobile uses the sticky bottom bar instead). */
export function FloatingWhatsApp() {
  return (
    <a
      className={styles.float}
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsApp size={28} strokeWidth={1.5} />
    </a>
  )
}
