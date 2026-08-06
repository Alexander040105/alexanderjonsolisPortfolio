import PropTypes from 'prop-types'
import ExperienceCard from './ExperienceCard.jsx'
import './ExperienceCategory.css'

function ExperienceCategory({ category, icon, items }) {
  return (
    <div className="experience-category">
      <h3 className="experience-category-title">
        <i className={icon} aria-hidden="true"></i> {category}
      </h3>
      <ul className="experience-timeline">
        {items.map((item, index) => (
          <li
            key={index}
            className="experience-timeline-item"
            style={{ '--stagger': index }}
          >
            <span className="experience-timeline-dot"></span>
            <ExperienceCard experience={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

ExperienceCategory.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  items: PropTypes.array,
}

ExperienceCategory.defaultProps = {
  category: '',
  icon: '',
  items: [],
}

export default ExperienceCategory
