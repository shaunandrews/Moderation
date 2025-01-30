import React, { useState, useRef, useContext } from 'react';
import styles from './PostHeader.module.css';
import Button from '../Button/Button';
import Menu, { MenuItem, MenuDivider } from '../Menu/Menu';
import { ModerationContext } from '../../App';
import OverflowIcon from '../icons/OverflowIcon';
import ModalReportPost from '../ModalReportPost/ModalReportPost';

const PostHeader = ({ 
  hideOverflow = false,
  avatar = 'https://assets.tumblr.com/images/default_avatar/cube_closed_64.png',
  username = 'anonymous-user',
  timestamp = 'just now',
  role
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
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

  const handleReportPost = () => {
    setMenuOpen(false);
    setReportModalOpen(true);
  };

  const handleReportSubmit = (reason) => {
    // Handle the report submission with the selected reason
    console.log('Post reported with reason:', reason);
  };

  const handleBlockUser = () => {
    // Handle block user action
    setMenuOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <img src={avatar} alt={`${username}'s avatar`} />
        </div>
        <div className={styles.details}>
          <div className={styles.username}>{username}</div>
          <div className={styles.meta}>
            <span className={styles.metaTime}>{timestamp}</span>
          </div>
        </div>
      </div>

      {!hideOverflow && (
        <>
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
            
            {/* Show member actions for member role */}
            {role === 'member' && (
              <>
                <MenuItem onClick={handleReportPost} danger>Report post</MenuItem>
                <MenuItem onClick={handleBlockUser} danger>Block user</MenuItem>
              </>
            )}
            
            {/* Only show moderation actions for admin role */}
            {role === 'admin' && (
              <>
                <MenuItem onClick={handleModeratePost} danger>Moderate post</MenuItem>
                <MenuItem onClick={handleRemoveMember} danger>Remove @scotty-blog</MenuItem>
              </>
            )}
          </Menu>

          <ModalReportPost
            isOpen={reportModalOpen}
            onClose={() => setReportModalOpen(false)}
            onSubmit={handleReportSubmit}
          />
        </>
      )}
    </div>
  );
};

export default PostHeader; 