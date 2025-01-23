import React from 'react';
import styles from './CheckboxChipGroup.module.css';

const CheckboxChipGroup = ({ children, value, onChange }) => {
  return (
    <div 
      className={styles.group}
      role="group"
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          selected: child.props.value === value,
          onClick: () => {
            const newValue = child.props.value === value ? null : child.props.value;
            onChange(newValue);
          }
        });
      })}
    </div>
  );
};

export default CheckboxChipGroup; 