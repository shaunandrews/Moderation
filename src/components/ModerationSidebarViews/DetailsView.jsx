import React, { useState } from 'react';
import styles from './Views.module.css';
import TextField from '../TextField/TextField';
import LockIcon from '../icons/LockIcon';
import CheckboxChip from '../CheckboxChip/CheckboxChip';
import CheckboxChipGroup from '../CheckboxChipGroup/CheckboxChipGroup';
import GuidelineList from '../GuidelineList/GuidelineList';
import GuidelineListItem from '../GuidelineList/GuidelineListItem';
import StaffEscalation from '../StaffEscalation/StaffEscalation';
import FormHeader from '../FormHeader/FormHeader';

// Add these color constants at the top of the file
const GUIDELINE_COLORS = [
  '#00B0FF', // light blue
  '#8B5CF6', // purple
  '#FF69B4', // pink
  '#FF4444', // red
  '#FF9500', // orange
  '#FFD600', // yellow
  '#00C853'  // green
];

const DetailsView = ({ onNavigate, viewData, onReasonSelect, showError, action = 'remove', onDisableActionButton, source }) => {
  const [selectedReason, setSelectedReason] = useState(null);
  const [selectedHarmToMinorsType, setSelectedHarmToMinorsType] = useState(null);
  const [isPersonBeingHarassed, setIsPersonBeingHarassed] = useState(null);
  const [selectedGuidelines, setSelectedGuidelines] = useState([]);
  const [authorMessage, setAuthorMessage] = useState('');
  const [moderatorNote, setModeratorNote] = useState('');
  const [reportReason, setReportReason] = useState('');
  const [escalateToStaff, setEscalateToStaff] = useState(false);

  const violenceOptions = [
    {
      id: 'hate_speech',
      text: 'Hate speech'
    },
    {
      id: 'violent_threats',
      text: 'Violent threats'
    },
    {
      id: 'gore',
      text: 'Gore or mutilation'
    },
    {
      id: 'self_harm',
      text: 'Self-harm'
    }
  ];

  const harmfulOptions = [
    {
      id: 'harassment',
      text: 'Harassment'
    },
    {
      id: 'harm_to_minors',
      text: 'Harm to minors'
    },
    {
      id: 'impersonation',
      text: 'Impersonation'
    },
    {
      id: 'sexually_explicit',
      text: 'Sexually explicit'
    },
    {
      id: 'privacy_violation',
      text: 'Privacy violation'
    },
    {
      id: 'non_genuine',
      text: 'Non-genuine behavior'
    },
    {
      id: 'self_harm',
      text: 'Self-harm'
    }
  ];

  const harmToMinorsOptions = [
    {
      id: 'child_sexual_material',
      text: 'Child sexual material'
    },
    {
      id: 'illustration_depictions',
      text: 'Illustration or other depictions'
    },
    {
      id: 'harassment_of_minor',
      text: 'Harassment of a minor'
    }
  ];

  const unlawfulOptions = [
    {
      id: 'spam',
      text: 'Spam'
    },
    {
      id: 'terrorism',
      text: 'Suspected terrorism'
    },
    {
      id: 'bestiality',
      text: 'Bestiality'
    },
    {
      id: 'election_interference',
      text: 'Election interference'
    },
    {
      id: 'illegal_eu',
      text: 'Illegal content (EU)'
    }
  ];

  const communityGuidelines = [
    {
      id: 1,
      text: 'Be nice to each other! Treat others with respect.'
    },
    {
      id: 2,
      text: 'Please limit conversations to the subject of communities on Tumblr: feedback, questions, comments, etc.'
    },
    {
      id: 3,
      text: 'Please do not advertise your community here.'
    },
    {
      id: 4,
      text: 'No hate speech or discriminatory language of any kind.'
    },
    {
      id: 5,
      text: 'Keep discussions civil and constructive - avoid personal attacks.'
    },
    {
      id: 6,
      text: 'No spamming or excessive self-promotion.'
    },
    {
      id: 7,
      text: 'Respect intellectual property rights and copyright laws.'
    },
    {
      id: 8,
      text: 'No adult content or NSFW material without proper tags.'
    },
    {
      id: 9,
      text: 'Protect personal information - no doxxing or sharing private details.'
    },
  ];

  // Show appropriate options based on the selected group
  const options = (() => {
    switch (viewData?.groupId) {
      case 'violence':
        return violenceOptions;
      case 'harmful':
        return harmfulOptions;
      case 'unallowed':
        return unlawfulOptions;
      default:
        return communityGuidelines;
    }
  })();

  // Determine subtitle based on group
  const subtitle = viewData?.groupId === 'community' ? 'Select all that apply:' : 'Select one:';

  const handleReasonSelect = (reasonId) => {
    setSelectedReason(reasonId);
    // Reset the subcategory if user changes main reason
    if (reasonId !== 'harm_to_minors') {
      setSelectedHarmToMinorsType(null);
    }
    onReasonSelect?.(reasonId);
  };

  const handleHarmToMinorsTypeSelect = (typeId) => {
    setSelectedHarmToMinorsType(typeId);
    // Reset harassment question if changing away from harassment_of_minor
    if (typeId !== 'harassment_of_minor') {
      setIsPersonBeingHarassed(null);
    }
    // Pass both values to parent
    onReasonSelect?.(['harm_to_minors', typeId]);
    // Update disabled state
    onDisableActionButton?.(false);
  };

  const handleIsPersonBeingHarassedSelect = (value) => {
    setIsPersonBeingHarassed(value);
    // Pass all values to parent
    onReasonSelect?.(['harm_to_minors', selectedHarmToMinorsType, value]);
    // Update disabled state based on selection
    onDisableActionButton?.(value === 'no');
  };

  const handleGuidelinesChange = (selectedIds) => {
    setSelectedGuidelines(selectedIds);
    onReasonSelect?.(selectedIds);
  };

  const renderOptions = () => {
    if (viewData?.groupId === 'community') {
      return (
        <div className={styles.detailsOptions}>
          {showError && selectedGuidelines.length === 0 && (
            <p className={styles.error}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 5v3.5M8 10v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              You must select at least one guideline
            </p>
          )}
          <GuidelineList 
            value={selectedGuidelines} 
            onChange={handleGuidelinesChange}
          >
            {options.map((option, index) => (
              <GuidelineListItem
                key={option.id}
                value={option.id}
                label={option.text}
                number={index + 1}
                color={GUIDELINE_COLORS[index % GUIDELINE_COLORS.length]}
              />
            ))}
          </GuidelineList>
        </div>
      );
    }

    return (
      <>
        {showError && !selectedReason && (
          <p className={styles.error}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 5v3.5M8 10v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            You must select a reason
          </p>
        )}
        <CheckboxChipGroup value={selectedReason} onChange={handleReasonSelect}>
          {options.map(option => (
            <CheckboxChip
              key={option.id}
              value={option.id}
              label={option.text}
            />
          ))}
        </CheckboxChipGroup>

        {action === 'report' && selectedReason === 'harm_to_minors' && (
          <div className={styles.additionalSection}>
            <h2 className={styles.subtitle}>Is this content:</h2>
            <CheckboxChipGroup value={selectedHarmToMinorsType} onChange={handleHarmToMinorsTypeSelect}>
              {harmToMinorsOptions.map(option => (
                <CheckboxChip
                  key={option.id}
                  value={option.id}
                  label={option.text}
                />
              ))}
            </CheckboxChipGroup>

            {selectedHarmToMinorsType === 'harassment_of_minor' && (
              <div className={styles.additionalSection}>
                <h2 className={styles.subtitle}>Are you the person being harassed?</h2>
                <CheckboxChipGroup value={isPersonBeingHarassed} onChange={handleIsPersonBeingHarassedSelect}>
                  <CheckboxChip
                    value="yes"
                    label="Yes"
                  />
                  <CheckboxChip
                    value="no"
                    label="No"
                  />
                </CheckboxChipGroup>
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <div className={`${styles.view} ${styles.details}`}>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      {renderOptions()}

      <div className={styles.detailsMessages}>
        {action === 'report' ? (
          <>
            {selectedHarmToMinorsType === 'harassment_of_minor' && isPersonBeingHarassed === 'no' ? (
              <div className={styles.requiredNotice}>
                We appreciate you bringing this to our attention. In cases of harassment we need to hear directly from the person being harassed.
              </div>
            ) : (
              ((viewData?.groupId === 'community' && selectedGuidelines.length > 0) || // Community guidelines
               (selectedReason && selectedReason !== 'harm_to_minors') || // Regular option selected
               (selectedReason === 'harm_to_minors' && selectedHarmToMinorsType && selectedHarmToMinorsType !== 'harassment_of_minor') || // Harm to minors with type (except harassment)
               (selectedReason === 'harm_to_minors' && selectedHarmToMinorsType === 'harassment_of_minor' && isPersonBeingHarassed === 'yes')) && // Harassment with "Yes"
              <div className={styles.messageSection}>
                <FormHeader
                  label="Report reason"
                  hint="Please provide additional context about why you're reporting this post."
                  characterCount={reportReason.length}
                  maxCharacters={300}
                />
                <TextField 
                  multiline
                  rows={3}
                  placeholder="I'm reporting this post because..."
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                />

                {viewData?.groupId === 'community' && (
                  <div className={styles.messageSection}>
                    <StaffEscalation 
                      checked={escalateToStaff}
                      onChange={setEscalateToStaff}
                    />
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.messageSection}>
              <FormHeader
                label="Author message"
                hint="Shared with the author to explain why their post was removed."
                characterCount={authorMessage.length}
                maxCharacters={300}
              />
              <TextField 
                multiline
                rows={3}
                placeholder="Your post was removed because..."
                value={authorMessage}
                onChange={(e) => setAuthorMessage(e.target.value)}
              />
            </div>

            <div className={styles.messageSection}>
              <FormHeader
                label="Moderator note"
                hint="Private notes for other moderators. This is not visible to the author."
                characterCount={moderatorNote.length}
                maxCharacters={300}
              />
              <TextField 
                multiline
                rows={1}
                icon={<LockIcon />}
                placeholder="Here's some private context and notes..."
                value={moderatorNote}
                onChange={(e) => setModeratorNote(e.target.value)}
              />
            </div>

            <div className={styles.messageSection}>
              <StaffEscalation 
                required={viewData?.groupId !== 'community'} 
                checked={escalateToStaff}
                onChange={setEscalateToStaff}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsView; 