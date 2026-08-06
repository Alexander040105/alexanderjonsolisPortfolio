import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ExperienceCard from './ExperienceCard.jsx'
import './LeadershipSection.css'

function LeadershipSection({ featuredExperiences }) {
  return (
    <section id="leadership" className="leadership" aria-labelledby="leadership-heading">
      <div className="leadership-header">
        <h2 id="leadership-heading" className="section-title">Leadership & Community Impact</h2>
        <Link to="/experience" className="view-all">View all leadership &amp; impact &rarr;</Link>
      </div>
      <p className="leadership-intro">
        I believe technology creates the greatest value when paired with leadership and community engagement. Beyond software development, I&apos;ve served in student organizations, organized university-wide programs, mentored fellow students, participated in technical competitions, and contributed to initiatives that foster innovation, collaboration, and continuous learning within our academic community.
      </p>
      <ul className="leadership-highlights">
        {featuredExperiences.map((experience, index) => (
          <li key={index} className="leadership-highlight">
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ul>
    </section>
  )
}

LeadershipSection.propTypes = {
  featuredExperiences: PropTypes.array,
}

LeadershipSection.defaultProps = {
  featuredExperiences: [],
}

export default LeadershipSection
