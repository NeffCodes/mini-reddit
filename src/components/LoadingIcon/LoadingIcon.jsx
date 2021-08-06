import React from 'react';
import { FaReddit } from 'react-icons/fa';
import { VscLoading } from 'react-icons/vsc';

import styles from './LoadingIcon.module.css';

export const LoadingIcon = ({ text }) => {
  return (
    <div className={styles.loading}>
      <div>
        <VscLoading className={styles.circle} />
        <FaReddit className={styles.reddit} />
      </div>
      <span className={styles.text}>{text || 'Loading'}</span>
    </div>
  );
};

export default LoadingIcon;
