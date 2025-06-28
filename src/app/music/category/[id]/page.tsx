'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getSelectionById } from '@/services/tracks/tracksApi';
import { MusicData } from '@/sharedTypes/sharedTypes';

const playlistTitles: Record<string, string> = {
  '1': 'Плейлист дня',
  '2': '100 музыкальных хитов',
  '3': 'Инди-заряд',
};

export default function PlaylistPage() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<MusicData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const data = await getSelectionById(id as string);
        setPlaylist(data);
      } catch {
        setError('Ошибка загрузки плейлиста');
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchPlaylist();
  }, [id]);

  const title = playlistTitles[id as string] || 'Треки';

  if (loading) return <CenterBlock title="Загрузка..." playlist={[]} />;
  if (error) return <CenterBlock title={error} playlist={[]} />;

  return <CenterBlock title={title} playlist={playlist} />;
}