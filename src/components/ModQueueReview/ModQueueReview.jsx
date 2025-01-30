import styles from './ModQueueReview.module.css'
import Post from '../Post/Post'
import Button from '../Button/Button'
import Menu, { MenuItem, MenuDivider } from '../Menu/Menu'
import ModalDismissReport from '../ModalDismissReport/ModalDismissReport'
import ModalReports from '../ModalReports/ModalReports'
import { useContext, useRef, useState, useEffect } from 'react'
import { ModerationContext } from '../../App'
import OverflowIcon from '../icons/OverflowIcon'
import ChevronDownIcon from '../icons/ChevronDownIcon'

export default function ModQueueReview({ 
  reviewId, 
  onDismissed,
  reportCount = 3,
  reportedPost,
  reportedReasons = ['Against community guidelines', 'Harmful behavior'],
  helpfulInfo = [
    '<strong>@authorblog</strong> has had 3 posts removed in the last month',
    '<strong>@sarah-mod</strong>: Got a bunch of reports for this post, but it\'s not violating guidelines. I think there may be a campaign against this user.'
  ]
}) {
  const { setModerationOpen, setModerationDismissCallback } = useContext(ModerationContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isDismissModalOpen, setIsDismissModalOpen] = useState(false);
  const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const buttonRef = useRef(null);

  // Example reports data - in a real app, this would come from props or an API
  const reports = [
    {
      reporterName: '@sarah-mod',
      timestamp: '2h ago',
      reason: 'Against community guidelines',
      comment: 'This post contains inappropriate content'
    },
    {
      reporterName: '@moderator2',
      timestamp: '3h ago',
      reason: 'Harmful behavior',
      comment: 'User is engaging in harmful behavior'
    },
    {
      reporterName: '@moderator3',
      timestamp: '4h ago',
      reason: 'Against community guidelines',
    }
  ];

  useEffect(() => {
    if (isDismissed) {
      // Call the parent's onDismissed callback
      onDismissed();
    }
  }, [isDismissed, onDismissed]);

  const handleModerate = () => {
    // Pass the dismiss callback to the moderation context
    setModerationDismissCallback(() => () => setIsDismissed(true));
    setModerationOpen(true);
  };

  const handleAddNote = () => {
    setMenuOpen(false);
    // TODO: Implement add note functionality
  };

  const handleViewPostHistory = () => {
    setMenuOpen(false);
    // TODO: Implement view post history functionality
  };

  const handleViewMemberHistory = () => {
    setMenuOpen(false);
    // TODO: Implement view member history functionality
  };

  const handleDismissReports = () => {
    setMenuOpen(false);
    setIsDismissModalOpen(true);
  };

  const handleDismissConfirm = (reason) => {
    setIsDismissed(true);
    // TODO: Implement dismiss reports functionality with reason
    console.log('Dismissing reports with reason:', reason);
  };

  return (
    <div className={`${styles.modQueueReview} ${isDismissed ? styles.dismissed : ''}`}>
      <div className={styles.actions}>
        <Button 
          type="outline"
          label="reports"
          count={reportCount}
          facepileImages={[
            './images/carl.jpeg',
            './images/dwight.jpeg',
            './images/paulie.jpeg'
          ]}
          onClick={() => setIsReportsModalOpen(true)}
        />
        <div className={styles.actionsPrimary}>
          <Button
            type="icon"
            icon={<OverflowIcon />}
            onClick={() => setMenuOpen(true)}
            ref={buttonRef}
          />
          <Menu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            anchorEl={buttonRef.current}
          >
            <MenuItem onClick={handleAddNote}>Add a private note</MenuItem>
            <MenuItem onClick={handleViewPostHistory}>View post history</MenuItem>
            <MenuItem onClick={handleViewMemberHistory}>View member history</MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleDismissReports}>Dismiss all reports</MenuItem>
          </Menu>
          <Button
            type="primary"
            label="Moderate"
            onClick={handleModerate}
          />
        </div>
      </div>

      <div className={styles.helpfulInfo}>
        <div className={styles.reportedReasons}>
          {reportedReasons.map((reason, index) => (
            <span key={index} className={styles.reportedReason}>{reason}</span>
          ))}
        </div>
        
        {helpfulInfo.map((info, index) => (
          <div key={index} className={styles.helpfulInfoItem}>
            <span dangerouslySetInnerHTML={{ __html: info }} />
          </div>
        ))}
      </div>
      
      <div className={styles.reportedContent}>
        <h3>Reported post</h3>
        <div className={styles.reportedContentContainer}>
          {reportedPost || (
            <Post
              initialPreview={true}
              username="photography-lover"
              avatar="https://assets.tumblr.com/images/default_avatar/sphere_open_64.png"
              timestamp="2h"
              contentImage="https://64.media.tumblr.com/e46c7bd91a46671840be0a335600bb74/41aba1ddd5db6b07-48/s1280x1920/a23113327e04d3878a2abc5d484549c4e49d9795.jpg"
              content={<p>Just captured this amazing sunset at the beach. The colors were absolutely incredible! 🌅 #photography #sunset #beach</p>}
            />
          )}
        </div>
      </div>

      <ModalDismissReport
        isOpen={isDismissModalOpen}
        onClose={() => setIsDismissModalOpen(false)}
        onDismiss={handleDismissConfirm}
      />

      <ModalReports
        isOpen={isReportsModalOpen}
        onClose={() => setIsReportsModalOpen(false)}
        reports={reports}
      />
    </div>
  );
} 