import styles from './OccasionStrip.module.css'
import { FadeUp } from '../components/FadeUp'
import { Balloons, Briefcase, Building, FamilyGroup, Flame, House } from '../components/icons'
import type { OccasionIcon } from '../data/occasions'
import { occasions } from '../data/occasions'
import { useAnchorScroll } from '../hooks/useAnchorScroll'

const occasionIcons: Record<OccasionIcon, typeof House> = {
  house: House,
  flame: Flame,
  balloons: Balloons,
  family: FamilyGroup,
  briefcase: Briefcase,
  building: Building,
}

export function OccasionStrip() {
  const onAnchorClick = useAnchorScroll()

  return (
    <section className={styles.occ} id="occasions">
      <FadeUp as="div" className={`wrap ${styles.inner}`}>
        <nav className={styles.list} aria-label="Occasions">
          {occasions.map((occasion) => {
            const Icon = occasionIcons[occasion.icon]
            return (
              <a
                key={occasion.label}
                className={styles.item}
                href={occasion.href}
                onClick={onAnchorClick}
              >
                <Icon size={30} />
                <span>{occasion.label}</span>
              </a>
            )
          })}
        </nav>
        <div className={`${styles.handwritten} hand`}>
          Every Occasion
          <br />
          Tastes Better Together
        </div>
      </FadeUp>
    </section>
  )
}
