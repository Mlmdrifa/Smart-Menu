import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import ScreenWrapper from '@/components/ScreenWrapper';
import Box from '@/components/atoms/Box';
import Spacer from '@/components/atoms/Spacer';
import Typo from '@/components/atoms/Typo';
import AuthMethodItem from '@/components/molecules/AuthMethodItem';
import Button from '@/components/molecules/Button';
import NavigationBar from '@/components/organisms/NavigationBar';
import { PublicStackParamList } from '@/navigation/stacks/PublicStack';

interface FormData {
  email: string;
  phoneNumber: string;
}

export default function VerifyCodeScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const route = useRoute<RouteProp<PublicStackParamList, 'VerifyCode'>>();
  const { email, phoneNumber } = route.params || {};

  const handleVerifySms = useCallback(() => {
    if (phoneNumber) {
      navigation.navigate('PublicStack', {
        screen: 'OtpScreen',
        params: {
          phoneNumber,
        },
      });
    }
  }, [navigation, phoneNumber]);

  const handleVerifyEmail = useCallback(() => {
    if (email) {
      navigation.navigate('PublicStack', {
        screen: 'OtpScreen',
        params: {
          email,
        },
      });
    }
  }, [navigation, email]);

  const onSubmit = () => {};

  return (
    <ScreenWrapper>
      <Spacer vertical={16} />
      <NavigationBar />
      <Spacer vertical={50} />
      <Box flex>
        <Box gap={14}>
          <Typo center variant="h2">
            {t('screen.verifyCode.title')}
          </Typo>
          <Typo center variant="body2">
            {t('screen.verifyCode.description')}
          </Typo>
          <Spacer vertical={40} />
          <Box gap={24}>
            <AuthMethodItem title="Via email" value={email} onPress={handleVerifyEmail} />
            <AuthMethodItem title="Via SMS" value={phoneNumber} onPress={handleVerifySms} />
          </Box>
        </Box>
        <Box flex />

        <Button variant="primary" onPress={onSubmit}>
          {t('cta.next')}
        </Button>
      </Box>
    </ScreenWrapper>
  );
}
