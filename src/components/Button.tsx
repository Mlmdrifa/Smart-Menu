import { PropsWithChildren } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Typo from './Typo';

import { Colors, colors } from '@/designs/colors';
import { TextVariant } from '@/designs/text.styles';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/providers/ThemeProvider';

type ButtonVariant = 'primary' | 'secondary' | 'clear';

interface ButtonProps extends PropsWithChildren {
  variant: ButtonVariant;
  typoVariant?: TextVariant;
}

export default function Button({ children, variant, typoVariant = 'mediumButton' }: ButtonProps) {
  const theme = useTheme();
  const textColor: Record<ButtonVariant, Colors> = {
    primary: 'n0',
    secondary: theme.mode === 'light' ? 'n500' : 'p100',
    clear: theme.mode === 'light' ? 'p500' : 'p100',
  };

  return (
    <Pressable style={[styles(theme).container, styles(theme)[variant]]}>
      <Typo color={textColor[variant]} variant={typoVariant}>
        {children}
      </Typo>
    </Pressable>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingVertical: 16,
      paddingHorizontal: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      gap: 8,
    },
    primary: { backgroundColor: colors.p600 },
    secondary: {
      backgroundColor: theme.mode === 'light' ? colors.n0 : colors.n800,
      borderColor: colors.n700,
      borderWidth: 1,
    },
    clear: {},
  });
