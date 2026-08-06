import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Links.css'


function Links(props){
    const linkClass = props.socialLink ? "social-link" : props.listName
    const linkContent = props.listLabel ? props.listLabel : <i className={`fab fa-${props.listName.toLowerCase()}`} aria-hidden="true"></i>

    return(
        <li className={props.listName}>
            {props.isRouterLink ? (
                <Link to={props.listLink} className={linkClass} onClick={props.onClick}>
                    {linkContent}
                </Link>
            ) : (
                <a href={props.listLink} className={linkClass} target={props.socialLink ? "_blank" : undefined} rel={props.socialLink ? "noopener noreferrer" : undefined} onClick={props.onClick}>
                    {linkContent}
                </a>
            )}
        </li>
    );
}

Links.propTypes = {
    listName:PropTypes.string,
    listLink:PropTypes.string,
    listLabel:PropTypes.string,
    socialLink:PropTypes.bool,
    isRouterLink:PropTypes.bool,
    onClick:PropTypes.func
}

Links.defaultProps = {
    listName: "List Name",
    listLink: "#",
    listLabel: null,
    socialLink: false,
    isRouterLink: false,
    onClick: undefined
}

export default Links