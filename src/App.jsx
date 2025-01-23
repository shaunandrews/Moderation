import { useState, createContext } from 'react'
import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import TopBar from './components/TopBar/TopBar'
import Content from './components/Content/Content'
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
    <ModerationContext.Provider value={value}>
      <div className={styles.app}>
        <Sidebar />
        <TopBar />
        <Content />
        <ModerationSidebar 
          isOpen={moderationOpen}
          onClose={() => setModerationOpen(false)}
        />
      </div>
    </ModerationContext.Provider>
  )
}

export default App
