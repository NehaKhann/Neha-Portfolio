import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="main-heading">Neha Khan</h1>
            <h2 className="sub-heading">Software Engineer | Full Stack Developer</h2>
            <a href="#connect" className="btn btn-primary">Let's Connect</a>
          </div>
          {/* <div className="col-md-6">
            <h2 className="info-heading">Full Stack Developer</h2>
            <p className="info-subheading">Check out about me.</p>
            <div className="info-box">
              <p>2 Years Experience</p>
            
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
