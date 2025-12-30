import React, { useState, useEffect, useRef } from 'react';
import { Bell, Search, Download } from 'lucide-react';
import { RESUME_DATA, PROFILE_IMAGE, CONTACT_INFO } from '../constants';
import { ContentItem } from '../types';

interface NavbarProps {
  onSearchSelect: (item: ContentItem) => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchSelect, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ContentItem[]>([]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

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
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    onSearchSelect(item);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ${isScrolled ? 'bg-netflixBlack shadow-md' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center space-x-8">
          <h1 
            className="text-netflixRed text-3xl md:text-4xl font-display font-bold cursor-pointer tracking-wider" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            AKHIL
          </h1>
          <ul className="hidden md:flex space-x-6 text-sm text-gray-300">
            <li>
              <button onClick={() => scrollToSection('experience')} className="hover:text-white transition font-medium cursor-pointer bg-transparent border-none">
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="hover:text-white transition cursor-pointer bg-transparent border-none">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="hover:text-white transition cursor-pointer bg-transparent border-none">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('education')} className="hover:text-white transition cursor-pointer bg-transparent border-none">
                Education
              </button>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center space-x-6 text-white relative">
          
          <div ref={searchRef} className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'bg-black/80 border border-white' : ''} p-1`}>
            <Search 
              className={`w-5 h-5 cursor-pointer hover:text-gray-300 ${isSearchOpen ? 'mr-2' : ''}`} 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            {isSearchOpen && (
              <div className="relative">
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Titles, people, genres" 
                  className="bg-transparent border-none outline-none text-white text-sm w-48 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                {searchResults.length > 0 && (
                   <div className="absolute top-8 right-0 w-64 bg-[#181818] border border-gray-700 max-h-60 overflow-y-auto rounded shadow-xl">
                      {searchResults.map(item => (
                        <div 
                          key={item.id} 
                          className="p-3 hover:bg-[#2F2F2F] cursor-pointer flex items-center space-x-3"
                          onClick={() => handleResultClick(item)}
                        >
                           <img src={item.image} alt="" className="w-10 h-6 object-cover rounded" />
                           <div className="flex flex-col overflow-hidden">
                             <span className="text-xs font-bold truncate">{item.title}</span>
                             <span className="text-[10px] text-gray-400 truncate">{item.subtitle}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                )}
              </div>
            )}
          </div>

          <div ref={notificationRef} className="relative">
            <div className="relative cursor-pointer" onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
               <Bell className="w-5 h-5 hover:text-gray-300" />
               <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] w-3 h-3 rounded-full flex items-center justify-center font-bold">1</span>
            </div>
            
            {isNotificationsOpen && (
              <div className="absolute top-8 right-0 w-72 bg-black/90 border-t-2 border-white text-white shadow-2xl p-0">
                <div className="p-4 border-b border-gray-700 flex justify-between items-center hover:bg-[#181818]">
                   <div className="flex flex-col">
                      <span className="text-sm font-bold mb-1">New Resume Available</span>
                      <span className="text-xs text-gray-400">Download Akhil's latest CV now.</span>
                   </div>
                   <a href={CONTACT_INFO.resume} target="_blank" rel="noreferrer" className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                     <Download className="w-4 h-4" />
                   </a>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 cursor-pointer group" onClick={onContactClick}>
             <div className="w-8 h-8 rounded-sm overflow-hidden">
                <img src={PROFILE_IMAGE} alt="Profile" className="w-full h-full object-cover group-hover:opacity-80 transition" />
             </div>
             <span className="hidden md:block text-xs group-hover:underline">Akhil</span>
          </div>
        </div>
      </div>
    </nav>
  );
};