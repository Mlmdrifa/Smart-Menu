import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';

export default function AuthentificationScreen() {
  const navigation = useNavigation();

  const handleLogin = useCallback(() => {}, []);
  const handleLoginWithFacebook = useCallback(() => {}, []);
  const handleLoginWithGoogle = useCallback(() => {}, []);
  const handleSignUp = useCallback(() => {}, []);

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
          <Button variant="primary" onPress={handleLogin}>
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
      <Button variant="clear" onPress={handleSignUp}>
        Sign up later
      </Button>
    </ScreenWrapper>
  );
}
