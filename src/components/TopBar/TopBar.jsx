import styles from './TopBar.module.css'

export default function TopBar() {
  return (
    <header className={styles.topBar}>
      <div className={styles.topBarBreadcrumbs}>
        <h1>Communities</h1>
        <div className={styles.topBarBreadcrumbsSeparator}>/</div>
        <span className={styles.topBarBreadcrumbsItem}>Design't</span>
        {/* <div className={styles.topBarBreadcrumbsSeparator}>/</div> */}
        {/* <span className={styles.topBarBreadcrumbsItem}>Posts</span> */}
      </div>
    </header>
  )
} 