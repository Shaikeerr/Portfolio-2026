import React from 'react';
import './Projects.css';

const projects = [
  {
    id: '001',
    title: 'OpenFest',
    classification: 'Web app · A11Y',
    description:
      `OpenFest is a dedicated platform that empowers festival organizers to evaluate their event's accessibility. Through a specialized checklist, it provides a transparent way to communicate disability-friendly features, ensuring culture remains accessible to everyone.`,
    image: '/Openfest.png',
    status: 'Live',
    technologies: ['React', 'Accessibility', 'Tailwind CSS'],
  },
  {
    id: '002',
    title: 'Ohana',
    classification: 'Web App · Visual',
    description:
      `Inspired by the vibrant social life of Final Fantasy XIV, I built a dedicated space for the Ohana Café. It’s more than just a website; it's a digital home featuring an interactive menu and a staff directory, supported by a custom back-office to keep the community heart beating.`,
    image: '/Ohana.png',
    status: 'Concept',
    technologies: ['React', 'Node.js', 'CSS Modules', 'Figma'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-entry" key={project.id}>
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
                  <p>{project.description}</p>
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
                <span>Status: {project.status}</span>
                <a href="#" className="view-project-link">
                  View project
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
