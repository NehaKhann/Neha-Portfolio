import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
  FaJava,
  FaJsSquare,
  FaNode,
  FaReact,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaDocker,
  FaGit,
  FaChartLine,
  FaCube,
  FaAngular,
  FaLeaf,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiCsharp,
  SiSpring,
  SiQuarkus,
  SiDotnet
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <Carousel>
        <Carousel.Item>
          <div className="skills-grid">
            <div className="skill-item">
              <FaJava className="skill-icon java" />
              <p>Java</p>
            </div>
            <div className="skill-item">
              <FaJsSquare className="skill-icon javascript" />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <FaNode className="skill-icon node" />
              <p>Node.js</p>
            </div>
            <div className="skill-item">
              <FaReact className="skill-icon react" />
              <p>React.js</p>
            </div>
            <div className="skill-item">
              <FaPython className="skill-icon python" />
              <p>Python</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skills-grid">
            <div className="skill-item">
              <FaDatabase className="skill-icon database" />
              <p>SQL & NoSQL</p>
            </div>
            <div className="skill-item">
              <FaChartBar className="skill-icon reporting" />
              <p>BIRT Reporting</p>
            </div>
            <div className="skill-item">
              <FaDocker className="skill-icon docker" />
              <p>Docker</p>
            </div>
            <div className="skill-item">
              <FaGit className="skill-icon git" />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <FaChartLine className="skill-icon grafana" />
              <p>Grafana</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skills-grid">
            <div className="skill-item">
              <SiQuarkus className="skill-icon quarkus" />
              <p>Quarkus</p>
            </div>
            <div className="skill-item">
              <SiDotnet className="skill-icon dotnet" />
              <p>ASP.NET</p>
            </div>
            <div className="skill-item">
              <SiCplusplus className="skill-icon cpp" />
              <p>C++</p>
            </div>
            <div className="skill-item">
              <SiCsharp className="skill-icon csharp" />
              <p>C#</p>
            </div>
            <div className="skill-item">
              <FaCube className="skill-icon ml" />
              <p>Machine Learning</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="skills-grid">
            <div className="skill-item">
              <FaAngular className="skill-icon angular" />
              <p>AngularJS</p>
            </div>
            <div className="skill-item">
              <FaLeaf className="skill-icon spring" />
              <p>Spring Boot</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Skills;
