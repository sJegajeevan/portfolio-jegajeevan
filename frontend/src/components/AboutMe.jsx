function AboutMe() {
  return (
    <section className="section" id="about">
      <div className="container section__header">
        <p className="section__tag">About Me</p>
        <h2>Focused on practical, recruiter-friendly frontend and full-stack work.</h2>
      </div>
      <div className="container about__grid">
        <div className="card about__main">
          <p>
            Motivated IT undergraduate at SLIIT with hands-on experience in full-stack web
            development using the MERN stack. Skilled in building responsive web applications,
            REST APIs, and database-driven systems. Passionate about software engineering,
            problem-solving, and learning modern technologies through academic and personal
            projects.
          </p>
        </div>
        <div className="card about__side">
          <h3>What I value</h3>
          <ul>
            <li>Readable code and reusable components</li>
            <li>Responsive layouts with strong visual hierarchy</li>
            <li>Simple and effective user experiences</li>
            <li>Continuous learning and growth in software development</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe