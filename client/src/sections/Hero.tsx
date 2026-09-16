import { useState } from 'react'
import styles from './Hero.module.css'
import { PlaceholderPhoto } from '../components/PlaceholderPhoto'
import { StarRow } from '../components/StarRow'
import { VideoModal } from '../components/VideoModal'
import {
  ArrowRight,
  Heart,
  Leaf,
  MapPin,
  Play,
  ShieldCheck,
  Truck,
  Users,
  WhatsApp,
} from '../components/icons'
import type { FeatIcon } from '../data/feats'
import { feats } from '../data/feats'
import { site, whatsappLink } from '../data/site'

const featIcons: Record<FeatIcon, typeof Leaf> = {
  leaf: Leaf,
  heart: Heart,
  shieldCheck: ShieldCheck,
  users: Users,
}

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroImg}>
        <PlaceholderPhoto
          label="Photo · sealed meal boxes with paneer, dal, rice and roti"
          className={styles.placeholder}
        />
        <div className={styles.locationCard}>
          <MapPin size={26} />
          <span>Freshly cooked. Delivered across Delhi, Noida &amp; NCR.</span>
        </div>
      </div>

      <div className="wrap">
        <div className={styles.copy}>
          <span className="kicker">Delhi · Noida · NCR</span>
          <h1 className={`${styles.h1} serif`}>
            Wholesome Food.
            <br />
            Happier Gatherings.
            <br />
            <span className="script">Just Like Home.</span>
            <svg
              className={`${styles.flourish} flourish`}
              viewBox="0 0 380 14"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 11C80 3 220 1 378 4"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <p className={styles.lead}>
            Premium vegetarian catering for Grihapravesh, Pooja, family gatherings, corporate events
            and more. Cooked fresh, packaged with care and delivered at scale — so you can focus on
            your moments, we&rsquo;ll take care of the food.
          </p>

          <div className={styles.feats}>
            {feats.map((feat) => {
              const Icon = featIcons[feat.icon]
              return (
                <div className={styles.feat} key={feat.lines.join(' ')}>
                  <span className="iconCircle">
                    <Icon size={22} />
                  </span>
                  <span>
                    {feat.lines[0]}
                    <br />
                    {feat.lines[1]}
                  </span>
                </div>
              )
            })}
          </div>

          <div className={styles.ctaRow}>
            <a className="btn btnPrimary" href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsApp size={20} /> Get a Catering Quote <ArrowRight size={18} />
            </a>
            <button className={styles.play} type="button" onClick={() => setVideoOpen(true)}>
              <span className={styles.playCircle}>
                <Play size={18} />
              </span>
              <span className={styles.playText}>
                <b>Watch Our Story</b>
                <span>A journey of love and food</span>
              </span>
            </button>
          </div>

          <div className={styles.proof}>
            <div>
              <StarRow count={1} size={20} />
              <span>
                <b>{site.rating}</b> on Google
              </span>
            </div>
            <span className={styles.sep} />
            <div>
              <Users size={22} />
              <span>
                <b>{site.platesServed}</b> plates served
              </span>
            </div>
            <span className={styles.sep} />
            <div>
              <Truck size={22} />
              <span>On-time delivery</span>
            </div>
          </div>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} title="Our Story" />
    </section>
  )
}
