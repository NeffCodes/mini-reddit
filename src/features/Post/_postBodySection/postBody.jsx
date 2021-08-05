import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';

import { fixedString } from '../../../utils/fixString';
import { ImLink } from 'react-icons/im';
import styles from './postBody.module.css';

export const PostBody = ({ content, i }) => {
  const displaySubText = sub => {
    return sub.selftext && sub.thumbnail !== 'spoiler' ? true : false;
  };

  return (
    <article className={styles.article}>
      <header>
        <h1 className={styles.title}>
          <span className={styles.titleText}>{fixedString(content.title)}</span>
        </h1>

        )}
        )}
      </header>

      <div className={bodyStyles.media}>
        {/* Displays single image if provided */}
        {postData.post_hint === 'image' && (
          <img src={postData.url_overridden_by_dest} alt="post media" />
        )}
      {/* Displays link if provided*/}
      {content.post_hint === 'link' && (
        <a
          href={content.url_overridden_by_dest}
          className={styles.link}
          target="_blank"
          rel="nofollow noreferrer"
        >
          <ImLink /> {`https://${content.domain}`}
        </a>
      )}

        {/* TODO: Displays gallery images if provided */}
        {postData.is_gallery && <img src="" alt="WIP Gallery" />}

        {/* Displays reddit hosted video if provided */}
        {postData.is_video && (
          <div>
            <video preload="auto" controls>
              <source src={postData.media.reddit_video.fallback_url} />
              <p>
                Your browser doesn't surpport HTML5 video. You can view it on
                <a href={postData.permalink}>Reddit's post</a>
                instead
              </p>
            </video>
          </div>
        )}

        {/* Displays outside reddit video if provided */}
        {postData.post_hint === 'rich:video' && (
          <div>
            <img
              src={fixedString(postData.secure_media.oembed.thumbnail_url)}
              alt={postData.secure_media.oembed.title}
            />
          </div>
        )}
      </div>
      <footer className={styles.goToReddit}>
        <a
          href={content.url}
          referrerPolicy="no-referrer"
          target="_blank"
          rel="nofollow noreferrer"
        >
          See full reddit post
        </a>
      </footer>
    </article>
  );
};

export default PostBody;
