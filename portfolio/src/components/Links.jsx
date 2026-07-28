import PropTypes from 'prop-types'


function Links(props){
    return(
        <ul className={props.listName}>
            <li><a href={props.listLink} target="_blank">{props.listLabel}</a></li>
        </ul>
    );
}

Links.propTypes = {
    listName:PropTypes.string,
    listLink:PropTypes.string,
    listLabel:PropTypes.string
}

Links.defaultProps = {
    listName: "List Name",
    listLink: "#",
    listLabel:" "
}

export default Projects