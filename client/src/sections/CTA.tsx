import styles from './CTA.module.css'
import { FadeUp } from '../components/FadeUp'
import { Phone as PhoneIcon, WhatsApp } from '../components/icons'
import { site, telLink, whatsappLink } from '../data/site'

export function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className={`${styles.hand} hand`}>
        More than a meal,
        <br />a blessing ♡
      </div>
      <FadeUp as="div" className={`wrap ${styles.inner}`}>
        <span className="kicker">Plan Your Next Event</span>
        <h2 className="serif">
          Fresh food for your <span className="script">next occasion.</span>
        </h2>
        <p>
          WhatsApp your event date and guest count. We reply with a menu and quote within a few
          hours.
        </p>
        <div className={styles.btns}>
          <a className="btn btnPrimary" href={whatsappLink()} target="_blank" rel="noreferrer">
            <WhatsApp size={20} /> WhatsApp {site.phoneDisplay}
          </a>
          <a className="btn btnLine" href={telLink()}>
            <PhoneIcon size={18} /> Call us
          </a>
        </div>
      </FadeUp>
    </section>
  )
}
