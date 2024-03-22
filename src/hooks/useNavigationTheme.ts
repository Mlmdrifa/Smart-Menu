import { DefaultTheme, Theme } from '@react-navigation/native';

import { useTheme } from './useTheme';

export const useNavigationTheme = () => {
  const { background } = useTheme();

  const navTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background,
    },
  };

  return navTheme;
};
