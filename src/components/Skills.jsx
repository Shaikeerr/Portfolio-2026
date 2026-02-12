import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaSass, 
  FaNodeJs, 
  FaGitAlt, 
  FaFigma,
  FaDocker
} from 'react-icons/fa6';
import { 
  SiTailwindcss, 
  SiJest,
  SiVite,
  SiPhp
} from 'react-icons/si';
import { FiMonitor, FiServer, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FiMonitor />,
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
    ]
  },
  {
    title: 'Backend & Database',
    icon: <FiServer />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'PHP', icon:<SiPhp /> },
      {name : 'Supabase', icon: null}
    ]
  },
  {
    title: 'Tools &  \u00A0 Workflow',
    icon: <FiTool />,
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Figma', icon: <FaFigma /> },
    ]
  }
];

const Skills = () => {
  const { t } = useLanguage();

  const getTranslatedTitle = (title) => {
    if (title.includes("Frontend")) return t('skills.frontend');
    if (title.includes("Backend")) return t('skills.backend');
    if (title.includes("Tools")) return t('skills.tools');
    return title;
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-shell">
        <motion.h2 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('down', 'tween', 0.2, 1)}
          className="section-title"
        >
          {t('skills.title')}
        </motion.h2>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.1 }}
          className="skills-grid"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              variants={fadeIn('up', 'tween', index * 0.2, 1)}
              key={index} 
              className="skill-category"
            >
              <div className="category-header">
                <h3 className="category-title">
                  {category.icon}
                  {getTranslatedTitle(category.title)}
                </h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-pill">
                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
