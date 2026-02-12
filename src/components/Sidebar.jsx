import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward, FiChevronLeft, FiChevronRight, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { MdTranslate } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Sidebar.css';
import './SidebarControls.css';

const playlist = [
  {
    title: 'まだ時間はある',
    artist: 'kiyosumi',
    albumArt: '/Parasite.jpg',
    src: '/music/There_s_still_time.mp3',
    spotify: 'https://open.spotify.com/intl-fr/track/2VgWesXx5FLoaKMAWZOqoj?si=7e83c2a976b04b70'
  },
  {
    title: 'This Body',
    artist: '2 8 1 4',
    albumArt: '/This_Body.jpg',
    src: '/music/This_Body.mp3',
    spotify: 'https://open.spotify.com/intl-fr/track/6B5uet2vvxu2D1FbqzgR6R?si=5ab7a5af4a184199',
  },
  {
    title: 'Safe Haven',
    artist: 'Garoad',
    albumArt: '/VA-11_HALL-A.jpg',
    src: '/music/Safe_Haven.mp3',
    spotify: 'https://open.spotify.com/intl-fr/track/6bTr1kOf6CbkOJFHehgrXB?si=5e275b07a5774557',
  },
];

const MusicPlayer = ({ isCollapsed }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      };

      const setAudioTime = () => setCurrentTime(audio.currentTime);
      const handleSongEnd = () => handleNext();

      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);
      audio.addEventListener('ended', handleSongEnd);

      if (isPlaying) {
        audio.play().catch(e => console.error("Playback error:", e));
      }

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
        audio.removeEventListener('ended', handleSongEnd);
      };
    }
  }, [currentSongIndex, isPlaying]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.error("Playback error:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const newTime = (clickPosition / progressBar.offsetWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="music-player">
      <audio ref={audioRef} src={currentSong.src} preload="metadata" key={currentSong.src}></audio>
      <a target="_blank" rel="noopener noreferrer" className="spotify-link" href={currentSong.spotify} >
      <div className="album-art">
        <img src={currentSong.albumArt} alt={`${currentSong.title} album art`} />
      </div>
      </a>  
      {!isCollapsed && (
        <>
          <div className="song-info">
            <p className="song-title">{currentSong.title}</p>
            <p className="song-artist">{currentSong.artist}</p>
          </div>
          <div className="controls">
            <button onClick={handlePrev} className="control-btn">
              <FiSkipBack />
            </button>
            <button onClick={togglePlayPause} className="play-pause-btn">
              {isPlaying ? <FiPause /> : <FiPlay />}
            </button>
            <button onClick={handleNext} className="control-btn">
              <FiSkipForward />
            </button>
          </div>
          <div
            className="progress-bar-container"
            ref={progressBarRef}
            onClick={handleProgressClick}
          >
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </>
      )}
    </div>
  );
};

const Sidebar = ({ isCollapsed, onToggle, activeLink = 'home', isMobileOpen, closeMobile }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <aside 
      className={`sidebar ${isCollapsed ? 'is-collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`} 
      aria-label="Primary navigation"
    >
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-placeholder" aria-hidden="true">
            <img 
              src={theme === 'dark' ? "/logo-dark.png" : "/logo.png"} 
              alt="Noah Calmette's logo" 
            />
          </div>
          {(!isCollapsed || isMobileOpen) && (
            <p className="logo-tagline">
              <span>PORTFOLIO</span>
              <span>STATUS : AVAILABLE</span>
            </p>
          )}
        </div>

        <div className="sidebar-controls">
          <button onClick={onToggle} className="sidebar-toggle desktop-only">
            {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
        </div>

        <button onClick={closeMobile} className="sidebar-toggle mobile-only">
          <FiX />
        </button>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a
              href="#home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={closeMobile}
            >
              <span aria-hidden="true">00</span>
              {(!isCollapsed || isMobileOpen) && t('sidebar.home')}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={closeMobile}
            >
              <span aria-hidden="true">01</span>
              {(!isCollapsed || isMobileOpen) && t('sidebar.about')}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeLink === 'skills' ? 'active' : ''}
              onClick={closeMobile}
            >
              <span aria-hidden="true">02</span>
              {(!isCollapsed || isMobileOpen) && t('sidebar.skills')}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={closeMobile}
            >
              <span aria-hidden="true">03</span>
              {(!isCollapsed || isMobileOpen) && t('sidebar.projects')}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={closeMobile}
            >
              <span aria-hidden="true">04</span>
              {(!isCollapsed || isMobileOpen) && t('sidebar.contact')}
            </a>
          </li>
        </ul>
      </nav>
      <MusicPlayer isCollapsed={isCollapsed && !isMobileOpen} />
      <div className="sidebar-footer" aria-label="System status">
        <div className="status">
          <span className="status-indicator" aria-hidden="true"></span>
          {(!isCollapsed || isMobileOpen) && <span className="status-text">System online</span>}
        </div>
        {(!isCollapsed || isMobileOpen) && <div className="version">v2.0.2.6</div>}
      </div>
    </aside>
  );
};

export default Sidebar;
