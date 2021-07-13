import { useEffect } from 'react';

export const PostFeed = ({ loadPosts }) => {
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
      <h2>Post Feed</h2>
  );
};

export default PostFeed;
