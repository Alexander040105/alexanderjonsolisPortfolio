import PropTypes from 'prop-types'
import useInView from '../hooks/useInView.js'
import './ExperienceCard.css'

function ExperienceCard({ experience }) {
  const { ref, isInView } = useInView(0.1)
  const {
    title,
    tagline,
    date,
    description,
    responsibilities = [],
    icon = 'fa-solid fa-circle',
    link,
  } = experience

  return (
    <article
      ref={ref}
      className={`experience-card ${isInView ? 'is-visible' : ''}`}
    >
      <div className="experience-card-icon">
        <i className={icon} aria-hidden="true"></i>
      </div>
      <div className="experience-card-content">
        <div className="experience-card-header">
          <h4 className="experience-card-title">{title}</h4>
          {date && <span className="experience-card-date">{date}</span>}
        </div>
        {tagline && <p className="experience-card-tagline">{tagline}</p>}
        <div className="experience-card-description">
          {Array.isArray(description) ? (
            <ul>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
        {responsibilities.length > 0 && (
          <ul className="experience-card-tags">
            {responsibilities.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-card-link"
            aria-label={`Read more about ${title}`}
          >
            View more <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </article>
  )
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string,
    tagline: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    responsibilities: PropTypes.array,
    icon: PropTypes.string,
    link: PropTypes.string,
  }),
}

ExperienceCard.defaultProps = {
  experience: {},
}

export default ExperienceCard
