import React, { useState } from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { ContentItem } from '../types';

interface ContentCardProps {
  item: ContentItem;
  onSelect: (item: ContentItem) => void;
}

export const ContentCard: React.FC<ContentCardProps> = ({ item, onSelect }) => {
  const [isPlusAnimated, setIsPlusAnimated] = useState(false);
  const [isLikeAnimated, setIsLikeAnimated] = useState(false);
  return (
    <div 
      className="group relative h-[180px] min-w-[320px] cursor-pointer transition-transform duration-300 hover:scale-[1.15] hover:z-50 origin-center ease-out active:scale-[1.15]"
      onClick={() => onSelect(item)}
    >
      <div className={`h-full w-full rounded overflow-hidden ${item.isLogo ? 'bg-white p-4' : 'bg-netflixBlack'} relative shadow-2xl`}>
        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full ${item.isLogo ? 'object-contain' : 'object-cover'} transition-transform duration-300 group-hover:scale-110`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-netflixBlack/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          
          <div className="flex items-center space-x-2 mb-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-300 ease-out">
             <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-netflixBlack hover:bg-gray-200 transition-all duration-200 hover:scale-110">
                <Play className="w-4 h-4 fill-netflixBlack ml-0.5" />
             </div>
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 setIsPlusAnimated(true);
                 setTimeout(() => setIsPlusAnimated(false), 600);
               }}
               className={`w-8 h-8 rounded-full border-2 border-white/70 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 ${
                 isPlusAnimated ? 'animate-bounce scale-125 bg-white/20 border-white' : ''
               }`}
               aria-label="Add"
             >
                <Plus className={`w-4 h-4 text-white transition-all duration-300 ${
                  isPlusAnimated ? 'rotate-90 scale-110' : ''
                }`} />
             </button>
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 setIsLikeAnimated(true);
                 setTimeout(() => setIsLikeAnimated(false), 600);
               }}
               className={`w-8 h-8 rounded-full border-2 border-white/70 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-110 ml-auto ${
                 isLikeAnimated ? 'animate-bounce scale-125 bg-white/20 border-white' : ''
               }`}
               aria-label="Like"
             >
                <ThumbsUp className={`w-4 h-4 text-white transition-all duration-300 ${
                  isLikeAnimated ? 'scale-125 fill-white' : ''
                }`} />
             </button>
          </div>

          <div className="flex items-center space-x-2 mb-1.5 translate-y-6 group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out">
            <span className="text-[#46d369] font-bold text-xs">{item.matchPercentage}% Match</span>
            <span className="border border-white/50 text-[10px] px-1.5 py-0.5 text-white font-medium">
              {['exp-2', 'proj-5', 'skill-1', 'edu-1'].includes(item.id) ? '4K HDR' : 'HD'}
            </span>
          </div>

          <h3 className="text-sm font-semibold text-white truncate drop-shadow-lg translate-y-6 group-hover:translate-y-0 transition-transform duration-300 delay-100 ease-out mb-1">{item.title}</h3>
          
          <div className="flex flex-wrap gap-1 translate-y-6 group-hover:translate-y-0 transition-transform duration-300 delay-150 ease-out">
            {item.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[10px] text-white/90 flex items-center font-medium">
                {idx > 0 && <span className="mx-1 text-white/50">•</span>}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
