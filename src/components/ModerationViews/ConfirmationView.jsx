import React, { useState, useContext } from 'react';
import styles from './Views.module.css';
import Button from '../Button/Button';
import { ModerationContext } from '../../App';

const ConfirmationView = ({ viewData, onClose, action = 'remove' }) => {
  const { moderationDismissCallback, setModerationDismissCallback } = useContext(ModerationContext);
  const [isBanned, setIsBanned] = useState(false);

  const handleBanClick = () => {
    setIsBanned(!isBanned);
  };

  const getReasonText = () => {
    const { groupId } = viewData;
    
    if (groupId === 'community') {
      return 'Against community guidelines';
    } else if (groupId === 'violence') {
      return 'Violence or hate';
    } else if (groupId === 'harmful') {
      return 'Harmful behavior';
    } else if (groupId === 'unallowed') {
      return 'Unallowed content';
    }
    
    return 'Content violation';
  };

  const getDetailText = () => {
    const { groupId, selectedReason } = viewData;
    
    if (groupId === 'community') {
      // For community guidelines, selectedReason is an array of guideline IDs
      if (Array.isArray(selectedReason)) {
        return selectedReason.map(id => {
          const guideline = communityGuidelines.find(g => g.id === id);
          return guideline ? guideline.text : '';
        }).filter(Boolean).join(', ');
      }
    } else {
      // For other groups, selectedReason is a single ID
      const options = {
        violence: violenceOptions,
        harmful: harmfulOptions,
        unallowed: unlawfulOptions
      }[groupId] || [];
      
      const option = options.find(o => o.id === selectedReason);
      return option ? option.text : '';
    }
  };

  const communityGuidelines = [
    { id: 1, text: 'Be nice to each other' },
    { id: 2, text: 'Stay on topic' },
    { id: 3, text: 'No advertising' },
    { id: 4, text: 'No hate speech' },
    { id: 5, text: 'Keep discussions civil' },
    { id: 6, text: 'No spam' },
    { id: 7, text: 'Respect IP rights' },
    { id: 8, text: 'Tag NSFW content' },
    { id: 9, text: 'Protect personal information' }
  ];

  const violenceOptions = [
    { id: 'hate_speech', text: 'Hate speech' },
    { id: 'violent_threats', text: 'Violent threats' },
    { id: 'gore', text: 'Gore or mutilation' },
    { id: 'self_harm', text: 'Self-harm' }
  ];

  const harmfulOptions = [
    { id: 'harassment', text: 'Harassment' },
    { id: 'harm_to_minors', text: 'Harm to minors' },
    { id: 'impersonation', text: 'Impersonation' },
    { id: 'sexually_explicit', text: 'Sexually explicit' },
    { id: 'privacy_violation', text: 'Privacy violation' },
    { id: 'non_genuine', text: 'Non-genuine behavior' },
    { id: 'self_harm', text: 'Self-harm' }
  ];

  const unlawfulOptions = [
    { id: 'spam', text: 'Spam' },
    { id: 'terrorism', text: 'Suspected terrorism' },
    { id: 'bestiality', text: 'Bestiality' },
    { id: 'election_interference', text: 'Election interference' },
    { id: 'illegal_eu', text: 'Illegal content (EU)' }
  ];

  const detailText = getDetailText();

  const handleClose = () => {
    // Call the dismiss callback if it exists
    if (moderationDismissCallback) {
      moderationDismissCallback();
      // Reset the callback
      setModerationDismissCallback(null);
    }
    onClose();
  };

  return (
    <div className={styles.view}>
      <div className={styles.confirmation}>
        <div className={styles.confirmationHeading}>
          <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 34.5C27.1127 34.5 34.5 27.1127 34.5 18C34.5 8.8873 27.1127 1.5 18 1.5C8.8873 1.5 1.5 8.8873 1.5 18C1.5 27.1127 8.8873 34.5 18 34.5ZM25.1523 14.4603C25.6827 13.8239 25.5967 12.8781 24.9603 12.3477C24.3239 11.8174 23.378 11.9033 22.8477 12.5398L16.3992 20.2779L13.0607 16.9394C12.4749 16.3536 11.5251 16.3536 10.9393 16.9394C10.3536 17.5252 10.3536 18.4749 10.9393 19.0607L15.4393 23.5607C15.7374 23.8587 16.147 24.0176 16.568 23.9985C16.989 23.9794 17.3825 23.7841 17.6523 23.4603L25.1523 14.4603Z" fill="currentColor"/>
          </svg>
          <h2>{action === 'report' ? 'Post reported' : 'Post removed'}</h2>
        </div>

        {action === 'report' ? (
          <>
            <p>
              Thank you for reporting this post. Our moderation team will review it for {getReasonText().toLowerCase()}
              {detailText && ` (${detailText.toLowerCase()})`}.
              {viewData.reportReason && (
                <>
                  <br /><br />
                  Your additional context: "{viewData.reportReason}"
                </>
              )}
            </p>

            <div className={styles.confirmationBan} onClick={handleBanClick}>
              <input 
                type="checkbox" 
                id="ban-checkbox" 
                checked={isBanned}
                onChange={(e) => setIsBanned(e.target.checked)}
              />
              <div className={styles.confirmationBanLabel}>
                <span className={styles.confirmationBanLabelText}>Block <strong>@scotty-blog</strong></span>
                <span className={styles.confirmationBanLabelDescription}>Never see their posts or reblogs, and don't let them message you.</span>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <Button
                type="primary"
                label="Close"
                onClick={handleClose}
              />
            </div>
          </>
        ) : (
          <>
            <p>
              The post author has been notified that their post was removed for {getReasonText().toLowerCase()}
              {detailText && ` (${detailText.toLowerCase()})`}.
            </p>

            <div className={styles.confirmationBan} onClick={handleBanClick}>
              <input 
                type="checkbox" 
                id="ban-checkbox" 
                checked={isBanned}
                onChange={(e) => setIsBanned(e.target.checked)}
              />
              <div className={styles.confirmationBanLabel}>
                <span className={styles.confirmationBanLabelText}>Ban <strong>@scotty-blog</strong></span>
                <span className={styles.confirmationBanLabelDescription}>Remove and don't allow them to rejoin.</span>
              </div>
            </div>

            {viewData.escalateToStaff && (
              <div className={styles.requiredNotice}>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6648 1.32907C13.8973 1.21295 14.1733 1.22541 14.3943 1.36201C14.6154 1.49867 14.75 1.74007 14.75 2V9.9382C14.75 10.2543 14.5724 10.559 14.2664 10.7043C13.9184 10.8693 11.9838 11.75 10.0001 11.75C8.73568 11.75 7.93036 11.1052 7.31955 10.6161L7.28153 10.5857C6.64688 10.078 6.20919 9.75 5.5 9.75C4.62624 9.75 3.9178 9.96838 3.42961 10.1854C3.25682 10.2622 3.11271 10.3383 3 10.4036V14.5C3 14.9142 2.66421 15.25 2.25 15.25C1.83579 15.25 1.5 14.9142 1.5 14.5V2.04807C1.5 1.79737 1.61254 1.53672 1.84394 1.36686C2.13199 1.15542 3.47875 0.25 5.5 0.25C6.7644 0.25 7.56972 0.894826 8.18053 1.38391L8.21855 1.41434C8.8532 1.92204 9.29089 2.25 10.0001 2.25C10.8866 2.25 11.8003 2.02601 12.5129 1.78849C12.8646 1.67123 13.1575 1.55405 13.3608 1.4669C13.4623 1.4234 13.541 1.38761 13.593 1.36334C13.619 1.35121 13.6383 1.34198 13.6504 1.33612L13.6631 1.32993L13.6648 1.32907Z" fill="currentColor"/>
                </svg>
                <span>This post has been escalated to Tumblr for review.</span>
              </div>
            )}

            <div className={styles.buttonContainer}>
              <Button
                type={isBanned ? "danger" : "primary"}
                label={isBanned ? "Ban & close" : "Close"}
                onClick={handleClose}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmationView; 