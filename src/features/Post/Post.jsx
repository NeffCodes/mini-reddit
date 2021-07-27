import React from 'react';

import { PostHeader } from './header/postHeader';
import { PostBody } from './body/postBody';
import { PostCommentSection } from './comments/postCommentSection';

import styles from './Post.module.css';

export const Post = ({ content, i }) => {
  return (
    <section className={styles.post}>
      <PostHeader content={content} />
      <PostBody content={content} i={i} />
      <PostCommentSection content={content} i={i} />
    </section>
  );
};

export default Post;
