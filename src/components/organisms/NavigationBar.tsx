import { useNavigation } from '@react-navigation/native';

import IconButton from '../molecules/IconButton';

export default function NavigationBar() {
  const navigation = useNavigation();

  return (
    <>
      <IconButton iconName="ArrowLeft" onPress={navigation.goBack} />
    </>
  );
}
