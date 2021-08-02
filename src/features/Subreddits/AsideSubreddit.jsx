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
import { FaReddit, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const AsideSubs = props => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const subreddits = useSelector(selectSubreddits);
  const [showList, setShowList] = useState(false);

  console.log('window', width);

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  const subredditList = () => {
    return (
      <ul>
        <li key="sub-home">
          <button
            type="button"
            onClick={() => {
              setShowList(false);
              dispatch(setCurrentSubreddit(''));
            }}
          >
            <FaReddit className={styles.avatar} /> Front Page
          </button>
        </li>

        {subreddits
          .filter(sub => sub.name !== 'Home')
          .map(sub => (
            <li key={sub.id}>
              <button
                type="button"
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
                  <FaReddit className={styles.avatar} />
                )}
                {sub.prefix_name}
              </button>
            </li>
          ))}
      </ul>
    );
  }

  if(width <= 768){
    return (
      <aside className={props.className}>
        <Card>
          <button
            onClick={() => (showList ? setShowList(false) : setShowList(true))}
          >
            Popular Subreddits
            {showList ? <FaChevronDown /> : <FaChevronUp />}
          </button>
          {showList && subredditList()}
        </Card>
      </aside>
    );
  }

  return (
    <aside className={props.className}>
      <Card>
        <span>Popular Subreddits</span>
        {subredditList()}
      </Card>
    </aside>
  );
};

export default AsideSubs;
