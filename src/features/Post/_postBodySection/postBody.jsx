import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';

import { fixedString } from '../../../utils/fixString';
import { ImLink } from 'react-icons/im';
import styles from './postBody.module.css';

export const PostBody = ({ content, i }) => {
  const initial = content.nsfw || content.spoiler;
  const [hidePost, setHidePost] = useState(initial);
  const [shrinkContent, setShrinkContent] = useState(false);

  const handleHidePostClick = () =>
    hidePost ? setHidePost(false) : setHidePost(true);

  const handleShrinkClick = () => {
    shrinkContent ? setShrinkContent(false) : setShrinkContent(true);
  };

  return (
    <article className={styles.article}>
      <header>
        <h1 className={styles.title}>
          <span className={styles.titleText}>{fixedString(content.title)}</span>
          {content.nsfw && <span className={styles.tag}>NSFW</span>}
          {content.spoiler && <span className={styles.tag}>Spoiler</span>}
        </h1>
      </header>

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

      {/*Displays NSFW/Spoiler buttons if needed*/}
      {content.nsfw && (
        <button
          type="button"
          onClick={handleHidePostClick}
          className={styles.hidePost_btn}
        >
          {hidePost ? 'Show' : 'Hide'} NSFW
        </button>
      )}
      {!content.nsfw && content.spoiler && (
        <button
          type="button"
          onClick={handleHidePostClick}
          className={styles.hidePost_btn}
        >
          {hidePost ? 'Show' : 'Hide'} Spoiler
        </button>
      )}

      <div className={styles.box}>
        <div className={`${hidePost ? styles.blur : styles.show}`}>
          {/*Displays secondary text if provided*/}
          <div
            className={`
              ${shrinkContent ? styles.shrink : styles.show} 
              ${styles.body}
            `}
            onClick={handleShrinkClick}
          >
            <ReactMarkdown children={content.body} />
          </div>

          {/*Displays if any media provided*/}
          {content.hasMedia && (
            <div className={styles.media}>
              {/* Displays single image if provided */}
              {content.post_hint === 'image' && (
                <img src={content.image} alt="post media" />
              )}

              {/* Displays reddit hosted video if provided */}
              {content.is_video && (
                <div>
                  <video preload="auto" controls autoPlay loop muted>
                    <source src={content.media.reddit_video.fallback_url} />
                    <p>
                      Your browser doesn't surpport HTML5 video. You can view it
                      on
                      <a href={content.permalink}>Reddit's post</a>
                      instead
                    </p>
                  </video>
                </div>
              )}
            </div>
          )}

          {/* Displays outside reddit video if provided */}
          {content.post_hint === 'rich:video' && (
            <div>
              <img
                src={fixedString(content.media.oembed.thumbnail_url)}
                alt={content.media.oembed.title}
              />
            </div>
          )}
        </div>
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
