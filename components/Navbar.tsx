import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, Download, Menu, X } from 'lucide-react';
import { RESUME_DATA, PROFILE_IMAGE, CONTACT_INFO } from '../constants';
import { ContentItem } from '../types';

interface NavbarProps {
  onSearchSelect?: (item: ContentItem) => void;
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchSelect, onContactClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ContentItem[]>([]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationRead, setIsNotificationRead] = useState(() => {
    return localStorage.getItem('resume-notification-read') === 'true';
  });
  const [hasClickedDownload, setHasClickedDownload] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleWindowFocus = () => {
      if (hasClickedDownload) {
        setIsNotificationRead(true);
        setIsNotificationsOpen(false);
        setHasClickedDownload(false);
        localStorage.setItem('resume-notification-read', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hasClickedDownload]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = RESUME_DATA.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (item: ContentItem) => {
    if (onSearchSelect) {
      onSearchSelect(item);
    }
    setIsSearchOpen(false);
    setSearchQuery('');
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (onSearchSelect) {
          onSearchSelect(item);
        }
      }, 100);
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      sessionStorage.setItem('navigatingFromAnotherPage', 'true');
      sessionStorage.setItem('disableHeroAnimation', 'true');
      sessionStorage.setItem('targetSection', id);
      navigate('/');
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleAboutClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/about') {
      navigate('/about');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      sessionStorage.setItem('navigatingFromAnotherPage', 'true');
      sessionStorage.removeItem('disableHeroAnimation');
      sessionStorage.removeItem('targetSection');
      navigate('/');
      setTimeout(() => {
        window.history.replaceState(null, '', '#');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.history.replaceState(null, '', '#');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-netflixBlack shadow-lg' : 'bg-gradient-to-b from-netflixBlack/80 via-netflixBlack/40 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 md:px-16 py-3 md:py-4">
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link to="/" onClick={handleHomeClick} className="text-netflixRed text-3xl md:text-5xl font-display font-bold cursor-pointer tracking-tight leading-none">
            AKHIL
          </Link>
          <ul className="hidden md:flex space-x-4 text-sm font-medium">
            <li>
              <button onClick={handleAboutClick} className="text-white hover:text-netflixLightGray transition-colors duration-200 cursor-pointer bg-transparent border-none">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-netflixLightGray transition-colors duration-200 cursor-pointer bg-transparent border-none">
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-netflixLightGray transition-colors duration-200 cursor-pointer bg-transparent border-none">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-netflixLightGray transition-colors duration-200 cursor-pointer bg-transparent border-none">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('education')} className="text-white hover:text-netflixLightGray transition-colors duration-200 cursor-pointer bg-transparent border-none">
                Education
              </button>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center space-x-3 md:space-x-6 text-white relative">
          <div ref={searchRef} className={`flex items-center transition-all duration-200 ${isSearchOpen ? 'bg-netflixBlack border border-white/30' : ''} p-1.5 rounded`}>
            <Search 
              className={`w-4 h-4 md:w-5 md:h-5 cursor-pointer text-white hover:text-netflixLightGray transition-colors ${isSearchOpen ? 'mr-2' : ''}`} 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            {isSearchOpen && (
              <div className="relative">
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Titles, people, genres" 
                  className="bg-transparent border-none outline-none text-white text-xs md:text-sm w-32 md:w-48 placeholder-netflixLightGray"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                {searchResults.length > 0 && (
                  <div className="absolute top-10 right-0 w-64 md:w-72 bg-netflixBlack border border-white/20 max-h-60 md:max-h-80 overflow-y-auto rounded shadow-2xl z-50">
                    {searchResults.map(item => (
                      <div 
                        key={item.id} 
                        className="p-2 md:p-3 hover:bg-netflixGray cursor-pointer flex items-center space-x-2 md:space-x-3 transition-colors"
                        onClick={() => handleResultClick(item)}
                      >
                        <img src={item.image} alt="" className="w-10 h-6 md:w-12 md:h-7 object-cover rounded" />
                        <div className="flex flex-col overflow-hidden">
                          <span className="text-xs md:text-sm font-semibold text-white truncate">{item.title}</span>
                          <span className="text-[10px] md:text-xs text-netflixLightGray truncate">{item.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div ref={notificationRef} className="relative hidden md:block">
            <motion.div
              className="relative cursor-pointer"
              onClick={() => {
                const newState = !isNotificationsOpen;
                setIsNotificationsOpen(newState);
                if (newState && !isNotificationRead) {
                  setIsNotificationRead(true);
                  localStorage.setItem('resume-notification-read', 'true');
                }
              }}
              whileTap={{ scale: 0.85 }}
              animate={isNotificationsOpen ? { rotate: [0, -10, 10, -10, 0] } : {}}
              transition={{ 
                rotate: { duration: 0.5, ease: "easeInOut" },
                scale: { duration: 0.15 }
              }}
            >
              <Bell className="w-5 h-5 text-white hover:text-netflixLightGray transition-colors" />
              {!isNotificationRead && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-netflixRed text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold text-white"
                >
                  1
                </motion.span>
              )}
            </motion.div>
            
            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="absolute top-10 right-0 w-80 bg-netflixBlack border border-white/20 text-white shadow-2xl rounded z-50 overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="p-4 border-b border-white/10 flex justify-between items-center hover:bg-netflixGray transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold mb-1 text-white">New Resume Available</span>
                      <span className="text-xs text-netflixLightGray">Download Akhil's latest CV now.</span>
                    </div>
                    <a 
                      href={CONTACT_INFO.resume} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bg-white text-netflixBlack p-2 rounded-full hover:bg-gray-200 transition-colors"
                      onClick={() => setHasClickedDownload(true)}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div ref={mobileMenuRef} className="relative md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-netflixLightGray transition-colors p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {isMobileMenuOpen && (
              <div className="absolute top-12 right-0 w-56 bg-netflixBlack border border-white/20 rounded shadow-2xl z-50 overflow-hidden">
                <button 
                  onClick={handleAboutClick}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-netflixGray transition-colors border-b border-white/10"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-netflixGray transition-colors border-b border-white/10"
                >
                  Experience
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-netflixGray transition-colors border-b border-white/10"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-netflixGray transition-colors border-b border-white/10"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-netflixGray transition-colors border-b border-white/10"
                >
                  Education
                </button>
                <div 
                  className="block px-4 py-3 text-sm text-white hover:bg-netflixGray transition-colors cursor-pointer"
                  onClick={() => {
                    onContactClick && onContactClick();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-3 cursor-pointer group" onClick={() => onContactClick && onContactClick()}>
            <div className="w-8 h-8 rounded overflow-hidden border border-white/20">
              <img src={PROFILE_IMAGE} alt="Profile" className="w-full h-full object-cover group-hover:opacity-80 transition" />
            </div>
            <span className="text-sm text-white group-hover:text-netflixLightGray transition-colors">Akhil</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
