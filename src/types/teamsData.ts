export type MatchFormat = '1v1' | '2v2';

export type Gender = 'male' | 'female' | 'other';

export type PlayerInfo = {
  id: string;
  eventId: number;
  format: '1v1' | '2v2';
  name: string;
  email: string | undefined;
  phone: string;
  gender: Gender;
};


export type Team = {
  id: string;
  eventId: number;
  format: '2v2';
  name: string;       
  players: PlayerInfo[];
};