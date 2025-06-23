'use client';

import styles from './signin.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/services/auth/authApi';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setError('');
    try {
      const user = await login(email, password);
      console.log('Logged in:', user);
      router.push('/music/main');
    }  catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError('Неизвестная ошибка');
  }
}
  };

  return (
    <>
      <a href="/music/main">
        <div className={styles.modal__logo}>
          <Image src="/img/logo_modal.png" alt="logo" width={140} height={21} />
        </div>
      </a>
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
      <div className={styles.errorContainer}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <button type="button" onClick={handleLogin} className={styles.modal__btnEnter}>
        Войти
      </button>
      <Link href={'/auth/signup'} className={styles.modal__btnSignup}>
        Зарегистрироваться
      </Link>
    </>
  );
}
