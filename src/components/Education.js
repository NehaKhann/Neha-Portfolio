import React from 'react';
import { FaUniversity, FaAward, FaCertificate, FaMedal, FaLaptopCode, FaChartBar, FaCube } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education, Achievements & Certificates</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h5 className="card-title"><FaUniversity /> 2018 - 2022</h5>
                  <p className="card-subtitle">NED University of Engineering & Technology</p>
                  <p className="card-text">Bachelor of Science in Software Engineering</p>
                </div>
                <div className="flip-card-back">
                  <p className="card-text"><strong>CGPA: 3.876</strong></p>
                  <p className="card-text">Ranked 7th out of 101 students</p>
                  <p className="fyp-text">Developed a predictive maintenance system utilizing an OBD device to collect car sensor data, analyzed with machine learning and AI techniques. The project aimed to predict vehicle faults, monitor car health remotely, and provide solutions via a user-friendly dashboard, enhancing vehicle safety and reducing maintenance costs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h5 className="card-title"><FaAward /> Achievements</h5>
                </div>
                <div className="flip-card-back">
                  <p className="card-text">Secured 2nd position among IT Trainees in recognition of outstanding performance during comprehensive 6-month training program at Bank AL Habib Limited.</p>
                  <p className="card-text">Attained the 7th position in the university, showcasing dedication to academic excellence and commitment to continuous learning.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h5 className="card-title"><FaCertificate /> Certifications</h5>
                </div>
                <div className="flip-card-back">
                  <div className="card-text">
                    <h6 className="cert-date"><FaMedal /> 12/2021</h6>
                    <p>App Development Competition Powered by GOODCORE</p>
                  </div>
                  <div className="card-text">
                    <h6 className="cert-date"><FaLaptopCode /> 07/2022</h6>
                    <p>Participation in Speed Programming Competition</p>
                  </div>
                  <div className="card-text">
                    <h6 className="cert-date"><FaChartBar /> 11/2023</h6>
                    <p>Two Days Training on Data Modeling using AI and Power BI</p>
                  </div>
                  <div className="card-text">
                    <h6 className="cert-date"><FaCube /> 12/2023</h6>
                    <p>Three Days Training on Quarkus with MicroProfile and Kubernetes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
