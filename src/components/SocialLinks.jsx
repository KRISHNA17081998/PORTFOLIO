import React from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <a 
        href="https://github.com/username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 text-white transition-colors duration-200"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a 
        href="https://linkedin.com/in/username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors duration-200"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;