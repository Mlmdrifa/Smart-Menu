import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import ScreenWrapper from '@/components/ScreenWrapper';
import { useTheme } from '@/hooks/useTheme';

export default function AuthentificationScreen() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <ScreenWrapper>
      <Text
        onPress={() => navigation.navigate('PublicStack', { screen: 'EmailVerification' })}
        style={{ color: theme.text }}>
        Authentification
      </Text>
    </ScreenWrapper>
  );
}
