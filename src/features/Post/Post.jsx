import React from 'react';

import Card from '../../components/Card/Card';
import { PostHeader } from './_postHeaderSection/postHeaderSection';
import { PostBody } from './_postBodySection/postBody';
import { PostCommentSection } from './_postCommentSection/postCommentSection';

export const Post = ({ content, i }) => {
  return (
    <Card>
      <PostHeader content={content} />
      {/* <PostBody content={content} i={i} />
      <PostCommentSection content={content} i={i} /> */}
    </Card>
  );
};

export default Post;
