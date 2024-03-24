import { useContext } from 'react';

import { colors } from '@/designs/colors';
import { Theme, ThemeContext } from '@/providers/ThemeProvider';

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);

  if (context === 'dark') return { background: colors.n800, text: colors.n0, mode: 'dark' };
  return { background: colors.n180, text: colors.n800, mode: 'light' };
};
