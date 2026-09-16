import { useState } from 'react'
import styles from './Story.module.css'
import kitchenMomImg from '../assets/kitchen mom.jpg'
import { FadeUp } from '../components/FadeUp'
import { FloralAccent } from '../components/FloralAccent'
import { PlaceholderPhoto } from '../components/PlaceholderPhoto'
import { RotatingBadge } from '../components/RotatingBadge'
import { VideoModal } from '../components/VideoModal'
import { ArrowRight, Play } from '../components/icons'
import { useAnchorScroll } from '../hooks/useAnchorScroll'

export function Story() {
  const [videoOpen, setVideoOpen] = useState(false)
  const onAnchorClick = useAnchorScroll()

  return (
    <section className={styles.story} id="story">
      <FadeUp as="div" className={`wrap ${styles.grid}`}>
        <div className={styles.imageArea}>
          <div className={styles.backdrop} aria-hidden="true" />
          <FloralAccent className={styles.floralTop} />
          <FloralAccent className={styles.floralBottom} />
          <RotatingBadge className={styles.badge} />

          <div className={styles.photoLayer}>
            <div className={styles.imgWrap}>
              <PlaceholderPhoto
                label="Photo · mother cooking in her kitchen"
                src={kitchenMomImg}
                alt="A mother cooking in her home kitchen"
                width={1536}
                height={1024}
              />
            </div>
            <div className={styles.since}>
              <small>Since</small>
              <b>2023 · Noida</b>
            </div>
            <div className={styles.pill}>A kitchen rooted in love</div>
          </div>
        </div>

        <div className={styles.copy}>
          <div className={styles.kickerRow}>
            <span className="kicker acc">Our Story</span>
            <span className={styles.kickerLine} aria-hidden="true" />
          </div>
          <h2 className="serif">
            It began with a mother who <span className="script">refused to stop caring.</span>
          </h2>
          <p>
            [Founder story — two or three sentences on how the kitchen started, in your own words.]
          </p>
          <p>
            The Mothers Cook still runs on that belief: food for a hundred guests should taste like
            food cooked for one family — the same care, the same ingredients, no shortcuts.
          </p>

          <figure className={styles.quote}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <div>
              <blockquote>
                &ldquo;If I wouldn&rsquo;t serve it at home, it doesn&rsquo;t leave my
                kitchen.&rdquo;
              </blockquote>
              <figcaption>— Founder, The Mothers Cook</figcaption>
            </div>
          </figure>

          <div className={styles.actions}>
            <a className="btn btnPrimary" href="#story" onClick={onAnchorClick}>
              Read the full story <ArrowRight size={18} />
            </a>
            <button className={styles.play} type="button" onClick={() => setVideoOpen(true)}>
              <span className={styles.playCircle}>
                <Play size={17} />
              </span>
              <span className={styles.playText}>
                <b>Watch Our Story</b>
                <span>A journey of love and food</span>
              </span>
            </button>
          </div>
        </div>
      </FadeUp>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} title="Our Story" />
    </section>
  )
}
