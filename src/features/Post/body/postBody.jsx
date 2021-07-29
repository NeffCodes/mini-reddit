import React from 'react';

import ReactMarkdown from 'react-markdown';

import { fixedString } from '../../../utils/fixString';
import { ImLink } from 'react-icons/im';
import bodyStyles from './postBody.module.css';

export const PostBody = ({ content, i }) => {
  const postData = content.data;
  const displaySubText = sub => {
    return sub.selftext && sub.thumbnail !== 'spoiler' ? true : false;
  };

  return (
    <div>
      <div>
        <h3 className={bodyStyles.title}>{fixedString(postData.title)}</h3>

        {/*Displays secondary text if provided*/}
        {displaySubText(postData) && (
          <p className={bodyStyles.selftext}>
            <ReactMarkdown children={postData.selftext} />
          </p>
        )}

        {/* Displays link if provided */}
        {postData.post_hint === 'link' && (
          <a href={postData.url_overridden_by_dest} className={bodyStyles.link}>
            <ImLink /> {`https://${postData.domain}`}
          </a>
        )}
      </div>

      <div className={bodyStyles.media}>
        {/* Displays single image if provided */}
        {postData.post_hint === 'image' && (
          <img src={postData.url_overridden_by_dest} alt="post media" />
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
    </div>
  );
};
