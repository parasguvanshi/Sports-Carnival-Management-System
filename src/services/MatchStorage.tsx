import AsyncStorage from '@react-native-async-storage/async-storage';
import { Match } from '../types/matchData';
import { STRINGCONSTANT } from '../constant/stringConstant';

export async function getMatches(eventId: number) {
  const data = await AsyncStorage.getItem(STRINGCONSTANT.KEY.KEY_MATCHES);
  const matches: Match[] = data ? JSON.parse(data) : [];
  return matches.filter(match => match.eventId === eventId);
}

export async function saveMatches(matches: Match[]) {
  await AsyncStorage.setItem(STRINGCONSTANT.KEY.KEY_MATCHES, JSON.stringify(matches));
}


