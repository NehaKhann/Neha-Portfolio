import React from 'react';
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Connect.css';

const Connect = () => {
  return (
    <section id="connect" className="connect-section">
      <h2 className="section-title">Connect with Me</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 connect-item">
            <a href="https://www.linkedin.com/in/neha-khann/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} color="#0077B5" className="connect-icon" />
              <p>Connect on LinkedIn</p>
            </a>
          </div>
          <div className="col-md-4 connect-item">
            <a href="mailto:n.neha.khan333@gmail.com">
              <FaEnvelope size={50} color="#D44638" className="connect-icon" />
              <p>Email: n.neha.khan333@gmail.com</p>
            </a>
          </div>
          <div className="col-md-4 connect-item">
            <a href="/resume.pdf" download>
              <FaDownload size={50} color="#ff6f61" className="connect-icon" />
              <p>Download Resume</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
