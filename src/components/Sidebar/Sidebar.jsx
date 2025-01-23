import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.9343 28.5C15.191 28.5 12.4016 26.5658 12.4016 21.9381V14.5269H9V10.5139C12.7432 9.53756 14.3088 6.30203 14.4892 3.5H18.3762V9.86297H22.75V14.5269H18.3762V20.9801C18.3762 22.9145 19.3481 23.5832 20.8954 23.5832H23V28.5H18.9343Z" fill="white"/>
      </svg>

    </aside>
  )
} 