import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import lumiImg from './assets/LUMI.png'
import arpsLogo from './assets/ARPSLogo.png'
import autumnAssetsLogo from './assets/AUTUMNASSETS.png'
import solisImg from './assets/SOLIS.png'
import resumePdf from './assets/Solis_Resume.pdf'
import './App.css'
import Projects from './components/Projects.jsx'
import Links from './components/Links.jsx'
import Techstack from './components/Techstack.jsx'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  let techstack = {
    "LUMI": ["React", "FastAPI", "Supabase", "Python", "FAISS"],
    "EDA Report for Lloyds Banking Group": ["Python", "Pandas", "NumPy", "Matplotlib"],
    "A.R.P.S": ["Godot", "C++"],
    "AutumnAssets": ["VanillaJS","HTML", "CSS", "Firebase"],
    "Champion Performance at Worlds 2024": ["Python", "Pandas", "NumPy", "Matplotlib"],
    "GuideBot": ["Ollama", "Python", "ElectronJS", "LangChain"]
  }
  let projects = [
   {
      projectTitle: "LUMI",
      projectTagline: "Data-Driven Environmental Intelligence for Renewable Energy Decision Support",
      projectImage: lumiImg,
      projectDescription: "LUMI is an AI-assisted environmental intelligence platform that helps users evaluate renewable energy potential for municipalities across the Philippines using real-world climate and environmental data. It combines data engineering, machine learning, geographic visualization, and retrieval-augmented AI to turn environmental data into actionable insights.",
      projectLink: "https://github.com/Alexander040105/Lumi"
    },{
      projectTitle: "EDA Report for Lloyds Banking Group",
      projectTagline: "",
      projectImage: "",
      projectDescription: "Exploratory data analysis on customer churn, identifying key patterns, demographic trends, and behavioral drivers to support strategic retention decisions.",
      projectLink: "https://docs.google.com/document/d/1cu40Zpb6SCpGYf_gl8bLMehHO6hbnQy_PSR5WvmlLP8/edit?usp=sharing"
    },
    {
      projectTitle: "AutumnAssets",
      projectTagline: "Farm-finance tracker for Coral Island",
      projectImage: autumnAssetsLogo,
      projectDescription: "A focused tool for managing farm income, expenses, and crop planning in Coral Island, built to make in-game resource tracking simple and visual.",
      projectLink: "https://autumnassets.netlify.app/"
    },
    {
      projectTitle: "Champion Performance at Worlds 2024",
      projectTagline: "",
      projectImage: "",
      projectDescription: "Analyzed League of Legends Worlds 2024 data to evaluate champion performance, meta trends, win-rate patterns, and strategic picks across competitive matches.",
      projectLink: "https://www.kaggle.com/code/alexanderjonsolis/analyzing-champion-performance-at-worlds-2024"
    },
    {
      projectTitle: "A.R.P.S",
      projectTagline: "",
      projectImage: arpsLogo,
      projectDescription: "An advanced take on Rock-Paper-Scissors built with C++ and the Godot Engine, demonstrating game-state logic, AI opponents, and modular design.",
      projectLink: "https://github.com/Alexander040105/arps-godot/"
    },
    {
      projectTitle: "GuideBot",
      projectTagline: "",
      projectImage: "",
      projectDescription: "Retrieval-Augmented-Generation (RAG) helper for Terraria wiki content — a small project to scrape, index, and query Terraria wiki pages using vector embeddings and a local Chroma DB.",
      projectLink: "https://github.com/Alexander040105/terraria-voice-assistant"
    }
  ]

  let navlinks = [
    {
        listName:"nav-links-item",
        listLink:"#home",
        listLabel:"Home"
    },
    {
        listName:"nav-links-item",
        listLink:"#about",
        listLabel:"About"
    },
    {
        listName:"nav-links-item",
        listLink:"#projects",
        listLabel:"Projects"
    },
    {
        listName:"nav-links-item",
        listLink:"#contacts",
        listLabel:"Contacts"
    }
  ]
  
  let footlinks = [
    {
        listName:"GitHub",
        listLink:"https://github.com/Alexander040105"
    },
    {
        listName:"LinkedIn",
        listLink:"https://linkedin.com/in/alexander-jon-solis-2162a727a"
    },
    {
        listName:"Kaggle",
        listLink:"https://www.kaggle.com/alexanderjonsolis"
    },
    {
        listName:"Instagram",
        listLink:"https://www.instagram.com/jonjonjonjonnn/"
    }
  ]
  return (
    <>
      <header>
        <h1><a href="#home" className="logo">Alexander Jon Solis</a></h1>
        <nav>
          <button className="hamburger" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="nav-links" type="button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar" aria-hidden="true"></span>
            <span className="bar" aria-hidden="true"></span>
            <span className="bar" aria-hidden="true"></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
            {navlinks.map((link, index) => (
              <Links key={index} listName={link.listName} listLink={link.listLink} listLabel={link.listLabel}/>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main-content">
         <section id="home" className="hero" aria-labelledby="hero-heading">
            <h1 id="hero-heading">Hello, I am <span className="highlight">Alexander Jon Solis</span></h1>
            <p className="hero-subtitle">Computer Science Student &amp; Nerd</p>
            <p className="hero-lead">I build data-driven web applications that turn complex problems into clean, accessible, and data-driven user experiences.</p>
            <a href="#projects" className="btn">View My Work</a>
        </section>

        <section id="about" className="about" aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About Me</h2>
            <article className="about-content">
                <section className="about-text">
                    <p>I am a Computer Science student with hands-on experience in full-stack web development, data analysis, and AI-assisted tooling. I enjoy breaking down complex problems into reliable, maintainable systems and building interfaces that make data actionable.</p>
                    <p>My work sits at the intersection of software engineering, data science, and environmental intelligence. I am particularly interested in building platforms that process real-world datasets, surface insights through interactive visualizations, and support better decision-making.</p>
                    <a href={resumePdf} className="btn" id="downloadBtn" target="_blank" rel="noopener noreferrer">Download Resume</a>
                </section>
                <figure className="about-image">
                    <img src={solisImg} alt="Portrait of Alexander Jon Solis, a computer science student and developer." />
                </figure>
            </article>
        </section>
        <section id="projects" className="projects">
          <h2 className="section-title">Featured Projects</h2>
          <ul className="projects-grid">
            {projects.map((project, index) => (
              <li key={index} className="project-item">
                <Projects techstack={techstack[project.projectTitle]} projectTitle={project.projectTitle} projectTagline={project.projectTagline} projectImage={project.projectImage} projectDescription={project.projectDescription} projectLink={project.projectLink}/>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contacts">
          <h2 className="section-title">Get In Touch</h2>
          <address className="contact-content">
            <ul className="contact-info">
              <li className="contact-item">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <a href="mailto:alexanderjonsolis0401@gmail.com">alexanderjonsolis0401@gmail.com</a>
              </li>
            </ul>
            <ul className="social-links" aria-label="Social profiles">
              {footlinks.map((link, index) => (
                <Links key={index} listName={link.listName} listLink={link.listLink} listLabel={link.listLabel} socialLink={true}/>
              ))}
            </ul>
          </address>
          <br />
          <p>&copy; 2026 Alexander Jon S. Solis. All Rights Reserved.</p>
      </footer>
      
      
    </>
  )
}

export default App
