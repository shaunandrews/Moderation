import { forwardRef, useEffect, useRef } from 'react';
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
  rows = 3,
  ...props
}, ref) => {
  const Component = multiline ? 'textarea' : 'input';
  const hasContent = value && value.length > 0;
  const textareaRef = useRef(null);

  // Combine refs if textarea
  const combinedRef = (element) => {
    textareaRef.current = element;
    if (ref) {
      if (typeof ref === 'function') {
        ref(element);
      } else {
        ref.current = element;
      }
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (!multiline || !textareaRef.current) return;
    
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // Reset height
    const newHeight = Math.min(textarea.scrollHeight, 256); // 256px is our max-height
    textarea.style.height = `${newHeight}px`;
  }, [value, multiline]);

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <Component
        ref={multiline ? combinedRef : ref}
        type={multiline ? undefined : type}
        className={`${styles.field} ${hasContent ? styles.hasContent : ''} ${icon ? styles.hasIcon : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={multiline ? rows : undefined}
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
  rows: PropTypes.number,
};

export default TextField; 