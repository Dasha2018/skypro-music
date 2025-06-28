'use client';

import Navigation from '@/components/Navigation/Navigation';
import SideBar from '@/components/SideBar/SideBar';
import Bar from '@/components/Bar/Bar';
import styles from './layout.module.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          {children}
          <SideBar />
        </main>

        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
