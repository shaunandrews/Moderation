import React, { useState, useRef, useContext } from 'react';
import styles from './PostHeader.module.css';
import Button from '../Button/Button';
import Menu, { MenuItem, MenuDivider } from '../Menu/Menu';
import { ModerationContext } from '../../App';
import OverflowIcon from '../icons/OverflowIcon';

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