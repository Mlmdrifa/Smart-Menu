import { View } from 'react-native';

interface Props {
  vertical?: number;
  horizontal?: number;
}

export default function Spacer({ vertical, horizontal }: Props) {
  return (
    <View
      style={{
        ...(vertical && { minHeight: vertical }),
        ...(horizontal && { minWidth: horizontal }),
      }}
    />
  );
}
