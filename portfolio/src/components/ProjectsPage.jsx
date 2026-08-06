import PropTypes from 'prop-types'
import ProjectRow from './ProjectRow.jsx'
import './ProjectsPage.css'

function ProjectsPage({ projects, techstack }) {
  return (
    <main id="main-content">
      <section className="projects-page" aria-labelledby="projects-page-title">
        <div className="page-header">
          <h1 id="projects-page-title" className="page-header-title">Projects</h1>
          <p className="page-header-subtitle">
            A collection of applications, data tools, and experiments I have built — from AI-assisted platforms to full-stack web apps.
          </p>
        </div>
        <ul className="projects-page-list">
          {projects.map((project, index) => (
            <li key={index} className="projects-page-list-item">
              <ProjectRow
                project={project}
                techstack={techstack[project.projectTitle] || []}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

ProjectsPage.propTypes = {
  projects: PropTypes.array,
  techstack: PropTypes.object,
}

ProjectsPage.defaultProps = {
  projects: [],
  techstack: {},
}

export default ProjectsPage
