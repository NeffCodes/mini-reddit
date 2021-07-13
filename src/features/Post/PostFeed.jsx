import { useEffect } from 'react';
import Post from './Post';

import './PostFeed.module.css';

export const PostFeed = ({ loadPosts, posts }) => {
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <section>
      <h2>Post Feed</h2>
      <ul>
        {posts.map((postData, index) => (
          <li key={index} data-testid={postData.subreddit}>
            <Post content={postData} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostFeed;
