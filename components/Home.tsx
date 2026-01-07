import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { SectionRow } from './SectionRow';
import { RESUME_DATA } from '../constants';
import { ContentType, ContentItem } from '../types';

interface HomeProps {
  onSearchSelect: (item: ContentItem) => void;
  onContactClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onSearchSelect, onContactClick }) => {
  const location = useLocation();
  
  const [bannerComplete, setBannerComplete] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [shouldAnimateHero, setShouldAnimateHero] = useState(true);
  
  useLayoutEffect(() => {
    const comingFromAnotherPage = sessionStorage.getItem('navigatingFromAnotherPage') === 'true';
    const disableHeroAnimation = sessionStorage.getItem('disableHeroAnimation') === 'true';
    
    if (comingFromAnotherPage) {
      setIsFirstLoad(false);
      setBannerComplete(true);
      setShouldAnimateHero(!disableHeroAnimation);
      sessionStorage.removeItem('navigatingFromAnotherPage');
      sessionStorage.removeItem('disableHeroAnimation');
    }
  }, []);
  
  const experience = RESUME_DATA.filter(item => item.type === ContentType.Experience);
  const projects = RESUME_DATA.filter(item => item.type === ContentType.Project);
  const education = RESUME_DATA.filter(item => item.type === ContentType.Education);
  const skills = RESUME_DATA.filter(item => item.type === ContentType.Skill);
  const achievements = RESUME_DATA.filter(item => item.type === ContentType.Achievement);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setBannerComplete(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      window.history.replaceState(null, '', '#');
    }
    
    const targetSection = sessionStorage.getItem('targetSection');
    const hash = location.hash.replace('#', '').replace('/', '');
    const comingFromAnotherPage = sessionStorage.getItem('navigatingFromAnotherPage') === 'true';
    const validSections = ['experience', 'projects', 'skills', 'education'];
    const sectionId = targetSection || (hash && validSections.includes(hash) ? hash : null);
    
    if (targetSection) {
      sessionStorage.removeItem('targetSection');
    }
    
    if (sectionId) {
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }
      };
      
      if (comingFromAnotherPage) {
        requestAnimationFrame(() => {
          requestAnimationFrame(scrollToSection);
        });
      } else {
        setTimeout(scrollToSection, 350);
      }
    }
  }, [location]);

  const renderSection = (id: string, title: string, items: ContentItem[], defaultDelay: number) => {
    if (!isFirstLoad) {
      return <SectionRow id={id} title={title} items={items} onSelect={onSearchSelect} />;
    }
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={bannerComplete ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: defaultDelay }}
      >
        <SectionRow id={id} title={title} items={items} onSelect={onSearchSelect} />
      </motion.div>
    );
  };

  return (
    <>
      <Hero onContactClick={onContactClick} isFirstLoad={shouldAnimateHero} />
      
      <div className="relative z-10 mt-12 md:-mt-[8rem] pb-10 space-y-4">
        <div className="mt-0 md:mt-0 relative">
          {renderSection('experience', 'Starred in', experience, 0)}
        </div>
        {renderSection('projects', 'Blockbuster Projects', projects, 0.05)}
        {renderSection('skills', 'Top Rated Skills', skills, 0.1)}
        {renderSection('education', 'Education', education, 0.15)}
        {isFirstLoad ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={bannerComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionRow id="achievements" title="Achievements" items={achievements} onSelect={onSearchSelect} />
          </motion.div>
        ) : (
          <SectionRow id="achievements" title="Achievements" items={achievements} onSelect={onSearchSelect} />
        )}
      </div>
    </>
  );
};
