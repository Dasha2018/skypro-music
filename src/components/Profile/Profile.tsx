import styles from './profile.module.css';
export default function Profile() {
  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
      <div className={styles.sidebar__icon}>
        <svg>
          <use xlinkHref="/img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
}
