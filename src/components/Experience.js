import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2 className="section-title">Experience</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card experience-card">
            <div className="card-body">
              <h5 className="card-title">Full Stack Web Engineer</h5>
              <p className="card-text head">WOIT SOLUTIONS</p>
              <p className="card-text">May 2022 - Oct 2022</p>
              <ul className="card-text">
                <li>Implemented a chatbot solution specifically tailored for LinkedIn Sales Navigator, utilizing Puppeteer for web scraping and interaction automation.</li>
                <li>Utilized JavaScript framework to build dynamic and responsive user interfaces for the chatbot.</li>
                <li>Conducted regular feedback sessions to incorporate user insights and improve the usability of implemented features.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card experience-card">
            <div className="card-body">
              <h5 className="card-title">Software Engineer</h5>
              <p className="card-text head">BANK AL HABIB LIMITED</p>
              <p className="card-text">Oct 2022 - Present</p>
              <ul className="card-text">
                <li>Played a pivotal role in transforming monolithic applications into a scalable microservices architecture.</li>
                <li>Developed modular and efficient code structures, emphasizing good coding practices to ensure maintainability and scalability.</li>
                <li>Led pivotal projects, including ATM Threads, a cash requesting/sending portal, non-financial data capturing, and various financial modules.</li>
                <li>Collaborated seamlessly within cross-functional teams, fostering teamwork and effective communication.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card experience-card">
            <div className="card-body">
              <h5 className="card-title">Full Stack Developer</h5>
              <p className="card-text head">BYTECORP</p>
              <p className="card-text">Feb 2022 - July 2022</p>
              <ul className="card-text">
                <li>Reviewed code, debugged problems, and corrected issues.</li>
                <li>Collaborated in the development and implementation of Autilent, contributing to the system's real-time monitoring capabilities.</li>
                <li>Applied my expertise in Jetson Nano, Grafana, RabbitMQ, and Python to optimize the system's performance and responsiveness.</li>
                <li>Collaborated with fellow engineers to evaluate software and hardware interfaces.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
