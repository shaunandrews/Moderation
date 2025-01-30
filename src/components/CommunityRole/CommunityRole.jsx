import styles from './CommunityRole.module.css'
import AdminBadgeIcon from '../icons/AdminBadgeIcon'
import CircleCheckIcon from '../icons/CircleCheckIcon'
const MemberIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2ZM2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6C14 9.31371 11.3137 12 8 12C4.68629 12 2 9.31371 2 6ZM3 13C1.34315 13 0 14.3431 0 16H16C16 14.3431 14.6569 13 13 13H3Z" fill="currentColor"/>
  </svg>
)

export default function CommunityRole({ 
  role = 'member',
  username = ''
}) {
  const isAdmin = role === 'admin'
  const displayRole = isAdmin ? 'Admin' : 'Member'
  
  return (
    <div className={styles.role}>
      <span className={`${styles.roleIcon} ${isAdmin ? styles.adminIcon : styles.memberIcon}`}>
        {isAdmin ? <AdminBadgeIcon /> : <CircleCheckIcon />}
      </span>
      <span className={styles.roleName}>{displayRole}</span>
      {username && <span className={styles.roleUsername}>@{username}</span>}
    </div>
  )
} 