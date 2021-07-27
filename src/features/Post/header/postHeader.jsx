import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoading } from '../postFeedSlice';

import { FaReddit } from 'react-icons/fa';
import { timeAgo } from '../../../utils/getPostTime';
import { fetchSubredditAbout } from '../../../api/reddit-api';
import headStyles from './postHeader.module.css';

export const PostHeader = ({ content }) => {
  const postData = content.data;
  const isLoading = useSelector(selectIsLoading);
  const [subredditIcon, setSubredditIcon] = useState('');

  useEffect(() => {
    if (!isLoading) {
      fetchSubredditAbout(postData.subreddit_name_prefixed).then(response =>
        setSubredditIcon(response.icon_img),
      );
    }
  });

  const subAvatar = subreddit => {
    if (subreddit) {
      return (
        <img
          src={subreddit}
          alt="subreddits avatar"
          className={headStyles.avatar}
        />
      );
    }
    return <FaReddit size={42} className={headStyles.avatar} />;
  };

  return (
    <div className={headStyles.header}>
      {subAvatar(subredditIcon)}
      <div className={headStyles.details}>
        <span className={headStyles.detailsSubreddit}>
          {postData.subreddit_name_prefixed}
        </span>
        <span className={headStyles.detailsAuthor}>
          posted by u/{postData.author}
        </span>
      </div>
      <div className={headStyles.timeStamp}>
        {timeAgo(postData.created_utc)}
      </div>
    </div>
  );
};
