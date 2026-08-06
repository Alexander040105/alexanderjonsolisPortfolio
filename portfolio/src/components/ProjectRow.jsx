import PropTypes from 'prop-types'
import Techstack from './Techstack.jsx'
import './ProjectRow.css'

function ProjectRow({ project, techstack = [] }) {
  const { projectTitle, projectTagline, projectImage, projectDescription, projectLink } = project
  const fallbackInitial = projectTitle ? projectTitle.charAt(0).toUpperCase() : '?'

  return (
    <article className="project-row">
      <div className="project-row-media">
        {projectImage ? (
          <img src={projectImage} alt={projectTitle} />
        ) : (
          <div className="project-row-placeholder" aria-hidden="true">{fallbackInitial}</div>
        )}
      </div>
      <div className="project-row-content">
        <h3>{projectTitle}</h3>
        {projectTagline && <p className="project-row-tagline">{projectTagline}</p>}
        <p className="project-row-description">{projectDescription}</p>
        <Techstack techstack={techstack} techstackKey={projectTitle} />
        {projectLink && (
          <a
            href={projectLink}
            className="project-row-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${projectTitle} project`}
          >
            View Project <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </article>
  )
}

ProjectRow.propTypes = {
  project: PropTypes.shape({
    projectTitle: PropTypes.string,
    projectTagline: PropTypes.string,
    projectImage: PropTypes.string,
    projectDescription: PropTypes.string,
    projectLink: PropTypes.string,
  }),
  techstack: PropTypes.array,
}

ProjectRow.defaultProps = {
  project: {},
  techstack: [],
}

export default ProjectRow
