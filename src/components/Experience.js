import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card experience-card">
              <div className="card-body">
                <h5 className="card-title">Full Stack Web Engineer</h5>
                <p className="card-text head">WOIT SOLUTIONS</p>
                <p className="card-text">May 2022 - Oct 2022</p>
                <p className="card-text">
                  Implemented a chatbot solution for LinkedIn Sales Navigator using Puppeteer. Built dynamic user interfaces with JavaScript. Conducted feedback sessions to improve usability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card experience-card">
              <div className="card-body">
                <h5 className="card-title">Software Engineer</h5>
                <p className="card-text head">BANK AL HABIB LIMITED</p>
                <p className="card-text">Oct 2022 - Present</p>
                <p className="card-text">
                  Transformed monolithic applications into scalable microservices. Developed modular code structures. Led projects including ATM Threads and financial modules. Fostered teamwork in cross-functional teams.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card experience-card">
              <div className="card-body">
                <h5 className="card-title">Full Stack Developer</h5>
                <p className="card-text head">BYTECORP</p>
                <p className="card-text">Feb 2022 - July 2022</p>
                <p className="card-text">
                  Reviewed and debugged code. Contributed to the development of Autilent, enhancing real-time monitoring capabilities using Jetson Nano, Grafana, RabbitMQ, and Python. Evaluated software and hardware interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
