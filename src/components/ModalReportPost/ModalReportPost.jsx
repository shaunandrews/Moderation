import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './ModalReportPost.module.css';

export default function ModalReportPost({ isOpen, onClose, onSubmit }) {
  const [selectedReason, setSelectedReason] = useState('');

  const reportOptions = [
    {
      value: 'off-topic',
      label: 'Off topic',
      description: 'This post doesn\'t belong in this community.'
    },
    {
      value: 'against-guidelines',
      label: 'Against community guidelines',
      description: 'This post goes against the rules of this community.'
    },
    {
      value: 'not-allowed',
      label: 'Not allowed on Tumblr',
      description: 'This post violates Tumblr\'s policies.'
    }
  ];

  const handleSubmit = () => {
    onSubmit(selectedReason);
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
        label="Continue"
        onClick={handleSubmit}
        disabled={!selectedReason}
      />
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Report post"
      footer={footer}
    >
      <div className={styles.content}>
        <p className={styles.description}>
          Pick the best reason for reporting. Accurate reports mean faster fixes and less chaos.
        </p>
        
        <div className={styles.options}>
          {reportOptions.map((option) => (
            <label key={option.value} className={styles.option}>
              <input
                type="radio"
                name="report-reason"
                value={option.value}
                checked={selectedReason === option.value}
                onChange={(e) => setSelectedReason(e.target.value)}
              />
              <div className={styles.optionContent}>
                <div className={styles.optionLabel}>{option.label}</div>
                <div className={styles.optionDescription}>{option.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </Modal>
  );
} 