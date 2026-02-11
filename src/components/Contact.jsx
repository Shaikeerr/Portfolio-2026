import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Contact = () => {
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
          Contact
        </motion.h2>
        <div className="contact-grid">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="contact-form-wrapper"
          >
            <h3 className="contact-title">Got a project in mind?</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder=" " required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder=" " required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder=" "
                  rows="5"
                  required
                ></textarea>
                <label htmlFor="message">Project Details</label>
              </div>
              <button type="submit" className="submit-button">
                <span>Send</span>
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
            <h4>Contact Details</h4>
            <p>
              Prefer to reach out directly? You can find me here.
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
                  href="https://www.linkedin.com"
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
