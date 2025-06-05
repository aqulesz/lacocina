import './App.css'
import Header from './components/Header/Header'
import PrincipalHero from './components/PrincipalHero'
import AboutSection from './components/AboutSection'
import ClasesSection from './components/ClasesSection'
import ContactSection from './components/ContactSection'
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <Helmet>
        <title>La Cocina Formación y Producción Artística - Academia de musica en Córdoba</title>
        <meta
          name="description"
          content="La Cocina Formación y Producción Artística: Academia de música en Córdoba Capital. Clases de guitarra, piano, canto, folclore, violín, bajo, batería y grabación digital."
        />
        <meta name="author" content="La Cocina Formación y Producción Artística - Academia" />
        <meta name="keywords" content="academia de música Córdoba, clases de guitarra, clases de piano, clases de canto, clases de violín, folclore, producción musical, home studio, batería, bajo" />
      </Helmet>

      <Header />
      <PrincipalHero />
      <AboutSection /> 
      <ClasesSection />
      <ContactSection />
    </>
  )
}

export default App
