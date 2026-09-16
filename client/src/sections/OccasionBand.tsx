import styles from './OccasionBand.module.css'
import { FadeUp } from '../components/FadeUp'
import { PlaceholderPhoto } from '../components/PlaceholderPhoto'
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
        <div className={styles.imgWrap}>
          <PlaceholderPhoto label="Photo · a full vegetarian thali with paneer, dal, rice and rotis" />
          <div className={styles.tag}>
            <span>Food</span>
            <span>Connects</span>
            <span>Hearts</span>
          </div>
        </div>

        <div className={styles.copy}>
          <h2 className="serif">Food for Every Occasion</h2>
          <p>
            From intimate gatherings to large celebrations, our menus are crafted to suit every
            moment with the same care, authenticity and love.
          </p>
          <a className="btn btnOutline btnSmall" href="#menus" onClick={onAnchorClick}>
            Explore Menus <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.stats}>
          {bandStats.map((stat) => {
            const Icon = statIcons[stat.icon]
            return (
              <div className={styles.stat} key={stat.label}>
                <Icon size={30} />
                <div>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              </div>
            )
          })}
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
