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
import ExperiencePage from './components/ExperiencePage.jsx'
import Links from './components/Links.jsx'
import dataManipulationCert from './assets/certs/dataManipulation-1.png'
import itsHTML from './assets/certs/htmlCSSITS-1.png'
import ic3 from './assets/certs/ic3-1.png'
import sqlCert from './assets/certs/intermediateSQL-1.png'
import itsPython from './assets/certs/pythonITS-1.png'
import dataScienceJobSimulation from './assets/certs/dataScienceJobSimulation.png'
import datacomCert from './assets/certs/DATACOM_FORAGE_CERT-1.png'


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
      projectLink: "https://lumi-frontend-xi.vercel.app/"
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
    },
    {
      certTitle: "Datacom Partnering with AI in the Workplace",
      certTagline: "Datacom / Forage — August 11, 2026",
      certImage: datacomCert,
      certDescription: "Completed Datacom's job simulation on Forage, using generative AI to research, write, design, debug, and present client-ready solutions. Practiced prompt engineering, troubleshooting a website issue, and applying AI output in a professional, non-technical setting.",
      certLink: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/YKTiJKCwxeXG3diLY_gCW7Xki5Y3vNpBmnn_jozTFFqhtkLCXDvKM_1786379278233_completion_certificate.pdf"
    }
  ]

  let experiences = [
    {
      category: 'Leadership Roles',
      title: 'CCS Student Council Secretary',
      tagline: 'College of Computer Studies',
      date: 'S.Y. 2024-2025',
      description: 'Managed council records, authored concept papers, and coordinated cross-department communication for student-led events.',
      responsibilities: ['Leadership', 'Project Management', 'Communication', 'Student Engagement'],
      icon: 'fa-solid fa-users',
    },
    {
      category: 'Leadership Roles',
      title: 'Junior Philippine Computer Society (JPCS) Vice President',
      tagline: 'JPCS — College of Computer Studies',
      date: 'S.Y. 2025-2026',
      description: 'Supported chapter strategy, student engagement, and technical community building across the College of Computer Studies.',
      responsibilities: ['Leadership', 'Strategic Planning', 'Collaboration', 'Student Engagement'],
      icon: 'fa-solid fa-users',
    },
    {
      category: 'Leadership Roles',
      title: 'DALTA Esports Vice President',
      tagline: 'DALTA Esports — University of Perpetual Help System DALTA',
      date: 'S.Y. 2025-2026',
      description: 'Helped lead the university esports organization, driving event operations, tournament planning, and community growth.',
      responsibilities: ['Leadership', 'Event Management', 'Community Building', 'Strategic Planning'],
      icon: 'fa-solid fa-gamepad',
    },
    {
      category: 'Community & University Initiatives',
      title: 'General Orientations & Student Development',
      tagline: 'Academic Year Programs',
      date: 'S.Y. 2024-2025 & 2025-2026',
      description: [
        '2nd Semester General Orientation S.Y. 2024-2025: "Game On: Shaping Your Path in the Evolving World of Information Technology" (Feb 4, 2025) — Authored the concept paper as CCS Secretary.',
        '1st Semester General Orientation S.Y. 2025-2026: "Empowering Digital Minds for a Brighter Tomorrow" (Aug 19, 2025) — Served as emcee and part of the organizing committee.',
        'E.L.I.T.E. (Excellence in Learning, Innovation, Training, and Empowerment) Orientation (Jan 23, 2026) — Organized a program focused on competition readiness and skills development.',
      ],
      responsibilities: ['Concept Paper Author', 'Emcee', 'Program Coordinator'],
      icon: 'fa-solid fa-graduation-cap',
    },
    {
      category: 'Community & University Initiatives',
      title: 'CCS Days & Acquaintance Programs',
      tagline: 'Student Culture & Engagement',
      date: '2024-2025 & 2025-2026',
      description: [
        'CCS Days 2025: "Shaping Learners to Leaders - Innovate, Compete, Succeed!" (Apr 21-23, 2025) — Part of the organizing committee as CCS Secretary.',
        '1st Semester Acquaintance Party S.Y. 2025-2026: "Ping Me Maybe? Now Responding to Friend Requests" (Aug 19, 2025) — Game facilitator and emcee.',
      ],
      responsibilities: ['Organizing Committee', 'Event Facilitator', 'Emcee'],
      icon: 'fa-solid fa-calendar-check',
    },
    {
      category: 'Community & University Initiatives',
      title: 'BJMP Community Outreach & Digital Literacy',
      tagline: 'BJMP Bacoor City',
      date: 'S.Y. 2024-2025',
      description: 'Community Outreach Program Onsite Digital Literacy with AI Integration at BJMP Bacoor City — Authored the concept paper as CCS Secretary, framing a digital-literacy initiative for the community.',
      responsibilities: ['Concept Paper Author', 'Community Outreach', 'Digital Literacy'],
      icon: 'fa-solid fa-hand-holding-heart',
    },
    {
      category: 'Community & University Initiatives',
      title: 'Technical Seminars',
      tagline: 'A2P SMS for Next-Gen IT Solutions',
      date: 'S.Y. 2025-2026',
      description: 'Seminar: "Messaging Matters: Understanding A2P SMS for Next-Gen IT Solutions" (Sep 15, 2025) — Part of the organizing committee and served as emcee, helping frame technical content for the audience.',
      responsibilities: ['Emcee', 'Program Coordinator'],
      icon: 'fa-solid fa-microphone',
    },
    {
      category: 'Community & University Initiatives',
      title: 'Digital Empowerment and Livelihood Program',
      tagline: 'Brgy. Kaysuyo, Alfonso, Cavite',
      date: 'January 22, 2026',
      description: 'Part of the organizing committee for a program that conducted a seminar on Government E-Services, guiding barangay residents on how digital platforms can make everyday transactions more accessible and efficient.',
      responsibilities: ['Organizing Committee', 'Community Outreach', 'Digital Literacy'],
      icon: 'fa-solid fa-hand-holding-heart',
      featured: true,
    },
    {
      category: 'Competitions & Technical Challenges',
      title: '12th I.T. Skills Olympics',
      tagline: 'Web Development Category',
      date: 'November 24, 2023',
      description: 'Competed in the web development category, applying frontend fundamentals and problem-solving under time pressure.',
      responsibilities: ['Web Development', 'Problem Solving', 'Competition'],
      icon: 'fa-solid fa-code',
    },
    {
      category: 'Competitions & Technical Challenges',
      title: '13th I.T. Skills Olympics',
      tagline: 'Web Development — "Augmenting Security Towards the Techno-Utopia"',
      date: 'November 22, 2024',
      description: 'Returned to the web development track, building on past experience to deliver a more polished and secure solution.',
      responsibilities: ['Web Development', 'Security Awareness', 'Competition'],
      icon: 'fa-solid fa-code',
    },
    {
      category: 'Competitions & Technical Challenges',
      title: '14th I.T. Skills Olympics: "Securing the Human Centric Technology"',
      tagline: 'Database / SQL Coding Challenge',
      date: '2025',
      description: 'Competed in the database category, solving an SQL coding challenge within a 2-hour time limit and sharpening query-optimization skills.',
      responsibilities: ['SQL', 'Database', 'Problem Solving', 'Competition'],
      icon: 'fa-solid fa-trophy',
      link: 'https://www.linkedin.com/posts/alexander-jon-solis-2162a727a_itskillsolympics2025-mysql-database-activity-7398343359968440320-GxhT',
      featured: true,
    },
    {
      category: 'Competitions & Technical Challenges',
      title: 'The Hexcore Labs PH University Tournament: "Mission: Learnpossible"',
      tagline: 'Hackathon — n8n Automation',
      date: 'September 17, 2025',
      description: 'Joined the hackathon category and used n8n to automate office tasks such as employee onboarding and task management.',
      responsibilities: ['Automation', 'n8n', 'Hackathon', 'Problem Solving'],
      icon: 'fa-solid fa-trophy',
      link: 'https://www.linkedin.com/posts/alexander-jon-solis-2162a727a_hexcorelabsph-missionlearnpossible-hackathon-activity-7383424168521863168-2kJl',
      featured: true,
    },
    {
      category: 'Esports Operations & Broadcasting',
      title: 'University Week Esports Tournament',
      tagline: 'Call of Duty: Mobile & Mobile Legends',
      date: 'March 11-12, 2025',
      description: 'Part of the organizing committee and served as commentator for Call of Duty: Mobile and Mobile Legends tournaments.',
      responsibilities: ['Tournament Organizer', 'Commentator', 'Event Facilitator', 'Technical Coordination'],
      icon: 'fa-solid fa-gamepad',
    },
    {
      category: 'Esports Operations & Broadcasting',
      title: 'UWeek Esports Cluster Cup Tournament',
      tagline: 'Tekken 8 — Official Shoutcaster',
      date: 'February 18, 2026',
      description: 'Served as official shoutcaster and organizer for the Tekken 8 category, managing competition flow and audience engagement.',
      responsibilities: ['Official Shoutcaster', 'Tournament Organizer', 'Audience Engagement', 'Technical Coordination'],
      icon: 'fa-solid fa-microphone',
      link: 'https://www.linkedin.com/posts/alexander-jon-solis-2162a727a_dalta-jonnn-is-live-official-shoutcaster-activity-7429902670779322368-tstP',
    },
    {
      category: 'Esports Operations & Broadcasting',
      title: 'HUMSS Week 2026 Esports Category',
      tagline: 'Mobile Legends & Tekken 8',
      date: 'May 7, 2026',
      description: 'Organizing committee member, facilitator, and shoutcaster for Mobile Legends and Tekken 8 tournaments.',
      responsibilities: ['Tournament Organizer', 'Event Facilitator', 'Official Shoutcaster', 'Logistics'],
      icon: 'fa-solid fa-gamepad',
    },
    {
      category: 'Esports Operations & Broadcasting',
      title: 'Back 2 Quest 2026',
      tagline: 'Tekken 8 Booth & Tournament',
      date: 'July 14-16, 2026',
      description: 'Organizing committee member and facilitator for the Tekken 8 booth and tournament, handling setup, brackets, and player coordination.',
      responsibilities: ['Tournament Organizer', 'Event Facilitator', 'Logistics', 'Teamwork'],
      icon: 'fa-solid fa-gamepad',
    },
  ]

  const featuredTitles = [
    'The Hexcore Labs PH University Tournament: "Mission: Learnpossible"',
    '14th I.T. Skills Olympics: "Securing the Human Centric Technology"',
    'Digital Empowerment and Livelihood Program',
  ]

  const experienceTitleIndex = Object.fromEntries(featuredTitles.map((title, index) => [title, index]))

  const featuredExperiences = experiences
    .filter((exp) => exp.featured)
    .sort((a, b) => experienceTitleIndex[a.title] - experienceTitleIndex[b.title])

  let navlinks = [
    {
      listName: "nav-links-item",
      listLink: "/",
      listLabel: "Home"
    },
    {
      listName: "nav-links-item",
      listLink: "/projects",
      listLabel: "Projects"
    },
    {
      listName: "nav-links-item",
      listLink: "/experience",
      listLabel: "Leadership"
    },
    {
      listName: "nav-links-item",
      listLink: "/#certification",
      listLabel: "Certifications"
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
              featuredExperiences={featuredExperiences}
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
        <Route
          path="/experience"
          element={
            <ExperiencePage
              experiences={experiences}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
