import PropTypes from 'prop-types'
import './Links.css'


function Links(props){
    const linkClass = props.socialLink ? "social-link" : props.listName
    return(
        <li className={props.listName}>
            <a href={props.listLink} className={linkClass} target={props.socialLink ? "_blank" : undefined} rel={props.socialLink ? "noopener noreferrer" : undefined}>{props.listLabel ? props.listLabel: <i className={`fab fa-${props.listName.toLowerCase()}`} aria-hidden="true"></i>}</a>
        </li>
    );
}

Links.propTypes = {
    listName:PropTypes.string,
    listLink:PropTypes.string,
    listLabel:PropTypes.string,
    socialLink:PropTypes.bool
}

Links.defaultProps = {
    listName: "List Name",
    listLink: "#",
    listLabel: null,
    socialLink: false
}

export default Links