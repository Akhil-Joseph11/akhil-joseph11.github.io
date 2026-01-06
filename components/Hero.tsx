import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Github, Download, Linkedin } from 'lucide-react';
import { HERO_CONTENT, CONTACT_INFO } from '../constants';

interface HeroProps {
  onContactClick: () => void;
  isFirstLoad?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, isFirstLoad = true }) => {
  return (
    <div className="relative h-[95vh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {isFirstLoad ? (
          <motion.img 
            src="/images/Akhil-banner.png" 
            alt="Akhil Banner" 
            className="h-full w-full object-cover" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        ) : (
          <img 
            src="/images/Akhil-banner.png" 
            alt="Akhil Banner" 
            className="h-full w-full object-cover" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-netflixBlack via-netflixBlack/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-netflixBlack/30 to-transparent"></div>
      </div>

      <div className="absolute top-[35%] left-16 z-20 pr-16">
        <div className="relative -ml-16 w-screen max-w-[calc(100vw-4rem)]">
          <div className="overflow-x-scroll scrollbar-hide no-scrollbar scroll-smooth pl-16">
            <div className="w-[672px] space-y-5 flex-shrink-0 pb-12">
              {isFirstLoad ? (
                <>
                  <motion.h1 
                    className="text-8xl font-display font-bold text-white drop-shadow-2xl leading-none whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {HERO_CONTENT.title}
                  </motion.h1>

                  <motion.h2 
                    className="text-2xl font-semibold text-white drop-shadow-lg whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                     {HERO_CONTENT.subtitle}
                  </motion.h2>

                  <motion.div 
                    className="flex flex-wrap items-center gap-4 text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <span className="text-[#46d369] font-bold drop-shadow-md">98% Match</span>
                    <span className="text-white/90 drop-shadow-md">2026</span>
                    <span className="text-white/90 drop-shadow-md">2 Seasons</span>
                    <span className="border border-white/50 text-xs px-2.5 py-1 rounded text-white font-medium drop-shadow-md">4K HDR</span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-lg text-white/90 drop-shadow-md leading-relaxed whitespace-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {HERO_CONTENT.description}
                  </motion.p>

                  <motion.div 
                    className="flex items-center gap-3 pt-2 pb-20 md:pb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <a href={CONTACT_INFO.resume} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-white text-netflixBlack px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0">
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                    <Link 
                      to="/about"
                      className="flex items-center justify-center bg-netflixGray/80 text-white px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap flex-shrink-0"
                    >
                      About
                    </Link>
                    <button 
                      onClick={onContactClick}
                      className="flex items-center justify-center bg-netflixGray/80 text-white px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap flex-shrink-0"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Me
                    </button>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-netflixGray/80 text-white px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap flex-shrink-0">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-netflixGray/80 text-white px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap flex-shrink-0">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </motion.div>
                </>
              ) : (
                <>
                  <h1 className="text-8xl font-display font-bold text-white drop-shadow-2xl leading-none whitespace-nowrap">
                    {HERO_CONTENT.title}
                  </h1>

                  <h2 className="text-2xl font-semibold text-white drop-shadow-lg whitespace-nowrap">
                     {HERO_CONTENT.subtitle}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-base">
                    <span className="text-[#46d369] font-bold drop-shadow-md">98% Match</span>
                    <span className="text-white/90 drop-shadow-md">2026</span>
                    <span className="text-white/90 drop-shadow-md">2 Seasons</span>
                    <span className="border border-white/50 text-xs px-2.5 py-1 rounded text-white font-medium drop-shadow-md">4K HDR</span>
                  </div>
                  
                  <p className="text-lg text-white/90 drop-shadow-md leading-relaxed whitespace-normal">
                    {HERO_CONTENT.description}
                  </p>

                  <div className="flex items-center gap-3 pt-2 pb-20 md:pb-12">
                    <a href={CONTACT_INFO.resume} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-white text-netflixBlack px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0">
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                    <Link 
                      to="/about"
                      className="flex items-center justify-center bg-netflixGray/80 text-white px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap flex-shrink-0"
                    >
                      About
                    </Link>
                    <button 
                      onClick={onContactClick}
                      className="flex items-center justify-center bg-netflixGray/80 text-white px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap flex-shrink-0"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Me
                    </button>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-netflixGray/80 text-white px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap flex-shrink-0">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-netflixGray/80 text-white px-6 py-2.5 rounded font-semibold text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap flex-shrink-0">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
