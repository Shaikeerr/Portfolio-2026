import React from 'react';
import './About.css';
import { FaRecordVinyl, FaGamepad, FaPencil, FaGreaterThan } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div className="about-text-content">
            <p>
              I’m Noah Calmette. I build digital spaces that feel less like static pages and more like interactive journeys. I love combining robust React code with experimental, game-inspired design. 
            </p>
            <p>
Whether I’m building a minimalist dashboard or a character-driven landing page, I focus on creating seamless interactions and polished motion to make every digital experience feel truly alive.
            </p>
            <div className="hobbies-section">
              <h4 className="hobbies-title">Off-duty, I'm usually...</h4>
              <ul className="hobbies-list">
                <li><FaGamepad /> Playing Video Games (Especialy Fighting Games, or Indie Games)</li>
                <li><FaRecordVinyl /> Listening to a good vinyl record</li>
                <li><FaPencil /> Learning to draw</li>
                <li><FaGreaterThan /> Maybe all of the above, who knows ?</li>
              </ul>
            </div>
          </div>
          <div className="about-info-cards">
            <div className="info-card">
              <div className="card-header">
                <span className="card-icon" />
                <h4>Core stack</h4>
              </div>
              <ul>
                <li> HTML </li>
                <li>React / Vite</li>
                <li>Modern JavaScript</li>
                <li>CSS animations</li>
                <li>Responsive & accessible UI</li>
                <li> Wordpress</li>
              </ul>
            </div>
            <div className="info-card">
              <div className="card-header">
                <span className="card-icon" />
                <h4>Now</h4>
              </div>
              <div className="now-info-grid">
                <div className="now-info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">France (remote-friendly)</span>
                </div>
                <div className="now-info-item">
                  <span className="info-label">Focus</span>
                  <span className="info-value">Front-end & UI</span>
                </div>
                <div className="now-info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value">Open to collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
