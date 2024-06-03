import styles from './Header.module.scss';

// Import -> Image
import logoImg from '../../../assets/images/image-logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_logoBox}>
        <img src={logoImg} alt="Logo" className={styles.header_logoBox_logo} />
        <span className={styles.header_logoBox_}>PhotoSplash</span>
      </div>
      <div className={styles.header_profileBox}>
        <button className={styles.header_profileBox_button}>사진제출</button>
        <button className={styles.header_profileBox_button}>북마크</button>
        <span className={styles.header_profileBox_userName}>
          Hwani | hwniieo@gmail.com
        </span>
      </div>
    </header>
  );
}
