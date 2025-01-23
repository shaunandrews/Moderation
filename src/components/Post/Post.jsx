import React from 'react';
import styles from './Post.module.css';
import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';

const Post = () => {
  return (
    <div className={styles.post}>
      <PostHeader />
      <PostContent />
    </div>
  );
};

export default Post; 