import { Link, useLocation } from 'react-router-dom'
import PostsIcon from '../icons/PostsIcon'
import ModQueueIcon from '../icons/ModQueueIcon'
import AuditLogIcon from '../icons/AuditLogIcon'
import MembersIcon from '../icons/MembersIcon'
import AboutIcon from '../icons/AboutIcon'
import styles from './CommunityNav.module.css'

export default function CommunityNav({ role }) {
  const location = useLocation();
  
  return (
    <div className={styles.communityNav}>
      <header className={styles.communityNavHeader}>
        <img className={styles.communityNavAvatar} height={48} width={48} src="./images/avatar-designt.jpg" alt="Design't, a Tumblr Community" />
        <div className={styles.communityNavDescription}>
          <div className={styles.communityNavName}>Design't</div>
          <div className={styles.communityNavHandle}>@@designt</div>
        </div>
      </header>
      <hr />
      <Link 
        to="/" 
        className={`${styles.communityNavItem} ${location.pathname === '/' ? styles.active : ''}`}
      >
        <span className={styles.communityNavItemIcon}>
          <PostsIcon />
        </span>
        <span className={styles.communityNavItemLabel}>Posts</span>
      </Link>
      <Link to="" className={styles.communityNavItem}>
        <span className={styles.communityNavItemIcon}>
          <MembersIcon />
        </span>
        <span className={styles.communityNavItemLabel}>Members</span>
      </Link>
      <Link to="" className={styles.communityNavItem}>
        <span className={styles.communityNavItemIcon}>
          <AboutIcon />
        </span>
        <span className={styles.communityNavItemLabel}>About this community</span>
      </Link>
      
      {(role === 'admin' || role === 'moderator') && (
        <>
          <hr />
          <Link 
            to="/mod-queue" 
            className={`${styles.communityNavItem} ${location.pathname === '/mod-queue' ? styles.active : ''}`}
          >
            <span className={styles.communityNavItemIcon}>
              <ModQueueIcon />
            </span>
            <span className={styles.communityNavItemLabel}>Mod queue</span>
            <span className={styles.communityNavItemCount}>4</span>
          </Link>
          <Link 
            to="/audit-log" 
            className={`${styles.communityNavItem} ${location.pathname === '/audit-log' ? styles.active : ''}`}
          >
            <span className={styles.communityNavItemIcon}>
              <AuditLogIcon />
            </span>
            <span className={styles.communityNavItemLabel}>Audit log</span>
          </Link>
        </>
      )}
    </div>
  )
} 