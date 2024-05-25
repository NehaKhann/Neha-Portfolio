import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="overlay"></div>
      <div className="content">
        <div className="text-container">
          <h1>Hello, I am <span className="text-highlight">Neha Khan</span></h1>
          <div className="typing-container">
            <p className="typing-animation">Software Engineer</p>
            <p className="typing-animation delay-1">Full Stack Developer</p>
          </div>
        </div>
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGRldmVsb3BtZW50fGVufDB8fHx8MTYyNTQ3NTc5OA&ixlib=rb-1.2.1&q=80&w=1080" alt="Developer" className="img-fluid rounded-circle" />
        </div>
      </div>
    </section>
  );
};

export default Home;
