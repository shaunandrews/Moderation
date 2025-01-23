import React from 'react';
import styles from './CheckboxChip.module.css';

const CheckboxChip = ({ label, selected, onClick }) => {
  return (
    <button
      className={`${styles.chip} ${selected ? styles.selected : ''}`}
      onClick={onClick}
      role="radio"
      aria-checked={selected}
    >
      {label}
    </button>
  );
};

export default CheckboxChip; 