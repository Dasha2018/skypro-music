import { MusicData } from '@/sharedTypes/sharedTypes';

export function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const inputSeconds = Math.floor(time % 60);
  const outputSeconds = inputSeconds < 10 ? `0${inputSeconds}` : inputSeconds;

  return `${minutes}:${outputSeconds}`;
}

export function getUniqueValuesByKey(
  arr: MusicData[],
  key: keyof MusicData,
): string[] {
  const uniqueValue = new Set<string>();
  arr.forEach((item) => {
    const value = item[key];

    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v) {
          uniqueValue.add(String(v));
        }
      });
    } else if (value) {
      uniqueValue.add(String(value));
    }
  });
  return Array.from(uniqueValue);
}
