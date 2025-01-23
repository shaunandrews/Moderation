import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

const TextField = forwardRef(({
  type = 'text',
  multiline = false,
  placeholder,
  value,
  onChange,
  icon,
  className,
  ...props
}, ref) => {
  const Component = multiline ? 'textarea' : 'input';
  const hasContent = value && value.length > 0;

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <Component
        ref={ref}
        type={multiline ? undefined : type}
        className={`${styles.field} ${hasContent ? styles.hasContent : ''} ${icon ? styles.hasIcon : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
});

TextField.displayName = 'TextField';

TextField.propTypes = {
  type: PropTypes.string,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default TextField; 