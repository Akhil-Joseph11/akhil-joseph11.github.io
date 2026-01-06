import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentItem } from '../types';
import { ContentCard } from './ContentCard';

interface SectionRowProps {
  id?: string;
  title: string;
  items: ContentItem[];
  onSelect: (item: ContentItem) => void;
}

export const SectionRow: React.FC<SectionRowProps> = ({ id, title, items, onSelect }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      
      if (direction === 'left' && scrollTo <= 0) setIsMoved(false);
    }
  };

  return (
    <div id={id} className="h-fit space-y-4 px-16 my-8 scroll-mt-24">
      <h2 className="w-56 cursor-pointer text-2xl font-semibold text-white transition-colors duration-200 hover:text-netflixRed">
        {title}
      </h2>
      
      <div className="group relative -ml-2">
        <ChevronLeft 
          className={`absolute top-0 bottom-0 left-2 z-[60] m-auto h-12 w-12 cursor-pointer opacity-0 transition-all duration-200 hover:scale-125 hover:opacity-100 group-hover:opacity-100 bg-netflixBlack/80 hover:bg-netflixBlack rounded-full p-2 pointer-events-auto ${!isMoved && 'hidden'}`} 
          onClick={() => handleClick('left')}
          aria-label="Scroll left"
        />
        
        <div 
          ref={rowRef}
          className="flex items-center space-x-3.5 overflow-x-scroll scrollbar-hide pl-8 pr-2 py-8 no-scrollbar scroll-smooth"
        >
          {items.map((item) => (
            <ContentCard key={item.id} item={item} onSelect={onSelect} />
          ))}
        </div>
        
        <ChevronRight 
          className="absolute top-0 bottom-0 right-2 z-[60] m-auto h-12 w-12 cursor-pointer opacity-0 transition-all duration-200 hover:scale-125 hover:opacity-100 group-hover:opacity-100 bg-netflixBlack/80 hover:bg-netflixBlack rounded-full p-2 pointer-events-auto" 
          onClick={() => handleClick('right')}
          aria-label="Scroll right"
        />
      </div>
    </div>
  );
};
