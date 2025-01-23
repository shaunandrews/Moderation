import React from 'react';
import styles from './ReasonGroup.module.css';

const ChevronIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L14.5858 13L9.29289 18.2929C8.90237 18.6834 8.90237 19.3166 9.29289 19.7071C9.68342 20.0976 10.3166 20.0976 10.7071 19.7071L16.7071 13.7071C17.0976 13.3166 17.0976 12.6834 16.7071 12.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289Z" fill="currentColor"/>
  </svg>
);

const ReasonGroup = ({ title, description, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.icon}>
          <ChevronIcon />
        </div>
      </div>
    </button>
  );
};

export default ReasonGroup; 