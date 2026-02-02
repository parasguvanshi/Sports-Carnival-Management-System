export type Match = {
  id: string;
  eventId: number;
  format: '1v1' | '2v2';
  round: number;
  teamA: string; 
  teamB: string | 'BYE';
};
