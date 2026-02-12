import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="home-section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="home-shell glass-card home-content"
      >
        <div className="home-meta">
          <motion.div 
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="meta-pill-row"
          >
            <span className="meta-pill">{t('home.status')}</span>
            <span className="meta-pill">{t('home.role')}</span>
          </motion.div>
          <header>
            <motion.h1 
              variants={fadeIn('up', 'spring', 0.3, 1)}
              className="main-title"
            >
              {t('home.title')}
            </motion.h1>
            <motion.p 
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="main-subtitle"
            >
              {t('home.subtitle')}
            </motion.p>
          </header>
          <motion.div 
            variants={fadeIn('up', 'tween', 0.5, 1)}
            className="cta-row"
          >
            <a href="#projects" className="primary-cta">
              {t('home.ctaPrimary')}
            </a>
            <a href="#contact" className="secondary-cta">
              <span>●</span> {t('home.ctaSecondary')}
            </a>
          </motion.div>
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
          <motion.div
             variants={fadeIn('left', 'tween', 0.3, 1)}
             className="tilt-wrapper"
             style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <div className="character-orbit" />
            <div className="character-card">
              <img src="/pp.png" alt="" />
            </div>
          </motion.div>
        </Tilt>
      </motion.div>
    </section>
  );
};

export default Home;
