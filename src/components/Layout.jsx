import React, { useState, useEffect } from 'react';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { MdTranslate } from "react-icons/md";
import Sidebar from './Sidebar';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useMascot } from '../context/MascotContext';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage, t } = useLanguage();
  const { say } = useMascot();

  const handleThemeToggle = () => {
    toggleTheme();
    if (theme === 'light') {
       say(t('mascot.theme.light'));
    } else {
       say(t('mascot.theme.lightCrazy'));
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`layout ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="fixed-controls">
        <button 
          className="theme-toggle-fixed" 
          onClick={handleThemeToggle}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </button>
        <button 
          className="lang-toggle-fixed" 
          onClick={toggleLanguage}
          aria-label="Toggle Language"
        >
          <MdTranslate />
        </button>
      </div>

      <button 
        className="mobile-menu-trigger" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <FiMenu />
      </button>

      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={toggleSidebar} 
        activeLink={activeSection}
        isMobileOpen={isMobileOpen}
        closeMobile={closeMobileMenu}
      />
      
      {isMobileOpen && (
        <div className="mobile-backdrop" onClick={closeMobileMenu} />
      )}

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
