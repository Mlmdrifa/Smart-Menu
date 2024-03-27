import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import Box from '../atoms/Box';
import Typo from '../atoms/Typo';

import { colors } from '@/designs/colors';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/providers/ThemeProvider';

export default function Divider() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box horizontal xcenter gap={10}>
      <View style={styles(theme).line} />
      <Typo variant="caption3">{t('screen.authentification.or')}</Typo>
      <View style={styles(theme).line} />
    </Box>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    line: {
      height: 1,
      backgroundColor: theme.mode === 'light' ? colors.n200 : colors.n600,
      flex: 1,
    },
  });
