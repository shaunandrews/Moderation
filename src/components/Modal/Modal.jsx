import React from 'react';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Button from '../Button/Button';
import CloseIcon from '../icons/CloseIcon';
import styles from './Modal.module.css';

export default function Modal({ 
  isOpen, 
  onClose, 
  title,
  children,
  footer,
  showCloseButton = true,
}) {
  const [isRendered, setIsRendered] = useState(isOpen);

  const springs = useSpring({
    transform: isOpen ? 'translateY(0%)' : 'translateY(20px)',
    opacity: isOpen ? 1 : 0,
    config: {
      tension: 400,
      friction: 38,
      clamp: true,
      mass: 1.2,
    },
    onRest: () => {
      if (!isOpen) {
        setIsRendered(false);
      }
    },
  });

  if (!isRendered && !isOpen) return null;

  const handleScrimClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <animated.div 
      className={styles.container} 
      onClick={handleScrimClick}
      style={{
        opacity: springs.opacity,
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <animated.div 
        className={styles.modal}
        style={{
          transform: springs.transform,
        }}
      >
        <div className={styles.header}>
          <h2>{title}</h2>
          {showCloseButton && (
            <div className={styles.actions}>
              <Button 
                type="icon"
                icon={<CloseIcon />}
                onClick={onClose}
                aria-label="Close modal"
              />
            </div>
          )}
        </div>

        <div className={styles.content}>
          {children}
        </div>

        {footer && (
          <div className={styles.footer}>
            {footer}
          </div>
        )}
      </animated.div>
    </animated.div>
  );
} 