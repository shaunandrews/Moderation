import styles from './ModQueueReview.module.css'
import Post from '../Post/Post'
import Button from '../Button/Button'
import Menu, { MenuItem, MenuDivider } from '../Menu/Menu'
import { useContext, useRef, useState } from 'react'
import { ModerationContext } from '../../App'
import OverflowIcon from '../icons/OverflowIcon'

export default function ModQueueReview() {
  const { setModerationOpen } = useContext(ModerationContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleModerate = () => {
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
    // TODO: Implement dismiss reports functionality
  };

  return (
    <div className={styles.modQueueReview}>
      <div className={styles.reviewHeader}>
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
        <div className={styles.reviewHeaderActions}>
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