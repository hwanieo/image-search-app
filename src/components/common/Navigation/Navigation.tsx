import { useState } from 'react';

import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

const mockData = [
  {
    index: 0,
    path: '/edit',
    label: '보도/편집 전용',
    searchValue: 'edit',
    isActive: false,
  },
  {
    index: 1,
    path: '/following',
    label: '팔로잉',
    searchValue: 'following',
    isActive: false,
  },
  {
    index: 2,
    path: '/photoPlus',
    label: 'Unsplash Photo+',
    searchValue: 'photo',
    isActive: false,
  },
  {
    index: 3,
    path: '/oneColor',
    label: '단색',
    searchValue: 'one color',
    isActive: false,
  },
  {
    index: 4,
    path: '/3dRender',
    label: '3D 렌더링',
    searchValue: '3d rendering',
    isActive: false,
  },
  {
    index: 5,
    path: '/nature',
    label: '자연',
    searchValue: 'nature',
    isActive: false,
  },
  {
    index: 6,
    path: '/texture',
    label: '텍스쳐 및 패턴',
    searchValue: 'texture',
    isActive: false,
  },
  {
    index: 7,
    path: '/interior',
    label: '인테리어',
    searchValue: 'interior',
    isActive: false,
  },
  {
    index: 8,
    path: '/film',
    label: '필름',
    searchValue: 'film',
    isActive: false,
  },
  {
    index: 9,
    path: '/experimental',
    label: '실험적인',
    searchValue: 'experimental',
    isActive: false,
  },
  {
    index: 10,
    path: '/travle',
    label: '여행',
    searchValue: 'travle',
    isActive: false,
  },
  {
    index: 11,
    path: '/sports',
    label: '스포츠',
    searchValue: 'sports',
    isActive: false,
  },
];

export default function Navigation() {
  // 반응성을 가진 데이터를 만들 수 있도록 도와주는 속성
  const [navigation, setNavigation] = useState<Navigation[]>(mockData);

  // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복 호출
  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link to={item.path} className={styles.navigation_menu} key={item.path}>
        <span className={styles.navigation_menu_label}>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>{navLinks}</nav>;
}
