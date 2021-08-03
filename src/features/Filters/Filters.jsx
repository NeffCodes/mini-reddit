import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadHotPosts,
  loadNewPosts,
  loadTopPosts,
  selectPostFeed,
} from '../../store/postFeedSlice';

import Card from '../../components/Card/Card';

import { FaSeedling } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { RiBarChart2Fill } from 'react-icons/ri';

import styles from './Filters.module.css';

export const Filters = () => {
  const dispatch = useDispatch();
  const postList = useSelector(selectPostFeed);
  const { currentSubreddit, currentFilter } = postList;

  return (
    <nav>
      <Card>
        <ul className={styles.container}>
          <li key="filter-hot">
            <button
              type="button"
              className={
                currentFilter === 'hot'
                  ? `${styles.button} ${styles.selected}`
                  : styles.button
              }
              onClick={() => {
                if (currentFilter !== 'hot') {
                  dispatch(loadHotPosts(currentSubreddit));
                }
              }}
            >
              <AiFillFire /> Hot
            </button>
          </li>
          <li key="filter-new">
            <button
              type="button"
              className={
                currentFilter === 'new'
                  ? `${styles.button} ${styles.selected}`
                  : styles.button
              }
              onClick={() => {
                if (currentFilter !== 'new') {
                  dispatch(loadNewPosts(currentSubreddit));
                }
              }}
            >
              <FaSeedling /> New
            </button>
          </li>
          <li key="filter-top">
            <button
              type="button"
              className={
                currentFilter === 'top'
                  ? `${styles.button} ${styles.selected}`
                  : styles.button
              }
              onClick={() => {
                if (currentFilter !== 'top') {
                  dispatch(loadTopPosts(currentSubreddit));
                }
              }}
            >
              <RiBarChart2Fill /> Top
            </button>
          </li>
        </ul>
      </Card>
    </nav>
  );
};

export default Filters;
