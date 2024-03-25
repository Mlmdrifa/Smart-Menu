import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@/components/Box';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';

export default function AuthentificationScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleStart = useCallback(() => {
    navigation.navigate('PublicStack', { screen: 'EmailVerification' });
  }, []);

  const handleLoginWithFacebook = useCallback(() => {}, []);
  const handleLoginWithGoogle = useCallback(() => {}, []);
  const handleLogin = useCallback(() => {
    navigation.navigate('PublicStack', { screen: 'Login' });
  }, []);

  return (
    <ScreenWrapper>
      <Box ycenter flex gap={56}>
        <Box center gap={14}>
          <Typo variant="h1">{t('screen.authentification.title')}</Typo>
          <Typo variant="body1" center>
            {t('screen.authentification.description')}
          </Typo>
        </Box>
        <Box gap={12}>
          <Button variant="primary" onPress={handleStart}>
            {t('screen.authentification.button.getStarted')}
          </Button>
          <Divider />
          <Button variant="secondary" onPress={handleLoginWithFacebook}>
            {t('screen.authentification.button.continueWithFacebook')}
          </Button>
          <Button variant="secondary" onPress={handleLoginWithGoogle}>
            {t('screen.authentification.button.continueWithGoogle')}
          </Button>
        </Box>
      </Box>
      <Button variant="clear" onPress={handleLogin}>
        {t('screen.authentification.button.signUpLater')}
      </Button>
    </ScreenWrapper>
  );
}
