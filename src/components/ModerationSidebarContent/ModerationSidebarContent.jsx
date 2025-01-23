import React from 'react';
import styles from './ModerationSidebarContent.module.css';

const ModerationSidebarContent = ({ children }) => {
  return (
    <div className={`${styles.content} moderation-sidebar-content`}>
      {children}
    </div>
  );
};

export default ModerationSidebarContent; 