import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { FaRecordVinyl, FaGamepad, FaPencil, FaGreaterThan } from "react-icons/fa6";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <motion.h2 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('down', 'tween', 0.2, 1)}
          className="section-title"
        >
          {t('about.title')}
        </motion.h2>
        <div className="about-grid">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="about-text-content"
          >
            <p>{t('about.intro')}</p>
            <p>{t('about.description')}</p>
            <div className="hobbies-section">
              <h4 className="hobbies-title">{t('about.hobbiesTitle')}</h4>
              <ul className="hobbies-list">
                <li><FaGamepad /> {t('about.hobbies.gaming')}</li>
                <li><FaRecordVinyl /> {t('about.hobbies.music')}</li>
                <li><FaPencil /> {t('about.hobbies.drawing')}</li>
                <li><FaGreaterThan /> {t('about.hobbies.mixing')}</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="about-info-cards"
          >
            <div className="info-card">
              <div className="card-header">
                <span className="card-icon" />
                <h4>{t('about.coreStack.title')}</h4>
              </div>
              <ul>
                <li>{t('about.coreStack.list.0')}</li>
                <li>{t('about.coreStack.list.1')}</li>
                <li>{t('about.coreStack.list.2')}</li>
                <li>{t('about.coreStack.list.3')}</li>
                <li>{t('about.coreStack.list.4')}</li>
                <li>{t('about.coreStack.list.5')}</li>
              </ul>
            </div>
            <div className="info-card">
              <div className="card-header">
                <span className="card-icon" />
                <h4>{t('about.now.title')}</h4>
              </div>
              <div className="now-info-grid">
                <div className="now-info-item">
                  <span className="info-label">{t('about.now.location.label')}</span>
                  <span className="info-value">{t('about.now.location.value')}</span>
                </div>
                <div className="now-info-item">
                  <span className="info-label">{t('about.now.focus.label')}</span>
                  <span className="info-value">{t('about.now.focus.value')}</span>
                </div>
                <div className="now-info-item">
                  <span className="info-label">{t('about.now.status.label')}</span>
                  <span className="info-value">{t('about.now.status.value')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
