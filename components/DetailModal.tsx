import React, { useEffect, useState } from 'react';
import { X, Play, Plus, ThumbsUp, Code, Gamepad2, ExternalLink } from 'lucide-react';
import { ContentItem } from '../types';

interface DetailModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  const [isPlusAnimated, setIsPlusAnimated] = useState(false);
  const [isLikeAnimated, setIsLikeAnimated] = useState(false);
  
  const buttonClass = "flex items-center bg-white text-netflixBlack px-4 md:px-8 py-2 md:py-2.5 rounded font-semibold text-sm md:text-base hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95";
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-netflixBlack/95 backdrop-blur-sm flex justify-center items-start pt-4 md:pt-8 px-2 md:px-4">
      <div className="relative w-full max-w-4xl bg-netflixBlack rounded-lg shadow-2xl overflow-hidden mb-4 md:mb-10">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-netflixBlack/80 hover:bg-netflixGray/80 rounded-full p-1.5 md:p-2 transition-colors duration-200"
          aria-label="Close"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        <div className={`relative h-[40vh] md:h-[50vh] w-full ${item.isLogo ? 'bg-white' : 'bg-netflixDark'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-netflixBlack/80 via-netflixBlack/60 via-netflixBlack/40 to-transparent z-10"></div>
          
          <img 
            src={item.image} 
            alt={item.title} 
            className={`w-full h-full ${item.isLogo ? 'object-contain p-4 md:p-12' : 'object-cover'} relative z-0`} 
          />
          
          {(() => {
            const hasNoActionButtons = !item.codeLink && !item.playLink && !item.websiteLink;
            const isStaticCard = item.type === 'Education' || item.type === 'Experience' || item.type === 'Skill' || item.id === 'ach-1';
            const isStatic = hasNoActionButtons && isStaticCard;
            
            return (
              <div className={`absolute left-4 md:left-12 z-20 w-[calc(100%-2rem)] md:w-3/4 ${isStatic ? '-bottom-2' : 'bottom-4 md:bottom-12'}`}>
                <h2 className={`text-2xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl ${isStatic ? 'mb-3 md:mb-5' : 'mb-2 md:mb-4'}`}>{item.title}</h2>
                <div className={`flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-3 flex-wrap gap-1.5 md:gap-2 ${isStatic ? 'mb-0' : 'mb-4 md:mb-6'}`}>
                  <div className="flex items-center space-x-2 md:space-x-3 flex-wrap gap-1.5 md:gap-2">
                  {item.codeLink && (
                    <a 
                      href={item.codeLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={buttonClass}
                    >
                      <Code className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 fill-netflixBlack" />
                      <span className="whitespace-nowrap">See Code</span>
                    </a>
                  )}
                  {item.playLink && (
                    <a 
                      href={item.playLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={buttonClass}
                    >
                      <Gamepad2 className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 fill-netflixBlack" />
                      <span className="whitespace-nowrap">Play Game</span>
                    </a>
                  )}
                  {item.websiteLink && (
                    <a 
                      href={item.websiteLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={buttonClass}
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 fill-netflixBlack" />
                      <span className="whitespace-nowrap">{item.websiteLink.includes('github.com') ? 'Visit Project' : 'Visit Website'}</span>
                    </a>
                  )}
                  {item.link && !item.codeLink && !item.playLink && !item.websiteLink && item.type !== 'Education' && item.type !== 'Experience' && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={buttonClass}
                    >
                      {item.type === 'Achievement' ? (
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 fill-netflixBlack" />
                      ) : (
                        <Play className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 fill-netflixBlack" />
                      )}
                      <span className="whitespace-nowrap">{item.type === 'Achievement' ? 'View Profile' : (item.type === 'Project' ? 'View Project' : 'Visit Website')}</span>
                    </a>
                  )}
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <button
                      onClick={() => {
                        setIsPlusAnimated(true);
                        setTimeout(() => setIsPlusAnimated(false), 600);
                      }}
                      className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95 ${
                        isPlusAnimated ? 'animate-bounce scale-125 bg-white/20 border-white' : ''
                      }`}
                      aria-label="Add"
                    >
                      <Plus className={`w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-300 ${
                        isPlusAnimated ? 'rotate-90 scale-110' : ''
                      }`} />
                    </button>
                    <button
                      onClick={() => {
                        setIsLikeAnimated(true);
                        setTimeout(() => setIsLikeAnimated(false), 600);
                      }}
                      className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95 ${
                        isLikeAnimated ? 'animate-bounce scale-125 bg-white/20 border-white' : ''
                      }`}
                      aria-label="Like"
                    >
                      <ThumbsUp className={`w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-300 ${
                        isLikeAnimated ? 'scale-125 fill-white' : ''
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        <div className="px-4 md:px-12 pb-6 md:pb-12 pt-4 md:pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-white">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6 text-sm md:text-base">
              <span className="text-[#46d369] font-bold">{item.matchPercentage}% Match</span>
              {item.date && <span className="text-white/70">{item.date}</span>}
              {(() => {
                const is4K = ['exp-2', 'proj-5', 'skill-1', 'edu-1'].includes(item.id);
                const isAchievement = item.id === 'ach-1' || item.id === 'ach-2';
                
                return (
                  <>
                    {is4K ? (
                      <span className="border border-white/50 text-xs px-2 rounded py-0.5 text-white font-medium">4K HDR</span>
                    ) : !isAchievement && (
                      <span className="border border-white/50 text-xs px-2 rounded py-0.5 text-white font-medium">HD</span>
                    )}
                    {item.id === 'ach-1' && (
                      <>
                        <span className="text-white/70">1st Place</span>
                        <span className="text-white/70">Competition</span>
                        <span className="text-white font-semibold">Rapid Prototyping Sprint</span>
                      </>
                    )}
                    {item.id === 'ach-2' && (
                      <>
                        <span className="text-white/70">Mind Sport</span>
                      </>
                    )}
                    {!isAchievement && <span className="text-white font-semibold">{item.subtitle}</span>}
                  </>
                );
              })()}
            </div>

            <div className="space-y-4 mb-4 md:mb-6">
              {(() => {
                const hasNetflixStyle = ['exp-1', 'exp-2', 'exp-3', 'proj-1', 'proj-2', 'proj-3', 'proj-4', 'proj-5', 'proj-6', 'proj-7', 'skill-1', 'skill-2', 'skill-3', 'edu-1', 'edu-2', 'ach-1', 'ach-2'].includes(item.id);
                const isSkill = ['skill-1', 'skill-2', 'skill-3'].includes(item.id);
                const isEducation = ['edu-1', 'edu-2'].includes(item.id);
                
                return hasNetflixStyle ? (
                <>
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <h3 className="text-xs md:text-sm font-semibold text-netflixLightGray uppercase tracking-wider">
                      {isSkill ? 'Feature Presentation' : 'Episode Description'}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 leading-relaxed">
                      {item.description.find(d => d.startsWith('EPISODE_DESCRIPTION:'))?.replace('EPISODE_DESCRIPTION:', '') || ''}
                    </p>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-xs md:text-sm font-semibold text-netflixLightGray uppercase tracking-wider">
                      {isSkill ? 'Highlights' : 'Key Scenes'}
                    </h3>
                    <ul className="space-y-2 md:space-y-3 text-white/90 leading-relaxed">
                      {item.description
                        .filter(d => d.startsWith('KEY_SCENE:'))
                        .map((point, idx) => {
                          const content = point.replace('KEY_SCENE:', '');
                          const colonIndex = content.indexOf(':');
                          const title = colonIndex > 0 ? content.substring(0, colonIndex) : '';
                          const description = colonIndex > 0 ? content.substring(colonIndex + 1).trim() : content;
                          return (
                            <li key={idx} className="text-sm md:text-base">
                              <span className="font-semibold text-white">{title}:</span>
                              <span className="ml-1 md:ml-2">{description}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </>
                ) : (
                  <>
                    <h3 className="text-lg md:text-xl font-bold text-white">Highlights</h3>
                    <ul className="list-disc pl-4 md:pl-5 space-y-2 md:space-y-2.5 text-white/90 leading-relaxed">
                      {item.description.map((point, idx) => (
                        <li key={idx} className="text-sm md:text-base">{point}</li>
                      ))}
                    </ul>
                  </>
                );
              })()}
            </div>
          </div>

          <div className="col-span-1 space-y-4 md:space-y-6">
            <div>
              {(() => {
                const hasNetflixStyle = ['exp-1', 'exp-2', 'exp-3', 'proj-1', 'proj-2', 'proj-3', 'proj-4', 'proj-5', 'proj-6', 'proj-7', 'skill-1', 'skill-2', 'skill-3', 'edu-1', 'edu-2', 'ach-1', 'ach-2'].includes(item.id);
                const isEducation = ['edu-1', 'edu-2'].includes(item.id);
                const label = hasNetflixStyle ? (isEducation ? 'Cast (Coursework):' : 'Cast:') : 'Tags:';
                
                return (
                  <>
                    <span className="text-netflixLightGray block mb-2 text-xs md:text-sm font-medium">{label}</span>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs md:text-sm text-white">
                          {tag}{idx < item.tags.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
            
            <div>
              <span className="text-netflixLightGray block mb-2 text-xs md:text-sm font-medium">Location:</span>
              <span className="text-white text-xs md:text-sm">{item.location || 'Remote / Online'}</span>
            </div>

            {item.type && (
               <div>
               <span className="text-netflixLightGray block mb-2 text-xs md:text-sm font-medium">Category:</span>
               <span className="text-white text-xs md:text-sm">{item.type}</span>
             </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
