import React, { useState, useEffect } from 'react';
import { Theme } from '@radix-ui/themes';
import Router from './router';
import Preloader from './components/Preloader';

const preloadPages = async () => {
  await Promise.all([
    import('./pages/Home'),
    import('./pages/Faq'),
    import('./pages/About'),
    import('./pages/Venues'),
  ]);
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    preloadPages();
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <Theme>
      {isLoading ? (
        <Preloader onLoadComplete={handleLoadComplete} />
      ) : (
        <Router />
      )}
    </Theme>
  );
};

export default App;