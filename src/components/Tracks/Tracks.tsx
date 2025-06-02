'use client';
import { data } from '@/data';
import { formatTime } from '@/utils/helper';
import Link from 'next/link';
import styles from './tracks.module.css';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCurrentTrack, setIsPlay } from '@/store/features/trackSlice';
import { MusicData } from '@/sharedTypes/sharedTypes';

export default function Tracks() {
  const dispatch = useAppDispatch();
  const onClickTrack = (track: MusicData) => {
    dispatch(setCurrentTrack(track));
    dispatch(setIsPlay(true));
  };
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
  const isPlay = useAppSelector((state) => state.tracks.isPlay);
  return (
    <div className={styles.content__playlist}>
      {data.map((track) => (
        <div
          className={styles.playlist__item}
          onClick={() => onClickTrack(track)}
          key={track._id}
        >
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                {currentTrack?._id === track._id ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      isPlay
                        ? styles.rectangleAnimation
                        : styles.rectangleStatic
                    }
                  >
                    <circle cx="8" cy="8" r="8" fill="#B672FF" />
                  </svg>
                ) : (
                  <svg className={styles.track__titleSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                  </svg>
                )}
              </div>
              <div className="track__title-text">
                <Link className={styles.track__titleLink} href="">
                  {track.name}
                  <span className={styles.track__titleSpan}></span>
                </Link>
              </div>
            </div>
            <div className={styles.track__author}>
              <Link className={styles.track__authorLink} href="">
                {track.author}
              </Link>
            </div>
            <div className={styles.track__album}>
              <Link className={styles.track__albumLink} href="">
                {track.album}
              </Link>
            </div>
            <div className="track__time">
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>
                {formatTime(track.duration_in_seconds)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
