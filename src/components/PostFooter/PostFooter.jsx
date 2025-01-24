import React from 'react';
import styles from './PostFooter.module.css';
import Button from '../Button/Button';

const PostFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.actions}>
        <Button 
          type="outline"
          label="comments"
          count={1}
          facepileImages={[
            'https://placehold.co/20x20'
          ]}
        />
        <Button
          type="outline"
          icon="👎"
          count={5}
        />
      </div>
    </div>
  );
};

export default PostFooter; 