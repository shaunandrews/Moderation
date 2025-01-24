import React from 'react';
import Button from '../Button/Button';
import BackIcon from '../icons/BackIcon';
import CloseIcon from '../icons/CloseIcon';
import styles from './ModerationSidebarHeader.module.css';

const ModerationSidebarHeader = ({ onClose, onBack, title = 'Moderate post' }) => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={`${styles.backButtonContainer} ${onBack ? styles.visible : ''}`}>
          {onBack && (
            <Button 
              type="icon"
              icon={<BackIcon />}
              onClick={onBack}
              aria-label="Go back"
            />
          )}
        </div>
        <h1 className={styles.heading}>{title}</h1>
      </div>
      <Button 
        type="icon"
        icon={<CloseIcon />}
        onClick={onClose}
        aria-label="Close moderation sidebar"
      />
    </div>
  );
};

export default ModerationSidebarHeader; 