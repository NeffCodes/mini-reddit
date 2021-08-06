import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FaComments, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BiCommentMinus, BiCommentX, BiCommentAdd } from 'react-icons/bi';
import { loadComments } from '../../../store/postFeedSlice';
import styles from './postCommentSection.module.css';
import Comment from '../../Comments/Comments';
import LoadingIcon from '../../../components/LoadingIcon/LoadingIcon';

export const PostCommentSection = ({ content, i }) => {
  const [shownComments, setShownComments] = useState(3);
  const comments = content.comments;
  const dispatch = useDispatch();

  const handleCommentClick = () => {
    if (content.showComments && shownComments) {
      setShownComments(0);
    } else if (content.showComments && !shownComments) {
      setShownComments(3);
    } else if (content.comment_count) {
      console.log('fetching comments');
      dispatch(loadComments({ index: i, permalink: content.permalink }));
    }
  };

  const handleMoreClick = () => {
    const next = shownComments + 3;
    const total = comments.length;
    next > total ? setShownComments(total) : setShownComments(next);
  };
  const handleLessClick = () => {
    const next = shownComments - 3;
    next < 0 ? setShownComments(0) : setShownComments(next);
  };
  const handleHideClick = () => setShownComments(0);

  const numComments = () => {
    let text = content.comment_count === 1 ? 'comment' : 'comments';
    return (
      <>
        <div className={styles.text}>
          <FaComments className={styles.icon} />
          {content.comment_count} {text}
        </div>
        {content.showComments && shownComments ? (
          <FaChevronUp className={styles.chevron} />
        ) : (
          <FaChevronDown className={styles.chevron} />
        )}
      </>
    );
  };

  const commentList = count => {
    return (
      <ul className={styles.list}>
        {comments.slice(0, count).map(comment => (
          <Comment data={comment} key={comment.id} />
        ))}
      </ul>
    );
  };

  const showHideButtons = () => {
    if (shownComments) {
      return (
        <div className={styles.showMoreLess}>
          {shownComments > 3 && (
            <button onClick={handleLessClick} className={styles.button}>
              <BiCommentMinus className={styles.icon} /> show less
            </button>
          )}
          <button onClick={handleHideClick} className={styles.button}>
            <BiCommentX className={styles.icon} /> hide
          </button>
          {comments.length > shownComments && (
            <button onClick={handleMoreClick} className={styles.button}>
              <BiCommentAdd className={styles.icon} /> show more
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <div className={styles.comments}>
      <button onClick={handleCommentClick} className={styles.button}>
        {numComments()}
      </button>

      {content.isLoadingComments && <LoadingIcon text="Loading Comments" />}

      {content.showComments && (
        <div>
          {commentList(shownComments)}
          {showHideButtons()}
        </div>
      )}
    </div>
  );
};

export default PostCommentSection;
