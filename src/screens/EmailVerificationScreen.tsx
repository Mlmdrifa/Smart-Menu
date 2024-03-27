import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import ScreenWrapper from '@/components/ScreenWrapper';
import Box from '@/components/atoms/Box';
import Typo from '@/components/atoms/Typo';
import Button from '@/components/molecules/Button';
import Input from '@/components/molecules/Input';

export default function EmailVerificationScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <ScreenWrapper>
      <Box ycenter flex gap={40}>
        <Box center gap={14}>
          <Typo variant="h2">{t('screen.emailVerification.title')}</Typo>
          <Typo center variant="body1">
            {t('screen.emailVerification.description')}
          </Typo>
        </Box>
        <Input placeholder="Email" />
      </Box>
      <Box flex />
      <Button onPress={navigation.goBack} variant="primary">
        {t('screen.emailVerification.cta')}
      </Button>
    </ScreenWrapper>
  );
}
