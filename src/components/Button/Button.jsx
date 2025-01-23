import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = React.forwardRef(({ 
  type = 'primary', 
  label, 
  icon,
  onClick,
  disabled = false,
  'aria-label': ariaLabel
}, ref) => {
  const buttonClass = `${styles.button} ${styles[type]} ${disabled ? styles.disabled : ''}`;

  return (
    <button 
      ref={ref}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon ? icon : label}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'text', 'icon']),
  label: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  'aria-label': PropTypes.string
};

export default Button; 