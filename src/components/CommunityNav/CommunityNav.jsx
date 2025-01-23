import { Link, useLocation } from 'react-router-dom'
import styles from './CommunityNav.module.css'

export default function CommunityNav() {
  const location = useLocation();
  
  return (
    <div className={styles.communityNav}>
      <Link 
        to="/" 
        className={`${styles.communityNavItem} ${location.pathname === '/' ? styles.active : ''}`}
      >
        <span className={styles.communityNavItemIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.5H19.5C20.0523 3.5 20.5 3.94772 20.5 4.5V19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H4.5C3.94772 20.5 3.5 20.0523 3.5 19.5V4.5C3.5 3.94772 3.94772 3.5 4.5 3.5ZM1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H19.5C21.1569 1.5 22.5 2.84315 22.5 4.5V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H4.5C2.84315 22.5 1.5 21.1569 1.5 19.5V4.5ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44771 9 7 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44771 13 6 12.5523 6 12ZM7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H7Z" fill="currentColor"/>
          </svg>
        </span>
        <span className={styles.communityNavItemLabel}>Posts</span>
      </Link>
      <Link 
        to="/mod-queue" 
        className={`${styles.communityNavItem} ${location.pathname === '/mod-queue' ? styles.active : ''}`}
      >
        <span className={styles.communityNavItemIcon}>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C10.5523 0 11 0.447715 11 1V4C11 4.55228 10.5523 5 10 5C9.44771 5 9 4.55228 9 4V1C9 0.447715 9.44771 0 10 0Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 7C7.76822 7 5.37929 8.46037 4.06837 10.6402C3.91051 10.9027 3.65337 11.0893 3.36365 11.1887C1.98831 11.6605 1 12.9647 1 14.5C1 16.0353 1.98831 17.3395 3.36365 17.8113C3.65337 17.9107 3.91052 18.0973 4.06837 18.3598C5.3793 20.5396 7.76822 22 10.5 22C14.0909 22 17.0918 19.4769 17.8275 16.1062C17.9183 15.69 18.225 15.344 18.6413 15.2535L21.4249 14.6484C22.3442 14.4485 23 13.6349 23 12.694V9C23 7.89543 22.1046 7 21 7H10.5ZM9 9.86804C9 9.53641 8.68219 9.29683 8.37631 9.42496C7.06159 9.97568 6.00552 11.0225 5.44308 12.333C5.2693 12.7379 4.87825 12.9892 4.45832 13.0006C3.64946 13.0224 3 13.6855 3 14.5C3 15.3145 3.64946 15.9776 4.45832 15.9994C4.87825 16.0108 5.2693 16.2621 5.44308 16.667C6.28513 18.629 8.23359 20 10.5 20C13.3992 20 15.7753 17.7561 15.9849 14.9111C16.0319 14.2739 16.4802 13.6766 17.1755 13.5254L20.6062 12.7796C20.8361 12.7297 21 12.5263 21 12.2911V9.5C21 9.22386 20.7761 9 20.5 9H11.5C11.2239 9 11 9.22386 11 9.5V12C11 12.5523 10.5523 13 10 13C9.44771 13 9 12.5523 9 12V9.86804Z" fill="currentColor"/>
<path d="M16.7071 2.70711C17.0976 2.31658 17.0976 1.68342 16.7071 1.29289C16.3166 0.902369 15.6834 0.902369 15.2929 1.29289L13.2929 3.29289C12.9024 3.68342 12.9024 4.31658 13.2929 4.70711C13.6834 5.09763 14.3166 5.09763 14.7071 4.70711L16.7071 2.70711Z" fill="currentColor"/>
<path d="M5.29289 4.70711C5.68342 5.09763 6.31658 5.09763 6.70711 4.70711C7.09763 4.31658 7.09763 3.68342 6.70711 3.29289L4.70711 1.29289C4.31658 0.902369 3.68342 0.902369 3.29289 1.29289C2.90237 1.68342 2.90237 2.31658 3.29289 2.70711L5.29289 4.70711Z" fill="currentColor"/>
</svg>
        </span>
        <span className={styles.communityNavItemLabel}>Mod queue</span>
      </Link>
      <Link 
        to="/audit-log" 
        className={`${styles.communityNavItem} ${location.pathname === '/audit-log' ? styles.active : ''}`}
      >
        <span className={styles.communityNavItemIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6V11.0729C13 11.2623 13.107 11.4355 13.2764 11.5202L16.4472 13.1056C16.9412 13.3526 17.1414 13.9532 16.8944 14.4472C16.6474 14.9412 16.0468 15.1414 15.5528 14.8944L11.5528 12.8944C11.214 12.725 11 12.3788 11 12V6C11 5.44772 11.4477 5 12 5Z" fill="currentColor"/>
          </svg>
        </span>
        <span className={styles.communityNavItemLabel}>Audit log</span>
      </Link>
    </div>
  )
} 