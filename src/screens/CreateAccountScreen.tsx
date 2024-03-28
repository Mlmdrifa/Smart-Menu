import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import ScreenWrapper from '@/components/ScreenWrapper';
import Box from '@/components/atoms/Box';
import Typo from '@/components/atoms/Typo';
import AccountForm from '@/components/organisms/AccountForm';

interface FormData {
  email: string;
  phoneNumber: string;
}

export default function CreateAccountScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const onSubmit = useCallback(
    (data: FormData) => {
      const { email, phoneNumber } = data;
      navigation.navigate('PublicStack', {
        screen: 'VerifyCode',
        params: {
          email,
          phoneNumber,
        },
      });
    },
    [navigation],
  );

  return (
    <ScreenWrapper>
      <Box ycenter gap={40} flex>
        <Box center gap={14}>
          <Typo variant="h2">{t('screen.creataAccount.title')}</Typo>
          <Typo center variant="body1">
            {t('screen.creataAccount.description')}
          </Typo>
        </Box>
        <AccountForm onSubmit={onSubmit} />
      </Box>
    </ScreenWrapper>
  );
}
