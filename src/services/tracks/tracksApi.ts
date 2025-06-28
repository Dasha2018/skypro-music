import axios from 'axios';
import { BASE_URL } from '../constants';
import { MusicData } from '@/sharedTypes/sharedTypes';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getTracks = (): Promise<MusicData[]> => {
  return api
    .get('/catalog/track/all/')
    .then((res) => res.data.data)
    .catch((err) => {
      console.error('Ошибка при загрузке треков:', err);
      throw err;
    });
};

export const getSelectionById = async (id: string): Promise<MusicData[]> => {
  const response = await api.get(`/catalog/selection/${id}/`);
  return response.data.data.items;
};
