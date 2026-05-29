import { useEffect, useRef } from 'react'

function Hero() {
  const particlesRef = useRef(null)
  const photoRef = useRef(null)
  const heroNameRef = useRef(null)

  useEffect(() => {
    // create particles once
    const container = particlesRef.current
    if (!container) return
    const particleCount = 80
    const elems = []
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      const size = Math.random() * 5 + 1.5
      particle.style.width = size + 'px'
      particle.style.height = size + 'px'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      const duration = Math.random() * 18 + 8
      const delay = Math.random() * 5
      particle.style.animation = `floatParticle ${duration}s infinite alternate ease-in-out`
      particle.style.animationDelay = delay + 's'
      particle.style.opacity = (Math.random() * 0.4 + 0.2).toString()
      particle.style.background = 'radial-gradient(circle, rgba(100, 150, 255, 0.7), rgba(50, 80, 180, 0.2))'
      container.appendChild(particle)
      elems.push(particle)
    }

    return () => {
      elems.forEach((el) => el.remove())
    }
  }, [])

  useEffect(() => {
    const photo = photoRef.current
    if (!photo) return
    const handleMove = (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 35
      const yAxis = (window.innerHeight / 2 - e.pageY) / 35
      photo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.02)`
    }
    const handleLeave = () => {
      photo.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'
    }
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  // 3D floating text effect
  useEffect(() => {
    const heroName = heroNameRef.current
    if (!heroName) return
    const handleMove = (e) => {
      const rect = heroName.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const rotateX = (e.pageY - centerY) / 20
      const rotateY = (centerX - e.pageX) / 20
      heroName.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(40px)`
    }
    const handleLeave = () => {
      heroName.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)'
    }
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <>
      <div className="animated-bg" aria-hidden />
      <div ref={particlesRef} className="floating-particles" aria-hidden />

      <section className="section hero" id="home">
        <div className="container">
          <div className="hero" role="region" aria-label="Hero">
            <div className="hero-content">
              <div className="hero-title"><i className="fas fa-code" /> HII THERE!!!.......</div>
              <div className="hero-name-perspective">
                <div ref={heroNameRef} className="hero-name">I am Sivagnanasundaram Jegajeevan</div>
              </div>
              <div className="hero-tagline">Software Engineering Undergraduate ||  MERN Stack Developer  ||  Aspiring Software Engineer</div>
              <div className="hero-buttons">
                <a href="#projects" className="btn-primary"><i className="fas fa-arrow-right" /> View Projects</a>
                <a href="/resume.pdf" className="btn-outline" download><i className="fas fa-download" /> Download Resume</a>
              </div>
              <div className="availability-badge"><i className="fas fa-briefcase" /> Actively looking for internships, freelance projects, and entry-level software engineering roles.</div>
            </div>

            <div className="photo-wrapper">
              <div ref={photoRef} className="photo-placeholder">
                <img src="/jega.jpeg" alt="Sivagnanasundaram Jegajeevan" className="profile-photo" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="education-section">
            <h3 className="education-title"><i className="fas fa-graduation-cap" /> EDUCATION & CERTIFICATIONS</h3>
            <div className="bento-grid">
              <div className="education-card bento-card card-1">
                <h4 className="education-degree">BSc in IT</h4>
                <p className="education-specialization">Specialization in Software Engineering</p>
                <p className="education-institution">SLIIT - Sri Lanka</p>
                <p className="education-period">2024 - Present (Expected 2028)</p>
              </div>
              <div className="education-card bento-card card-2">
                <h4 className="card-title"><i className="fas fa-certificate" /> CERTIFICATES</h4>
                <ul className="card-list">
                  <li><span className="cert-name">AI/ML Engineer Stage-1</span><span className="cert-org">SLIIT -2026</span></li>
                  <li><span className="cert-name">Web Design for Beginners</span><span className="cert-org">University of Moratuwa -2025</span></li>
                </ul>
              </div>
              <div className="education-card bento-card card-3">
                <h4 className="card-title"><i className="fas fa-book" /> RELEVANT COURSEWORK</h4>
                <ul className="card-list">
                  <li>Object Oriented Programming</li>
                  <li>Data Structure & Algorithms</li>
                  <li>AI/ML</li>
                  <li>Probability & Statistics</li>
                  <li>Software Engineering</li>
                  <li>Database Design & Development</li>
                  <li>Data Communication & Networking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero