import React, { useEffect } from 'react';
import { useDarkModeContext } from './useDarkModeContext';
import '../../styles/_dark-mode.scss';

const DARK_MODE_CLASS_NAME = 'dark-mode';

/**
 * Applies dark mode to the dom based on useDarkModeContext
 */
export default function DarkModeApplier({ children }) {
  const { isDarkMode } = useDarkModeContext();
  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0];
    let classes = htmlElement.className ? htmlElement.className.split(' ') : [];
    // Add dark-mode to html if in dark mode
    if (isDarkMode && !classes.includes(DARK_MODE_CLASS_NAME)) {
      classes.push(DARK_MODE_CLASS_NAME);
    }
    // Remove dark-mode from html if not in dark mode
    if (!isDarkMode) {
      classes = classes.filter(
        (className) => className !== DARK_MODE_CLASS_NAME
      );
    }
    htmlElement.className = classes.join(' ');
  }, [isDarkMode]);
  return children;
}
