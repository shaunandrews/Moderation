import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import TopBar from './components/TopBar/TopBar'

import ModQueue from './components/ModQueue/ModQueue'
import AuditLog from './components/AuditLog/AuditLog'
import AuditLogDetails from './components/AuditLogDetails/AuditLogDetails'
import ModerationSidebar from './components/ModerationSidebar/ModerationSidebar'
import CommunityHomeAdmin from './components/CommunityHomeAdmin/CommunityHomeAdmin'
import CommunityHomeMember from './components/CommunityHomeMember/CommunityHomeMember'
import Home from './components/Home/Home'

// Create a context for moderation state
export const ModerationContext = createContext();

export default function App() {
  const [moderationOpen, setModerationOpen] = useState(false);
  const [moderationDismissCallback, setModerationDismissCallback] = useState(null);
  const [moderationAction, setModerationAction] = useState('remove');
  const [moderationSource, setModerationSource] = useState('home');

  const handleModerationClose = () => {
    setModerationOpen(false);
    // Reset the callback and action when moderation is closed without completion
    setModerationDismissCallback(null);
    setModerationAction('remove');
    setModerationSource('home');
  };

  return (
    <BrowserRouter>
      <ModerationContext.Provider value={{
        moderationOpen,
        setModerationOpen,
        moderationDismissCallback,
        setModerationDismissCallback,
        moderationAction,
        setModerationAction,
        moderationSource,
        setModerationSource
      }}>
        <div className={styles.app}>
          <Sidebar />
          <TopBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<CommunityHomeAdmin />} />
            <Route path="/group-meowing" element={<CommunityHomeMember />} />
            <Route path="/mod-queue" element={<ModQueue />} />
            <Route path="/audit-log" element={<AuditLog />} />
            <Route path="/audit-log/:id" element={<AuditLogDetails />} />
          </Routes>
          <ModerationSidebar 
            isOpen={moderationOpen}
            onClose={handleModerationClose}
            action={moderationAction}
            source={moderationSource}
          />
        </div>
      </ModerationContext.Provider>
    </BrowserRouter>
  )
}
