import React, { useState } from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { FaAngular, FaStripe } from 'react-icons/fa';
import { SiSpring, SiMysql, SiOkta } from 'react-icons/si';
import './Work.css';

const projects = [
  {
    title: 'Ecommerce Application',
    description: 'Full Stack E-commerce Application using Angular and Spring Boot. Developed a dynamic product catalog, shopping cart, and secure checkout process with Stripe payment integration. Features robust user authentication and enhanced security measures to ensure a seamless shopping experience.',
    technologies: ['Angular', 'Spring Boot', 'Stripe', 'MySQL', 'Okta'],
    icons: [<FaAngular color="#DD0031" />, <SiSpring color="#6DB33F" />, <FaStripe color="#635BFF" />, <SiMysql color="#00758F" />, <SiOkta color="#007DC1" />],
    githubLink: 'https://github.com/yourusername/ecommerce-application', // Add your GitHub link here
  },
  // Add more projects here with their respective GitHub links
];

const technologyOptions = ['All', 'Angular', 'Spring Boot', 'Stripe', 'MySQL', 'Okta'];

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
      <Row className="justify-content-center">
        {filteredProjects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="project-card" onClick={() => handleCardClick(project.githubLink)}>
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
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Work;
