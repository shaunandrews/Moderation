import styles from './Layout.module.css'
import CommunityBanner from '../CommunityBanner/CommunityBanner'
import CommunityNav from '../CommunityNav/CommunityNav'
import TabBar from '../TabBar/TabBar'
import { createContext } from 'react'

export const RoleContext = createContext(null);

export default function Layout({ 
  children, 
  className, 
  showNav = true,
  title,
  description,
  role,
  username,
  bannerImage
}) {
  return (
    <main className={`${styles.layout} ${className}`}>
      <CommunityBanner 
        title={title}
        description={description}
        role={role}
        username={username}
        bannerImage={bannerImage}
      />

      <TabBar />

      <div className={styles.columns}>
        <RoleContext.Provider value={role}>
          <div className={styles.mainColumn}>
            {children}
          </div>
          
          {showNav && (
            <div className={styles.secondaryColumn}>
              <CommunityNav role={role} />
            </div>
          )}
        </RoleContext.Provider>
      </div>
    </main>
  )
} 