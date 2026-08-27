import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Projects from './Projects.jsx'
import TechnicalSkills from './TechnicalSkills.jsx'
import CertificationCarousel from './CertificationCarousel.jsx'
import LeadershipSection from './LeadershipSection.jsx'

function Home({ homeProjects, techstack, certifications, featuredExperiences, solisImg, resumePdf }) {
  return (
    <main id="main-content">
      <section id="home" className="hero" aria-labelledby="hero-heading">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-name">Alexander Jon Solis</h1>
          <p className="hero-eyebrow">Full Stack Developer • Data Analyst • Nerd</p>
          <p className="hero-summary">
            Building intelligent web applications powered by artificial intelligence,
            modern software engineering, and data-driven solutions that create meaningful impact.
          </p>
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={resumePdf} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>
          <ul className="hero-socials" aria-label="Social profiles">
            <li>
              <a href="https://github.com/Alexander040105" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/alexander-jon-solis-2162a727a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:alexanderjonsolis0401@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://www.kaggle.com/alexanderjonsolis" target="_blank" rel="noopener noreferrer">Kaggle</a>
            </li>
          </ul>
        </div>
        <figure className="hero-image">
          <img src={solisImg} alt="Portrait of Alexander Jon Solis" />
        </figure>
      </section>

      <TechnicalSkills />

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

      <LeadershipSection featuredExperiences={featuredExperiences} />

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
  featuredExperiences: PropTypes.array,
  solisImg: PropTypes.string,
  resumePdf: PropTypes.string,
}

Home.defaultProps = {
  homeProjects: [],
  techstack: {},
  certifications: [],
  featuredExperiences: [],
  solisImg: '',
  resumePdf: '',
}

export default Home
