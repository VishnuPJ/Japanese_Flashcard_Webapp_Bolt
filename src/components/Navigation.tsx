import React from 'react';
import { Layers, List } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navigation: React.FC = () => {
  const { currentView, setCurrentView } = useAppContext();

  return (
    <div className="grid grid-cols-2 gap-2 my-4 mx-4">
      <button
        className={`flex items-center justify-center gap-2 py-4 px-6 rounded-md transition-colors ${
          currentView === 'flashcards'
            ? 'bg-gray-800 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-750'
        }`}
        onClick={() => setCurrentView('flashcards')}
      >
        <Layers className="h-5 w-5" />
        <span className="text-lg">Flashcards</span>
      </button>
      
      <button
        className={`flex items-center justify-center gap-2 py-4 px-6 rounded-md transition-colors ${
          currentView === 'vocabulary'
            ? 'bg-gray-800 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-750'
        }`}
        onClick={() => setCurrentView('vocabulary')}
      >
        <List className="h-5 w-5" />
        <span className="text-lg">Vocabulary List</span>
      </button>
    </div>
  );
};

export default Navigation;