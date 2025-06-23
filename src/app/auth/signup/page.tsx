'use client';

import styles from './signup.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signup } from '@/services/auth/authApi';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    setError('');

    if (!email || !password || !repeatPassword) {
      setError('Все поля обязательны');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Введите корректный email');
      return;
    }

    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      console.log('Отправка на сервер:', { email, password });
      const user = await signup(email, password);
      console.log('Registered:', user);
      router.push('/music/main');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Неизвестная ошибка');
      }
    }
  };

  return (
    <>
      <Link href="/music/main">
        <div className={styles.modal__logo}>
          <Image src="/img/logo_modal.png" alt="logo" width={140} height={21} />
        </div>
      </Link>
      <input
        className={classNames(styles.modal__input, styles.login)}
        type="text"
        placeholder="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.modal__input}
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className={styles.modal__input}
        type="password"
        placeholder="Повторите пароль"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <div className={styles.errorContainer}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <button
        type="button"
        onClick={handleSignup}
        className={styles.modal__btnSignupEnt}
      >
        Зарегистрироваться
      </button>
      <Link href={'/auth/signin'}>Вернуться ко входу</Link>
    </>
  );
}
