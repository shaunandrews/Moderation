import styles from './Layout.module.css'
import CommunityBanner from '../CommunityBanner/CommunityBanner'
import CommunityNav from '../CommunityNav/CommunityNav'
import TabBar from '../TabBar/TabBar'

export default function Layout({ children, className, bannerSize = 'default', showNav = true }) {
  return (
    <main className={`${styles.layout} ${className}`}>
      <CommunityBanner size={bannerSize} />

      <TabBar />

      <div className={styles.columns}>
        <div className={styles.mainColumn}>
          {children}
        </div>
        
        {showNav && (
          <div className={styles.secondaryColumn}>
            <CommunityNav />
          </div>
        )}
      </div>
    </main>
  )
} 