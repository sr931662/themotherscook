import { useRef, useState } from 'react'
import styles from './Navbar.module.css'
import { Logo } from '../components/Logo'
import { Menu, Close, Phone as PhoneIcon, WhatsApp } from '../components/icons'
import { site, telLink, whatsappLink } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useAnchorScroll } from '../hooks/useAnchorScroll'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { useFocusTrap } from '../hooks/useFocusTrap'

const sectionIds = ['top', 'occasions', 'story', 'corporate', 'menus', 'contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const activeId = useActiveSection(sectionIds)
  const onAnchorClick = useAnchorScroll()

  useBodyScrollLock(open)
  useFocusTrap(drawerRef, open, () => setOpen(false))

  const close = () => setOpen(false)

  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <a
          className={styles.brand}
          href="#top"
          aria-label={`${site.name} home`}
          onClick={onAnchorClick}
        >
          <Logo />
          <span className={styles.brandText}>
            <span className={`${styles.brandName} serif`}>{site.name}</span>
            <span className={styles.brandSub}>{site.tagline}</span>
          </span>
        </a>

        <nav className={styles.links} aria-label="Main">
          {site.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.href === `#${activeId}` ? 'active' : ''}
              onClick={onAnchorClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.navRight}>
          <a className={styles.phone} href={telLink()}>
            <PhoneIcon size={18} /> {site.phoneDisplay}
          </a>
          <a className={styles.phoneIcon} href={telLink()} aria-label="Call us">
            <PhoneIcon size={18} />
          </a>
          <a
            className="btn btnPrimary btnSmall"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp size={20} /> Get a quote
          </a>
          <button
            className={styles.menuBtn}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className={styles.overlay} onClick={close} aria-hidden="true" />
          <div
            className={styles.drawer}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className={styles.drawerHead}>
              <span className={`${styles.brandName} serif`}>{site.name}</span>
              <button
                className={styles.drawerClose}
                type="button"
                aria-label="Close menu"
                onClick={close}
              >
                <Close size={24} />
              </button>
            </div>
            <nav className={styles.drawerLinks} aria-label="Mobile">
              {site.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={link.href === `#${activeId}` ? 'active' : ''}
                  onClick={(e) => {
                    onAnchorClick(e)
                    close()
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className={styles.drawerActions}>
              <a className="btn btnOutline" href={telLink()}>
                <PhoneIcon size={18} /> {site.phoneDisplay}
              </a>
              <a className="btn btnPrimary" href={whatsappLink()} target="_blank" rel="noreferrer">
                <WhatsApp size={20} /> Get a quote
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
