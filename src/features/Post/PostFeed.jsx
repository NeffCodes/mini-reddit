import { useEffect } from 'react';
import Post from './Post';

export const PostFeed = ({ loadPosts, posts }) => {
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <section>
      <h2>Post Feed</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} data-testid={post.subreddit}>
            {post.subreddit}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PostFeed;
