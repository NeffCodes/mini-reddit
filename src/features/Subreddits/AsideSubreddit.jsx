import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useWindowSize from '../../utils/useWindowSize';
import {
  selectSubreddits,
  loadSubreddits,
} from '../../store/AsideSubredditSlice';
import { setCurrentSubreddit } from '../../store/postFeedSlice';
import Card from '../../components/Card/Card';
import styles from './AsideSubreddit.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const AsideSubs = props => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const subreddits = useSelector(selectSubreddits);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  const subredditList = () => {
    return (
      <ul className={styles.subList}>
        <li key="sub-home">
          <button
            type="button"
            className={styles.subItem}
            onClick={() => {
              setShowList(false);
              dispatch(setCurrentSubreddit(''));
            }}
          >
            <span className={styles.avatar}>/r</span> Front Page
          </button>
        </li>

        {subreddits
          .filter(sub => sub.name !== 'Home')
          .map(sub => (
            <li key={sub.id}>
              <button
                type="button"
                className={styles.subItem}
                onClick={() => {
                  setShowList(false);
                  dispatch(setCurrentSubreddit(sub.url));
                }}
              >
                {sub.icon ? (
                  <img
                    src={sub.icon}
                    alt={`${sub.name} icon.`}
                    className={styles.avatar}
                  />
                ) : (
                  <span className={styles.avatar}>/r</span>
                )}
                {sub.prefix_name}
              </button>
            </li>
          ))}
      </ul>
    );
  };

  if (width <= 768) {
    return (
      <aside className={props.className}>
        <Card>
          <button
            type="button"
            className={styles.showButton}
            onClick={() => (showList ? setShowList(false) : setShowList(true))}
          >
            Popular Subreddits
            {showList ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {showList && subredditList()}
        </Card>
      </aside>
    );
  }

  return (
    <aside className={props.className}>
      <Card>
        <h2 className={styles.subtitle}>Popular Subreddits</h2>
        {subredditList()}
      </Card>
    </aside>
  );
};

export default AsideSubs;
