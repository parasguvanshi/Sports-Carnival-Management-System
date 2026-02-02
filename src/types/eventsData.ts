import { ImageSourcePropType } from 'react-native';
export type DayTab = 'today' | 'upcoming' | 'completed';
export type MatchType = 'roundrobin' | 'knockout';
export type FormatType = '1v1' | '2v2';

export type EventSlot = {
  format: FormatType;   
  totalSlots: number;   
  participants: string[];
};

export type eventInfo = {
  id: number;
  title: string;
  date: string;
  time: string;
  matchType: MatchType;      
  slots: EventSlot[];       
  image?: ImageSourcePropType | string;
  description?: string;
  createdBy: string;
  createdByRole: 'admin' | 'organiser' | 'participant';
};

export interface Props {
  event: eventInfo;
  activeTab: 'today' | 'upcoming' | 'completed';
  onPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  role?: 'admin' | 'organiser' | 'participant';
}

