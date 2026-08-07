import { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Team from './components/Team'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { themes } from './themeConfig'

const title = 'ER SKP & Associates | Consulting Engineer & Vastu Expert in Meerut'
const description = 'ER SKP & Associates offers house planning, structural design, interior design, 3D elevation, costing, soil testing, and site supervision in Meerut.'
const imageUrl = 'https://example.com/og-image.jpg'

function App() {
  const themeName = 'goldenBlack'
  const [isGalleryAll, setIsGalleryAll] = useState(false)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    setIsGalleryAll(hash === 'gallery-all')
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      setIsGalleryAll(hash === 'gallery-all')
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const themeVars = useMemo(() => {
    const theme = themes[themeName] || themes.goldenBlack
    return {
      '--bg': theme.bg,
      '--panel': theme.panel,
      '--panel-2': theme['panel-2'],
      '--text': theme.text,
      '--muted': theme.muted,
      '--accent': theme.accent,
      '--accent-2': theme['accent-2'],
      '--accent-soft': theme['accent-soft'],
      '--border': theme.border,
    }
  }, [themeName])

  const themeClassName = themeName === 'goldenBlack' ? 'theme-golden-black' : ''

  return (
    <div className={`min-h-screen bg-[color:var(--bg)] text-[color:var(--text)] ${themeClassName} main-texture`.trim()} style={themeVars}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="civil engineer Meerut, vastu expert Meerut, house planning Meerut, architectural consultancy Meerut" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Helmet>
      <Navbar />
      <main>
        {!isGalleryAll ? (
          <>
            <Hero />
            <Services />
            <Process />
            <Gallery />
            <Team />
            <ContactForm />
          </>
        ) : (
          <Gallery viewAll />
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
