import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPostList } from './postFeedSlice';
import { fetchPosts } from './postFeedSlice';

import Post from './Post';

import './PostFeed.module.css';

export const PostFeed = () => {
  const postList = useSelector(selectPostList);
  const [sub, setSub] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(sub));
  }, [dispatch, sub]);

  return (
    <section>
      <h2>Post Feed</h2>
      <ul>
        {postList.map((post, index) => (
          <li key={index} data-testid={post.subreddit}>
            <Post content={post} i={index} />
            <button onClick={() => setSub(post.data.subreddit_name_prefixed)}>
              Change Feed
            </button>
            <button onClick={() => setSub('hot')}>Reset Feed</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostFeed;
