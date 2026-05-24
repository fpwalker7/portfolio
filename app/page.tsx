import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import TrustedBySection from '@/components/TrustedBySection'
import AboutSection from '@/components/AboutSection'
import ImpactSection from '@/components/ImpactSection'
import FeaturedWorkSection from '@/components/FeaturedWorkSection'
import SocialProofSection from '@/components/SocialProofSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-grid">
      {/* Radial vignette overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,hsl(220,10%,10%))]" />

      <div className="relative z-10">
        <Nav />

        <main>
          <HeroSection />
          <TrustedBySection />
          <AboutSection />
          <ImpactSection />
          <FeaturedWorkSection />
          <SocialProofSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}
