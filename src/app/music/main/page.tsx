'use client';
import Navigation from '@/components/Navigation/Navigation';
import styles from '../main/page.module.css';
import CenterBlock from '@/components/CenterBlock/CenterBlock';
import SideBar from '@/components/SideBar/SideBar';
import Bar from '@/components/Bar/Bar';
import { useEffect } from 'react';
import { getTracks } from '@/services/tracks/tracksApi';

export default function Home() {
  useEffect(() => {
    getTracks();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <CenterBlock />
          <SideBar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
