import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-shell">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-form-wrapper">
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
          </div>
          <div className="contact-info">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
