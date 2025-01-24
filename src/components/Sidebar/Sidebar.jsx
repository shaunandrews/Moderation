import styles from './Sidebar.module.css'
import LogoIcon from '../icons/LogoIcon'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <LogoIcon />
    </aside>
  )
} 