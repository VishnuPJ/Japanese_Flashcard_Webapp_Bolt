import React from 'react';
import { Monitor } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-6 px-4">
      <div className="flex items-center gap-2">
        <Monitor className="text-cyan-400 h-8 w-8" />
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          KAIZEN <span className="font-normal text-gray-300">(Nihongo Vocabulary Flashcard App)</span>
        </h1>
        <div className="ml-auto">
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;