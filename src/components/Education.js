import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaUniversity, FaAward, FaCertificate, FaMedal, FaLaptopCode, FaChartBar, FaCube } from 'react-icons/fa';
import './Education.css';

const educationDetails = [
  {
    title: 'Bachelor of Science in Software Engineering',
    institution: 'NED University of Engineering & Technology',
    period: '2018 - 2022',
    description: 'CGPA: 3.9/4.0',
  },
  {
    title: 'Final Year Project',
    description: 'Developed a predictive maintenance system utilizing an OBD device to collect car sensor data, analyzed with machine learning and AI techniques. The project aimed to predict vehicle faults, monitor car health remotely, and provide solutions via a user-friendly dashboard, enhancing vehicle safety and reducing maintenance costs.',
  },
  {
    title: 'Certifications',
    description: `
      Dec 2021 - App Development Competition Powered by GOODCORE
      Jul 2022 - Participation in Speed Programming Competition
      Nov 2023 - Two Days Training on Data Modeling using AI and Power BI
      Dec 2023 - Three Days Training on Quarkus with MicroProfile and Kubernetes
    `,
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education, Achievements & Certificates</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <div className="carousel-card">
                  <h5 className="card-title"><FaUniversity /> 2018 - 2022</h5>
                  <p className="card-subtitle">NED University of Engineering & Technology</p>
                  <p className="card-text">Bachelor of Science in Software Engineering</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-card">
                  <p className="card-text"><strong>CGPA: 3.876</strong></p>
                  <p className="card-text">Ranked 7th out of 101 students</p>
                  <p className="fyp-text">Developed a predictive maintenance system utilizing an OBD device to collect car sensor data, analyzed with machine learning and AI techniques. The project aimed to predict vehicle faults, monitor car health remotely, and provide solutions via a user-friendly dashboard, enhancing vehicle safety and reducing maintenance costs.</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-4">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <div className="carousel-card">
                  <h5 className="card-title"><FaAward /> Achievements</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-card">
                  <p className="card-text">Secured 2nd position among IT Trainees in recognition of outstanding performance during comprehensive 6-month training program at Bank AL Habib Limited.</p>
                  <p className="card-text">Attained the 7th position in the university, showcasing dedication to academic excellence and commitment to continuous learning.</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-4">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <div className="carousel-card">
                  <h5 className="card-title"><FaCertificate /> Certifications</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-card">
                  <h6 className="cert-date"><FaMedal /> Dec 2021</h6>
                  <p>App Development Competition Powered by GOODCORE</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-card">
                  <h6 className="cert-date"><FaLaptopCode /> Jul 2022</h6>
                  <p>Participation in Speed Programming Competition</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-card">
                  <h6 className="cert-date"><FaChartBar /> Nov 2023</h6>
                  <p>Two Days Training on Data Modeling using AI and Power BI</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-card">
                  <h6 className="cert-date"><FaCube /> Dec 2023</h6>
                  <p>Three Days Training on Quarkus with MicroProfile and Kubernetes</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
