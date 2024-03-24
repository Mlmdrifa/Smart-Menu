import { PropsWithChildren, createContext } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';

export type Theme = { background: string; text: string; mode: ColorSchemeName };

export const ThemeContext = createContext<ColorSchemeName>('light');

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();

  return <ThemeContext.Provider value={colorScheme}>{children}</ThemeContext.Provider>;
};
