import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Routes, Route, useLocation } from 'react-router-dom'
import lumiImg from './assets/LUMI.png'
import arpsLogo from './assets/ARPSLogo.png'
import autumnAssetsLogo from './assets/AUTUMNASSETS.png'
import aeltaImg from './assets/AeltaHeroPage.jpg'
import solisImg from './assets/SOLIS.png'
import resumePdf from './assets/Solis_Resume.pdf'
import './App.css'
import Home from './components/Home.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import Links from './components/Links.jsx'
import dataManipulationCert from './assets/certs/dataManipulation-1.png'
import itsHTML from './assets/certs/htmlCSSITS-1.png'
import ic3 from './assets/certs/ic3-1.png'
import sqlCert from './assets/certs/intermediateSQL-1.png'
import itsPython from './assets/certs/pythonITS-1.png'
import dataScienceJobSimulation from './assets/certs/dataScienceJobSimulation.png'


function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'auto' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  let techstack = {
    "LUMI": ["React", "FastAPI", "Supabase", "Python", "FAISS"],
    "EDA Report for Lloyds Banking Group": ["Python", "Pandas", "NumPy", "Matplotlib"],
    "A.R.P.S": ["Godot", "C++"],
    "AutumnAssets": ["VanillaJS", "HTML", "CSS", "Firebase"],
    "Champion Performance at Worlds 2024": ["Python", "Pandas", "NumPy", "Matplotlib"],
    "GuideBot": ["Ollama", "Python", "ElectronJS", "LangChain"],
    "Aelta": ["HTML", "CSS", "JavaScript", "Data Analytics", "Generative AI"],
    "Human Resources Management System": ["Flask", "MySQL", "Python"]
  }

  let projects = [
    {
      projectTitle: "LUMI",
      projectTagline: "Data-Driven Environmental Intelligence for Renewable Energy Decision Support",
      projectImage: lumiImg,
      projectDescription: "LUMI is an AI-assisted environmental intelligence platform that helps users evaluate renewable energy potential for municipalities across the Philippines using real-world climate and environmental data. It combines data engineering, machine learning, geographic visualization, and retrieval-augmented AI to turn environmental data into actionable insights.",
      projectLink: "https://github.com/Alexander040105/Lumi"
    },
    {
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
      projectTitle: "Aelta",
      projectTagline: "Altea Resort Booking System",
      projectImage: aeltaImg,
      projectDescription: "Aelta is a web-based self-booking and confirmation system designed for Altea Private Resort, built to streamline reservations and improve overall operational efficiency. It integrates data analytics and generative AI to deliver smarter insights, enhance user experience, and support better decision-making.",
      projectLink: "https://altea-resort-booking-system.onrender.com/home/"
    },
    {
      projectTitle: "Human Resources Management System",
      projectTagline: "Flask + MySQL HRMS",
      projectImage: "",
      projectDescription: "A comprehensive web-based Human Resources Management System built with Flask and MySQL, designed to streamline employee management, leave requests, and administrative operations.",
      projectLink: "https://github.com/Alexander040105/Human-Resources-Management-System"
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

  const featuredProjectTitles = ["LUMI", "EDA Report for Lloyds Banking Group", "AutumnAssets"]
  const titleIndex = Object.fromEntries(featuredProjectTitles.map((title, index) => [title, index]))
  const featuredProjects = projects
    .filter(project => featuredProjectTitles.includes(project.projectTitle))
    .sort((a, b) => titleIndex[a.projectTitle] - titleIndex[b.projectTitle])

  let certifications = [
    {
      certTitle: "Data Manipulation with Pandas",
      certTagline: "DataCamp — July 23, 2025",
      certImage: dataManipulationCert,
      certDescription: "Completed DataCamp’s 4-hour Statement of Accomplishment covering data cleaning, transformation, aggregation, and analysis with pandas.",
      certLink: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9f45e5b955656799be2ae28a61b4301fc9a14c5f"
    },
    {
      certTitle: "HTML and CSS (ITS)",
      certTagline: "Certiport / Pearson VUE — January 12, 2024",
      certImage: itsHTML,
      certDescription: "Earned the Information Technology Specialist certification in HTML and CSS, validating proficiency in web page structure and styling.",
      certLink: "https://verify.certiport.com/?code=vqBa-DwVk"
    },
    {
      certTitle: "IC3 GS6 Level 1",
      certTagline: "Certiport / Pearson VUE — May 30, 2024",
      certImage: ic3,
      certDescription: "Earned Certiport’s IC3 Global Standard Six Level 1 certification covering technology basics, digital citizenship, information management, content creation, communication, collaboration, and safety and security.",
      certLink: "https://verify.certiport.com/?code=vz2H-uTdJ"
    },
    {
      certTitle: "Intermediate SQL",
      certTagline: "DataCamp — October 20, 2025",
      certImage: sqlCert,
      certDescription: "Completed DataCamp’s 4-hour Intermediate SQL course, focusing on joins, subqueries, aggregation, and advanced querying techniques.",
      certLink: "https://www.datacamp.com/completed/statement-of-accomplishment/course/d8eb1b36e0a572ef129bc092648189fb4f1925be"
    },
    {
      certTitle: "Python (ITS)",
      certTagline: "Certiport / Pearson VUE — March 14, 2026",
      certImage: itsPython,
      certDescription: "Earned the Information Technology Specialist certification in Python, demonstrating foundational programming skills and problem-solving with Python.",
      certLink: "https://verify.certiport.com/?code=yuDk-uT6C"
    },
    {
      certTitle: "Data Science Job Simulation",
      certTagline: "Lloyds Banking Group / Forage — December 6, 2025",
      certImage: dataScienceJobSimulation,
      certDescription: "Completed Forage's Data Science Job Simulation in partnership with Lloyds Banking Group, covering data gathering, exploratory analysis, and building a machine learning model.",
      certLink: "https://www.theforage.com/completion-certificates/Zbnc2o4ok6kD2NEXx/EuvC8GPjkZ6xaiP9p_Zbnc2o4ok6kD2NEXx_jozTFFqhtkLCXDvKM_1765014608513_completion_certificate.pdf"
    }
  ]

  let navlinks = [
    {
      listName: "nav-links-item",
      listLink: "/",
      listLabel: "Home"
    },
    {
      listName: "nav-links-item",
      listLink: "/#about",
      listLabel: "About"
    },
    {
      listName: "nav-links-item",
      listLink: "/projects",
      listLabel: "Projects"
    },
    {
      listName: "nav-links-item",
      listLink: "/#certification",
      listLabel: "Certifications"
    },
    {
      listName: "nav-links-item",
      listLink: "/#contacts",
      listLabel: "Contacts"
    }
  ]

  let footlinks = [
    {
      listName: "GitHub",
      listLink: "https://github.com/Alexander040105"
    },
    {
      listName: "LinkedIn",
      listLink: "https://linkedin.com/in/alexander-jon-solis-2162a727a"
    },
    {
      listName: "Kaggle",
      listLink: "https://www.kaggle.com/alexanderjonsolis"
    },
    {
      listName: "Instagram",
      listLink: "https://www.instagram.com/jonjonjonjonnn/"
    }
  ]

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToHash />
      <header className="site-header">
        <nav>
          <button className="hamburger" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="nav-links" type="button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar" aria-hidden="true"></span>
            <span className="bar" aria-hidden="true"></span>
            <span className="bar" aria-hidden="true"></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
            {navlinks.map((link, index) => (
              <Links
                key={index}
                listName={link.listName}
                listLink={link.listLink}
                listLabel={link.listLabel}
                isRouterLink={true}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeProjects={featuredProjects}
              techstack={techstack}
              certifications={certifications}
              solisImg={solisImg}
              resumePdf={resumePdf}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <ProjectsPage
              projects={projects}
              techstack={techstack}
            />
          }
        />
      </Routes>
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
              <Links
                key={index}
                listName={link.listName}
                listLink={link.listLink}
                listLabel={link.listLabel}
                socialLink={true}
                isRouterLink={false}
              />
            ))}
          </ul>
        </address>
        <br />
      </footer>
    </>
  )
}

export default App
