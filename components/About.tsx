import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Download, Linkedin, Github, MapPin, Trophy, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, PROFILE_IMAGE } from '../constants';

interface TimelineItem {
  id: string;
  date: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  type: 'experience' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 'ict',
    date: 'May 2025 – Aug 2025',
    role: 'Systems Development Intern',
    company: 'Institute for Creative Technologies',
    location: 'Los Angeles',
    highlights: [
      'Working at the intersection of research and engineering on 3D Gaussian Splatting.',
      'Engineered high-fidelity models of urban infrastructure using multi-angle drone imagery.',
      'Built automated scripts to extract and process frames from large-scale video datasets.'
    ],
    type: 'experience'
  },
  {
    id: 'usc',
    date: 'Aug 2024 – May 2026',
    role: 'Master\'s Degree in Computer Science',
    company: 'University of Southern California',
    location: 'Los Angeles',
    highlights: [
      'GPA: 3.91/4.0 | Focus: AI & Computer Vision',
      'Graduate Researcher in 3D Vision & Neural Rendering',
      'Coursework: Machine Learning, Agentic AI, Game Dev, Software Architectures'
    ],
    type: 'education'
  },
  {
    id: 'shell',
    date: 'Aug 2022 – Aug 2024',
    role: 'Software Engineer',
    company: 'Shell',
    location: 'Bangalore',
    highlights: [
      'Architected mission-critical software for the Monitoring Data Foundation (MDF)',
      'Built end-to-end MERN Stack solutions bridging backend logic with frontend interfaces',
      'Engineered robust data pipelines for global stakeholders'
    ],
    type: 'experience'
  },
  {
    id: 'vit',
    date: 'July 2018 – May 2022',
    role: 'Bachelor\'s in Computer Science Engineering',
    company: 'Vellore Institute of Technology',
    location: 'India',
    highlights: [
      'CGPA: 9.11/10.0 | Focus: CS Engineering',
      'Mastered core foundations: Data Structures, OS, and Networks',
      'Capstone: End-to-end software engineering projects'
    ],
    type: 'education'
  },
  {
    id: 'ubs',
    date: 'June 2021 – Aug 2021',
    role: 'Summer Intern',
    company: 'UBS',
    location: 'Hyderabad',
    highlights: [
      'Modernized legacy workflows using Machine Learning for financial risk',
      'Engineered XGBoost models boosting prediction accuracy by 20%',
      'Automated Alteryx pipelines, slashing processing time by 70%'
    ],
    type: 'experience'
  }
];

const achievementsData = [
  {
    id: 'hackathon',
    title: 'VIT Hack 2020 Champion',
    description: 'Secured 1st place in a 36-hour sprint against competitive teams.',
    highlights: [
      'Developed a deep learning model to classify large-scale e-commerce data',
      'Validated ability to ship production-grade AI under extreme deadlines'
    ]
  },
  {
    id: 'chess',
    title: 'Competitive Chess',
    subtitle: 'Rated 1900+',
    description: 'Top percentile global player.',
    highlights: [
      'Applies algorithmic thinking and decision trees in real-time',
      'Demonstrates grace under pressure and strategic foresight'
    ],
    link: 'https://lichess.org/@/AkhilJoseph'
  }
];

const TimelineItemComponent: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-8 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-[#E50914] border-2 border-[#E50914] z-10 flex-shrink-0" />
        {index < timelineData.length - 1 && (
          <div className="w-0.5 h-full bg-zinc-800 mt-2" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-8">
        <motion.div
          whileHover={{ scale: 1.02, borderColor: '#71717a' }}
          className="bg-[#181818] border border-[#333] rounded-lg p-6 hover:border-zinc-500 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-zinc-800 text-zinc-400">
                  {item.type === 'experience' ? 'EXPERIENCE' : 'EDUCATION'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{item.role}</h3>
              <p className="text-lg text-white/80 mb-2">{item.company}</p>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>{item.date}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </span>
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            {item.highlights.map((highlight, idx) => (
              <li key={idx} className="text-white/80 text-sm sm:text-base flex items-start gap-2">
                <span className="text-white/50 mt-1.5">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div id="about" className="min-h-screen bg-[#141414] text-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 md:px-16 lg:px-24 pt-40 sm:pt-44 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left: Text Content */}
            <div className="space-y-4 lg:pt-0">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  Akhil Joseph
                </h1>
                <div className="h-1 w-24 bg-netflixRed mb-3 mt-2"></div>
                <h2 className="text-lg md:text-xl text-zinc-400 mt-3 font-light">
                  Full-Stack Engineer Building Intelligent Systems
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                With a foundation in enterprise software at Shell and UBS, Akhil appreciates the importance of writing clean, maintainable code. Now at USC, he is applying those principles to the emerging fields of Generative AI and Computer Vision. He enjoys the challenge of taking cutting-edge research and engineering it into production-ready web solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={CONTACT_INFO.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-white text-[#141414] px-6 py-3 rounded font-semibold hover:bg-white/90 transition-all duration-200 hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-[#1a1a1a] border border-white/20 text-white px-6 py-3 rounded font-semibold hover:bg-[#2a2a2a] transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-[#1a1a1a] border border-white/20 text-white px-6 py-3 rounded font-semibold hover:bg-[#2a2a2a] transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="flex justify-center lg:justify-end lg:items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-lg overflow-hidden border-2 border-netflixRed shadow-2xl">
                  <img 
                    src={PROFILE_IMAGE} 
                    alt="Akhil Joseph" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#46d369] rounded-lg opacity-20 blur-xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - The Journey */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">The Journey</h2>
            <div className="h-1 w-24 bg-netflixRed mb-2"></div>
            <p className="text-white/70 text-lg">A chronological narrative of experience and education</p>
          </motion.div>

          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineItemComponent key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Behind the Scenes */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">Behind the Scenes</h2>
            <div className="h-1 w-24 bg-netflixRed mb-2"></div>
            <p className="text-white/70 text-lg">Awards and recognition</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {achievementsData.map((achievement, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: '-50px' });

              return (
                <motion.div
                  key={achievement.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 15px 40px rgba(70, 211, 105, 0.15)' }}
                  className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 sm:p-8 hover:border-[#46d369]/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Award Badge Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#46d369]/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Trophy className="w-8 h-8 text-[#46d369] flex-shrink-0" />
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#46d369] hover:text-[#46d369]/80 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                    {achievement.subtitle && (
                      <p className="text-[#46d369] font-semibold mb-3">{achievement.subtitle}</p>
                    )}
                    <p className="text-white/80 mb-4 leading-relaxed">{achievement.description}</p>
                    <ul className="space-y-2">
                      {achievement.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                          <span className="text-[#46d369] mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to see the work?</h2>
            <p className="text-white/70 text-lg mb-8">Explore the complete portfolio of projects and achievements</p>
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-netflixRed text-white px-8 py-4 rounded font-semibold text-lg hover:bg-netflixRed/90 transition-all duration-200 hover:scale-105"
            >
              View Filmography
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
