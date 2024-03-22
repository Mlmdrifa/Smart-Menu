import { useContext } from 'react';

import { ThemeContext } from '@/providers/ThemeProvider';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === 'dark') return { background: 'black', text: 'white' };
  return { background: 'white', text: 'black' };
};
