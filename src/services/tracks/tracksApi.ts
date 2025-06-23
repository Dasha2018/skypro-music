import axios from 'axios';
import { BASE_URL } from '../tracks/constants';
import { MusicData } from '@/sharedTypes/sharedTypes';

export const getTracks = (): Promise<MusicData[]> => {
  return axios(BASE_URL + '/catalog/track/all/');
};
