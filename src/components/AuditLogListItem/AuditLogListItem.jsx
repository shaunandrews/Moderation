import { Link } from 'react-router-dom'
import styles from './AuditLogListItem.module.css'

const RemoveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 6C7.5 5.44772 7.94772 5 8.5 5H11.5C12.0523 5 12.5 5.44772 12.5 6H13.5C14.0523 6 14.5 6.44772 14.5 7C14.5 7.55228 14.0523 8 13.5 8V12.5C13.5 13.6046 12.6046 14.5 11.5 14.5H8.5C7.39543 14.5 6.5 13.6046 6.5 12.5V8C5.94772 8 5.5 7.55228 5.5 7C5.5 6.44772 5.94772 6 6.5 6H7.5ZM8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5V12C9 12.2761 8.77614 12.5 8.5 12.5C8.22386 12.5 8 12.2761 8 12V8.5ZM11 8.5C11 8.22386 11.2239 8 11.5 8C11.7761 8 12 8.22386 12 8.5V12C12 12.2761 11.7761 12.5 11.5 12.5C11.2239 12.5 11 12.2761 11 12V8.5Z" fill="currentColor"/>
  </svg>
)

const RestoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.7803 6.21967C15.0732 6.51256 15.0732 6.98744 14.7803 7.28033L9.53033 12.5303C9.23744 12.8232 8.76256 12.8232 8.46967 12.5303L5.21967 9.28033C4.92678 8.98744 4.92678 8.51256 5.21967 8.21967C5.51256 7.92678 5.98744 7.92678 6.28033 8.21967L9 10.9393L13.7197 6.21967C14.0126 5.92678 14.4874 5.92678 14.7803 6.21967Z" fill="currentColor"/>
  </svg>
)

const JoinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5ZM6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7ZM4.5 15C4.5 13.6193 5.61929 12.5 7 12.5H13C14.3807 12.5 15.5 13.6193 15.5 15V15.5C15.5 15.7761 15.2761 16 15 16C14.7239 16 14.5 15.7761 14.5 15.5V15C14.5 14.1716 13.8284 13.5 13 13.5H7C6.17157 13.5 5.5 14.1716 5.5 15V15.5C5.5 15.7761 5.27614 16 5 16C4.72386 16 4.5 15.7761 4.5 15.5V15Z" fill="currentColor"/>
  </svg>
)

const iconComponents = {
  remove: RemoveIcon,
  restore: RestoreIcon,
  join: JoinIcon
}

export default function AuditLogListItem({ 
  id,
  avatar, 
  icon, 
  username, 
  timestamp, 
  action, 
  actionTarget,
  note 
}) {
  const IconComponent = iconComponents[icon]

  return (
    <Link to={`/audit-log/${id}`} className={styles.auditLogItem}>
      <div className={styles.avatarContainer}>
        <img src={avatar} alt="" className={styles.avatar} />
        {icon && (
          <span className={styles.icon}>
            <IconComponent />
          </span>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.username}>{username}</span>
          <span className={styles.timestamp}>{timestamp}</span>
        </div>
        
        <div className={styles.action}>
          {action}
          {actionTarget && <span className={styles.actionTarget}> {actionTarget}</span>}
        </div>
        
        {note && <div className={styles.note}>{note}</div>}
      </div>
    </Link>
  )
} 