import styles from './Pair.module.css'
import boxesImg from '../assets/boxes.jpg'
import noOnionImg from '../assets/no onion.jpg'
import { FadeUp } from '../components/FadeUp'
import { FloralAccent } from '../components/FloralAccent'
import { PlaceholderPhoto } from '../components/PlaceholderPhoto'
import { ArrowRight, CheckCircle, Leaf, WhatsApp } from '../components/icons'
import type { PanelData } from '../data/pair'
import { corporatePanel, pairIntro, satvikPanel } from '../data/pair'
import { whatsappLink } from '../data/site'

function Panel({
  data,
  tone,
  id,
  occasion,
  photoSrc,
  photoAlt,
  photoWidth,
  photoHeight,
}: {
  data: PanelData
  tone: 'dark' | 'light'
  id?: string
  occasion: string
  photoSrc: string
  photoAlt: string
  photoWidth: number
  photoHeight: number
}) {
  const TickIcon = data.tickIcon === 'leaf' ? Leaf : CheckCircle

  return (
    <div className={`${styles.panel} ${tone === 'dark' ? styles.dark : styles.light}`} id={id}>
      <div className={styles.photo}>
        <PlaceholderPhoto
          label={data.photoLabel}
          src={photoSrc}
          alt={photoAlt}
          width={photoWidth}
          height={photoHeight}
        />
        <div className={styles.photoNote} aria-hidden="true">
          {data.photoNote.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <span className={styles.heart}>♡</span>
        </div>
      </div>

      <div className={styles.body}>
        <span className={`kicker ${data.kickerAccent ? 'acc' : ''}`}>{data.kicker}</span>
        <h3 className="serif">
          {data.headingPlain} <span className="script">{data.headingScript}</span>
        </h3>
        <p>{data.paragraph}</p>

        <div className={styles.ticks}>
          {data.ticks.map((tick) => (
            <div key={tick}>
              <TickIcon size={17} />
              {tick}
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a
            className={`btn btnSmall ${data.ctaVariant === 'cream' ? 'btnCream' : 'btnPrimary'}`}
            href={whatsappLink({ occasion })}
            target="_blank"
            rel="noreferrer"
          >
            {data.ctaVariant === 'primary' && <WhatsApp size={19} />}
            {data.ctaLabel}
            <ArrowRight size={17} />
          </a>
          <span className={styles.footnote} aria-hidden="true">
            <span className={styles.footnoteLine} />
            <span className={styles.footnoteText}>
              {data.footnote[0]}
              <br />
              {data.footnote[1]}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export function Pair() {
  return (
    <section className={styles.pair}>
      <FloralAccent className={styles.floralTopLeft} />
      <FloralAccent className={styles.floralMidLeft} />
      <FloralAccent className={styles.floralBottomLeft} />
      <FloralAccent className={styles.floralTopRight} />
      <FloralAccent className={styles.floralMidRight} />
      <FloralAccent className={styles.floralBottomRight} />

      <FadeUp as="div" className={`wrap ${styles.inner}`}>
        <header className={styles.intro}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerLine} aria-hidden="true" />
            <span className="kicker acc">{pairIntro.kicker}</span>
            <span className={styles.kickerLine} aria-hidden="true" />
          </div>
          <h2 className="serif">
            {pairIntro.headingPlain} <span className="script">{pairIntro.headingScript}</span>
          </h2>
          <p>{pairIntro.paragraph}</p>
        </header>

        <div className={styles.grid}>
          <Panel
            data={corporatePanel}
            tone="dark"
            id="corporate"
            occasion="Corporate catering"
            photoSrc={boxesImg}
            photoAlt="Boxed The Mothers Cook meals on a boardroom table"
            photoWidth={1672}
            photoHeight={941}
          />
          <Panel
            data={satvikPanel}
            tone="light"
            occasion="Satvik menu"
            photoSrc={noOnionImg}
            photoAlt="A satvik thali with diya and marigolds"
            photoWidth={1536}
            photoHeight={1024}
          />
        </div>
      </FadeUp>
    </section>
  )
}
