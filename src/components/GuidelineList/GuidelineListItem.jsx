import React from 'react';
import styles from './GuidelineListItem.module.css';

const GuidelineListItem = ({ value, label, number, selected, onClick, color }) => {
  return (
    <button
      className={`${styles.item} ${selected ? styles.selected : ''}`}
      onClick={onClick}
      role="checkbox"
      aria-checked={selected}
    >
      <span 
        className={styles.number}
        style={color ? { backgroundColor: color } : undefined}
      >
        {number}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default GuidelineListItem; 