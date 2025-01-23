import React, { useState, useRef, useContext } from 'react';
import styles from './PostHeader.module.css';
import Button from '../Button/Button';
import Menu, { MenuItem, MenuDivider } from '../Menu/Menu';
import { ModerationContext } from '../../App';

const OverflowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor"/>
    <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="currentColor"/>
    <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor"/>
  </svg>
);

const PostHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setModerationOpen } = useContext(ModerationContext);
  const buttonRef = useRef(null);

  const handleViewPost = () => {
    // Handle view post action
    setMenuOpen(false);
  };

  const handleFollowPost = () => {
    // Handle follow post action
    setMenuOpen(false);
  };

  const handleCopyLink = () => {
    // Handle copy link action
    setMenuOpen(false);
  };

  const handleFollowBlog = () => {
    // Handle follow blog action
    setMenuOpen(false);
  };

  const handleModeratePost = () => {
    console.log('Opening moderation sidebar...'); // Debug log
    setMenuOpen(false);
    setModerationOpen(true);
  };

  const handleRemoveMember = () => {
    // Handle block blog action
    setMenuOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <img src="https://placehold.co/44" alt="User avatar" />
        </div>
        <div className={styles.details}>
          <div className={styles.username}>scotty-blog</div>
          <div className={styles.meta}>
            {/* <span>Reblogged shaunandrews</span> */}
            {/* <span className={styles.separator}>•</span> */}
            <span>3d</span>
          </div>
        </div>
      </div>

      <Button 
        ref={buttonRef}
        type="icon"
        icon={<OverflowIcon />}
        onClick={() => setMenuOpen(true)}
      />

      <Menu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        anchorEl={buttonRef.current}
      >
        <MenuItem onClick={handleViewPost}>View post</MenuItem>
        <MenuItem onClick={handleFollowPost}>Follow post</MenuItem>
        <MenuItem onClick={handleCopyLink}>Copy link</MenuItem>
        <MenuItem onClick={handleFollowBlog}>Follow @blogname</MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleModeratePost} danger>Moderate post</MenuItem>
        <MenuItem onClick={handleRemoveMember} danger>Remove @scotty-blog</MenuItem>
      </Menu>
    </div>
  );
};

export default PostHeader; 