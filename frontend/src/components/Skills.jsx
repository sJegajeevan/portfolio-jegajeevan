import { useEffect } from 'react'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'Python'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'REST APIs'],
  },
  {
    title: 'Frameworks',
    items: ['Spring Boot', 'MERN '],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code'],
  },
]

const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Proficient' },
]

function Skills() {
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card')
    if (!cards.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const idx = Number(el.dataset.index || 0)
            el.style.transitionDelay = `${idx * 120}ms`
            el.classList.add('in-view')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    cards.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [])
  return (
    <section className="section" id="skills">
      <div className="container section__header">
        <p className="section__tag">Skills & Languages</p>
        <h2>Tools, languages and platforms I use to build modern web applications.</h2>
      </div>

      <div className="container">
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {languages.map((l) => (
            <div key={l.name} className="skill-chip">
              <strong style={{ display: 'block' }}>{l.name}</strong>
              <small style={{ color: 'var(--muted)' }}>{l.level}</small>
            </div>
          ))}
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <div key={group.title} className="card skill-card" data-index={gi} style={{ padding: '1rem' }}>
              <h3 style={{ marginTop: 0 }}>{group.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.75rem' }}>
                {group.items.map((it) => (
                  <div key={it} className="skill-chip">
                    {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills