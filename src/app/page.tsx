import Header from './components/Header/Header'
import PrincipalHero from './components/PrincipalHero'
import AboutSection from './components/AboutSection'
import ClasesSection from './components/ClasesSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

export default function Home() {
  return (
  <>
    <Header />
    <PrincipalHero />
    <AboutSection />
    <ClasesSection />
    <ContactSection />
    <FooterSection />
  </>
  );
}
