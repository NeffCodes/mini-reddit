import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPostFeed, loadHotPosts } from '../../store/postFeedSlice';

import Post from './Post';
import Filters from '../Filters/Filters';
import './PostFeed.module.css';

export const PostFeed = () => {
  const postList = useSelector(selectPostFeed);
  const { currentSubreddit, posts } = postList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHotPosts(currentSubreddit));
  }, [dispatch, currentSubreddit]);

  return (
    <section>
      <Filters />
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Post content={post} i={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostFeed;
