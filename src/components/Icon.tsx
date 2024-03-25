import { SvgProps } from 'react-native-svg';

import { SVG, svg } from '@/designs/svg';

interface IconProps extends SvgProps {
  iconName: SVG;
}

export default function Icon({ iconName, ...props }: IconProps) {
  const Svg: React.FC<SvgProps> = svg[iconName];

  return <Svg height={24} width={24} {...props} />;
}
