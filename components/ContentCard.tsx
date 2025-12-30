import React from 'react';
import { Play, Plus, ChevronDown } from 'lucide-react';
import { ContentItem } from '../types';

interface ContentCardProps {
  item: ContentItem;
  onSelect: (item: ContentItem) => void;
}

export const ContentCard: React.FC<ContentCardProps> = ({ item, onSelect }) => {
  return (
    <div 
      className="group relative h-[140px] min-w-[240px] md:h-[160px] md:min-w-[280px] lg:h-[180px] lg:min-w-[320px] cursor-pointer transition-all duration-500 hover:scale-110 hover:z-50 origin-center ease-in-out"
      onClick={() => onSelect(item)}
    >
      <div className={`h-full w-full rounded-md overflow-hidden ${item.isLogo ? 'bg-white p-4' : 'bg-[#141414]'} relative shadow-lg ring-0 group-hover:ring-2 group-hover:ring-white/50`}>
        <img
          src={item.image}
          alt={item.title}
          className={`h-full w-full ${item.isLogo ? 'object-contain' : 'object-cover'} transition-all duration-300`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          
          <div className="flex items-center space-x-2 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black hover:bg-gray-200 transition">
                <Play className="w-3 h-3 fill-black" />
             </div>
             <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:border-white transition">
                <Plus className="w-3 h-3 text-gray-300" />
             </div>
             <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:border-white transition ml-auto">
                <ChevronDown className="w-3 h-3 text-gray-300" />
             </div>
          </div>

          <div className="flex items-center space-x-2 mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            <span className="text-green-500 font-bold text-[10px]">{item.matchPercentage}% Match</span>
            <span className="border border-gray-500 text-[10px] px-1 text-gray-400">HD</span>
          </div>

          <h3 className="text-sm font-semibold text-white truncate shadow-black drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
          
          <div className="flex flex-wrap gap-1 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {item.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[10px] text-gray-300 flex items-center">
                {idx > 0 && <span className="mx-1 text-gray-500">•</span>}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};