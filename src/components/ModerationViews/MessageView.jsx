import React from 'react';
import styles from './Views.module.css';

const MessageView = ({ onNavigate, viewData }) => {
  return (
    <div className={styles.view}>
      <div className={styles.messageSection}>
        <h3 className={styles.messageLabel}>Author message</h3>
        <p className={styles.messageHint}>Share with the author to explain why their post was removed.</p>
        <textarea 
          className={styles.messageInput}
          placeholder="Your post was removed because..."
          rows={4}
        />
      </div>

      <div className={styles.messageSection}>
        <h3 className={styles.messageLabel}>Moderator note</h3>
        <p className={styles.messageHint}>Private notes for other moderators. This is not visible to the author.</p>
        <textarea 
          className={styles.messageInput}
          placeholder="Here's some private context and notes..."
          rows={4}
        />
      </div>
    </div>
  );
};

export default MessageView; 