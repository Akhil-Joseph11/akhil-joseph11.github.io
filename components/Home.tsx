import React from 'react';
import { Hero } from './Hero';
import { SectionRow } from './SectionRow';
import { RESUME_DATA } from '../constants';
import { ContentType, ContentItem } from '../types';

interface HomeProps {
  onSearchSelect: (item: ContentItem) => void;
  onContactClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onSearchSelect, onContactClick }) => {
  const experience = RESUME_DATA.filter(item => item.type === ContentType.Experience);
  const projects = RESUME_DATA.filter(item => item.type === ContentType.Project);
  const education = RESUME_DATA.filter(item => item.type === ContentType.Education);
  const skills = RESUME_DATA.filter(item => item.type === ContentType.Skill);
  const achievements = RESUME_DATA.filter(item => item.type === ContentType.Achievement);

  return (
    <>
      <Hero onContactClick={onContactClick} />
      
      <div className="relative z-30 -mt-40 pb-10 space-y-4">
        <SectionRow id="experience" title="Starred in" items={experience} onSelect={onSearchSelect} />
        <SectionRow id="projects" title="Blockbuster Projects" items={projects} onSelect={onSearchSelect} />
        <SectionRow id="skills" title="Top Rated Skills" items={skills} onSelect={onSearchSelect} />
        <SectionRow id="education" title="Education" items={education} onSelect={onSearchSelect} />
        <SectionRow id="achievements" title="Achievements" items={achievements} onSelect={onSearchSelect} />
      </div>
    </>
  );
};
