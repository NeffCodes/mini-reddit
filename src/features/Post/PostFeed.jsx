import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts } from './postFeedSlice';
import { fetchPosts } from './postFeedSlice';

import Post from './Post';

import './PostFeed.module.css';

export const PostFeed = () => {
  const postList = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section>
      <h2>Post Feed</h2>
      <ul>
        {postList.map((postData, index) => (
          <li key={index} data-testid={postData.subreddit}>
            <Post content={postData.data} i={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostFeed;
