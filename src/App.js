import React from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Work from './components/Work';
import NavDots from './components/NavDots';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="#home">Neha Khan</Navbar.Brand>
          <div className="contact-info">
            <a href="https://www.linkedin.com/in/neha-khann/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="contact-icon" />
            </a>
            <a href="mailto:n.neha.khan333@gmail.com">
              <FaEnvelope className="contact-icon" />
            </a>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <NavDots />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
