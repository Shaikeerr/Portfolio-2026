import { useState, useEffect } from 'react';

const useKonamiCode = (callback) => {
  const [konamiCode, setKonamiCode] = useState([]);
  const secretCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  useEffect(() => {
    const onKeyDown = (e) => {
      setKonamiCode((currentCode) => [...currentCode, e.key]);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (konamiCode.length > secretCode.length) {
      setKonamiCode(konamiCode.slice(konamiCode.length - secretCode.length));
    }

    if (konamiCode.join('') === secretCode.join('')) {
      callback();
      setKonamiCode([]);
    }
  }, [konamiCode, callback, secretCode]);
};

export default useKonamiCode;
