import styles from './Footer.module.css'
import { Logo } from '../components/Logo'
import { site, telLink } from '../data/site'
import { useAnchorScroll } from '../hooks/useAnchorScroll'

export function Footer() {
  const onAnchorClick = useAnchorScroll()

  return (
    <footer className={styles.foot}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <a className={styles.brandRow} href="#top" onClick={onAnchorClick}>
              <Logo size={54} />
              <span className={styles.brandText}>
                <span className={`${styles.brandName} serif`}>{site.name}</span>
                <span className={styles.brandSub}>{site.tagline}</span>
              </span>
            </a>
            <p className={styles.about}>
              Premium home-style vegetarian catering across Delhi, Noida and NCR — cooked fresh,
              delivered sealed.
            </p>
          </div>

          <div className={styles.col}>
            <h4>Explore</h4>
            <a href="#occasions" onClick={onAnchorClick}>
              Bulk Catering
            </a>
            <a href="#menus" onClick={onAnchorClick}>
              Monthly Meals
            </a>
            <a href="#menus" onClick={onAnchorClick}>
              Menu
            </a>
            <a href="#story" onClick={onAnchorClick}>
              Our Story
            </a>
          </div>

          <div className={styles.col}>
            <h4>Occasions</h4>
            <a href="#occasions" onClick={onAnchorClick}>
              Grihapravesh
            </a>
            <a href="#occasions" onClick={onAnchorClick}>
              Pooja &amp; Havan
            </a>
            <a href="#corporate" onClick={onAnchorClick}>
              Corporate
            </a>
            <a href="#occasions" onClick={onAnchorClick}>
              Birthdays
            </a>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <a href={telLink()}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.kitchenAddress}, Noida</span>
          </div>
        </div>

        <div className={styles.base}>
          <span>
            © {new Date().getFullYear()} {site.name} · FSSAI Lic. {site.fssaiNumber}
          </span>
          <span>{site.serviceAreas.join(' · ')}</span>
        </div>
      </div>
    </footer>
  )
}
