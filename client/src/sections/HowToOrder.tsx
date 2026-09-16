import styles from './HowToOrder.module.css'
import { FadeUp } from '../components/FadeUp'
import { ArrowRight, Box, CookingPot, Ticket, WhatsApp } from '../components/icons'
import type { StepIcon } from '../data/steps'
import { steps } from '../data/steps'
import { whatsappLink } from '../data/site'

const stepIcons: Record<StepIcon, typeof WhatsApp> = {
  whatsapp: WhatsApp,
  ticket: Ticket,
  cookingPot: CookingPot,
  box: Box,
}

export function HowToOrder() {
  return (
    <section className={styles.proc}>
      <FadeUp as="div" className={`wrap ${styles.inner}`}>
        <div className="secHead">
          <div className="secHeadCopy">
            <span className="kicker acc">How to Order</span>
            <h2 className="h2 serif">
              Four steps. <span className="script">No app.</span>
            </h2>
          </div>
          <p className="lead">
            No complicated system. One WhatsApp message and we take it from there.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => {
            const Icon = stepIcons[step.icon]
            return (
              <div className={styles.step} key={step.number}>
                <span className={`${styles.stepCircle} ${step.isLast ? styles.last : ''}`}>
                  <Icon size={28} />
                </span>
                <small>{step.number}</small>
                <h3 className="serif">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className={styles.center}>
          <a className="btn btnPrimary" href={whatsappLink()} target="_blank" rel="noreferrer">
            <WhatsApp size={20} /> Start on WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </FadeUp>
    </section>
  )
}
