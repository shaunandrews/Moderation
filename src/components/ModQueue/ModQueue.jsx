import styles from './ModQueue.module.css'
import Post from '../Post/Post'
import Layout from '../Layout/Layout'
import ModQueueReview from '../ModQueueReview/ModQueueReview'
import EmptyModQueue from './EmptyModQueue'
import { useState } from 'react'

export default function ModQueue() {
  const [reviews, setReviews] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ]);

  const handleReviewDismiss = (reviewId) => {
    // After animation completes, remove the review
    setTimeout(() => {
      setReviews(reviews.filter(review => review.id !== reviewId));
    }, 1010); // Match transition duration from CSS
  };

  return (
    <Layout className={styles.modQueue}>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <ModQueueReview 
            key={review.id}
            reviewId={review.id}
            onDismissed={() => handleReviewDismiss(review.id)}
          />
        ))
      ) : (
        <EmptyModQueue />
      )}
    </Layout>
  )
} 