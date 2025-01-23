import styles from './CommunityBanner.module.css'

export default function CommunityBanner({ size = 'full' }) {
  return (
      <div className={`${styles.banner} ${size === 'mini' ? styles.mini : ''}`}>
          <div className={styles.container}>
            <div className={styles.identity}>
                <h2 className={styles.title}>Design't</h2>
                {size !== 'mini' && (
                    <>
                        <p className={styles.description}>tumblr designrs</p>
                        <div className={styles.role}>
                            <span className={styles.roleIcon}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.0773 1.76636C7.41889 0.94507 8.58234 0.945065 8.92394 1.76636L10.2514 4.95802C10.3234 5.13114 10.4862 5.24943 10.6731 5.26441L14.1188 5.54065C15.0055 5.61173 15.365 6.71823 14.6894 7.29691L12.0642 9.5457C11.9218 9.66768 11.8596 9.85907 11.9031 10.0414L12.7052 13.4038C12.9116 14.2691 11.9703 14.9529 11.2112 14.4893L8.26125 12.6874C8.10124 12.5897 7.9 12.5897 7.73999 12.6874L4.79002 14.4893C4.03092 14.9529 3.08967 14.2691 3.29606 13.4038L4.09811 10.0414C4.14161 9.85907 4.07943 9.66768 3.93703 9.5457L1.3118 7.29691C0.636262 6.71824 0.995782 5.61173 1.88244 5.54065L5.32811 5.26441C5.515 5.24943 5.67781 5.13114 5.74981 4.95802L7.0773 1.76636Z" fill="#FF8A00"/>
                                </svg>
                            </span>
                            <span className={styles.roleName}>Admin</span>
                            <span className={styles.username}>@shaunandrews</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}