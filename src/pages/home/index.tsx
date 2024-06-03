// hooks and another
import { useEffect, useState } from 'react';
import axios from 'axios';

// components
import SearchBar from '@/components/common/SearchBar';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';

// pages/components
import Card from '@/pages/home/components/Card/Card';

//css
import styles from './styles/index.module.scss';
import { CardDto } from '@/pages/home/types/cart.type';

export default function HomePage() {
  const [imgUrls, setImgUrls] = useState([]);

  async function getData() {
    const API_URL = `https://api.unsplash.com/search/photos`;
    const API_KEY = `IjxmEzXtEqZY0d0Ip44VuYlFDE7ISNgAY6KUaqv0yZE`;
    const PER_PAGE = 30;

    const searchValue = 'Korea';
    const pageValue = 100;

    try {
      const response = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`,
      );

      console.log(response);

      if (response.status === 200) {
        setImgUrls(response.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const cardList = imgUrls.map((card: CardDto) => (
    <Card key={card.id} data={card} />
  ));

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI */}
      <Header />
      {/* 공통 네비게이션 UI */}
      <Navigation />
      <div className={styles.page_contents}>
        <div className={styles.page_contents_introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper_title}>PhotoSplash</span>
            <span className={styles.wrapper_desc}>
              인터넷의 시각 자료 출처입니다. <br /> 모든 지역에 있는
              크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI */}
            <SearchBar />
          </div>
        </div>
        <div className={styles.page_contents_imageBox}>{cardList}</div>
      </div>
      {/* 공통 푸터 UI */}
      <Footer />
    </div>
  );
}
