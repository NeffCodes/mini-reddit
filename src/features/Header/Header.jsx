import React from 'react';
import { FaReddit } from 'react-icons/fa';

import Search from '../Search/Search';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.head}>
      <FaReddit />
      <Search />
    </header>
  );
};

export default Header;
