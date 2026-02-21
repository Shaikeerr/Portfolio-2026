import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: '001',
      title: 'OpenFest',
      classification: 'Web app · A11Y',
      descriptionKey: 'projects.openfest.description',
      statusKey: 'projects.openfest.status',
      image: '/Openfest.png',
      technologies: ['React', 'Accessibility', 'Tailwind CSS'],
      githubLink: 'https://github.com/morgan-zarka/OpenFest',
    },
    {
      id: '002',
      title: 'Ohana',
      classification: 'Web App · Visual',
      descriptionKey: 'projects.ohana.description',
      statusKey: 'projects.ohana.status',
      image: '/Ohana.png',
      technologies: ['React', 'Node.js', 'CSS Modules', 'Figma'],
      githubLink: 'https://github.com/Shaikeerr/Ohana',
      link: 'https://www.ohanaffxiv.com',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <motion.h2 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('down', 'tween', 0.2, 1)}
          className="section-title"
        >
          {t('projects.title')}
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="projects-list"
        >
          {projects.map((project, index) => (
            <motion.article 
              variants={fadeIn('up', 'tween', index * 0.2, 1)}
              className="project-entry" 
              key={project.id}
            >
              <header className="project-header">
                <span className="project-id">{project.id}</span>
                <span className="project-classification">{project.classification}</span>
              </header>
              <div className="project-body">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{t(project.descriptionKey)}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <footer className="project-footer">
                <span className="project-status">{t('projects.status')}: {t(project.statusKey)}</span>
                <div className="project-actions">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="github-cta"
                      aria-label={t('projects.viewCode')}
                    >
                      <FaGithub />
                      <span className="github-text">{t('projects.viewCode')}</span>
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-link"
                    >
                      {t('projects.view')}
                    </a>
                  )}
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
