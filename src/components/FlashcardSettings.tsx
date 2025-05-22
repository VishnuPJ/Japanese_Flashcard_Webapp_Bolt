import React from 'react';
import { Shuffle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import LevelSelector from './LevelSelector';

const FlashcardSettings: React.FC = () => {
  const { showRomaji, setShowRomaji, showMeaning, setShowMeaning, shuffle } = useAppContext();

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <h2 className="text-2xl text-white font-semibold mb-6">Flashcard Settings</h2>
      
      <LevelSelector />
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg text-white">Show Romaji</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showRomaji}
            onChange={() => setShowRomaji(!showRomaji)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <span className="text-lg text-white">Show Meaning</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showMeaning}
            onChange={() => setShowMeaning(!showMeaning)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
        </label>
      </div>
      
      <button
        onClick={shuffle}
        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
      >
        <Shuffle className="h-5 w-5" />
        <span>Shuffle</span>
      </button>
    </div>
  );
};

export default FlashcardSettings;