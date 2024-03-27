import { Text } from 'react-native';

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return <Text className="font-light text-xl text-white mb-3">{title}</Text>;
};
