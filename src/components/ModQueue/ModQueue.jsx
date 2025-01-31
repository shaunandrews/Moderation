import styles from './ModQueue.module.css'
import CommunityLayout from '../CommunityLayout/CommunityLayout'
import Post from '../Post/Post'
import ModQueueReview from '../ModQueueReview/ModQueueReview'
import EmptyModQueue from './EmptyModQueue'
import { useState } from 'react'

export default function ModQueue() {
  // Example data - in a real app this would come from an API
  const [reviews, setReviews] = useState([
    { 
      id: 1,
      reportCount: 3,
      reportedReasons: ['Against community guidelines', 'Spam'],
      helpfulInfo: [
        '<strong>@authorblog</strong> has previously had 3 posts removed'
      ],
      reportedPost: (
        <Post
          initialPreview={true}
          username="photography-lover"
          avatar="https://assets.tumblr.com/images/default_avatar/sphere_open_64.png"
          timestamp="2h"
          contentImage="https://64.media.tumblr.com/e46c7bd91a46671840be0a335600bb74/41aba1ddd5db6b07-48/s1280x1920/a23113327e04d3878a2abc5d484549c4e49d9795.jpg"
          content={<p>Just captured this amazing sunset at the beach. The colors were absolutely incredible! 🌅 #photography #sunset #beach</p>}
        />
      )
    },
    { 
      id: 2,
      reportCount: 5,
      reportedReasons: ['Harmful behavior', 'Spam'],
      helpfulInfo: ['<strong>@shaunandrews</strong>: This keeps getting reported, but I dont think its violative.']
    },
    { 
      id: 3,
      reportCount: 789,
      reportedReasons: ['Against community guidelines'],
      helpfulInfo: ['First report for this member']
    },
    { 
      id: 4,
      reportCount: 12,
      reportedReasons: ['Spam'],
      helpfulInfo: []
    }
  ]);

  const handleReviewDismiss = (reviewId) => {
    // After animation completes, remove the review
    setTimeout(() => {
      setReviews(reviews.filter(review => review.id !== reviewId));
    }, 1010); // Match transition duration from CSS
  };

  return (
    <CommunityLayout className={styles.modQueue} role="admin">
      {reviews.length > 0 ? (
        reviews.map(review => (
          <ModQueueReview 
            key={review.id}
            reviewId={review.id}
            onDismissed={() => handleReviewDismiss(review.id)}
            reportCount={review.reportCount}
            reportedReasons={review.reportedReasons}
            helpfulInfo={review.helpfulInfo}
            reportedPost={review.reportedPost}
          />
        ))
      ) : (
        <EmptyModQueue />
      )}
    </CommunityLayout>
  )
} 