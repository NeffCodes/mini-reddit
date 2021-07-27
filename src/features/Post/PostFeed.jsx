import React,{ useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddit } from './postFeedSlice';
import { fetchPosts } from './postFeedSlice';

import Post from './Post';

import './PostFeed.module.css';

export const PostFeed = () => {
  const [sub, setSub] = useState('hot');
  const postList = useSelector(selectSubreddit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(sub));
  }, [dispatch, sub]);

  return (
    <section>
      <h2>Post Feed</h2>
      <ul>
        {postList.posts.map((post, index) => (
          <li key={index} data-testid={post.subreddit}>
            <Post content={post} i={index} />
            <button onClick={() => setSub(post.data.subreddit_name_prefixed)}>
              Change Feed
            </button>
            <button onClick={() => setSub('hot')}>
              Reset Feed
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostFeed;
