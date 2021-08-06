import React from 'react';
import { FaReddit, FaGithub } from 'react-icons/fa';

import Search from '../Search/Search';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.head}>
      <div className={styles.logo}>
        <FaReddit className={styles.icon} />
        <span>Mini Reddit</span>
      </div>

      <Search />

      <a
        href="https://github.com/persigio/mini-reddit"
        className={styles.link}
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={styles.icon} />
      </a>
    </header>
  );
};

export default Header;
