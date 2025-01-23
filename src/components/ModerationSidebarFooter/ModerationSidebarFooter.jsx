import React from 'react';
import Button from '../Button/Button';
import styles from './ModerationSidebarFooter.module.css';

const ModerationSidebarFooter = ({ onCancel, onRemove, showRemove = false }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.buttons}>
        <Button 
          type="secondary"
          label="Cancel"
          onClick={onCancel}
        />
        {showRemove && (
          <Button 
            type="danger"
            label="Remove post"
            onClick={onRemove}
          />
        )}
      </div>
    </div>
  );
};

export default ModerationSidebarFooter; 