import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import IndustryInsights from './components/IndustryInsights';
import LinkedInPosts from './components/LinkedInPosts';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <IndustryInsights />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      
      <LinkedInPosts />
      <Contact />
    </>
  );
}

export default App;
