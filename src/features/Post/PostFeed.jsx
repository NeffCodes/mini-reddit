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
import styles from './PostFeed.module.css';

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
    let returnPhrase = hasSearched
      ? `Sorry, could not find any posts for ${searchTerm}.`
      : 'Error, could not load any posts.';

    return (
      <section className={props.className}>
        <Card className={styles.search}>
          <p>{returnPhrase}</p>
          {hasSearched && (
            <button
              type="button"
              onClick={handleClick}
              className={styles.return}
            >
              Return
            </button>
          )}
          {navigator.doNotTrack && !hasSearched && (
            <p>
              Please note, this site pulls content from Reddit. If you are
              having issues loading the content, you may need to enable tracking
              content by selecting the shield icon in the address bar and turn
              off blocking.
            </p>
          )}
        </Card>
      </section>
    );
  }

  if (!isLoading && hasSearched && searchTerm) {
    return (
      <section className={props.className}>
        <Card className={styles.search}>
          <p>Search results for "{searchTerm}"</p>
          <button type="button" onClick={handleClick} className={styles.return}>
            Return
          </button>
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
