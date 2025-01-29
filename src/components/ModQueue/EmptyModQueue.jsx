import styles from './ModQueue.module.css'

export default function EmptyModQueue() {
  return (
    <div className={styles.emptyState}>
      <h2>No reported content</h2>
      <p>This is one squeeky clean queue.</p>
    </div>
  )
} 