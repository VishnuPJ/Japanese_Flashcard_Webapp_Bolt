import { createContext, useState, useContext, ReactNode, useMemo, useCallback } from 'react';
import { AppContextType, JLPTLevel, VocabularyWord } from '../types/types';
import { vocabulary } from '../data/vocabulary';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentView, setCurrentView] = useState<'flashcards' | 'vocabulary'>('flashcards');
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>('N5');
  const [showRomaji, setShowRomaji] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);

  const filteredWords = useMemo(() => {
    return vocabulary.filter(word => word.level === selectedLevel);
  }, [selectedLevel]);

  const shuffle = useCallback(() => {
    setShuffled(!shuffled);
    setCurrentCardIndex(0);
  }, [shuffled]);

  const nextCard = useCallback(() => {
    if (filteredWords.length > 0) {
      setCurrentCardIndex((prev) => (prev + 1) % filteredWords.length);
    }
  }, [filteredWords]);

  const prevCard = useCallback(() => {
    if (filteredWords.length > 0) {
      setCurrentCardIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
    }
  }, [filteredWords]);

  const value = {
    currentView,
    setCurrentView,
    selectedLevel,
    setSelectedLevel,
    showRomaji,
    setShowRomaji,
    showMeaning,
    setShowMeaning,
    currentCardIndex,
    setCurrentCardIndex,
    filteredWords,
    shuffle,
    nextCard,
    prevCard
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};