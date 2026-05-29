const experience = [
  {
    title: 'IT Undergraduate',
    meta: 'Current',
    description:
      'Studying core computing concepts while building practical web projects and improving development fundamentals.',
  },
  {
    title: 'Frontend Project Builder',
    meta: 'Ongoing',
    description:
      'Designing responsive interfaces, reusable components, and clean layouts for personal and academic work.',
  },
  {
    title: 'MERN Learning Path',
    meta: 'Practice',
    description:
      'Strengthening React, Node.js, Express, and MongoDB skills through hands-on portfolio-style applications.',
  },
]

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container section__header">
        <p className="section__tag">Experience / Education</p>
        <h2>A short timeline of my learning, building, and technical growth.</h2>
      </div>
      <div className="container experience__list">
        {experience.map((item) => (
          <article className="card experience-card" key={item.title}>
            <div className="experience-card__top">
              <h3>{item.title}</h3>
              <span>{item.meta}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience