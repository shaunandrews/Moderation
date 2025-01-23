import styles from './AuditLog.module.css'
import Layout from '../Layout/Layout'
import AuditLogList from '../AuditLogList/AuditLogList'
import AuditLogListItem from '../AuditLogListItem/AuditLogListItem'

// Mock data - replace with real data later
const mockAuditLogs = [
  {
    avatar: "https://placehold.co/44x44",
    icon: "remove",
    username: "modblogname",
    timestamp: "3m",
    action: "Removed post:",
    actionTarget: "Selected reason",
    note: "An optional note that is sometimes added to explain..."
  },
  {
    avatar: "https://placehold.co/44x44",
    icon: "restore",
    username: "modblogname",
    timestamp: "3m",
    action: "Restored post:",
    actionTarget: "This note content starts here and wraps down here if needed. If there's more content..."
  },
  {
    avatar: "https://placehold.co/44x44",
    icon: "join",
    username: "newmemberblogname",
    timestamp: "3m",
    action: "Joined the community"
  }
]

export default function AuditLog() {
  return (
    <Layout className={styles.auditLog} bannerSize="mini">
      <AuditLogList>
        {mockAuditLogs.map((log, index) => (
          <AuditLogListItem
            key={index}
            {...log}
          />
        ))}
      </AuditLogList>
    </Layout>
  )
} 