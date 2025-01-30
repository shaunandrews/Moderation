import styles from './Sidebar.module.css'
import LogoIcon from '../icons/LogoIcon'
import HomeIcon from '../icons/HomeIcon'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <LogoIcon />
      <div className={styles.sidebarNav}>
        <div className={`${styles.sidebarNavItem} ${location.pathname === '/' ? styles.active : ''}`}>
          <div className={styles.sidebarNavItemAvatar}><HomeIcon /></div>
          <span>Home</span>
        </div>
        <div className={styles.sidebarNavItem}>
          <div className={styles.sidebarNavItemAvatar}><img height={24} width={24} src="./images/avatar-designt.jpg" alt="Design't, a Tumblr Community" /></div>
          <span>Design't</span>
        </div>
        <div className={styles.sidebarNavItem}>
          <div className={styles.sidebarNavItemAvatar}><img height={24} width={24} src="./images/avatar-meowing.png" alt="Group Moewing, a Tumblr Community" /></div>
          <span>Group Moewing</span>
        </div>
      </div>
    </aside>
  )
} 