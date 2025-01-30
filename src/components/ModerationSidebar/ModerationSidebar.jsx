import React, { useState, useEffect } from 'react';
import { useSpring, animated, useTransition } from '@react-spring/web';
import ModerationSidebarHeader from '../ModerationSidebarHeader/ModerationSidebarHeader';
import ModerationSidebarContent from '../ModerationSidebarContent/ModerationSidebarContent';
import ModerationSidebarFooter from '../ModerationSidebarFooter/ModerationSidebarFooter';
import GroupsView from '../ModerationViews/GroupsView';
import DetailsView from '../ModerationViews/DetailsView';
import ConfirmationView from '../ModerationViews/ConfirmationView';
import styles from './ModerationSidebar.module.css';

const VIEWS = {
  groups: {
    component: GroupsView,
    title: ({ action }) => action === 'report' ? 'Report post' : 'Moderate post'
  },
  details: {
    component: DetailsView,
    title: ({ groupId }) => {
      switch (groupId) {
        case 'violence':
          return 'Violence or hate';
        case 'harmful':
          return 'Harmful behavior';
        case 'unallowed':
          return 'Unlawful content or uses';
        default:
          return 'Select guideline';
      }
    }
  },
  confirmation: {
    component: ConfirmationView,
    title: ({ action }) => action === 'report' ? 'Post reported' : 'Post removed'
  }
};

const ModerationSidebar = ({ isOpen, onClose, action = 'remove' }) => {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [currentView, setCurrentView] = useState('groups');
  const [viewStack, setViewStack] = useState(['groups']);
  const [viewData, setViewData] = useState({});
  const [direction, setDirection] = useState(0);
  const [selectedReason, setSelectedReason] = useState(null);
  const [showError, setShowError] = useState(false);

  const resetState = () => {
    setCurrentView('groups');
    setViewStack(['groups']);
    setViewData({});
    setDirection(0);
    setSelectedReason(null);
    setShowError(false);
  };

  const handleClose = () => {
    onClose();
    // Wait for the closing animation to finish before resetting state
    setTimeout(resetState, 300);
  };

  const springs = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
    config: {
      tension: 400,
      friction: 38,
      clamp: true,
      mass: 1.2,
    },
    onRest: () => {
      if (!isOpen) {
        setIsRendered(false);
      }
    },
  });

  const transitions = useTransition(currentView, {
    from: { 
      transform: `translateX(${direction === 1 ? '100%' : '-100%'})`,
      opacity: 0 
    },
    enter: { 
      transform: 'translateX(0%)',
      opacity: 1 
    },
    leave: { 
      transform: `translateX(${direction === 1 ? '-100%' : '100%'})`,
      opacity: 0 
    },
    config: {
      tension: 400,
      friction: 38,
      mass: 1.2,
    }
  });

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);

  const handleNavigateForward = (nextView, data = {}) => {
    setDirection(1);
    setViewStack(prev => [...prev, nextView]);
    setCurrentView(nextView);
    setViewData(prev => ({ ...prev, [nextView]: data }));
    setShowError(false);
  };

  const handleNavigateBack = () => {
    if (viewStack.length > 1) {
      setDirection(-1);
      const newStack = viewStack.slice(0, -1);
      setViewStack(newStack);
      setCurrentView(newStack[newStack.length - 1]);
      setShowError(false);
    }
  };

  const handleReasonSelect = (reasonId) => {
    setSelectedReason(reasonId);
    setShowError(false);
  };

  const handleRemove = () => {
    if (currentView === 'groups' && !selectedReason) {
      setShowError(true);
      return;
    }

    if (currentView === 'details') {
      const hasNoSelection = viewData.details?.groupId === 'community' 
        ? !selectedReason || selectedReason.length === 0
        : !selectedReason;

      if (hasNoSelection) {
        setShowError(true);
        return;
      }

      // Navigate to confirmation view with all the collected data
      handleNavigateForward('confirmation', {
        groupId: viewData.details.groupId,
        selectedReason,
        authorMessage: viewData.details.authorMessage,
        moderatorNote: viewData.details.moderatorNote,
        escalateToStaff: viewData.details.escalateToStaff,
        reportReason: viewData.details.reportReason
      });
    }
  };

  if (!isRendered) return null;

  const handleScrimClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const canGoBack = viewStack.length > 1;

  return (
    <animated.div 
      className={`${styles.container} ${styles[action]}`}
      onClick={handleScrimClick}
      style={{
        opacity: springs.opacity,
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <animated.div 
        className={styles.sidebar}
        style={{
          transform: springs.transform,
        }}
      >
        {currentView !== 'confirmation' && (
          <ModerationSidebarHeader 
            onClose={handleClose} 
            onBack={canGoBack ? handleNavigateBack : undefined}
            title={typeof VIEWS[currentView].title === 'function' 
              ? VIEWS[currentView].title({ ...viewData[currentView], action }) 
              : VIEWS[currentView].title}
          />
        )}
        <ModerationSidebarContent>
          {transitions((style, item) => {
            const ViewComponent = VIEWS[item].component;
            return (
              <animated.div className={styles.viewContainer} style={style}>
                <ViewComponent 
                  onNavigate={handleNavigateForward}
                  viewData={viewData[item]}
                  onReasonSelect={handleReasonSelect}
                  onClose={handleClose}
                  action={action}
                  showError={showError && (
                    (item === 'groups') || 
                    (item === 'details')
                  )}
                />
              </animated.div>
            );
          })}
        </ModerationSidebarContent>
        {currentView !== 'confirmation' && (
          <ModerationSidebarFooter 
            onCancel={handleClose} 
            onRemove={handleRemove}
            action={action}
          />
        )}
      </animated.div>
    </animated.div>
  );
};

export default ModerationSidebar; 