import React from 'react';
import Button from '../Button/Button';
import styles from './ModerationSidebarFooter.module.css';

const ModerationSidebarFooter = ({ onCancel, onRemove, action = 'remove' }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.buttons}>
        <Button 
          type="secondary"
          label="Cancel"
          onClick={onCancel}
        />
        <Button 
          type="danger"
          label={action === 'report' ? 'Report post' : 'Remove post'}
          onClick={onRemove}
        />
      </div>
    </div>
  );
};

export default ModerationSidebarFooter; 