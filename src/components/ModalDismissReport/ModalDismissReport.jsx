import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import Modal from '../Modal/Modal';
import styles from './ModalDismissReport.module.css';
import FormHeader from '../FormHeader/FormHeader';
import LockIcon from '../icons/LockIcon';

export default function ModalDismissReport({ isOpen, onClose, onDismiss }) {
  const [reason, setReason] = useState('');

  const handleDismiss = () => {
    onDismiss(reason);
    onClose();
  };

  const footer = (
    <>
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
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Dismiss all reports"
      footer={footer}
    >
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
    </Modal>
  );
} 
