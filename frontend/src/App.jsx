import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const particles = Array.from({ length: 40 }, (_, index) => index)

function App() {
  return (
    <div className="portfolio-shell">
      <div className="animated-bg" aria-hidden="true" />
      <div className="floating-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle}
            className="particle"
            style={{
              width: `${Math.random() * 5 + 1.5}px`,
              height: `${Math.random() * 5 + 1.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 18 + 8}s`,
            }}
          />
        ))}
      </div>
      <Navbar />
      <main>
        <Hero />
        
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
