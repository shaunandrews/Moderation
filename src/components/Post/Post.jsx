import React, { useState } from 'react';
import styles from './Post.module.css';
import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';
import PostFooter from '../PostFooter/PostFooter';
import Button from '../Button/Button';

const Post = ({ initialPreview = false }) => {
  const [isPreview, setIsPreview] = useState(initialPreview);

  return (
    <div className={`${styles.post} ${isPreview ? styles.preview : ''}`}>
      <PostHeader hideOverflow={isPreview} />
      <div className={styles.postContent}>
        <PostContent />
      </div>
      {isPreview && (
        <div className={styles.showFullPostWrapper}>
          <Button 
            type="primary"
            label="Show full post"
            onClick={() => setIsPreview(false)}
          />
        </div>
      )}
      <PostFooter />
    </div>
  );
};

export default Post; 