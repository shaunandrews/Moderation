import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = React.forwardRef(({ 
  type = 'primary', 
  label, 
  icon,
  onClick,
  disabled = false,
  'aria-label': ariaLabel,
  count,
  facepileImages = []
}, ref) => {
  const buttonClass = `${styles.button} ${styles[type]} ${disabled ? styles.disabled : ''}`;

  const renderFacepile = () => {
    if (!facepileImages.length) return null;
    return (
      <div className={styles.facepile}>
        {facepileImages.slice(0, 3).map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
    );
  };

  return (
    <button 
      ref={ref}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon}
      {renderFacepile()}
      <label>
        {count !== undefined && <span className={styles.count}>{count}</span>}
        {label}
      </label>
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'text', 'icon', 'outline']),
  label: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  'aria-label': PropTypes.string,
  count: PropTypes.number,
  facepileImages: PropTypes.arrayOf(PropTypes.string)
};

export default Button; 