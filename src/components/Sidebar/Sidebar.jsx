import styles from './Sidebar.module.css'
import LogoIcon from '../icons/LogoIcon'
import HomeIcon from '../icons/HomeIcon'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <LogoIcon />
      <div className={styles.sidebarNav}>
        <Link to="/home" className={`${styles.sidebarNavItem} ${location.pathname === '/home' ? styles.active : ''}`}>
          <div className={styles.sidebarNavItemAvatar}><HomeIcon /></div>
          <span>Home</span>
        </Link>
        <Link to="/" className={`${styles.sidebarNavItem} ${location.pathname === '/' ? styles.active : ''}`}>
          <div className={styles.sidebarNavItemAvatar}><img height={24} width={24} src="./images/avatar-designt.jpg" alt="Design't, a Tumblr Community" /></div>
          <span>Design't</span>
        </Link>
        <Link to="/group-meowing" className={`${styles.sidebarNavItem} ${location.pathname === '/group-meowing' ? styles.active : ''}`}>
          <div className={styles.sidebarNavItemAvatar}><img height={24} width={24} src="./images/avatar-meowing.png" alt="Group Moewing, a Tumblr Community" /></div>
          <span>Group Moewing</span>
        </Link>
      </div>
    </aside>
  )
} 