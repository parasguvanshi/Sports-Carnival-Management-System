import { useEffect, useState } from 'react';
import { PlayerInfo } from '../types/teamsData';
import { getPlayers1v1, getPlayers2v2Pool } from '../services/TeamStorage';
import { STRINGCONSTANT } from '../constant/stringConstant';

export const teamListingViewModel = (eventId: number) => {
  const [activeTab, setActiveTab] = useState<'1v1' | '2v2'>('1v1');
  const [malePlayers, setMalePlayers] = useState<PlayerInfo[]>([]);
  const [femalePlayers, setFemalePlayers] = useState<PlayerInfo[]>([]);
  const [male2v2Players, setMale2v2Players] = useState<PlayerInfo[]>([]);
  const [female2v2Players, setFemale2v2Players] = useState<PlayerInfo[]>([]);

  const loadData = async () => {
 
    const players1v1 = await getPlayers1v1(eventId);
    setMalePlayers(players1v1.filter(player => player.gender === STRINGCONSTANT.GENDER.MALE));
    setFemalePlayers(players1v1.filter(player => player.gender === STRINGCONSTANT.GENDER.FEMALE));

  
    const players2v2 = await getPlayers2v2Pool(eventId);
    setMale2v2Players(players2v2.filter(player => player.gender === STRINGCONSTANT.GENDER.MALE));
    setFemale2v2Players(players2v2.filter(player => player.gender === STRINGCONSTANT.GENDER.FEMALE));
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    activeTab,
    setActiveTab,
    malePlayers,
    femalePlayers,
    male2v2Players,
    female2v2Players,
    loadData,
  };
};
