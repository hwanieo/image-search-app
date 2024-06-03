import styles from './Footer.module.scss';

// Import -> image
import arrowLeft from '../../../assets/icons/icon-arrowLeft.svg';
import arrowRight from '../../../assets/icons/icon-arrowRight.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination_button}>
          <img src={arrowLeft} alt="Arrow Left" />
        </button>
        <span>1</span>
        <button className={styles.pagination_button}>
          <img src={arrowRight} alt="Arrow Right" />
        </button>
      </div>
    </footer>
  );
}
