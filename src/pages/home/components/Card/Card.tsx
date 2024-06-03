import { CardDto } from '@/pages/home/types/cart.type';
import styles from './Card.module.scss';

interface CardProps {
  data: CardDto;
}

export default function Card({ data }: CardProps) {
  function openDialog() {
    console.log('모달 오픈');
  }

  return (
    <div className={styles.card} onClick={openDialog}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className={styles.card_image}
      />
    </div>
  );
}
