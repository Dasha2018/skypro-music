'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { useEffect, useState } from 'react';
import { getTracks } from '@/services/tracks/tracksApi';
import { MusicData } from '@/sharedTypes/sharedTypes';

export default function MainPage() {
  const [tracks, setTracks] = useState<MusicData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getTracks()
      .then((data) => {
        console.log('Треки с сервера:', data);
        setTracks(data);
      })
      .catch(() => {
        setError('Ошибка загрузки треков');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <CenterBlock title="Загрузка..." playlist={[]} />;
  if (error) return <CenterBlock title={error} playlist={[]} />;

  return <CenterBlock title="Треки" playlist={tracks} />;
}
