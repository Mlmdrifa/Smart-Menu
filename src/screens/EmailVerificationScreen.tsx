import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import ScreenWrapper from '@/components/ScreenWrapper';
import Box from '@/components/atoms/Box';
import Spacer from '@/components/atoms/Spacer';
import Typo from '@/components/atoms/Typo';
import EmailForm from '@/components/organisms/EmailForm';

export default function EmailVerificationScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const onSubmit = useCallback(() => {
    navigation.navigate('PublicStack', { screen: 'CreateAccount' });
  }, []);

  return (
    <ScreenWrapper>
      <Box ycenter flex gap={40}>
        <Box center gap={14}>
          <Spacer vertical={72} />
          <Typo variant="h2">{t('screen.emailVerification.title')}</Typo>
          <Typo center variant="body1">
            {t('screen.emailVerification.description')}
          </Typo>
        </Box>
        <EmailForm onSubmit={onSubmit} />
      </Box>
    </ScreenWrapper>
  );
}
