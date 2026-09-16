import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { MobileActionBar } from '../components/MobileActionBar'
import { CTA } from '../sections/CTA'
import { CookingStandards } from '../sections/CookingStandards'
import { Footer } from '../sections/Footer'
import { Hero } from '../sections/Hero'
import { HowToOrder } from '../sections/HowToOrder'
import { Menus } from '../sections/Menus'
import { Navbar } from '../sections/Navbar'
import { OccasionBand } from '../sections/OccasionBand'
import { OccasionStrip } from '../sections/OccasionStrip'
import { Pair } from '../sections/Pair'
import { Reviews } from '../sections/Reviews'
import { Story } from '../sections/Story'

export function Home() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <OccasionStrip />
      <OccasionBand />
      <Story />
      <Pair />
      <CookingStandards />
      <HowToOrder />
      <Menus />
      <Reviews />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
    </div>
  )
}
