import React, { useEffect } from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { ContentItem } from '../types';

interface DetailModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
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
          <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-netflixBlack/40 to-transparent z-10"></div>
          
          <img 
            src={item.image} 
            alt={item.title} 
            className={`w-full h-full ${item.isLogo ? 'object-contain p-12' : 'object-cover'}`} 
          />
          
          <div className="absolute bottom-12 left-12 z-20 w-3/4">
            <h2 className="text-6xl font-bold mb-4 text-white drop-shadow-2xl">{item.title}</h2>
            
            <div className="flex items-center space-x-3 mb-6 flex-wrap gap-2">
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center bg-white text-netflixBlack px-8 py-2.5 rounded font-semibold text-base hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Play className="w-5 h-5 mr-2 fill-netflixBlack" />
                  {item.type === 'Project' ? 'View Project' : 'Visit Website'}
                </a>
              )}
              <button className="flex items-center justify-center w-10 h-10 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95" aria-label="Add">
                <Plus className="w-5 h-5 text-white" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 border-2 border-white/70 rounded-full hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-95" aria-label="Like">
                <ThumbsUp className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-12 pb-12 pt-8 grid grid-cols-3 gap-8 text-white">
          <div className="col-span-2">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-base">
              <span className="text-[#46d369] font-bold">{item.matchPercentage}% Match</span>
              <span className="text-white/70">{item.date}</span>
              <span className="border border-white/50 text-xs px-2 rounded py-0.5 text-white font-medium">HD</span>
              <span className="text-white font-semibold">{item.subtitle}</span>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-bold text-white">Highlights</h3>
              <ul className="list-disc pl-5 space-y-2.5 text-white/90 leading-relaxed">
                {item.description.map((point, idx) => (
                  <li key={idx} className="text-base">{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-1 space-y-6">
            <div>
              <span className="text-netflixLightGray block mb-2 text-sm font-medium">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm text-white hover:text-netflixRed cursor-pointer transition-colors">
                    {tag}{idx < item.tags.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
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
