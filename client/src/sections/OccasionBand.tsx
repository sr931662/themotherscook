import styles from './OccasionBand.module.css'
import plateImg from '../assets/plate.jpg'
import { FadeUp } from '../components/FadeUp'
import { FloralAccent } from '../components/FloralAccent'
import { PlaceholderPhoto } from '../components/PlaceholderPhoto'
import { RotatingBadge } from '../components/RotatingBadge'
import { ArrowRight, StarBadge, Truck, Users } from '../components/icons'
import type { StatIcon } from '../data/stats'
import { bandStats } from '../data/stats'
import { useAnchorScroll } from '../hooks/useAnchorScroll'

const statIcons: Record<StatIcon, typeof Users> = {
  users: Users,
  starBadge: StarBadge,
  truck: Truck,
}

export function OccasionBand() {
  const onAnchorClick = useAnchorScroll()

  return (
    <section className={styles.band}>
      <FadeUp as="div" className={`wrap ${styles.grid}`}>
        <div className={styles.imageArea}>
          <div className={styles.backdrop} aria-hidden="true" />
          <FloralAccent className={styles.floralImgTop} />
          <FloralAccent className={styles.floralImgBottom} />
          <RotatingBadge className={styles.badge} />

          <div className={styles.photoLayer}>
            <div className={styles.imgWrap}>
              <PlaceholderPhoto
                label="Photo · a full vegetarian thali with paneer, dal, rice and rotis"
                src={plateImg}
                alt="A full vegetarian thali with paneer, dal, rice and rotis"
                width={1536}
                height={1024}
              />
            </div>
            <div className={styles.tag}>
              <span>Food</span>
              <span>Connects</span>
              <span>Hearts</span>
              <i className={styles.tagLine} aria-hidden="true" />
            </div>
            <div className={styles.pill}>
              Traditional Taste <span className={styles.pillDot} aria-hidden="true" /> Thoughtfully
              Prepared
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <div className={styles.kickerRow}>
            <span className="kicker acc">Made for your moments</span>
            <span className={styles.kickerLine} aria-hidden="true" />
          </div>
          <h2 className="serif">Food for Every Occasion</h2>
          <p>
            From intimate gatherings to large celebrations, our menus are crafted to suit every
            moment with the same care, authenticity and love.
          </p>
          <a className="btn btnPrimary" href="#menus" onClick={onAnchorClick}>
            Explore Menus <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.statsCard}>
          <FloralAccent className={styles.floralStatsLeft} />
          <FloralAccent className={styles.floralStatsRight} />
          <div className={styles.statsList}>
            {bandStats.map((stat) => {
              const Icon = statIcons[stat.icon]
              return (
                <div className={styles.stat} key={stat.label}>
                  <span className="iconCircle">
                    <Icon size={22} />
                  </span>
                  <div>
                    <b>{stat.value}</b>
                    <span>{stat.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </FadeUp>

      <div className="wrap">
        <div className={styles.quoteLine}>
          <span />
          <i>&ldquo;Good food creates better conversations.&rdquo;</i>
          <span />
        </div>
      </div>
    </section>
  )
}
