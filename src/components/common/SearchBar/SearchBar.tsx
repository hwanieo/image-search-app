import styles from './SearchBar.module.scss';

import searchIcon from '../../../assets/icons/icon-search.svg';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar_search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
          className={styles.searchBar_search_input}
        />
        <img src={searchIcon} alt="Search Button" className={''} />
      </div>
    </div>
  );
}
