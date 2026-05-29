import { useEffect } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
    if (!cards.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const idx = Number(el.dataset.index || 0)
            el.style.transitionDelay = `${idx * 100}ms`
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
    <section className="section" id="projects">
      <div className="container section__header">
        <p className="section__tag">Projects</p>
        <h2>A collection of academic and personal projects showcasing frontend and full-stack development skills.</h2>
      </div>
      <div className="container projects__grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects