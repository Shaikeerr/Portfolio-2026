import React, { useState, useRef, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Bsod from './components/Bsod';
import Mascot from './components/Mascot';
import useKonamiCode from './hooks/useKonamiCode';
import { useMascot } from './context/MascotContext';
import { useLanguage } from './context/LanguageContext';
import './App.css';

const App = () => {
  const [konamiCount, setKonamiCount] = useState(0);
  const [showBsod, setShowBsod] = useState(false);
  const { say } = useMascot();
  const { t } = useLanguage();

  const activateKonami = () => {
    const newCount = konamiCount + 1;
    setKonamiCount(newCount);

    if (newCount >= 4) {
      setShowBsod(true);
      return;
    }

    if (newCount === 1) {
      say(t('mascot.konami.level1'));
    } else if (newCount === 2) {
      say(t('mascot.konami.level2'));
    } else {
      say(t('mascot.konami.level3'));
    }
  };

  useKonamiCode(activateKonami);

  const closeBsod = () => {
    setShowBsod(false);
    setKonamiCount(0);
  };

  return (
    <Layout>
      <Mascot />
      {showBsod && <Bsod onClose={closeBsod} />}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div id="main-content" className="app-shell">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default App;