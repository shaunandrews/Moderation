import React, { useEffect, useRef, useState } from 'react';
import styles from './Menu.module.css';

const Menu = ({ 
  isOpen, 
  onClose, 
  anchorEl, 
  children 
}) => {
  const menuRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen || !anchorEl || !menuRef.current) return;

    const updatePosition = () => {
      const anchorRect = anchorEl.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Default position below the anchor
      let top = anchorRect.bottom + 8;
      let left = anchorRect.left;

      // Check if menu would go below viewport
      if (top + menuRect.height > viewportHeight) {
        top = anchorRect.top - menuRect.height - 8;
      }

      // Check if menu would go beyond right edge
      if (left + menuRect.width > viewportWidth) {
        left = viewportWidth - menuRect.width - 8;
      }

      setPosition({ top, left });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [isOpen, anchorEl]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !anchorEl?.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, anchorEl]);

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className={styles.menu}
      style={{
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {children}
    </div>
  );
};

export const MenuItem = ({ 
  children, 
  onClick, 
  danger 
}) => (
  <button 
    className={`${styles.menuItem} ${danger ? styles.danger : ''}`}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </button>
);

export const MenuDivider = () => (
  <div className={styles.divider} />
);

export default Menu; 