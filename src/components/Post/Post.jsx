import React, { useState } from 'react';
import styles from './Post.module.css';
import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';
import PostFooter from '../PostFooter/PostFooter';
import Button from '../Button/Button';

const Post = ({ initialPreview = false }) => {
  const [isPreview, setIsPreview] = useState(initialPreview);
  const [isFullPostOpen, setIsFullPostOpen] = useState(false);

  if (!isPreview) {
    return (
      <div className={styles.post}>
        <PostHeader />
        <div className={styles.postContent}>
          <PostContent />
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
      <PostHeader hideOverflow={!isFullPostOpen} />
      <div className={styles.postContent}>
        <PostContent />
      </div>
      <PostFooter />
    </div>
  );
};

export default Post; 