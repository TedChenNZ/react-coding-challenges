import React, { useCallback, useState } from 'react';

const DarkModeContext = React.createContext();

const DARK_MODE_CACHE_KEY = 'isDarkMode';
function getDarkModeFromCache() {
  return localStorage.getItem(DARK_MODE_CACHE_KEY) === "true";
}

function setDarkModeFromCache(isDarkMode) {
  return localStorage.setItem(DARK_MODE_CACHE_KEY, isDarkMode);
}

function useIsDarkMode() {
  const [_isDarkMode, _setIsDarkMode] = useState(
    getDarkModeFromCache() || false
  );

  const setIsDarkMode = useCallback(
    (isDarkMode) => {
      _setIsDarkMode(isDarkMode);
      setDarkModeFromCache(isDarkMode);
    },
    [_setIsDarkMode]
  );

  return {
    isDarkMode: _isDarkMode,
    setIsDarkMode,
  };
}

export function DarkModeProvider({ children }) {
  const value = useIsDarkMode();

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  const context = React.useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkModeContext must be used within DarkModeProvider');
  }
  return context;
}
