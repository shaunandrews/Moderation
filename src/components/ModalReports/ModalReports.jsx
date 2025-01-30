import React from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import styles from './ModalReports.module.css';

export default function ModalReports({ isOpen, onClose, reports = [] }) {
  const footer = (
    <>
      <Button
        type="text"
        label="Close"
        onClick={onClose}
      />
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Reports"
    >
      <div className={styles.reportsList}>
        {reports.map((report, index) => (
          <div key={index} className={styles.reportItem}>
            <div className={styles.reportHeader}>
              <img 
                src={report.reporterAvatar || "https://assets.tumblr.com/images/default_avatar/sphere_open_64.png"} 
                alt="" 
                className={styles.reporterAvatar} 
              />
              <span className={styles.reporterName}>{report.reporterName}</span>
              <span className={styles.reportTimestamp}>{report.timestamp}</span>
            </div>
            <div className={styles.reportReason}>
              {report.reason}
            </div>
            {report.comment && (
              <div className={styles.reportComment}>
                {report.comment}
              </div>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
} 