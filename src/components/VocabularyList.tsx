import React from 'react';
import { useAppContext } from '../context/AppContext';
import LevelSelector from './LevelSelector';

const VocabularyList: React.FC = () => {
  const { filteredWords } = useAppContext();

  return (
    <div className="px-4">
      <h2 className="text-3xl text-white font-bold text-center mb-6">
        {filteredWords[0]?.level || 'N5'} Vocabulary
      </h2>
      
      <div className="mb-6">
        <LevelSelector />
      </div>
      
      <div className="space-y-4">
        {filteredWords.length > 0 ? (
          filteredWords.map((word, index) => (
            <div key={word.id} className="grid grid-cols-5 bg-gray-800 rounded-lg overflow-hidden">
              <div className="col-span-2 bg-gray-700 p-6 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-gray-400 text-lg block mb-2">#{index + 1}</span>
                  <span className="text-white text-3xl font-bold">{word.kanji}</span>
                </div>
              </div>
              <div className="col-span-3 p-4 pl-6">
                <p className="text-cyan-400 text-xl mb-1">{word.hiragana}</p>
                <p className="text-white text-lg mb-1">{word.meaning}</p>
                <p className="text-gray-400">{word.pronunciation}</p>
                <p className="text-gray-500 text-sm">({word.level})</p>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-white text-lg">No vocabulary words found for this level.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VocabularyList;