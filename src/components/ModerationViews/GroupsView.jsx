import React from 'react';
import ReasonGroup from './ReasonGroup/ReasonGroup';
import styles from './Views.module.css';

const GroupsView = ({ onNavigate, showError }) => {
  const groups = [
    {
      id: 'community',
      title: 'Against community guidelines',
      description: 'Examples: off topic, inappropriate, disruptive'
    },
    {
      id: 'harmful',
      title: 'Harmful behavior',
      description: 'Examples: harassment, harm to minors, self-harm'
    },
    {
      id: 'violence',
      title: 'Violence or hate',
      description: 'Examples: threats, hate speech, gore/mutilation'
    },
    {
      id: 'unallowed',
      title: 'Unallowed content or uses',
      description: 'Examples: spam, copyright, trademark, terrorism'
    }
  ];

  return (
    <div className={styles.view}>
      <h2 className={styles.subtitle}>Select a reason</h2>
      {showError && (
        <p className={styles.error}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 5v3.5M8 10v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          You must select a reason
        </p>
      )}
      <div className={styles.groups}>
        {groups.map(group => (
          <ReasonGroup
            key={group.id}
            title={group.title}
            description={group.description}
            onClick={() => onNavigate('details', { groupId: group.id })}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupsView; 