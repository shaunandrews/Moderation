import React from 'react';
import styles from './FormHeader.module.css';

const FormHeader = ({ label, hint, characterCount, maxCharacters }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.label}>{label}</h3>
      <div className={styles.header}>
        <p className={styles.hint}>{hint}</p>
        {characterCount !== undefined && maxCharacters && (
          <span className={styles.characterCount}>
            {characterCount}/{maxCharacters}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormHeader; 