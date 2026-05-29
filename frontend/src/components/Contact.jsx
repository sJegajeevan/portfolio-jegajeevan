function Contact() {
  return (
    <section className="section contact-showcase" id="contact">
      <div className="container">
        <h2 className="contact-showcase__title">
          Let&apos;s Contact
        </h2>
        <p className="contact-showcase__lead">
          I&apos;m always excited to discuss new opportunities, innovative projects,
          or just have a conversation about technology and development.
        </p>
        <p className="contact-showcase__sublead">
          Whether you&apos;re looking for a developer, consultant, or collaborator,
          I&apos;d love to hear from you.
        </p>

        <div className="contact-cards" role="list" aria-label="Contact details">
          <article className="contact-card" role="listitem">
            <div className="contact-card__icon contact-card__icon--email" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 6.75H20.25V17.25H3.75V6.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 7.5L12 13.5L19.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Email</h3>
            <a href="mailto:jegajeevan850@gmail.com">jegajeevan850@gmail.com</a>
          </article>

          <article className="contact-card" role="listitem">
            <div className="contact-card__icon contact-card__icon--phone" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99 4.5H9.54C9.93 4.5 10.27 4.77 10.36 5.15L11.02 8.05C11.1 8.38 10.98 8.73 10.71 8.95L9.03 10.35C10 12.55 11.45 14 13.65 14.97L15.05 13.29C15.27 13.02 15.62 12.9 15.95 12.98L18.85 13.64C19.23 13.73 19.5 14.07 19.5 14.46V17.01C19.5 17.56 19.06 18.01 18.51 17.98C10.82 17.5 6.5 13.18 6.02 5.49C5.99 4.94 6.44 4.5 6.99 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Phone</h3>
            <a href="tel:+94773176691">+94 (77) 317-6691</a>
          </article>

          <article className="contact-card" role="listitem">
            <div className="contact-card__icon contact-card__icon--location" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C15.75 16.8 18 14.09 18 10.5C18 7.19 15.31 4.5 12 4.5C8.69 4.5 6 7.19 6 10.5C6 14.09 8.25 16.8 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10.5" r="2" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Location</h3>
            <p>Jaffna, Northern Province Srilanka</p>
          </article>
        </div>

        <div className="contact-socials" aria-label="Social profiles">
          <a className="contact-social" href="https://github.com" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.58 8.84 21.94C9.34 22.04 9.52 21.72 9.52 21.45C9.52 21.2 9.51 20.37 9.5 19.49C6.73 20.11 6.14 18.28 6.14 18.28C5.68 17.08 5.03 16.76 5.03 16.76C4.12 16.13 5.1 16.15 5.1 16.15C6.1 16.22 6.63 17.2 6.63 17.2C7.52 18.77 8.97 18.32 9.54 18.05C9.63 17.39 9.89 16.94 10.18 16.68C7.97 16.42 5.64 15.53 5.64 11.57C5.64 10.44 6.03 9.52 6.67 8.79C6.57 8.53 6.22 7.46 6.77 6.01C6.77 6.01 7.61 5.73 9.5 7.05C10.3 6.82 11.15 6.7 12 6.7C12.85 6.7 13.7 6.82 14.5 7.05C16.39 5.73 17.23 6.01 17.23 6.01C17.78 7.46 17.43 8.53 17.33 8.79C17.97 9.52 18.36 10.44 18.36 11.57C18.36 15.54 16.02 16.41 13.81 16.67C14.17 16.99 14.49 17.62 14.49 18.58C14.49 19.96 14.48 21.08 14.48 21.45C14.48 21.72 14.66 22.05 15.17 21.94C19.13 20.58 22 16.75 22 12.23C22 6.58 17.52 2 12 2Z"/>
            </svg>
            GitHub
          </a>

          <a className="contact-social" href="https://linkedin.com" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.17 3.5 3.31 4.39 3.31 5.46C3.31 6.53 4.17 7.42 5.25 7.42C6.32 7.42 7.19 6.53 7.19 5.46C7.19 4.39 6.33 3.5 5.25 3.5ZM20.69 13.31C20.69 9.94 18.89 8.37 16.5 8.37C14.57 8.37 13.7 9.43 13.22 10.18V8.5H9.84V19.5H13.22V13.86C13.22 12.37 13.5 10.93 15.34 10.93C17.15 10.93 17.18 12.63 17.18 13.95V19.5H20.56V13.31H20.69Z"/>
            </svg>
            LinkedIn
          </a>

          <a className="contact-social" href="https://facebook.com" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M13.5 21V12.82H16.26L16.67 9.63H13.5V7.6C13.5 6.68 13.75 6.05 15.07 6.05H16.78V3.2C15.95 3.11 15.11 3.06 14.28 3.06C11.8 3.06 10.1 4.6 10.1 7.42V9.63H7.33V12.82H10.1V21H13.5Z"/>
            </svg>
            Facebook
          </a>

          <a className="contact-social" href="https://www.instagram.com/jega_jeevan_?igsh=MWtmcHBpZm50ZTRkNA==" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact