import { useNavigation } from '@react-navigation/native';

import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';

export default function EmailVerificationScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Typo variant="h1">Email verification</Typo>
    </ScreenWrapper>
  );
}
