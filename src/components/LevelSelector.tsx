import React from 'react';
import { useAppContext } from '../context/AppContext';
import { JLPTLevel } from '../types/types';

const LevelSelector: React.FC = () => {
  const { selectedLevel, setSelectedLevel } = useAppContext();
  
  const levels: JLPTLevel[] = ['N1', 'N2', 'N3', 'N4', 'N5'];

  return (
    <div className="mb-4">
      <label className="block text-lg text-white mb-2">JLPT Level</label>
      <div className="relative">
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value as JLPTLevel)}
          className="block w-full bg-gray-800 text-white border border-gray-700 rounded-md py-3 px-4 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LevelSelector;