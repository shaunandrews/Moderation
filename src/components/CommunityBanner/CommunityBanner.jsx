import styles from './CommunityBanner.module.css'
import Button from '../Button/Button'
import GlobeIcon from '../icons/GlobeIcon'
import OverflowIcon from '../icons/OverflowIcon'
import Menu, { MenuItem, MenuDivider } from '../Menu/Menu'
import CommunityRole from '../CommunityRole/CommunityRole'
import { useState, useRef } from 'react'

export default function CommunityBanner({ 
  title = "Design't",
  description = "tumblr designrs",
  role = "member",
  username = "",
  bannerImage = "/images/banner-designt.jpg"
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleCopyLink = () => {
    // Handle copy link action
    setMenuOpen(false);
  };

  const handleMute = () => {
    // Handle mute action
    setMenuOpen(false);
  };

  const handleLeave = () => {
    // Handle leave action
    setMenuOpen(false);
  };

  const handleReport = () => {
    // Handle report action
    setMenuOpen(false);
  };

  return (
    <div className={styles.banner}>
      <img className={styles.bannerImage} src={bannerImage} alt={title} />
      <div className={styles.container}>
        <div className={styles.identity}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <CommunityRole role={role} username={username} />
        </div>

        <div className={styles.meta}>
          <div className={styles.metaVisibility}>
            <GlobeIcon />
            <span>Public</span>
          </div>
          <div className={styles.metaOnline}>
            <div className={styles.metaOnlineLight} />
            <span>1,234 online</span>
          </div>
        </div>
        
        <div className={styles.actions}>
          {role === "admin" && (
            <Button 
              type="primary" 
              label="Invite" 
              onClick={() => {}} 
              aria-label="Invite members to community"
            />
          )}
          
          <Button 
            ref={buttonRef}
            type="icon"
            icon={<OverflowIcon />}
            onClick={() => setMenuOpen(true)}
            aria-label="More actions"
          />

          <Menu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            anchorEl={buttonRef.current}
          >
            <MenuItem onClick={handleCopyLink}>Copy link</MenuItem>
            <MenuItem onClick={handleMute}>Mute</MenuItem>
            <MenuItem onClick={handleLeave}>Leave</MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleReport} danger>Report</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}