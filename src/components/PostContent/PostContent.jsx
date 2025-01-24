import React from 'react';
import styles from './PostContent.module.css';

const PostContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imageContainer}>
        <img src="https://loremflickr.com/540/300" alt="Post content" />
      </div>
      <div className={styles.text}>
        <p>ok but have you ever seen anything more perfect than this skeleton teaching a tiny human how to ride a bike? this is the wholesome content i needed today 💀💖</p>
      </div>
    </div>
  );
};

export default PostContent; 