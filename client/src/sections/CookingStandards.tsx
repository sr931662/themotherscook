import styles from './CookingStandards.module.css'
import daalPouringImg from '../assets/daal pouring.jpg'
import { FadeUp } from '../components/FadeUp'
import { PlaceholderPhoto } from '../components/PlaceholderPhoto'
import { standards } from '../data/standards'

export function CookingStandards() {
  return (
    <section className={styles.std}>
      <FadeUp as="div" className={`wrap ${styles.grid}`}>
        <div className={styles.left}>
          <span className="kicker acc">Our Cooking Standards</span>
          <h2 className="h2 serif">
            Cooked the way <span className="script">it should be.</span>
          </h2>
          <p className="lead">
            There is no shortcut to real food. Six rules decide every order we take — whether
            it&rsquo;s 20 plates or 500.
          </p>
          <PlaceholderPhoto
            label="Photo · fresh dal being poured"
            src={daalPouringImg}
            alt="Fresh dal being poured from a ladle into a pot"
            width={1536}
            height={1024}
          />
        </div>

        <div className={styles.list}>
          {standards.map((standard) => (
            <div className={styles.item} key={standard.number}>
              <span className={styles.number}>{standard.number}</span>
              <div>
                <h3 className="serif">{standard.title}</h3>
                <p>{standard.description}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
