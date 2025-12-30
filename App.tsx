import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionRow } from './components/SectionRow';
import { DetailModal } from './components/DetailModal';
import { ContactModal } from './components/ContactModal';
import { RESUME_DATA, CONTACT_INFO } from './constants';
import { ContentType, ContentItem } from './types';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const experience = RESUME_DATA.filter(item => item.type === ContentType.Experience);
  const projects = RESUME_DATA.filter(item => item.type === ContentType.Project);
  const education = RESUME_DATA.filter(item => item.type === ContentType.Education);
  const skills = RESUME_DATA.filter(item => item.type === ContentType.Skill);
  const achievements = RESUME_DATA.filter(item => item.type === ContentType.Achievement);

  return (
    <div className="relative min-h-screen bg-[#141414] font-sans pb-20 selection:bg-netflixRed selection:text-white">
      <Navbar onSearchSelect={setSelectedItem} onContactClick={() => setIsContactOpen(true)} />
      
      <main>
        <Hero onContactClick={() => setIsContactOpen(true)} />
        
        <div className="relative z-30 -mt-24 md:-mt-40 pb-10 space-y-4">
          <SectionRow id="experience" title="Starred in" items={experience} onSelect={setSelectedItem} />
          <SectionRow id="projects" title="Blockbuster Projects" items={projects} onSelect={setSelectedItem} />
          <SectionRow id="skills" title="Top Rated Skills" items={skills} onSelect={setSelectedItem} />
          <SectionRow id="education" title="Education" items={education} onSelect={setSelectedItem} />
          <SectionRow id="achievements" title="Achievements" items={achievements} onSelect={setSelectedItem} />
        </div>
      </main>

      <footer className="px-4 md:px-12 py-10 max-w-5xl mx-auto text-gray-500 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex space-x-6">
             <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin className="w-6 h-6" /></a>
             <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition"><Github className="w-6 h-6" /></a>
             <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition"><Mail className="w-6 h-6" /></a>
          </div>
          <div className="text-center md:text-right">
             <p className="flex items-center justify-center md:justify-end gap-2"><Phone className="w-4 h-4"/> {CONTACT_INFO.phone}</p>
             <p className="flex items-center justify-center md:justify-end gap-2 mt-1"><MapPin className="w-4 h-4"/> {CONTACT_INFO.location}</p>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start gap-6 text-xs md:text-sm mb-4">
          <span className="cursor-pointer hover:underline">Built with React</span>
          <span className="cursor-pointer hover:underline">Tailwind CSS</span>
          <span className="cursor-pointer hover:underline">TypeScript</span>
        </div>

        <div className="mt-6 border border-gray-500 p-1 w-fit cursor-pointer hover:text-white text-xs">
          Service Code: AJ-2025
        </div>
        
        <div className="mt-4 text-[11px]">
          &copy; 2025 Akhil Joseph Portfolio.
        </div>
      </footer>

      {selectedItem && (
        <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}
    </div>
  );
};

export default App;