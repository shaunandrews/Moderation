import React, { useState } from 'react';
import styles from './Post.module.css';
import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';
import PostFooter from '../PostFooter/PostFooter';
import Button from '../Button/Button';

const defaultContent = (
  <p>This is a placeholder post content. It would normally contain the actual content of the post.</p>
);

const Post = ({ 
  initialPreview = false,
  avatar = 'https://assets.tumblr.com/images/default_avatar/cube_closed_64.png',
  username = 'anonymous-user',
  timestamp = 'just now',
  contentImage,
  content = defaultContent
}) => {
  const [isPreview, setIsPreview] = useState(initialPreview);
  const [isFullPostOpen, setIsFullPostOpen] = useState(false);

  if (!isPreview) {
    return (
      <div className={styles.post}>
        <PostHeader 
          avatar={avatar}
          username={username}
          timestamp={timestamp}
        />
        <div className={styles.postContent}>
          <PostContent 
            contentImage={contentImage}
            content={content}
          />
        </div>
        <PostFooter />
      </div>
    );
  }

  return (
    <div className={`${styles.post} ${!isFullPostOpen ? styles.preview : ''}`}>
      <div className={styles.previewHeader}>
        <Button
          type="secondary"
          label={isFullPostOpen ? "Hide full post" : "Show full post"}
          onClick={() => setIsFullPostOpen(!isFullPostOpen)}
        />
      </div>
      <PostHeader 
        hideOverflow={!isFullPostOpen}
        avatar={avatar}
        username={username}
        timestamp={timestamp}
      />
      <div className={styles.postContent}>
        <PostContent 
          contentImage={contentImage}
          content={content}
        />
      </div>
      <PostFooter />
    </div>
  );
};

export default Post; 