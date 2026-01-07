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
  
  const buttonClass = "flex items-center bg-white text-netflixBlack px-8 py-2.5 rounded font-semibold text-base hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95";
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-netflixBlack/95 backdrop-blur-sm flex justify-center items-start pt-8 px-4">
      <div className="relative w-full max-w-4xl bg-netflixBlack rounded-lg shadow-2xl overflow-hidden mb-10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-netflixBlack/80 hover:bg-netflixGray/80 rounded-full p-2 transition-colors duration-200"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className={`relative h-[50vh] w-full ${item.isLogo ? 'bg-white' : 'bg-netflixDark'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-netflixBlack/80 via-netflixBlack/60 via-netflixBlack/40 to-transparent z-10"></div>
          
          <img 
            src={item.image} 
            alt={item.title} 
            className={`w-full h-full ${item.isLogo ? 'object-contain p-12' : 'object-cover'} relative z-0`} 
          />
          
          {(() => {
            const hasNoActionButtons = !item.codeLink && !item.playLink && !item.websiteLink;
            const isStaticCard = item.type === 'Education' || item.type === 'Experience' || item.type === 'Skill' || item.id === 'ach-1';
            const isStatic = hasNoActionButtons && isStaticCard;
            
            return (
              <div className={`absolute left-12 z-20 w-3/4 ${isStatic ? '-bottom-2' : 'bottom-12'}`}>
                <h2 className={`text-6xl font-bold text-white drop-shadow-2xl ${isStatic ? 'mb-5' : 'mb-4'}`}>{item.title}</h2>
                <div className={`flex items-center space-x-3 flex-wrap gap-2 ${isStatic ? 'mb-0' : 'mb-6'}`}>
                  {item.codeLink && (
                    <a 
                      href={item.codeLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={buttonClass}
                    >
                      <Code className="w-5 h-5 mr-2 fill-netflixBlack" />
                      See Code
                    </a>
                  )}
                  {item.playLink && (
                    <a 
                      href={item.playLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={buttonClass}
                    >
                      <Gamepad2 className="w-5 h-5 mr-2 fill-netflixBlack" />
                      Play Game
                    </a>
                  )}
                  {item.websiteLink && (
                    <a 
                      href={item.websiteLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={buttonClass}
                    >
                      <ExternalLink className="w-5 h-5 mr-2 fill-netflixBlack" />
                      {item.websiteLink.includes('github.com') ? 'Visit Project' : 'Visit Website'}
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
                        <ExternalLink className="w-5 h-5 mr-2 fill-netflixBlack" />
                      ) : (
                        <Play className="w-5 h-5 mr-2 fill-netflixBlack" />
                      )}
                      {item.type === 'Achievement' ? 'View Profile' : (item.type === 'Project' ? 'View Project' : 'Visit Website')}
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setIsPlusAnimated(true);
                      setTimeout(() => setIsPlusAnimated(false), 600);
                    }}
                    className={`flex items-center justify-center w-10 h-10 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95 ${
                      isPlusAnimated ? 'animate-bounce scale-125 bg-white/20 border-white' : ''
                    }`}
                    aria-label="Add"
                  >
                    <Plus className={`w-5 h-5 text-white transition-all duration-300 ${
                      isPlusAnimated ? 'rotate-90 scale-110' : ''
                    }`} />
                  </button>
                  <button
                    onClick={() => {
                      setIsLikeAnimated(true);
                      setTimeout(() => setIsLikeAnimated(false), 600);
                    }}
                    className={`flex items-center justify-center w-10 h-10 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95 ${
                      isLikeAnimated ? 'animate-bounce scale-125 bg-white/20 border-white' : ''
                    }`}
                    aria-label="Like"
                  >
                    <ThumbsUp className={`w-5 h-5 text-white transition-all duration-300 ${
                      isLikeAnimated ? 'scale-125 fill-white' : ''
                    }`} />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

        <div className="px-12 pb-12 pt-8 grid grid-cols-3 gap-8 text-white">
          <div className="col-span-2">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-base">
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

            <div className="space-y-4 mb-6">
              {(() => {
                const hasNetflixStyle = ['exp-1', 'exp-2', 'exp-3', 'proj-1', 'proj-2', 'proj-3', 'proj-4', 'proj-5', 'proj-6', 'proj-7', 'skill-1', 'skill-2', 'skill-3', 'edu-1', 'edu-2', 'ach-1', 'ach-2'].includes(item.id);
                const isSkill = ['skill-1', 'skill-2', 'skill-3'].includes(item.id);
                const isEducation = ['edu-1', 'edu-2'].includes(item.id);
                
                return hasNetflixStyle ? (
                <>
                  <div className="space-y-3 mb-6">
                    <h3 className="text-sm font-semibold text-netflixLightGray uppercase tracking-wider">
                      {isSkill ? 'Feature Presentation' : 'Episode Description'}
                    </h3>
                    <p className="text-base text-white/90 leading-relaxed">
                      {item.description.find(d => d.startsWith('EPISODE_DESCRIPTION:'))?.replace('EPISODE_DESCRIPTION:', '') || ''}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-netflixLightGray uppercase tracking-wider">
                      {isSkill ? 'Highlights' : 'Key Scenes'}
                    </h3>
                    <ul className="space-y-3 text-white/90 leading-relaxed">
                      {item.description
                        .filter(d => d.startsWith('KEY_SCENE:'))
                        .map((point, idx) => {
                          const content = point.replace('KEY_SCENE:', '');
                          const colonIndex = content.indexOf(':');
                          const title = colonIndex > 0 ? content.substring(0, colonIndex) : '';
                          const description = colonIndex > 0 ? content.substring(colonIndex + 1).trim() : content;
                          return (
                            <li key={idx} className="text-base">
                              <span className="font-semibold text-white">{title}:</span>
                              <span className="ml-2">{description}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white">Highlights</h3>
                    <ul className="list-disc pl-5 space-y-2.5 text-white/90 leading-relaxed">
                      {item.description.map((point, idx) => (
                        <li key={idx} className="text-base">{point}</li>
                      ))}
                    </ul>
                  </>
                );
              })()}
            </div>
          </div>

          <div className="col-span-1 space-y-6">
            <div>
              {(() => {
                const hasNetflixStyle = ['exp-1', 'exp-2', 'exp-3', 'proj-1', 'proj-2', 'proj-3', 'proj-4', 'proj-5', 'proj-6', 'proj-7', 'skill-1', 'skill-2', 'skill-3', 'edu-1', 'edu-2', 'ach-1', 'ach-2'].includes(item.id);
                const isEducation = ['edu-1', 'edu-2'].includes(item.id);
                const label = hasNetflixStyle ? (isEducation ? 'Cast (Coursework):' : 'Cast:') : 'Tags:';
                
                return (
                  <>
                    <span className="text-netflixLightGray block mb-2 text-sm font-medium">{label}</span>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-sm text-white">
                          {tag}{idx < item.tags.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
            
            <div>
              <span className="text-netflixLightGray block mb-2 text-sm font-medium">Location:</span>
              <span className="text-white text-sm">{item.location || 'Remote / Online'}</span>
            </div>

            {item.type && (
               <div>
               <span className="text-netflixLightGray block mb-2 text-sm font-medium">Category:</span>
               <span className="text-white text-sm">{item.type}</span>
             </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
