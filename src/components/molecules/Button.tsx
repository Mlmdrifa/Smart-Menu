import { PropsWithChildren } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Icon from '../atoms/Icon';
import Typo from '../atoms/Typo';

import { Colors, colors } from '@/designs/colors';
import { layout } from '@/designs/layout';
import { SvgList } from '@/designs/svg';
import { TextVariant } from '@/designs/text.styles';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/providers/ThemeProvider';

type ButtonVariant = 'primary' | 'secondary' | 'clear';

interface ButtonProps extends PropsWithChildren {
  variant: ButtonVariant;
  typoVariant?: TextVariant;
  onPress: () => void;
  disabled?: boolean;
  leftIconName?: SvgList;
}

export default function Button({
  children,
  variant,
  typoVariant = 'mediumButton',
  onPress,
  disabled,
  leftIconName,
}: ButtonProps) {
  const theme = useTheme();
  const textColor: Record<ButtonVariant, Colors> = {
    primary: 'n0',
    secondary: theme.mode === 'light' ? 'n500' : 'p100',
    clear: theme.mode === 'light' ? 'p500' : 'p100',
  };

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles(theme).container,
        styles(theme)[variant],
        pressed && styles(theme).pressed,
        disabled && styles(theme).disabled,
      ]}
      onPress={onPress}>
      {leftIconName && <Icon iconName={leftIconName} />}
      <Typo color={textColor[variant]} variant={typoVariant}>
        {children}
      </Typo>
    </Pressable>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      ...layout.border,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      flexDirection: 'row',
    },
    primary: { backgroundColor: colors.p600 },
    secondary: {
      backgroundColor: theme.mode === 'light' ? colors.n0 : colors.n800,
      borderColor: colors.n700,
      borderWidth: 1,
    },
    clear: {},
    pressed: {
      opacity: 0.7,
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      shadowOffset: {
        width: 0,
        height: 5,
      },
    },
    disabled: { opacity: 0.5 },
  });
