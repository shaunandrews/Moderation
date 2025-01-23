import styles from './CommunityBanner.module.css'

export default function CommunityBanner({ size = 'full' }) {
  return (
    <div className={`${styles.banner} ${size === 'mini' ? styles.mini : ''}`}>
      {/* Banner content - 920px wide */}
    </div>
  )
} 