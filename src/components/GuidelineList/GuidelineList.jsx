import React, { useEffect, useRef, useState } from 'react';
import styles from './GuidelineList.module.css';

const GuidelineList = ({ children, value = [], onChange }) => {
  const listRef = useRef(null);
  const [hasScroll, setHasScroll] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const checkScroll = () => {
    if (listRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = listRef.current;
      const hasScrollContent = scrollHeight > clientHeight;
      setHasScroll(hasScrollContent);
      
      // Check if we're at the bottom (with a small threshold for rounding)
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
      setIsScrolledToBottom(isAtBottom);
    }
  };

  useEffect(() => {
    checkScroll();
    // Re-check when children change
    const observer = new ResizeObserver(checkScroll);
    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => observer.disconnect();
  }, [children]);

  useEffect(() => {
    const element = listRef.current;
    if (element) {
      element.addEventListener('scroll', checkScroll);
      return () => element.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <div 
      ref={listRef}
      className={`${styles.list} ${hasScroll && !isScrolledToBottom ? styles.hasScroll : ''}`}
      role="group"
      aria-label="Guidelines"
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...child.props,
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