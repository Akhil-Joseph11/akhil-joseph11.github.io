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
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-black/70 flex justify-center items-start pt-10 px-4">
      <div className="relative w-full max-w-4xl bg-[#181818] rounded-lg shadow-2xl overflow-hidden mb-10 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#181818]/80 rounded-full p-2 hover:bg-[#2a2a2a] transition"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className={`relative h-[40vh] md:h-[50vh] w-full ${item.isLogo ? 'bg-white' : 'bg-black'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10"></div>
          
          <img 
            src={item.image} 
            alt={item.title} 
            className={`w-full h-full ${item.isLogo ? 'object-contain p-12' : 'object-cover'}`} 
          />
          
          <div className="absolute bottom-12 left-8 md:left-12 z-20 w-3/4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg shadow-black">{item.title}</h2>
            
            <div className="flex items-center space-x-4 mb-6">
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center bg-white text-black px-6 py-2 rounded hover:bg-opacity-80 transition font-bold text-lg hover:scale-105 active:scale-95 duration-200"
                >
                  <Play className="w-6 h-6 mr-2 fill-black" />
                  {item.type === 'Project' ? 'View Project' : 'Visit Website'}
                </a>
              )}
              <button className="flex items-center border-2 border-gray-500 rounded-full p-2 hover:border-white transition hover:scale-110 active:scale-90">
                <Plus className="w-5 h-5 text-white" />
              </button>
              <button className="flex items-center border-2 border-gray-500 rounded-full p-2 hover:border-white transition hover:scale-110 active:scale-90">
                <ThumbsUp className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 md:px-12 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm md:text-base">
              <span className="text-green-500 font-bold">{item.matchPercentage}% Match</span>
              <span className="text-gray-400">{item.date}</span>
              <span className="border border-gray-500 px-2 rounded text-xs py-0.5">HD</span>
              <span className="text-gray-300 font-semibold">{item.subtitle}</span>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-bold text-white">Highlights</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 leading-relaxed">
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-1 space-y-6">
            <div>
              <span className="text-gray-500 block mb-1 text-sm">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm text-white hover:underline cursor-pointer">
                    {tag}{idx < item.tags.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <span className="text-gray-500 block mb-1 text-sm">Location:</span>
              <span className="text-white text-sm">{item.location || 'Remote / Online'}</span>
            </div>

            {item.type && (
               <div>
               <span className="text-gray-500 block mb-1 text-sm">Category:</span>
               <span className="text-white text-sm">{item.type}</span>
             </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};