import { ReactElement, useCallback, useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';

import Typo from '../atoms/Typo';

import { colors } from '@/designs/colors';
import { textStyles } from '@/designs/text.styles';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/providers/ThemeProvider';

interface InputProps extends TextInputProps {
  leftComponent?: ReactElement;
  rightComponent?: ReactElement;
  error?: string;
}

export default function Input({ leftComponent, rightComponent, error, ...props }: InputProps) {
  const theme = useTheme();
  const [value, setValue] = useState<any>(theme.mode === 'light' ? colors.n300 : colors.n600);

  const onFocus = useCallback(() => {
    setValue(colors.p200);
  }, []);
  const onBlur = useCallback(() => {
    setValue(theme.mode === 'light' ? colors.n300 : colors.n600);
  }, []);

  return (
    <View>
      <View style={[styles(theme).container, { borderColor: value }]}>
        {leftComponent}
        <TextInput
          onBlur={onBlur}
          onFocus={onFocus}
          style={styles(theme).inputText}
          placeholderTextColor={theme.mode === 'light' ? colors.n200 : colors.n600}
          {...props}
        />
        {rightComponent}
      </View>
      {error && (
        <View style={styles(theme).error}>
          <Typo color="d500" variant="caption3">
            {error}
          </Typo>
        </View>
      )}
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      minHeight: 54,
      gap: 10,
      borderWidth: 1,
      borderColor: theme.mode === 'light' ? colors.n300 : colors.n600,
      borderRadius: 16,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.mode === 'light' ? colors.n0 : colors.n800,
    },
    inputText: {
      ...textStyles.inputLabelPlaceholder,
      color: theme.mode === 'light' ? colors.n700 : colors.n0,
    },
    error: { paddingLeft: 12, marginTop: 5 },
  });
