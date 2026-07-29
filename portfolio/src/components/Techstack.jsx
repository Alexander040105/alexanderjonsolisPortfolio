import PropTypes from 'prop-types'
import './Techstack.css'


function Techstack(props){
    return(
        <ul className={props.techstackKey ? "techstack" : ""}>
            {props.techstack.map((tech, index) => (
                <li key={index} className="techstack-item">{tech}</li>
            ))}
        </ul>
    );
}

Techstack.propTypes = {
    techstack:PropTypes.array,
    techstackKey:PropTypes.string
}

Techstack.defaultProps = {
    techstack: [],
    techstackKey: ""
}

export default Techstack