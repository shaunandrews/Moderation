import React from 'react';
import styles from './PostContent.module.css';

const defaultContent = (
  <p>This is a placeholder post content. It would normally contain the actual content of the post.</p>
);

const PostContent = ({ 
  contentImage = null,
  content = defaultContent
}) => {
  return (
    <div className={styles.content}>
      {contentImage && (
        <div className={styles.imageContainer}>
          <img src={contentImage} alt="Post content" />
        </div>
      )}
      <div className={styles.text}>
        {content}
      </div>
    </div>
  );
};

export default PostContent; 