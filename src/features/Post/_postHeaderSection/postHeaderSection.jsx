import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsLoading,
  setCurrentSubreddit,
} from '../../../store/postFeedSlice';

import { FaReddit } from 'react-icons/fa';
import { timeAgo } from '../../../utils/getPostTime';
import { fetchSubredditAbout } from '../../../api/reddit-api';
import styles from './postHeaderSection.module.css';

export const PostHeader = ({ content }) => {
  const isLoading = useSelector(selectIsLoading);
  const [subredditIcon, setSubredditIcon] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    if (!isLoading) {
      fetchSubredditAbout(content.prefix_name).then(response => {
        if (mounted) {
          setSubredditIcon(response.icon_img);
        }
      });

      return function cleanup() {
        mounted = false;
      };
    }
  }, [isLoading, content.prefix_name]);

  const subAvatar = subreddit => {
    if (subreddit) {
      return (
        <img
          src={subreddit}
          alt="subreddits avatar"
          className={styles.avatar}
        />
      );
    }
    return <FaReddit className={styles.avatar} />;
  };

  return (
    <div className={styles.header}>
      {subAvatar(subredditIcon)}
      <div className={styles.details}>
        <button
          className={styles.detailsSubreddit}
          onClick={() =>
            dispatch(setCurrentSubreddit(`${content.prefix_name}/`))
          }
        >
          {content.prefix_name}
        </button>
        <span className={styles.detailsAuthor}>
          posted by u/{content.author}
        </span>
      </div>
      <div className={styles.timeStamp}>{timeAgo(content.time)}</div>
    </div>
  );
};

export default PostHeader;
