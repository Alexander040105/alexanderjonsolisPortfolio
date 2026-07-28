import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import lumiImg from './assets/LUMI.png'
import arpsLogo from './assets/ARPSLogo.png'
import autumnAssetsLogo from './assets/AUTUMNASSETS.png'
import './App.css'
import Projects from './components/Projects.jsx'


function App() {
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
      projectTagline: "Farm-finance tracker for Coral Island<",
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
  return (
    <>
      
      {projects.map((project, index) => (
        <Projects key={index} projectTitle={project.projectTitle} projectTagline={project.projectTagline} projectImage={project.projectImage} projectDescription={project.projectDescription} projectLink={project.projectLink}/>
      ))}
    </>
  )
}

export default App
