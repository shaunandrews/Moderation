import styles from './ModQueueReview.module.css'
import Post from '../Post/Post'
import Button from '../Button/Button'
import Menu, { MenuItem, MenuDivider } from '../Menu/Menu'
import { useContext, useRef, useState } from 'react'
import { ModerationContext } from '../../App'
import OverflowIcon from '../icons/OverflowIcon'
import ChevronDownIcon from '../icons/ChevronDownIcon'

export default function ModQueueReview() {
  const { setModerationOpen } = useContext(ModerationContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
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
      <div className={styles.actions}>
        <Button 
            type="outline"
            label="reports"
            count={3}
            facepileImages={[
                'https://loremflickr.com/20/20',
                'https://loremflickr.com/20/20/dog',
                'https://loremflickr.com/20/20/nature'
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
      
        <div className={styles.relevantInfo}>
          <div className={styles.notice}>
            <span>Reported as: Against community guidelines, harassment, spam</span>
          </div>
          <div className={styles.notice}>
            <span>User has had 3 posts removed in the last month</span>
          </div>
          <div className={styles.notice}>
            <span><strong>@sarah-mod</strong>: Borderline but not violating guidelines.</span>
          </div>
        </div>
      
      <div className={styles.reportedContent}>
        <h3>Reported post</h3>
        <div className={styles.reportedContentContainer}>
          <Post initialPreview={true} />
        </div>
      </div>         
    </div>
  )
} 