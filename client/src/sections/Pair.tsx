import styles from './Pair.module.css'
import { FadeUp } from '../components/FadeUp'
import { PlaceholderPhoto } from '../components/PlaceholderPhoto'
import { ArrowRight, Check, WhatsApp } from '../components/icons'
import type { PanelData } from '../data/pair'
import { corporatePanel, satvikPanel } from '../data/pair'
import { whatsappLink } from '../data/site'

function Panel({
  data,
  tone,
  id,
  occasion,
}: {
  data: PanelData
  tone: 'dark' | 'light'
  id?: string
  occasion: string
}) {
  return (
    <div className={`${styles.panel} ${tone === 'dark' ? styles.dark : styles.light}`} id={id}>
      <PlaceholderPhoto label={data.photoLabel} />
      <div className={styles.body}>
        <span className={`kicker ${data.kickerAccent ? 'acc' : ''}`}>{data.kicker}</span>
        <h2 className="serif">
          {data.headingPlain} <span className="script">{data.headingScript}</span>
        </h2>
        <p>{data.paragraph}</p>
        <div className={styles.ticks}>
          {data.ticks.map((tick) => (
            <div key={tick}>
              <Check size={18} />
              {tick}
            </div>
          ))}
        </div>
        <a
          className={`btn btnSmall ${data.ctaVariant === 'cream' ? 'btnCream' : 'btnPrimary'}`}
          href={whatsappLink({ occasion })}
          target="_blank"
          rel="noreferrer"
        >
          {data.ctaVariant === 'primary' && <WhatsApp size={20} />}
          {data.ctaLabel}
          {data.ctaVariant === 'cream' && <ArrowRight size={18} />}
        </a>
      </div>
    </div>
  )
}

export function Pair() {
  return (
    <section className={styles.pair}>
      <FadeUp as="div" className={`wrap ${styles.grid}`}>
        <Panel data={corporatePanel} tone="dark" id="corporate" occasion="Corporate catering" />
        <Panel data={satvikPanel} tone="light" occasion="Satvik menu" />
      </FadeUp>
    </section>
  )
}
