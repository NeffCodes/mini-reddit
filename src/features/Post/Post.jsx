import React from 'react';
import { FaUserCircle, FaComments } from 'react-icons/fa';

import styles from './Post.module.css';
import { fixedString } from '../../utils/fixString';
import { timeAgo } from '../../utils/getPostTime';

export const Post = ({ content, i }) => {
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
        <div className={styles.timeStamp}>{timeAgo(content.created_utc)}</div>
      </header>

      <h3>{i +') '+ fixedString(content.title)}</h3>

      {content.post_hint === 'image' && (
        <img src={content.url_overridden_by_dest} alt="post media" />
      )}

      {content.post_hint === 'link' && (
        <a href={content.url_overridden_by_dest}>
          {content.url_overridden_by_dest}
        </a>
      )}

      {content.is_video && (
        <div>
          <video preload="auto" controls crossOrigin="anonymous">
            <source src={content.media.reddit_video.fallback_url} />
            <p>
              Your browser doesn't surpport HTML5 video. You can view it on
              <a href={content.url_overridden_by_dest}>Reddit's post</a> instead
            </p>
          </video>
        </div>
      )}

      {content.post_hint === 'rich:video' && (
        <div>
          <img
            src={content.secure_media.oembed.thumbnail_url}
            alt={content.secure_media.oembed.title}
          />
        </div>
      )}
      <div className={styles.comments}>
        <FaComments /> <span> {content.num_comments} Comments</span>
      </div>
    </section>
  );
};

export default Post;
