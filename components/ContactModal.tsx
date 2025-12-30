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
    <div className="fixed inset-0 z-[60] overflow-y-auto overflow-x-hidden bg-black/80 flex justify-center items-center px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#181818] rounded-lg shadow-2xl overflow-hidden animate-fade-in-up border border-gray-700">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 rounded-full p-2 hover:bg-white/20 transition"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-netflixRed shadow-lg">
                <img src={PROFILE_IMAGE} alt="Akhil" className="w-full h-full object-cover" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-1">Akhil Joseph</h2>
            <p className="text-gray-400 mb-6">Full-Stack Engineer & AI/ML Specialist</p>

            <div className="w-full space-y-4">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center p-3 bg-[#2F2F2F] rounded hover:bg-[#3F3F3F] transition group">
                    <Mail className="w-5 h-5 text-netflixRed mr-4" />
                    <span className="text-white group-hover:underline">{CONTACT_INFO.email}</span>
                </a>
                
                <div className="flex items-center p-3 bg-[#2F2F2F] rounded">
                    <Phone className="w-5 h-5 text-netflixRed mr-4" />
                    <span className="text-white">{CONTACT_INFO.phone}</span>
                </div>

                <div className="flex items-center p-3 bg-[#2F2F2F] rounded">
                    <MapPin className="w-5 h-5 text-netflixRed mr-4" />
                    <span className="text-white">{CONTACT_INFO.location}</span>
                </div>

                <div className="flex gap-4 justify-center mt-6">
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="bg-[#0077b5] p-3 rounded-full hover:scale-110 transition">
                        <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="bg-[#333] p-3 rounded-full hover:scale-110 transition">
                        <Github className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};