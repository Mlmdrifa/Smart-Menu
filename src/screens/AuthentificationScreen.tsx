import { useNavigation } from '@react-navigation/native';

import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
export default function AuthentificationScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Typo variant="h1">Authentification</Typo>
    </ScreenWrapper>
  );
}
