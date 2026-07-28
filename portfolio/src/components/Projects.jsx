import PropTypes from 'prop-types'


function Projects(props){
    return(
        <article className="project-card" id={props.projectId}>
            <h3>{props.projectTitle || "Project"}</h3>
            <p>{props.projectTagline || "Project Tagline"}</p>
            <figure>
                <img src={props.projectImage || ""} alt={props.projectTitle} />
            </figure>
            <p>{props.projectDescription || "Project Description"}</p>
            <a href={props.projectLink || "#"} target="_blank">View Project <span aria-hidden="true">&rarr;</span></a>
        </article>
    );
}

Projects.propTypes = {
    projectTitle: PropTypes.string,
    projectTagline: PropTypes.string,
    projectImage: PropTypes.string,
    projectDescription: PropTypes.string,
    projectLink: PropTypes.string
}

Projects.defaultProps = {
    projectTitle: "Project",
    projectTagline: "Project Tagline",
    projectImage: "",
    projectDescription: "Project Description",
    projectLink: ""
}

export default Projects