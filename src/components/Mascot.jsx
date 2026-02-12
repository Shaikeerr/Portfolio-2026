import React, { useEffect, useState } from 'react';
import { useMascot } from '../context/MascotContext';
import './Mascot.css';

const useTypingEffect = (text, isVisible, speed = 30) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (isVisible && text) {
      setDisplayedText(''); // Reset on new text
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    } else if (!isVisible) {
      setDisplayedText('');
    }
  }, [text, isVisible, speed]);

  return displayedText;
};

const Mascot = () => {
  const { isVisible, message, isSpeaking, hide } = useMascot();
  const displayedText = useTypingEffect(message, isVisible);

  return (
    <div className={`mascot-container ${isVisible ? 'visible' : ''}`}>
        <div className="mascot-bubble">
            <p>{displayedText}</p>
        </div>
        <div 
            className={`mascot-avatar ${isSpeaking ? 'speaking' : ''}`}
            onClick={hide}
            aria-label="The Mascot"
        >
            <img src="/Moai.png" alt="Mascot" />
        </div>
    </div>
  );
};

export default Mascot;
