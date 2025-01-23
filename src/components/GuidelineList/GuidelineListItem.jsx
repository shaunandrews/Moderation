import React from 'react';
import styles from './GuidelineListItem.module.css';

const GuidelineListItem = ({ value, label, number, selected, onClick }) => {
  return (
    <button
      className={`${styles.item} ${selected ? styles.selected : ''}`}
      onClick={onClick}
      role="checkbox"
      aria-checked={selected}
    >
      <div className={styles.number}>{number}</div>
      <div className={styles.label}>{label}</div>
    </button>
  );
};

export default GuidelineListItem; 