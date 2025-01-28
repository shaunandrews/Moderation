import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ 
  checked = false, 
  disabled = false,
  label,
  onChange,
  ...props 
}) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={styles.input}
        {...props}
      />
      <span className={styles.control}>
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0692 2.17781C10.5233 2.49217 10.6366 3.11513 10.3222 3.56921L5.82219 10.0692C5.65341 10.313 5.38513 10.4693 5.08981 10.496C4.79448 10.5226 4.50257 10.4168 4.29289 10.2071L1.79289 7.70711C1.40237 7.31658 1.40237 6.68342 1.79289 6.29289C2.18342 5.90237 2.81658 5.90237 3.20711 6.29289L4.85984 7.94563L8.67781 2.43079C8.99217 1.97671 9.61513 1.86344 10.0692 2.17781Z" fill="currentColor"/>
          </svg>
        )}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox; 