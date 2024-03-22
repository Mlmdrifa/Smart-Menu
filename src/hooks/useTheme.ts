import { useContext } from 'react';

import { colors } from '@/designs/colors';
import { ThemeContext } from '@/providers/ThemeProvider';

type Theme = { background: string; text: string };

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);

  if (context === 'dark') return { background: colors.n800, text: colors.n0 };
  return { background: colors.n180, text: colors.n800 };
};
