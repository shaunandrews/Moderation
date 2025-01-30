import { Link, useLocation } from 'react-router-dom'
import PostsIcon from '../icons/PostsIcon'
import ModQueueIcon from '../icons/ModQueueIcon'
import AuditLogIcon from '../icons/AuditLogIcon'
import MembersIcon from '../icons/MembersIcon'
import AboutIcon from '../icons/AboutIcon'
import styles from './CommunityNav.module.css'

export default function CommunityNav() {
  const location = useLocation();
  
  return (
    <div className={styles.communityNav}>
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
    </div>
  )
} 