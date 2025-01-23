import styles from './AuditLogList.module.css'

export default function AuditLogList({ children }) {
  return (
    <div className={styles.auditLogList}>
      {children}
    </div>
  )
} 