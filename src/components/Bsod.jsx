import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const useTypingEffect = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (text) {
      let i = 0;
      setDisplayedText('');
      const typingInterval = setInterval(() => {
        if (i <= text.length) {
          setDisplayedText(text.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [text, speed]);

  return displayedText;
};

const Bsod = ({ onClose }) => {
  const { t } = useLanguage();
  const [bubble, setBubble] = useState({ active: false, text: '' });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const displayedQuote = useTypingEffect(bubble.text);

  const showBubble = useCallback(() => {
    if (isSpeaking) return;

    const quotes = t('mascot.bsod.quotes');
    const availableQuotes = Array.isArray(quotes) ? quotes : ["..."];
    
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const newQuote = availableQuotes[randomIndex];

    setBubble({ active: true, text: newQuote });
    setIsSpeaking(true);
  }, [isSpeaking, t]);

  useEffect(() => {
    if (!isSpeaking) return;

    const totalTypingTime = bubble.text.length * 50;
    
    const speakingTimer = setTimeout(() => {
      setIsSpeaking(false);
    }, totalTypingTime);

    const bubbleTimer = setTimeout(() => {
      setBubble({ active: false, text: '' });
    }, totalTypingTime + 1500); 

    return () => {
      clearTimeout(speakingTimer);
      clearTimeout(bubbleTimer);
    };
  }, [isSpeaking, bubble.text]);

  return (
    <div className="bsod-overlay">
      <div className="bsod-content">
        <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
        <p>KONAMI_CODE_EXCEPTION</p>
        <p>
          If this is the first time you've seen this stop error screen,
          restart your computer. If this screen appears again, follow
          these steps:
        </p>
        <p>
          Check to make sure any new hardware or software is properly installed.
          If this is a new installation, ask your hardware or software manufacturer
          for any Windows updates you might need.
        </p>
        <p>
          If problems continue, disable or remove any newly installed hardware
          or software. Disable BIOS memory options such as caching or shadowing.
          If you need to use Safe Mode to remove or disable components, restart
          your computer, press F8 to select Advanced Startup Options, and then
          select Safe Mode.
        </p>
        <p>Technical information:</p>
        <p>
          *** STOP: 0x0000008E (0xC0000005, 0x805C4F08, 0xF8F3F790, 0x00000000)
        </p>
        <p>
          *** CPORT.SYS - Address F8F3F790 base at F8F3F000, DateStamp 3b7d8b8f
        </p>
        <p>Beginning dump of physical memory</p>
        <p>Physical memory dump complete.</p>
        <p>
          Contact your system administrator or technical support group for further
          assistance.
        </p>
      </div>
      <div className="moai-container">
        {bubble.active && (
          <div className="text-bubble">
            {displayedQuote}
          </div>
        )}
        <div
          className={`moai-face ${isSpeaking ? 'speaking' : ''}`}
          aria-hidden="true"
          onClick={showBubble}
        >
          <img src="/Moai.png" alt="A Moai head" />
        </div>
      </div>
      <button onClick={onClose} className="return-button">
        Return to website
      </button>
    </div>
  );
};


export default Bsod;
