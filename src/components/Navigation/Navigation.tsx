'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navigation.module.css';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <Link href="/music/main">
      <Image
        width={250}
        height={170}
        className={styles.logo__image}
        src="/img/logo.png"
        alt="logo"
        priority
      />
    </Link>
      </div>
      <div
        className={`${styles.nav__burger} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Открыть меню"
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div className={`${styles.nav__menu} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link href="/" className={styles.menu__link}>
              Главное
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link href="#" className={styles.menu__link}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link href="/auth/signin" className={styles.menu__link}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
