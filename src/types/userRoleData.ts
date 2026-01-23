export const roleType = {
  1: 'admin',
  2: 'organiser',
  3: 'participant',
} as const;

export type userInfo = {
  id: number;
  title: string;
  icon: string;
  description: string;
};
