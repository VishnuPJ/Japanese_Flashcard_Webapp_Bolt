export interface VocabularyWord {
  id: number;
  kanji: string;
  hiragana: string;
  meaning: string;
  pronunciation: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
}

export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface AppContextType {
  currentView: 'flashcards' | 'vocabulary';
  setCurrentView: (view: 'flashcards' | 'vocabulary') => void;
  selectedLevel: JLPTLevel;
  setSelectedLevel: (level: JLPTLevel) => void;
  showRomaji: boolean;
  setShowRomaji: (show: boolean) => void;
  showMeaning: boolean;
  setShowMeaning: (show: boolean) => void;
  currentCardIndex: number;
  setCurrentCardIndex: (index: number) => void;
  filteredWords: VocabularyWord[];
  shuffle: () => void;
  nextCard: () => void;
  prevCard: () => void;
}