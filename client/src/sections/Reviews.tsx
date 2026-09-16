import styles from './Reviews.module.css'
import { FadeUp } from '../components/FadeUp'
import { StarRow } from '../components/StarRow'
import { reviews } from '../data/reviews'
import { site } from '../data/site'

export function Reviews() {
  return (
    <section className={styles.rev}>
      <FadeUp as="div" className={`wrap ${styles.inner}`}>
        <div className="secHead">
          <div className="secHeadCopy">
            <span className="kicker acc">What Customers Say</span>
            <h2 className="h2 serif">
              The food <span className="script">speaks for itself.</span>
            </h2>
          </div>
          <div className={styles.ratingRow}>
            <b>{site.rating}</b>
            <div className={styles.ratingMeta}>
              <StarRow className={styles.stars} />
              <span className="muted" style={{ fontSize: 13 }}>
                on Google · {site.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <figure className={`card ${styles.review}`} key={review.initial}>
              <StarRow className={styles.stars} />
              <blockquote>{review.quote}</blockquote>
              <figcaption className={styles.who}>
                <span className={styles.avatar}>{review.initial}</span>
                <div>
                  <b>{review.name}</b>
                  <span>{review.meta}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
