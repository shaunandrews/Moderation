import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import TopBar from './components/TopBar/TopBar'
import Content from './components/Content/Content'
import ModQueue from './components/ModQueue/ModQueue'
import AuditLog from './components/AuditLog/AuditLog'
import ModerationSidebar from './components/ModerationSidebar/ModerationSidebar'

// Create a context for moderation state
export const ModerationContext = createContext({
  moderationOpen: false,
  setModerationOpen: () => {},
});

function App() {
  const [moderationOpen, setModerationOpen] = useState(false);
  const value = { moderationOpen, setModerationOpen };

  return (
    <BrowserRouter>
      <ModerationContext.Provider value={value}>
        <div className={styles.app}>
          <Sidebar />
          <TopBar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/mod-queue" element={<ModQueue />} />
            <Route path="/audit-log" element={<AuditLog />} />
          </Routes>
          <ModerationSidebar 
            isOpen={moderationOpen}
            onClose={() => setModerationOpen(false)}
          />
        </div>
      </ModerationContext.Provider>
    </BrowserRouter>
  )
}

export default App
