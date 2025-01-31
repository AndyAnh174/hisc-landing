import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Join from './components/Join'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'hacker')
  }, [])

  return (
    <div className="min-h-screen bg-cyber-dark matrix-bg">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Activities />
        <Join />
        <Footer />
      </div>
      <div className="fixed inset-0 bg-gradient-to-b from-cyber-dark/50 to-cyber-dark pointer-events-none"></div>
    </div>
  )
}

export default App
