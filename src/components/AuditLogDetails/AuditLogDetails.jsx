import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './AuditLogDetails.module.css';

export default function AuditLogDetails() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.icon}>
          <span className={styles.trashIcon}>🗑️</span>
          <span className={styles.label}>Post removed</span>
        </div>
        <button className={styles.restore}>Restore</button>
      </header>

      <div className={styles.content}>
        <div className={styles.moderator}>
          <img src="path-to-avatar" alt="" className={styles.avatar} />
          <div className={styles.moderatorInfo}>
            <div className={styles.username}>mix-sir-alot</div>
            <div className={styles.timestamp}>Removed this post · 1h</div>
          </div>
        </div>

        <div className={styles.reason}>
          <h2>Inappropriate</h2>
          <p>This content isn't really bad, but just not something we'd like to encourage within our community. Nudity is a grey area, and I think this crosses the line into pornography. Though, I'll admit our community guidelines should be more specific around nudity.</p>
        </div>

        <div className={styles.reports}>
          <div className={styles.reportCount}>
            <span>3</span> reports
          </div>
          <button className={styles.viewHistory}>View moderation history</button>
        </div>

        <div className={styles.removedPost}>
          <div className={styles.postAuthor}>
            <img src="path-to-avatar" alt="" className={styles.authorAvatar} />
            <div>
              <div className={styles.authorName}>analogdialog</div>
              <div className={styles.postTime}>3h ago</div>
            </div>
          </div>

          <div className={styles.postContent}>
            <p>I've been taking photos for a while now and really think this one is great. Maybe you'll like it. There's also some phone-sized images that you can put on your wallpaper.</p>
            
            <div className={styles.hiddenMedia}>
              <p>Media is hidden and may be inappropriate.</p>
              <button className={styles.showContent}>Show content</button>
            </div>

            <div className={styles.tags}>
              <span>#home</span>
              <span>#self portrait</span>
              <span>#living room</span>
            </div>

            <div className={styles.postStats}>
              <span>1 comment</span>
              <span>5 👎</span>
              <span>17 🙂</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 