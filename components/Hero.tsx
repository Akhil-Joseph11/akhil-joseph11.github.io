import React from 'react';
import { Play, Github, Download, Linkedin } from 'lucide-react';
import { HERO_CONTENT, CONTACT_INFO } from '../constants';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <div className="relative h-[80vh] md:h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/Akhil-banner.png" 
          alt="Akhil Banner" 
          className="h-full w-full object-cover blur-sm" 
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent bottom-0 h-96 z-10"></div>

      <div className="absolute top-[25%] md:top-[30%] left-4 md:left-12 max-w-2xl space-y-4 z-20">
        <div className="flex items-center space-x-2 mb-2">
            <span className="text-netflixRed font-black tracking-widest uppercase text-3xl font-display drop-shadow-lg">PORTFOLIO</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-xl leading-none">
          {HERO_CONTENT.title}
        </h1>

        <h2 className="text-lg md:text-2xl font-bold text-gray-200 drop-shadow-lg">
           {HERO_CONTENT.subtitle}
        </h2>
        
        <p className="text-base md:text-lg text-gray-200 drop-shadow-md max-w-lg line-clamp-3 md:line-clamp-none">
          {HERO_CONTENT.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a href={CONTACT_INFO.resume} target="_blank" rel="noreferrer" className="flex items-center bg-white text-black px-6 py-2 rounded hover:bg-opacity-80 transition font-bold text-lg cursor-pointer">
            <Download className="w-5 h-5 mr-2" />
            Resume
          </a>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center bg-[#0077b5] text-white px-6 py-2 rounded hover:bg-[#006097] transition font-bold text-lg cursor-pointer">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center bg-[gray]/70 text-white px-6 py-2 rounded hover:bg-[gray]/50 transition font-bold text-lg cursor-pointer">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <button 
            onClick={onContactClick}
            className="flex items-center bg-[gray]/70 text-white px-6 py-2 rounded hover:bg-[gray]/50 transition font-bold text-lg cursor-pointer"
          >
             Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};