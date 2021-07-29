import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPostFeed,
  loadHotPosts,
  clearSearchTerm,
} from '../../store/postFeedSlice';

import Post from './Post';
import Filters from '../Filters/Filters';
import './PostFeed.module.css';

export const PostFeed = () => {
  const postList = useSelector(selectPostFeed);
  const { currentSubreddit, posts, isLoading, searchTerm, hasSearched } =
    postList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHotPosts(currentSubreddit));
  }, [dispatch, currentSubreddit]);

  const handleClick = () => {
    dispatch(clearSearchTerm());
    dispatch(loadHotPosts(currentSubreddit));
  };

  if (isLoading) {
    return (
      <section>
        <Filters />
        <span>Loading Feed</span>
      </section>
    );
  }

  if (!isLoading && posts.length === 0) {
    return <section>failed to find any</section>;
  }

  if (!isLoading && hasSearched) {
    return (
      <section>
        <span>You searched: {searchTerm}</span>
        <button onClick={handleClick}> Return </button>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Post content={post} i={index} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

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
