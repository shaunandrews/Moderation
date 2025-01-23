import styles from './Content.module.css'
import Post from '../Post/Post'
import Layout from '../Layout/Layout'

export default function Content() {
  return (
    <Layout className={styles.content}>
      <Post />
      <Post />
      <Post />
    </Layout>
  )
} 