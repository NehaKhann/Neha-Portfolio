import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { FaAngular, FaStripe, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiSpring, SiMysql, SiOkta, SiMongodb, SiExpress, SiDotnet } from 'react-icons/si';
import './Work.css';

const projects = [
  {
    title: 'Ecommerce Application',
    description: 'Full Stack E-commerce Application using Angular and Spring Boot. Developed a dynamic product catalog, shopping cart, and secure checkout process with Stripe payment integration. Features robust user authentication and enhanced security measures to ensure a seamless shopping experience.',
    technologies: ['Angular', 'Spring Boot', 'Stripe', 'MySQL', 'Okta'],
    icons: [<FaAngular color="#DD0031" />, <SiSpring color="#6DB33F" />, <FaStripe color="#635BFF" />, <SiMysql color="#00758F" />, <SiOkta color="#007DC1" />],
    githubLink: 'https://github.com/yourusername/ecommerce-application',
  },
  {
    title: 'MERN Stack Application',
    description: 'Developed a blog website using React, Node.js, Express, and MongoDB. Implemented user authentication, registration, and an admin dashboard for efficient content management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    icons: [<FaReact color="#61DBFB" />, <FaNodeJs color="#68A063" />, <SiExpress color="#000000" />, <SiMongodb color="#47A248" />],
    githubLink: 'https://github.com/yourusername/mern-stack-application',
  },
  {
    title: 'Full Stack Web Applications with Angular, ASP.NET Core Web API',
    description: 'Developing a single-page application using Angular and ASP.NET Core Web API. Implementing CRUD operations, authentication, and advanced features like image upload and role-based authorization.',
    technologies: ['Angular', 'ASP.NET Core', 'C#', 'JWT'],
    icons: [<FaAngular color="#DD0031" />, <SiDotnet color="#512BD4" />],
    githubLink: 'https://github.com/yourusername/fullstack-angular-aspnetcore',
  },
];

const technologyOptions = ['All', 'Angular', 'Spring Boot', 'Stripe', 'MySQL', 'Okta', 'React', 'Node.js', 'Express', 'MongoDB', 'ASP.NET Core', 'C#', 'JWT'];

const Work = () => {
  const [selectedTechnology, setSelectedTechnology] = useState('All');

  const handleTechnologyChange = (event) => {
    setSelectedTechnology(event.target.value);
  };

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  const filteredProjects = selectedTechnology === 'All'
    ? projects
    : projects.filter(project =>
        project.technologies.includes(selectedTechnology)
      );

  return (
    <section id="work" className="work-section">
      <h2 className="section-title">Projects</h2>
      <Form.Control as="select" value={selectedTechnology} onChange={handleTechnologyChange} className="technology-dropdown">
        {technologyOptions.map((tech, index) => (
          <option key={index} value={tech}>{tech}</option>
        ))}
      </Form.Control>
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <Card className="project-card" key={index} onClick={() => handleCardClick(project.githubLink)}>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div className="tech-icons">
                {project.icons.map((icon, idx) => (
                  <span key={idx} className="tech-icon">{icon}</span>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Work;
