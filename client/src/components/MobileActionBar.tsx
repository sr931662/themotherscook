import styles from './MobileActionBar.module.css'
import { Phone as PhoneIcon, WhatsApp } from './icons'
import { telLink, whatsappLink } from '../data/site'

/** Sticky bottom Call / Get a quote bar, shown only at mobile widths. */
export function MobileActionBar() {
  return (
    <div className={styles.bar}>
      <a className="btn btnOutline" href={telLink()}>
        <PhoneIcon size={18} /> Call
      </a>
      <a className="btn btnPrimary" href={whatsappLink()} target="_blank" rel="noreferrer">
        <WhatsApp size={20} /> Get a quote
      </a>
    </div>
  )
}
