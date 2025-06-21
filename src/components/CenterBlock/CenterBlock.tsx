'use client';
import { data } from '@/data';
import styles from './centerblock.module.css';

import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import FilterItem from '../FilterItem/FilterItem';
import Tracks from '../Tracks/Tracks';

export default function CenterBlock() {
  return (
    <div className={styles.centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      <div className={styles.centerblock__content}>
        <FilterItem />
        <Tracks playlist={data} />
      </div>
    </div>
  );
}
