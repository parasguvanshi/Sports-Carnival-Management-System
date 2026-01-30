import { ImageSourcePropType } from 'react-native';

export type eventInfo = {
  id: number;
  title: string;
  date: string;
  time: string;
  slot: string;
  duration?: string;
  format: string;
  rules?: string;
  image?: ImageSourcePropType | string;
};
