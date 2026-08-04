import PropTypes from 'prop-types'
import './Projects.css'

function Certifications(props){
    return(
        <article className="project-card">
            <h3>{props.certTitle || "Certification"}</h3>
            {props.certTagline ? <p className="project-tagline">{props.certTagline}</p> : null}
            <figure className="project-figure">
                {props.certImage ? <img src={props.certImage} alt={props.certTitle} /> : null}
            </figure>
            <p>{props.certDescription || "Certification Description"}</p>
            {props.certLink ? <a href={props.certLink} className="project-link" target="_blank" rel="noopener noreferrer">View Credential <span aria-hidden="true">&rarr;</span></a> : null}
        </article>
    );
}

Certifications.propTypes = {
    certTitle: PropTypes.string,
    certTagline: PropTypes.string,
    certImage: PropTypes.string,
    certDescription: PropTypes.string,
    certLink: PropTypes.string
}

Certifications.defaultProps = {
    certTitle: "Certification",
    certTagline: "Certification Tagline",
    certImage: "",
    certDescription: "Certification Description",
    certLink: ""
}

export default Certifications
