import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectSubreddits, loadSubreddits } from './AsideSubredditSlice';

import styles from './AsideSubreddit.module.css';
import { FaReddit } from 'react-icons/fa';

export const AsideSubs = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  console.log(subreddits);

  return (
    <aside className={styles.container}>
      <h2>Sub List</h2>
      <ul>
        {subreddits
          .filter(sub => sub.name !== 'Home')
          .map((sub, index) => (
            <li key={`${sub.name}-${index}`}>
              {sub.icon ? 
                <img src={sub.icon} alt={`${sub.name} icon.`} /> :
                <FaReddit />
              }
              {sub.prefix_name}
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default AsideSubs;
