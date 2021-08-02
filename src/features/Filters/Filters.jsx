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

export const Filters = () => {
  const dispatch = useDispatch();
  const postList = useSelector(selectPostFeed);
  const { currentSubreddit } = postList;

  return (
    <nav>
      <Card>
        <ul>
          <li key="filter-hot">
            <button
              type="button"
              onClick={() => dispatch(loadHotPosts(currentSubreddit))}
            >
              <AiFillFire /> Hot
            </button>
          </li>
          <li key="filter-new">
            <button
              type="button"
              onClick={() => dispatch(loadNewPosts(currentSubreddit))}
            >
              <FaSeedling /> New
            </button>
          </li>
          <li key="filter-top">
            <button
              type="button"
              onClick={() => dispatch(loadTopPosts(currentSubreddit))}
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
