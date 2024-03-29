import { Pressable, StyleSheet, View } from 'react-native';

import Box from '../atoms/Box';
import Icon from '../atoms/Icon';
import Typo from '../atoms/Typo';

import { colors } from '@/designs/colors';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/providers/ThemeProvider';

interface AuthMethodItemProps {
  title: string;
  value: string;
  onPress: () => void;
}

export default function AuthMethodItem({ title, value, onPress }: AuthMethodItemProps) {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress}>
      <View style={styles(theme).container}>
        <Box horizontal xcenter>
          <Box gap={12} flex>
            <Typo variant="h5">{title}</Typo>
            <Typo variant="body2" color={theme.mode === 'light' ? 'n500' : 'n300'}>
              {value}
            </Typo>
          </Box>
          <Icon iconName="ArrowRight" stroke={colors.s700} />
        </Box>
      </View>
    </Pressable>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      borderRadius: 16,
      backgroundColor: theme.mode === 'light' ? colors.n0 : colors.n700,
    },
  });
