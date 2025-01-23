import React from 'react';
import styles from './StaffEscalation.module.css';
import Checkbox from '../Checkbox/Checkbox';

const StaffEscalation = ({ required = false, checked = false, onChange }) => {
  if (required) {
    return (
      <div className={styles.requiredNotice}>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6648 1.32907C13.8973 1.21295 14.1733 1.22541 14.3943 1.36201C14.6154 1.49867 14.75 1.74007 14.75 2V9.9382C14.75 10.2543 14.5724 10.559 14.2664 10.7043C13.9184 10.8693 11.9838 11.75 10.0001 11.75C8.73568 11.75 7.93036 11.1052 7.31955 10.6161L7.28153 10.5857C6.64688 10.078 6.20919 9.75 5.5 9.75C4.62624 9.75 3.9178 9.96838 3.42961 10.1854C3.25682 10.2622 3.11271 10.3383 3 10.4036V14.5C3 14.9142 2.66421 15.25 2.25 15.25C1.83579 15.25 1.5 14.9142 1.5 14.5V2.04807C1.5 1.79737 1.61254 1.53672 1.84394 1.36686C2.13199 1.15542 3.47875 0.25 5.5 0.25C6.7644 0.25 7.56972 0.894826 8.18053 1.38391L8.21855 1.41434C8.8532 1.92204 9.29089 2.25 10.0001 2.25C10.8866 2.25 11.8003 2.02601 12.5129 1.78849C12.8646 1.67123 13.1575 1.55405 13.3608 1.4669C13.4623 1.4234 13.541 1.38761 13.593 1.36334C13.619 1.35121 13.6383 1.34198 13.6504 1.33612L13.6631 1.32993L13.6648 1.32907Z" fill="currentColor"/>
        </svg>
        <span>This post will be automatically escalated to Tumblr for review.</span>
      </div>
    );
  }

  return (
    <label className={styles.optionalCheckbox}>
      <Checkbox checked={checked} onChange={(e) => onChange?.(e.target.checked)} />
      <span>Escalate this post to Tumblr for review</span>
    </label>
  );
};

export default StaffEscalation; 