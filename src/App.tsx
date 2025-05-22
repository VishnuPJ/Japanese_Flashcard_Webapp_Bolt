import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Flashcard from './components/Flashcard';
import FlashcardSettings from './components/FlashcardSettings';
import VocabularyList from './components/VocabularyList';

const AppContent: React.FC = () => {
  const { currentView } = useAppContext();

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="sticky top-0 z-10 bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </div>
      <div className="container mx-auto px-4 pb-12">
        {currentView === 'flashcards' ? (
          <div className="mt-8">
            <FlashcardSettings />
            <Flashcard />
          </div>
        ) : (
          <div className="mt-8">
            <VocabularyList />
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;