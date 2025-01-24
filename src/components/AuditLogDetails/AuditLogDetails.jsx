import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import Post from '../Post/Post'
import styles from './AuditLogDetails.module.css';

export default function AuditLogDetails() {
  const { id } = useParams();

    return (
        <div className={styles.columns}>
            <div className={styles.navigation}>
                <Button type="secondary" label="Back" onClick={() => window.location.href = '/audit-log'} />
            </div>
        <div className={styles.auditLogDetails}>
            <header className={styles.header}>
                <div className={styles.headerAction}>
                    <span className={styles.trashIcon}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 0C6.34315 0 5 1.34315 5 3V3.5C5 3.77614 4.77614 4 4.5 4H3C2.44772 4 2 4.44772 2 5C2 5.37855 2.21034 5.70797 2.52051 5.87776C2.76274 6.01036 3 6.22386 3 6.5V16C3 17.6569 4.34315 19 6 19H14C15.6569 19 17 17.6569 17 16V6.5C17 6.22386 17.2373 6.01036 17.4795 5.87776C17.7897 5.70797 18 5.37855 18 5C18 4.44772 17.5523 4 17 4H15.5C15.2239 4 15 3.77614 15 3.5V3C15 1.34315 13.6569 0 12 0H8ZM12.5 4C12.7761 4 13 3.77614 13 3.5V3C13 2.44772 12.5523 2 12 2H8C7.44772 2 7 2.44772 7 3V3.5C7 3.77614 7.22386 4 7.5 4H12.5ZM8.5 9C8.5 8.44772 8.05228 8 7.5 8C6.94772 8 6.5 8.44772 6.5 9V14C6.5 14.5523 6.94772 15 7.5 15C8.05228 15 8.5 14.5523 8.5 14V9ZM13.5 9C13.5 8.44772 13.0523 8 12.5 8C11.9477 8 11.5 8.44772 11.5 9V14C11.5 14.5523 11.9477 15 12.5 15C13.0523 15 13.5 14.5523 13.5 14V9Z" fill="currentColor"/>
                        </svg>
                    </span>
                    <span className={styles.label}>Post removed</span>
                </div>
                <Button 
                    type="secondary"
                    label="Restore"
                    onClick={() => {}}
                />
            </header>
            <div className={styles.latestAction}>
                <div className={styles.moderator}>
                    <div className={styles.moderatorAvatar}><img src="https://placehold.co/44" alt="" /></div>
                    <div className={styles.moderatorText}>
                        <span className={styles.moderatorName}>John Doe</span>
                        <span className={styles.moderatorAction}>Removed this post • 1h</span>
                    </div>
                </div>
                <div className={styles.moderatorReason}>Against community guidelines</div>
                <div className={styles.moderatorAuthorMessage}>This content isn't really bad, but just not something we'd like to encourage within our community. Nudity is a grey area, and I think this corsses the line into pornography. Though, I'll admin our community guidelines should be more specific around nudity.</div>
                <div className={styles.moderatorMeta}>
                    <Button 
                        type="outline"
                        label="reports"
                        count={3}
                        facepileImages={[
                            'https://placehold.co/20x20',
                            'https://placehold.co/20x20',
                            'https://placehold.co/20x20'
                        ]}
                    />
                    <Button 
                        type="secondary"
                        label="View moderation history"
                        onClick={() => {}}
                    />
                </div>
            </div>
            <div className={styles.referenceContent}>
                <h3>Removed post</h3>
                <Post />
            </div>
        </div>
            
        <div className={styles.communityIdentity}>
            <div className={styles.image}></div>
            <div className={styles.title}>Design't</div>
            <div className={styles.description}>tumblr designers</div>
        </div>
    </div>
  );
} 