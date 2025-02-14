import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education"; 
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
