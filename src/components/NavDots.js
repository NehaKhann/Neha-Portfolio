import React, { useState, useEffect } from 'react';
import './NavDots.css';

const NavDots = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = ['home', 'experience', 'education', 'skills', 'work', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav-dots">
      <a href="#home" className={`dot ${activeSection === 'home' ? 'active' : ''}`}></a>
      <a href="#experience" className={`dot ${activeSection === 'experience' ? 'active' : ''}`}></a>
      <a href="#education" className={`dot ${activeSection === 'education' ? 'active' : ''}`}></a>
      <a href="#skills" className={`dot ${activeSection === 'skills' ? 'active' : ''}`}></a>
      <a href="#work" className={`dot ${activeSection === 'work' ? 'active' : ''}`}></a>
      <a href="#contact" className={`dot ${activeSection === 'contact' ? 'active' : ''}`}></a>
    </div>
  );
};

export default NavDots;
