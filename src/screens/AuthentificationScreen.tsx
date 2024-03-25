import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';

export default function AuthentificationScreen() {
  const navigation = useNavigation();

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
          <Typo variant="h1">Let’s Get Started 😁</Typo>
          <Typo variant="body1" center>
            Sign up or login into to have a full digital experience in our restaurant
          </Typo>
        </Box>
        <Box gap={12}>
          <Button variant="primary" onPress={handleStart}>
            Get Started
          </Button>
          <Divider />
          <Button variant="secondary" onPress={handleLoginWithFacebook}>
            Continue with Facebook
          </Button>
          <Button variant="secondary" onPress={handleLoginWithGoogle}>
            Continue with Google
          </Button>
        </Box>
      </Box>
      <Button variant="clear" onPress={handleLogin}>
        Sign up later
      </Button>
    </ScreenWrapper>
  );
}
