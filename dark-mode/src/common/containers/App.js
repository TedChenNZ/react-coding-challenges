import React from 'react';
import { DarkModeProvider } from '../darkMode/useDarkModeContext';
import DarkModeApplier from '../darkMode/DarkModeApplier';

export default function App({ children }) {
  return (
    <DarkModeProvider>
      <DarkModeApplier>{children}</DarkModeApplier>
    </DarkModeProvider>
  );
}
