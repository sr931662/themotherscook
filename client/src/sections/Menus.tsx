import styles from './Menus.module.css'
import { FadeUp } from '../components/FadeUp'
import { VegMark } from '../components/VegMark'
import { ArrowRight } from '../components/icons'
import { menus } from '../data/menus'
import { site, whatsappLink } from '../data/site'

export function Menus() {
  return (
    <section className={styles.menus} id="menus">
      <FadeUp as="div" className={`wrap ${styles.inner}`}>
        <div className="secHead">
          <div className="secHeadCopy">
            <span className="kicker acc">Bulk Menus · Per Plate</span>
            <h2 className="h2 serif">
              Six menus. <span className="script">One standard.</span>
            </h2>
          </div>
          <p className="lead">
            Final pricing depends on menu and guest count. WhatsApp us for an exact quote within a
            few hours.
          </p>
        </div>

        <div className={styles.grid}>
          {menus.map((menu) => {
            const isFeatured = menu.variant === 'featured'
            const isCustom = menu.variant === 'custom'
            return (
              <div
                key={menu.name}
                className={`card ${styles.menu} ${isFeatured ? styles.featured : ''} ${
                  isCustom ? styles.custom : ''
                }`}
              >
                <div className={styles.menuTop}>
                  <span className="kicker">{menu.name}</span>
                  {menu.badge ? <span className="pill">{menu.badge}</span> : <VegMark />}
                </div>
                <div className={styles.price}>
                  {isCustom ? (
                    <b className="script" style={{ fontSize: 44 }}>
                      {menu.price}
                    </b>
                  ) : (
                    <>
                      <b>{menu.price}</b>
                      <span>{menu.priceSuffix}</span>
                    </>
                  )}
                </div>
                <div className="hr" />
                <div className={styles.items}>
                  {menu.items.map((item) => (
                    <div key={item}>
                      <i className="dot" />
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  className="tlink"
                  href={whatsappLink({ occasion: `${menu.name} menu` })}
                  target="_blank"
                  rel="noreferrer"
                >
                  {menu.ctaLabel} <ArrowRight size={18} />
                </a>
              </div>
            )
          })}
        </div>

        <p className={styles.note}>
          Minimum order {site.minPlates} plates · Delivery charges vary by location across NCR ·
          Menus change with the season
        </p>
      </FadeUp>
    </section>
  )
}
