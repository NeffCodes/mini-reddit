import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPostFeed,
  loadHotPosts,
  clearSearchTerm,
} from '../../store/postFeedSlice';

import Card from '../../components/Card/Card';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';
import Post from './Post';
import Filters from '../Filters/Filters';
import './PostFeed.module.css';

export const PostFeed = props => {
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
      <section className={props.className}>
        <Filters />
        <Card>
          <LoadingIcon text="Loading Posts" />
        </Card>
      </section>
    );
  }

  if (!isLoading && posts.length === 0) {
    return (
      <section className={props.className}>
        <Card>Sorry, could not find any posts.</Card>
      </section>
    );
  }

  if (!isLoading && hasSearched && searchTerm) {
    return (
      <section className={props.className}>
        <Card>
          <span>You searched: {searchTerm}</span>
          <button onClick={handleClick}> Return </button>
        </Card>
        <ul>
          {posts.map((post, index) => (
            <li key={post.id}>
              <Post content={post} i={index} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className={props.className}>
      <Filters />
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <Post content={post} i={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostFeed;
