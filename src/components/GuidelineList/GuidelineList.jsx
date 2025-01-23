import React from 'react';
import styles from './GuidelineList.module.css';

const GuidelineList = ({ children, value = [], onChange }) => {
  return (
    <div 
      className={styles.list}
      role="group"
      aria-label="Guidelines"
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          selected: value.includes(child.props.value),
          onClick: () => {
            const newValue = value.includes(child.props.value)
              ? value.filter(v => v !== child.props.value)
              : [...value, child.props.value];
            onChange(newValue);
          }
        });
      })}
    </div>
  );
};

export default GuidelineList; 