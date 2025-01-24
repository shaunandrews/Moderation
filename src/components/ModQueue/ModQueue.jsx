import styles from './ModQueue.module.css'
import Post from '../Post/Post'
import Layout from '../Layout/Layout'
import ModQueueReview from '../ModQueueReview/ModQueueReview'

export default function ModQueue() {
  return (
    <Layout className={styles.modQueue} bannerSize="mini">
      <ModQueueReview />
      <ModQueueReview />
      <ModQueueReview />
      <ModQueueReview />
    </Layout>
  )
} 