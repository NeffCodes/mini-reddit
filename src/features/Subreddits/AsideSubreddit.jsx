import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectSubreddits,
  loadSubreddits,
} from '../../store/AsideSubredditSlice';
import { setCurrentSubreddit } from '../../store/postFeedSlice';

import styles from './AsideSubreddit.module.css';
import { FaReddit, FaHome } from 'react-icons/fa';

export const AsideSubs = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  return (
    <aside className={styles.container}>
      <h2>Popular Subreddits</h2>
      <ul>
        <li key="sub-home">
          <button
            type="button"
            onClick={() => dispatch(setCurrentSubreddit(''))}
          >
            <FaHome /> Home
          </button>
        </li>

        {subreddits
          .filter(sub => sub.name !== 'Home')
          .map(sub => (
            <li key={sub.id}>
              <button
                type="button"
                onClick={() => dispatch(setCurrentSubreddit(sub.url))}
              >
                {sub.icon ? (
                  <img src={sub.icon} alt={`${sub.name} icon.`} />
                ) : (
                  <FaReddit />
                )}
                {sub.prefix_name}
              </button>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default AsideSubs;
