import styles from './ModQueueReview.module.css'
import Post from '../Post/Post'
import Button from '../Button/Button'
import Menu, { MenuItem, MenuDivider } from '../Menu/Menu'
import DismissModal from '../DismissModal/DismissModal'
import { useContext, useRef, useState, useEffect } from 'react'
import { ModerationContext } from '../../App'
import OverflowIcon from '../icons/OverflowIcon'
import ChevronDownIcon from '../icons/ChevronDownIcon'

export default function ModQueueReview({ reviewId, onDismissed }) {
  const { setModerationOpen, setModerationDismissCallback } = useContext(ModerationContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isDismissModalOpen, setIsDismissModalOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const buttonRef = useRef(null);

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
          count={3}
          facepileImages={[
            './images/carl.jpeg',
            './images/dwight.jpeg',
            './images/paulie.jpeg'
          ]}
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
          <span className={styles.reportedReason}>Against community guidelines</span>
          <span className={styles.reportedReason}>Harmful behavior</span>
        </div>
        
        <div className={styles.helpfulInfoItem}>
          <span><strong>@authorblog</strong> has had 3 posts removed in the last month</span>
        </div>

        <div className={styles.helpfulInfoItem}>
          <span><strong>@sarah-mod</strong>: Got a bunch of reports for this post, but it's not violating guidelines. I think there may be a campaign against this user.</span>
        </div>
      </div>
      
      <div className={styles.reportedContent}>
        <h3>Reported post</h3>
        <div className={styles.reportedContentContainer}>
          <Post initialPreview={true} />
        </div>
      </div>

      <DismissModal 
        isOpen={isDismissModalOpen}
        onClose={() => setIsDismissModalOpen(false)}
        onDismiss={handleDismissConfirm}
      />
    </div>
  );
} 