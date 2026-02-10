import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-shell glass-card home-content">
        <div className="home-meta">
          <div className="meta-pill-row">
            <span className="meta-pill">Available for work</span>
            <span className="meta-pill">Front‑end / UI</span>
          </div>
          <header>
            <h1 className="main-title">Noah Calmette</h1>
            <p className="main-subtitle">
              French React Developer. Crafting dynamic, expressive interfaces with clean React
              architecture and polished motion.
            </p>
          </header>
          <div className="cta-row">
            <a href="#projects" className="primary-cta">
              Explore my work
            </a>
            <a href="#contact" className="secondary-cta">
              <span>●</span> Let's talk !
            </a>
          </div>
        </div>
        <Tilt
          className="home-character"
          aria-hidden="true"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.1}
          glareBorderRadius="28px"
        >
          <div className="character-orbit" />
          <div className="character-card">
            <img src="/pp.png" alt="" />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Home;
