import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const MascotContext = createContext();

export const useMascot = () => {
  const context = useContext(MascotContext);
  if (!context) {
    throw new Error('useMascot must be used within a MascotProvider');
  }
  return context;
};

export const MascotProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const timeoutRef = useRef(null);
  const speakTimeoutRef = useRef(null);

  const say = useCallback((text, duration = 4000) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (speakTimeoutRef.current) clearTimeout(speakTimeoutRef.current);

    setMessage(text);
    setIsVisible(true);
    setIsSpeaking(true);

    const speechTime = Math.min(text.length * 60, 2000); 
    
    speakTimeoutRef.current = setTimeout(() => {
      setIsSpeaking(false);
    }, speechTime);

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setMessage(''), 500); 
    }, duration);
  }, []);

  const hide = useCallback(() => {
    setIsVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (speakTimeoutRef.current) clearTimeout(speakTimeoutRef.current);
  }, []);

  return (
    <MascotContext.Provider value={{ isVisible, message, isSpeaking, say, hide }}>
      {children}
    </MascotContext.Provider>
  );
};
