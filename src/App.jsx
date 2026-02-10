import React, { useState, useRef, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Bsod from './components/Bsod';
import useKonamiCode from './hooks/useKonamiCode';
import './App.css';

const KonamiMessage = ({ message, onEnd }) => {
  useEffect(() => {
    const timer = setTimeout(onEnd, 4000);
    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <div className="konami-message">
      <p>
        <strong>{message}</strong>
      </p>
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = useState([]);
  const [konamiCount, setKonamiCount] = useState(0);
  const [showBsod, setShowBsod] = useState(false);
  const messageId = useRef(0);

  const activateKonami = () => {
    const newCount = konamiCount + 1;
    setKonamiCount(newCount);

    if (newCount >= 4) {
      setShowBsod(true);
      return;
    }

    let message;
    if (newCount === 1) {
      message = 'Konami Code Activated! You found an easter egg. Nice.';
    } else if (newCount === 2) {
      message = "You did it again! You're getting good at this.";
    } else {
      message = "Okay, you're just showing off now. Stop it.";
    }

    const id = messageId.current++;
    setMessages((currentMessages) => [...currentMessages, { id, text: message }]);
  };

  useKonamiCode(activateKonami);

  const removeMessage = (id) => {
    setMessages((currentMessages) =>
      currentMessages.filter((msg) => msg.id !== id)
    );
  };

  const closeBsod = () => {
    setShowBsod(false);
    setKonamiCount(0);
  };

  return (
    <Layout>
      {showBsod && <Bsod onClose={closeBsod} />}
      <div className="konami-messages-container">
        {messages.map((msg) => (
          <KonamiMessage
            key={msg.id}
            message={msg.text}
            onEnd={() => removeMessage(msg.id)}
          />
        ))}
      </div>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div id="main-content" className="app-shell">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default App;