import styles from './Story.module.css'
import { FadeUp } from '../components/FadeUp'
import { PlaceholderPhoto } from '../components/PlaceholderPhoto'
import { ArrowRight } from '../components/icons'
import { useAnchorScroll } from '../hooks/useAnchorScroll'

export function Story() {
  const onAnchorClick = useAnchorScroll()

  return (
    <section className={styles.story} id="story">
      <FadeUp as="div" className={`wrap ${styles.grid}`}>
        <div className={styles.media}>
          <PlaceholderPhoto label="Photo · mother cooking in her kitchen" />
          <div className={styles.since}>
            <small>Since</small>
            <b>2023 · Noida</b>
          </div>
        </div>

        <div className={styles.copy}>
          <span className="kicker acc">Our Story</span>
          <h2 className="h2 serif">
            It began with a mother who <span className="script">refused to stop caring.</span>
          </h2>
          <p>
            [Founder story — two or three sentences on how the kitchen started, in your own words.]
          </p>
          <p>
            The Mothers Cook still runs on that belief: food for a hundred guests should taste like
            food cooked for one family — the same care, the same ingredients, no shortcuts.
          </p>
          <p className={styles.pull}>
            &ldquo;If I wouldn&rsquo;t serve it at home, it doesn&rsquo;t leave my kitchen.&rdquo;
          </p>
          <a className="tlink" href="#story" onClick={onAnchorClick}>
            Read the full story <ArrowRight size={18} />
          </a>
        </div>
      </FadeUp>
    </section>
  )
}
