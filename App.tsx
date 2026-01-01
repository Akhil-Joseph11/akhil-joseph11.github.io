import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { DetailModal } from './components/DetailModal';
import { ContactModal } from './components/ContactModal';
import { CONTACT_INFO } from './constants';
import { ContentItem } from './types';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-netflixBlack font-sans pb-20 selection:bg-netflixRed selection:text-white">
      <Navbar onSearchSelect={setSelectedItem} onContactClick={() => setIsContactOpen(true)} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home onSearchSelect={setSelectedItem} onContactClick={() => setIsContactOpen(true)} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {selectedItem && (
        <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}

      <footer className="px-16 py-12 max-w-7xl mx-auto text-netflixLightGray text-sm border-t border-white/10">
        <div className="flex flex-row justify-between items-center mb-8 gap-6">
          <div className="flex space-x-6">
             <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-netflixRed transition-colors duration-200" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
             <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-white hover:text-netflixRed transition-colors duration-200" aria-label="GitHub"><Github className="w-6 h-6" /></a>
             <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-netflixRed transition-colors duration-200" aria-label="Email"><Mail className="w-6 h-6" /></a>
          </div>
          <div className="text-right">
             <p className="flex items-center justify-end gap-2 text-white/90 text-sm"><Phone className="w-4 h-4"/> {CONTACT_INFO.phone}</p>
             <p className="flex items-center justify-end gap-2 mt-2 text-white/90 text-sm"><MapPin className="w-4 h-4"/> {CONTACT_INFO.location}</p>
          </div>
        </div>
        
        <div className="flex justify-start gap-6 text-sm mb-6 flex-wrap">
          <span className="cursor-pointer hover:text-white transition-colors duration-200">Built with React</span>
          <span className="cursor-pointer hover:text-white transition-colors duration-200">Tailwind CSS</span>
          <span className="cursor-pointer hover:text-white transition-colors duration-200">TypeScript</span>
        </div>

        <div className="mt-6 border border-white/20 p-2 w-fit cursor-pointer hover:border-white/40 hover:text-white text-xs transition-all duration-200">
          Service Code: AJ-2025
        </div>
        
        <div className="mt-6 text-xs text-netflixLightGray text-left">
          &copy; 2025 Akhil Joseph Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
