import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { timeAgo } from '../../utils/getPostTime';
import { fetchUserAvatar } from '../../api/reddit-api';
import { FaReddit, FaChevronDown, FaChevronUp } from 'react-icons/fa';

import styles from './Comments.module.css';

export const Comment = ({ data }) => {
  const [avatar, setAvatar] = useState('');
  const [showReplies, setShowReplies] = useState(false);

  useEffect(() => {
    const user = data.author;
    fetchUserAvatar(user).then(response => {
      response ? setAvatar(response.snoovatar_img) : setAvatar('');
    });
  });

  const userAvatar = user => {
    if (user) {
      return (
        <img src={user} alt={`${user} avatar`} className={styles.avatar} />
      );
    }
    return <FaReddit className={styles.avatar} />;
  };

  const handleShowReplies = () => {
    showReplies ? setShowReplies(false) : setShowReplies(true);
  };

  const showRepliesList = childData => {
    const repliesArray = childData.replies.data.children.filter(
      type => type.kind !== 'more',
    );

    if (repliesArray.length === 0) {
      return;
    }

    return (
      <ul>
        {repliesArray.map(reply => (
          <Comment data={reply.data} key={reply.data.id} />
        ))}
      </ul>
    );
  };

  return (
    <li className={styles.comment} key={data.id}>
      <div className={styles.head}>
        {userAvatar(avatar)}
        <div className={styles.author}>
          {data.author}{' '}
          <span className={styles.timeStamp}>
            {' '}
            &#8226; {timeAgo(data.created_utc)}
          </span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.body}>
          <ReactMarkdown children={data.body} />
          {data.replies && data.replies.data.children.length > 1 && (
            <div>
              <button onClick={handleShowReplies}>
                Replies{' '}
                {showReplies ? (
                  <FaChevronUp className={styles.chevron} />
                ) : (
                  <FaChevronDown className={styles.chevron} />
                )}
              </button>
            </div>
          )}
          {showReplies && showRepliesList(data)}
        </div>
      </div>
    </li>
  );
};

export default Comment;
