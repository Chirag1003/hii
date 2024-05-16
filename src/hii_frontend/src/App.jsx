
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  );
};

export default App;
