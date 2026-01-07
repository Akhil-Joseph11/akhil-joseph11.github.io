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
    <div className="relative h-auto min-h-[90vh] md:h-[95vh] md:min-h-[600px] w-full overflow-x-hidden overflow-y-auto md:overflow-hidden pb-8 md:pb-0 flex flex-col md:block">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent md:from-netflixBlack md:via-netflixBlack/30"></div>
      </div>

      <div className="relative md:absolute top-auto md:top-[35%] bottom-2 md:bottom-auto mt-auto md:mt-0 pt-24 md:pt-0 left-0 md:left-16 z-30 px-4 md:pr-16 pb-2 md:pb-0 max-w-full">
        <div className="relative md:-ml-16 w-full md:w-screen md:max-w-[calc(100vw-4rem)]">
          <div className="pl-0 md:pl-16 pr-0 md:pr-0">
            <div className="w-full max-w-full md:w-[672px] space-y-4 md:space-y-5">
              {isFirstLoad ? (
                <>
                  <motion.h1 
                    className="text-5xl md:text-8xl font-display font-bold text-white drop-shadow-2xl leading-tight md:leading-none break-words md:whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {HERO_CONTENT.title}
                  </motion.h1>

                  <motion.h2 
                    className="text-lg md:text-2xl font-semibold text-white drop-shadow-lg leading-relaxed md:leading-normal md:whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                     {HERO_CONTENT.subtitle}
                  </motion.h2>

                  <motion.div 
                    className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <span className="text-[#46d369] font-bold drop-shadow-md whitespace-nowrap">98% Match</span>
                    <span className="text-white/90 drop-shadow-md whitespace-nowrap">2026</span>
                    <span className="text-white/90 drop-shadow-md whitespace-nowrap">2 Seasons</span>
                    <span className="border border-white/50 text-xs px-2 md:px-2.5 py-1 rounded text-white font-medium drop-shadow-md whitespace-nowrap">4K HDR</span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-base md:text-lg text-white/90 drop-shadow-md leading-relaxed md:leading-relaxed whitespace-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {HERO_CONTENT.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 pt-2 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <a href={CONTACT_INFO.resume} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-white text-netflixBlack px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap">
                      <Download className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      Resume
                    </a>
                    <Link 
                      to="/about"
                      className="flex items-center justify-center bg-netflixGray/80 text-white px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap"
                    >
                      About
                    </Link>
                    <button 
                      onClick={onContactClick}
                      className="flex items-center justify-center bg-netflixGray/80 text-white px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap"
                    >
                      <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      Contact Me
                    </button>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-netflixGray/80 text-white px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap">
                      <Linkedin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      LinkedIn
                    </a>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-netflixGray/80 text-white px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap">
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      GitHub
                    </a>
                  </motion.div>
                </>
              ) : (
                <>
                  <h1 className="text-5xl md:text-8xl font-display font-bold text-white drop-shadow-2xl leading-tight md:leading-none break-words md:whitespace-nowrap">
                    {HERO_CONTENT.title}
                  </h1>

                  <h2 className="text-lg md:text-2xl font-semibold text-white drop-shadow-lg leading-relaxed md:leading-normal md:whitespace-nowrap">
                     {HERO_CONTENT.subtitle}
                  </h2>

                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base">
                    <span className="text-[#46d369] font-bold drop-shadow-md whitespace-nowrap">98% Match</span>
                    <span className="text-white/90 drop-shadow-md whitespace-nowrap">2026</span>
                    <span className="text-white/90 drop-shadow-md whitespace-nowrap">2 Seasons</span>
                    <span className="border border-white/50 text-xs px-2 md:px-2.5 py-1 rounded text-white font-medium drop-shadow-md whitespace-nowrap">4K HDR</span>
                  </div>
                  
                  <p className="text-base md:text-lg text-white/90 drop-shadow-md leading-relaxed md:leading-relaxed whitespace-normal">
                    {HERO_CONTENT.description}
                  </p>

                  <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 pt-2 mb-8">
                    <a href={CONTACT_INFO.resume} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-white text-netflixBlack px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap">
                      <Download className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      Resume
                    </a>
                    <Link 
                      to="/about"
                      className="flex items-center justify-center bg-netflixGray/80 text-white px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap"
                    >
                      About
                    </Link>
                    <button 
                      onClick={onContactClick}
                      className="flex items-center justify-center bg-netflixGray/80 text-white px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap"
                    >
                      <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      Contact Me
                    </button>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-netflixGray/80 text-white px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap">
                      <Linkedin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                      LinkedIn
                    </a>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-netflixGray/80 text-white px-4 md:px-6 py-2 md:py-2.5 rounded font-semibold text-xs md:text-sm cursor-pointer hover:bg-netflixGray transition-all duration-200 hover:scale-105 active:scale-95 border border-white/30 whitespace-nowrap">
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
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
