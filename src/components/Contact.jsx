import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <motion.h2 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('down', 'tween', 0.2, 1)}
          className="section-title"
        >
          {t('contact.title')}
        </motion.h2>
        <div className="contact-grid">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="contact-form-wrapper"
          >
            <h3 className="contact-title">{t('contact.formTitle')}</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder=" " required />
                <label htmlFor="name">{t('contact.name')}</label>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder=" " required />
                <label htmlFor="email">{t('contact.email')}</label>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder=" "
                  rows="5"
                  required
                ></textarea>
                <label htmlFor="message">{t('contact.message')}</label>
              </div>
              <button type="submit" className="submit-button">
                <span>{t('contact.send')}</span>
                <FiSend className="submit-icon" />
              </button>
            </form>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="contact-info"
          >
            <h4>{t('contact.infoTitle')}</h4>
            <p>
              {t('contact.infoText')}
            </p>
            <ul className="contact-links">
              <li>
                <a href="mailto:contact@shaikeerr.fr">
                  <FiMail className="link-icon" />
                  <span className="link-text">contact@shaikeerr.fr</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shaikeerr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="link-icon" />
                  <span className="link-text">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/noah-calmette/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className="link-icon" />
                  <span className="link-text">LinkedIn</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
