import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlayerInfo, Team } from '../types/teamsData';
import { eventInfo } from '../types/eventsData';
import { STRINGCONSTANT } from '../constant/stringConstant';


export async function getData<T>(key: string): Promise<T[]> {
  const data = await AsyncStorage.getItem(key);
  return data ? (JSON.parse(data) as T[]) : [];
}

export async function saveData<T>(key: string, data: T[]): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(data));
}

export const addPlayer1v1 = async (player: PlayerInfo) => {
  const players = await getData<PlayerInfo>(STRINGCONSTANT.KEY.KEY_1V1);
  players.push(player);
  await saveData(STRINGCONSTANT.KEY.KEY_1V1, players);
};

export const getPlayers1v1 = async (eventId: number) => {
  const players = await getData<PlayerInfo>(STRINGCONSTANT.KEY.KEY_1V1);
  return players.filter(player => player.eventId === eventId);
};

export const addPlayer2v2 = async (player: PlayerInfo) => {
  const players = await getData<PlayerInfo>(STRINGCONSTANT.KEY.KEY_2V2_POOL);
  players.push(player);
  await saveData(STRINGCONSTANT.KEY.KEY_2V2_POOL, players);
};

export const getEventById = async (eventId: number) => {
  const events = await getData<eventInfo>(STRINGCONSTANT.KEY.KEY_EVENTS);
  return events.find(event => Number(event.id) === Number(eventId));
};

export const getPlayers2v2Pool = async (eventId: number) => {
  const players = await getData<PlayerInfo>('PLAYERS_2V2_POOL');
  return players.filter(player => player.eventId === eventId);
};
