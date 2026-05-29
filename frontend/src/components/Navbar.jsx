import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="nav-left">
          <a className="brand" href="#home">
            <span className="brand__mark">J</span>
            <span className="brand__text">Jegajeevan</span>
          </a>
        </div>

        <div className="nav-center">
          <nav
            id="primary-navigation"
            className={`nav ${isOpen ? 'nav--open' : ''}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                className="nav__link"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="nav-right">
          <a className="nav__cta" href="#contact">Let’s Connect</a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar