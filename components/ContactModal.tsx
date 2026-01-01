import React, { useEffect } from 'react';
import { X, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { CONTACT_INFO, PROFILE_IMAGE } from '../constants';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto overflow-x-hidden bg-netflixBlack/95 backdrop-blur-sm flex justify-center items-center px-4 py-4">
      <div className="relative w-full max-w-lg bg-netflixBlack rounded-lg shadow-2xl overflow-hidden border border-white/20 my-4">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-netflixBlack/80 hover:bg-netflixGray/80 rounded-full p-2 transition-colors duration-200"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-8 flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-2 border-netflixRed shadow-xl">
                <img src={PROFILE_IMAGE} alt="Akhil" className="w-full h-full object-cover" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2">Akhil Joseph</h2>
            <p className="text-white/70 mb-8 text-base">Full-Stack Engineer & AI/ML Specialist</p>

            <div className="w-full space-y-3">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center p-4 bg-netflixGray/50 hover:bg-netflixGray rounded transition-colors duration-200 group border border-white/10">
                    <Mail className="w-5 h-5 text-netflixRed mr-4 flex-shrink-0" />
                    <span className="text-white group-hover:text-netflixRed transition-colors text-base break-all">{CONTACT_INFO.email}</span>
                </a>
                
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center p-4 bg-netflixGray/50 rounded border border-white/10">
                    <Phone className="w-5 h-5 text-netflixRed mr-4 flex-shrink-0" />
                    <span className="text-white text-base">{CONTACT_INFO.phone}</span>
                </a>

                <div className="flex items-center p-4 bg-netflixGray/50 rounded border border-white/10">
                    <MapPin className="w-5 h-5 text-netflixRed mr-4 flex-shrink-0" />
                    <span className="text-white text-base">{CONTACT_INFO.location}</span>
                </div>

                <div className="flex gap-4 justify-center mt-8">
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="bg-[#0077b5] p-3 rounded-full hover:bg-[#006097] hover:scale-110 transition-all duration-200" aria-label="LinkedIn">
                        <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="bg-netflixGray p-3 rounded-full hover:bg-netflixGray/80 hover:scale-110 transition-all duration-200" aria-label="GitHub">
                        <Github className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
