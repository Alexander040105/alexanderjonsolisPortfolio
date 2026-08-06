import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Projects from './Projects.jsx'
import CertificationCarousel from './CertificationCarousel.jsx'

function Home({ homeProjects, techstack, certifications, solisImg, resumePdf }) {
  return (
    <main id="main-content">
      <section id="home" className="hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading">Hello, I&apos;m <span className="highlight">Alexander Jon Solis</span></h1>
        <p className="hero-subtitle">Computer Science Student &amp; Nerd</p>
        <p className="hero-lead">I build data-driven web applications that turn complex problems into clean, accessible, and data-driven user experiences.</p>
        <a href="#about" className="btn">Learn More</a>
      </section>

      <section id="about" className="about" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-title">About Me</h2>
        <article className="about-content">
          <section className="about-text">
            <p>I am a Computer Science student with hands-on experience in full-stack web development, data analysis, and AI-assisted tooling. I enjoy breaking down complex problems into reliable, maintainable systems and building interfaces that make data actionable.</p>
            <p>My work sits at the intersection of software engineering and data science. I am particularly interested in building platforms that process real-world datasets, surface insights through interactive visualizations, and support better decision-making.</p>
            <a href={resumePdf} className="btn" id="downloadBtn" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </section>
          <figure className="about-image">
            <img src={solisImg} alt="Portrait of Alexander Jon Solis, a computer science student and developer." />
          </figure>
        </article>
      </section>

      <section id="projects" className="projects">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <Link to="/projects" className="view-all">View all projects &rarr;</Link>
        </div>
        <ul className="projects-grid">
          {homeProjects.map((project, index) => (
            <li key={index} className="project-item">
              <Projects
                techstack={techstack[project.projectTitle]}
                projectTitle={project.projectTitle}
                projectTagline={project.projectTagline}
                projectImage={project.projectImage}
                projectDescription={project.projectDescription}
                projectLink={project.projectLink}
              />
            </li>
          ))}
        </ul>
      </section>

      <section id="certification" className="projects">
        <h2 className="section-title">Certifications</h2>
        <CertificationCarousel certifications={certifications} />
      </section>
    </main>
  )
}

Home.propTypes = {
  homeProjects: PropTypes.array,
  techstack: PropTypes.object,
  certifications: PropTypes.array,
  solisImg: PropTypes.string,
  resumePdf: PropTypes.string,
}

Home.defaultProps = {
  homeProjects: [],
  techstack: {},
  certifications: [],
  solisImg: '',
  resumePdf: '',
}

export default Home
