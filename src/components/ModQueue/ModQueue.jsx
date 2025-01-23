import styles from './ModQueue.module.css'
import Post from '../Post/Post'
import Layout from '../Layout/Layout'

export default function ModQueue() {
  return (
    <Layout className={styles.modQueue} bannerSize="mini">
      <Post />
      <Post />
      <Post />
    </Layout>
  )
} 