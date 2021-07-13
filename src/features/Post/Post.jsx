import React from 'react';
import { FaUserCircle, FaComments } from 'react-icons/fa';

import styles from './Post.module.css';

export const Post = ({ content }) => {
  return (
    <section className={styles.post}>
      <header>
        <FaUserCircle size={42} className={styles.avatar} />
        <div className={styles.details}>
          <a href="/" className={styles.detailsSubreddit}>
            {content.subreddit_name_prefixed}
          </a>
          <span className={styles.detailsAuthor}>
            posted by u/{content.author}
          </span>
        </div>
        <div className={styles.timeStamp}>{content.timeStamp}h Ago</div>
      </header>

      <h3>{content.title}</h3>

      <div className={styles.comments}>
        <FaComments /> <span> {content.num_comments} Comments</span>
      </div>
    </section>
  );
};

export default Post;
