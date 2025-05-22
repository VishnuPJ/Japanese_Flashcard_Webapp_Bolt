import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Flashcard: React.FC = () => {
  const { 
    filteredWords, 
    currentCardIndex, 
    showRomaji, 
    showMeaning,
    nextCard,
    prevCard,
    setCurrentCardIndex
  } = useAppContext();

  // Reset currentCardIndex when filteredWords changes
  useEffect(() => {
    setCurrentCardIndex(0);
  }, [filteredWords, setCurrentCardIndex]);

  if (!filteredWords || filteredWords.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-800 rounded-lg p-8 text-white animate-fade-in">
        <p className="text-xl">No vocabulary words found for this level.</p>
      </div>
    );
  }

  // Ensure currentCardIndex is within bounds
  const safeIndex = Math.min(Math.max(0, currentCardIndex), filteredWords.length - 1);
  const currentWord = filteredWords[safeIndex];

  if (!currentWord) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-800 rounded-lg p-8 text-white animate-fade-in">
        <p className="text-xl">Error loading flashcard.</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute top-4 right-4 text-gray-400 font-medium">
        #{safeIndex + 1} / {filteredWords.length}
      </div>
      
      <div className="flashcard-container w-full">
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-gray-800 rounded-lg p-8 mb-6 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
          <h2 className="text-6xl text-white font-bold mb-4 animate-slide-up">{currentWord.kanji}</h2>
          
          <p className="text-3xl text-cyan-400 mb-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {currentWord.hiragana}
          </p>
          
          {showMeaning && (
            <p className="text-xl text-white mb-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {currentWord.meaning}
            </p>
          )}
          
          {showRomaji && (
            <p className="text-lg text-gray-400 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {currentWord.pronunciation}
            </p>
          )}
          
          <div className="mt-4 text-gray-500 animate-fade-in" style={{ animationDelay: '400ms' }}>
            ({currentWord.level})
          </div>
        </div>
      </div>
      
      <div className="flex justify-between w-full gap-4">
        <button
          onClick={prevCard}
          disabled={safeIndex === 0}
          className={`p-6 flex-1 ${
            safeIndex === 0 
              ? 'bg-gray-700 cursor-not-allowed opacity-50' 
              : 'bg-gray-800 hover:bg-gray-700 hover:scale-105'
          } text-white rounded-lg transition-all duration-300 transform`}
        >
          <ChevronLeft className="h-6 w-6 mx-auto" />
        </button>
        
        <button
          onClick={nextCard}
          disabled={safeIndex === filteredWords.length - 1}
          className={`p-6 flex-1 ${
            safeIndex === filteredWords.length - 1
              ? 'bg-gray-700 cursor-not-allowed opacity-50'
              : 'bg-gray-800 hover:bg-gray-700 hover:scale-105'
          } text-white rounded-lg transition-all duration-300 transform`}
        >
          <ChevronRight className="h-6 w-6 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default Flashcard;