import styles from './AuditLog.module.css'
import Post from '../Post/Post'
import Layout from '../Layout/Layout'

export default function AuditLog() {
  return (
    <Layout className={styles.auditLog} bannerSize="mini">
      <Post />
      <Post />
      <Post />
    </Layout>
  )
} 