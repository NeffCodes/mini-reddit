import React from 'react';

import Card from '../../components/Card/Card';
import { PostHeader } from './header/postHeader';
import { PostBody } from './body/postBody';
import { PostCommentSection } from './comments/postCommentSection';

export const Post = ({ content, i }) => {
  return (
    <Card>
      <PostHeader content={content} />
      <PostBody content={content} i={i} />
      <PostCommentSection content={content} i={i} />
    </Card>
  );
};

export default Post;
