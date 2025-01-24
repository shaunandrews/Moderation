import styles from './ModQueueReview.module.css'
import Post from '../Post/Post'
import Button from '../Button/Button'
import { useContext } from 'react'
import { ModerationContext } from '../../App'

export default function ModQueueReview() {
  const { setModerationOpen } = useContext(ModerationContext);

  const handleModerate = () => {
    setModerationOpen(true);
  };

  return (
    <div className={styles.modQueueReview}>
      <div className={styles.reviewHeader}>
        <Button
            type="secondary"
            label="3 reports"
                  onClick={() => {}}
        />
        <div className={styles.reviewHeaderActions}>
            <Button
                type="icon"
                icon="more"
                onClick={() => {}}
            />
            <Button
                type="primary"
                label="Moderate"
                onClick={handleModerate}
            />
        </div>
      </div>
      <div className={styles.reviewReasons}>
        <div className={styles.reviewReason}>Against community guidelines</div>
        <div className={styles.reviewReason}>Off topic</div>
        <div className={styles.reviewReason}>Spam</div>
      </div>
      <div className={styles.reviewContent}>
        <h3>Reported post</h3>
        <Post />
      </div>
    </div>
  )
} 