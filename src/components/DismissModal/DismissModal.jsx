import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import CloseIcon from '../icons/CloseIcon';
import styles from './DismissModal.module.css';
import FormHeader from '../FormHeader/FormHeader';
import LockIcon from '../icons/LockIcon';

export default function DismissModal({ isOpen, onClose, onDismiss }) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [reason, setReason] = useState('');

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

  const handleDismiss = () => {
    onDismiss(reason);
    onClose();
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
          <h2>Dismiss all reports</h2>
          <div className={styles.actions}>
            <Button 
              type="icon"
              icon={<CloseIcon />}
              onClick={onClose}
              aria-label="Close modal"
            />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.educationalMessage}>
            <p>
              These reports will be hidden and the post removed from the queue. Reporters will not be notified.
            </p>
          </div>

          <div className={styles.reasonField}>
            <FormHeader
              label="Moderator note"
              hint="A private note for other moderators."
              characterCount={reason.length}
              maxCharacters={300}
            />
            <TextField 
              multiline
              rows={3}
              icon={<LockIcon />}
              placeholder="Here's some private context and notes..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <Button
            type="text"
            label="Cancel"
            onClick={onClose}
          />
          <Button
            type="primary"
            label="Dismiss all reports"
            onClick={handleDismiss}
          />
        </div>
      </animated.div>
    </animated.div>
  );
} 
