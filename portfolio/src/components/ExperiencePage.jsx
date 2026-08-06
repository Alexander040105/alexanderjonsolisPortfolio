import PropTypes from 'prop-types'
import ExperienceCategory from './ExperienceCategory.jsx'
import './ExperiencePage.css'

function ExperiencePage({ experiences }) {
  const categories = [
    { title: 'Leadership Roles', icon: 'fa-solid fa-users' },
    { title: 'Community & University Initiatives', icon: 'fa-solid fa-hands-holding-circle' },
    { title: 'Competitions & Technical Challenges', icon: 'fa-solid fa-trophy' },
    { title: 'Esports Operations & Broadcasting', icon: 'fa-solid fa-gamepad' },
  ]

  const getItems = (category) => experiences.filter((exp) => exp.category === category)

  return (
    <main id="main-content">
      <section className="experience-page" aria-labelledby="experience-page-title">
        <div className="page-header">
          <h1 id="experience-page-title" className="page-header-title">Leadership &amp; Community Impact</h1>
          <p className="page-header-subtitle">
            A story of leadership, collaboration, and technical growth beyond software engineering.
          </p>
        </div>
        <p className="experience-page-intro">
          I believe technology creates the greatest value when paired with leadership and community engagement. Beyond software development, I&apos;ve served in student organizations, organized university-wide programs, mentored fellow students, participated in technical competitions, and contributed to initiatives that foster innovation, collaboration, and continuous learning within our academic community.
        </p>
        {categories.map((cat, index) => (
          <ExperienceCategory
            key={index}
            category={cat.title}
            icon={cat.icon}
            items={getItems(cat.title)}
          />
        ))}
      </section>
    </main>
  )
}

ExperiencePage.propTypes = {
  experiences: PropTypes.array,
}

ExperiencePage.defaultProps = {
  experiences: [],
}

export default ExperiencePage
