import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Github, Download, GraduationCap, Briefcase, Code, Trophy, Star } from 'lucide-react';
import { RESUME_DATA, CONTACT_INFO, PROFILE_IMAGE } from '../constants';
import { ContentType } from '../types';

export const About: React.FC = () => {
  const experience = RESUME_DATA.filter(item => item.type === ContentType.Experience);
  const projects = RESUME_DATA.filter(item => item.type === ContentType.Project);
  const education = RESUME_DATA.filter(item => item.type === ContentType.Education);
  const skills = RESUME_DATA.filter(item => item.type === ContentType.Skill);
  const achievements = RESUME_DATA.filter(item => item.type === ContentType.Achievement);

  return (
    <div id="about" className="min-h-screen bg-netflixBlack text-white px-16 py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-left">
          <h1 className="text-5xl font-display font-bold mb-4 text-white">About Me</h1>
          <div className="h-1 w-24 bg-netflixRed mb-8"></div>
        </div>

        {/* Profile Summary */}
        <div className="mb-16 bg-netflixGray/30 rounded-lg p-12 border border-white/10">
          <div className="flex flex-row items-start gap-8">
            <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-netflixRed shadow-xl flex-shrink-0">
              <img src={PROFILE_IMAGE} alt="Akhil Joseph" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-left">
              <h2 className="text-4xl font-bold mb-4 text-white">Akhil Joseph</h2>
              <p className="text-xl text-white/80 mb-6">Full-Stack Engineer & AI/ML Specialist</p>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                Join Akhil on a journey through scalable MERN Stack development, advanced AI & Machine Learning, 
                and the frontier of Large Language Models (LLMs). From Los Angeles to Bangalore, witness the code that powers the future.
              </p>
              <div className="flex flex-row flex-wrap gap-4 justify-start mb-0">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-start text-white hover:text-netflixRed transition-colors text-base">
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-start text-white hover:text-netflixRed transition-colors text-base">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <div className="flex items-center justify-start text-white/70 text-base">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6 justify-start">
                <a href={CONTACT_INFO.resume} target="_blank" rel="noreferrer" className="flex items-center bg-netflixRed text-white px-6 py-2 rounded hover:bg-netflixRed/90 transition-colors text-base">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center bg-netflixGray text-white px-6 py-2 rounded hover:bg-netflixGray/80 transition-colors border border-white/20 text-base">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center bg-netflixGray text-white px-6 py-2 rounded hover:bg-netflixGray/80 transition-colors border border-white/20 text-base">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-netflixRed" />
            <h2 className="text-4xl font-display font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={exp.id} className="bg-netflixGray/30 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-netflixGray/40">
                <div className="flex flex-row items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noreferrer" className="text-netflixRed hover:text-netflixRed/80 transition-colors flex-shrink-0">
                          <span className="text-sm">↗</span>
                        </a>
                      )}
                    </div>
                    <p className="text-xl text-white/80 mb-2">{exp.subtitle}</p>
                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-0">
                      {exp.date && <span>{exp.date}</span>}
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                  {exp.image && (
                    <div className="w-20 h-20 rounded overflow-hidden bg-white p-2 mt-0 flex-shrink-0 self-auto">
                      <img src={exp.image} alt={exp.title} className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-base">{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-netflixGray/50 text-white/90 rounded-full text-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8 text-netflixRed" />
            <h2 className="text-4xl font-display font-bold text-white">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-netflixGray/30 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-netflixGray/40">
                <div className="flex flex-row items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-white">{edu.title}</h3>
                      {edu.link && (
                        <a href={edu.link} target="_blank" rel="noreferrer" className="text-netflixRed hover:text-netflixRed/80 transition-colors flex-shrink-0">
                          <span className="text-sm">↗</span>
                        </a>
                      )}
                    </div>
                    <p className="text-xl text-white/80 mb-2">{edu.subtitle}</p>
                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-0">
                      {edu.date && <span>{edu.date}</span>}
                      {edu.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      )}
                    </div>
                  </div>
                  {edu.image && (
                    <div className="w-20 h-20 rounded overflow-hidden bg-white p-2 mt-0 flex-shrink-0 self-auto">
                      <img src={edu.image} alt={edu.title} className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                  {edu.description.map((point, i) => (
                    <li key={i} className="text-base">{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-netflixGray/50 text-white/90 rounded-full text-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Code className="w-8 h-8 text-netflixRed" />
            <h2 className="text-4xl font-display font-bold text-white">Projects</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-netflixGray/30 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-netflixGray/40 group">
                {proj.image && (
                  <div className="w-full h-48 rounded overflow-hidden mb-4">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-netflixRed hover:text-netflixRed/80 transition-colors flex-shrink-0 ml-2">
                      <span className="text-sm">↗</span>
                    </a>
                  )}
                </div>
                <p className="text-white/80 mb-3 text-base">{proj.subtitle}</p>
                {proj.date && <p className="text-white/60 text-sm mb-3">{proj.date}</p>}
                <ul className="list-disc list-inside space-y-1 text-white/80 text-sm ml-2 mb-4">
                  {proj.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-netflixGray/50 text-white/90 rounded-full text-xs border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Star className="w-8 h-8 text-netflixRed" />
            <h2 className="text-4xl font-display font-bold text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.id} className="bg-netflixGray/30 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-netflixGray/40">
                {skill.image && (
                  <div className="w-full h-32 rounded overflow-hidden mb-4">
                    <img src={skill.image} alt={skill.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-white/80 mb-3 text-sm">{skill.subtitle}</p>
                <ul className="list-disc list-inside space-y-1 text-white/70 text-sm ml-2">
                  {skill.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-netflixGray/50 text-white/90 rounded text-xs border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="w-8 h-8 text-netflixRed" />
            <h2 className="text-4xl font-display font-bold text-white">Achievements</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((ach) => (
              <div key={ach.id} className="bg-netflixGray/30 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-netflixGray/40">
                <div className="flex items-start gap-4 mb-4">
                  {ach.image && (
                    <div className={`w-16 h-16 rounded overflow-hidden ${ach.isLogo ? 'bg-white p-2' : ''} flex-shrink-0`}>
                      <img src={ach.image} alt={ach.title} className={`w-full h-full ${ach.isLogo ? 'object-contain' : 'object-cover'}`} />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">{ach.title}</h3>
                      {ach.link && (
                        <a href={ach.link} target="_blank" rel="noreferrer" className="text-netflixRed hover:text-netflixRed/80 transition-colors flex-shrink-0">
                          <span className="text-sm">↗</span>
                        </a>
                      )}
                    </div>
                    <p className="text-white/80 text-sm">{ach.subtitle}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-white/80 text-sm ml-2 mb-4">
                  {ach.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {ach.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-netflixGray/50 text-white/90 rounded-full text-xs border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 mb-4 text-base">Explore more sections</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="px-6 py-2 bg-netflixGray/50 hover:bg-netflixGray text-white rounded transition-colors border border-white/10 text-sm">
              Experience
            </Link>
            <Link to="/" className="px-6 py-2 bg-netflixGray/50 hover:bg-netflixGray text-white rounded transition-colors border border-white/10 text-sm">
              Projects
            </Link>
            <Link to="/" className="px-6 py-2 bg-netflixGray/50 hover:bg-netflixGray text-white rounded transition-colors border border-white/10 text-sm">
              Skills
            </Link>
            <Link to="/" className="px-6 py-2 bg-netflixGray/50 hover:bg-netflixGray text-white rounded transition-colors border border-white/10 text-sm">
              Education
            </Link>
            <Link to="/" className="px-6 py-2 bg-netflixGray/50 hover:bg-netflixGray text-white rounded transition-colors border border-white/10 text-sm">
              Achievements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
