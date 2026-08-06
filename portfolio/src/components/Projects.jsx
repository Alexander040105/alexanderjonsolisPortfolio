import PropTypes from 'prop-types'
import Techstack from './Techstack.jsx'
import './Projects.css'

function Projects(props){
    const initial = props.projectTitle ? props.projectTitle.charAt(0).toUpperCase() : '?'

    return(                                                                                                                                                      
        <article className="project-card" id={props.projectId}>
            <h3>{props.projectTitle || "Project"}</h3>
            {props.projectTagline ? <p className="project-tagline">{props.projectTagline}</p> : null}
            <figure className="project-figure">
                {props.projectImage ? (
                    <img src={props.projectImage} alt={props.projectTitle} />
                ) : (
                    <div className="project-figure-placeholder" aria-hidden="true">{initial}</div>
                )}
            </figure>
            <p>{props.projectDescription || "Project Description"}</p>
            <Techstack techstack={props.techstack} techstackKey={props.projectTitle} />
            {props.projectLink && (
                <a href={props.projectLink} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${props.projectTitle} project`}>
                    View Project <span aria-hidden="true">&rarr;</span>
                </a>
            )}
        </article>
    );
}

Projects.propTypes = {
    projectTitle: PropTypes.string,
    projectTagline: PropTypes.string,
    projectImage: PropTypes.string,
    projectDescription: PropTypes.string,
    projectLink: PropTypes.string,
    techstack: PropTypes.array
}

Projects.defaultProps = {
    projectTitle: "Project",
    projectTagline: "Project Tagline",
    projectImage: "",
    projectDescription: "Project Description",
    projectLink: ""
}

export default Projects