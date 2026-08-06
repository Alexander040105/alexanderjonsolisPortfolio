import './TechnicalSkills.css'

const categories = [
  {
    title: 'Frontend Development',
    description:
      'I build responsive, accessible, and modern user interfaces that work across all devices.',
    items: ['React', 'Vite', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'Backend Development',
    description:
      'I build scalable APIs, authentication systems, databases, and backend services that power applications.',
    items: ['FastAPI', 'Flask', 'Supabase', 'Firebase', 'PostgreSQL'],
  },
  {
    title: 'Artificial Intelligence',
    description:
      'I develop AI-powered applications, Retrieval-Augmented Generation (RAG) systems, intelligent assistants, and LLM integrations.',
    items: ['LangChain', 'FAISS', 'Gemini API', 'Hugging Face Transformers', 'Ollama'],
  },
  {
    title: 'Data Science',
    description:
      'I work with machine learning, predictive analytics, data preprocessing, visualization, and model development.',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost'],
  },
]

function TechnicalSkills() {
  return (
    <section id="skills" className="technical-skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {categories.map((category) => (
          <article key={category.title} className="skills-card">
            <h3 className="skills-card-title">{category.title}</h3>
            <p className="skills-card-desc">{category.description}</p>
            <ul className="skills-badges" aria-label={`${category.title} technologies`}>
              {category.items.map((item) => (
                <li key={item} className="skills-badge">{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills
